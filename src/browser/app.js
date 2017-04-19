// @flow
import type { State } from '../common/types';
import React from 'react';
import createApolloClient from '../common/createApolloClient';
import { ApolloProvider, getDataFromTree } from 'react-apollo';
import createReduxStore from '../common/createReduxStore';
import withIntl from '../browser/components/withIntl';

// App composition root.
// blog.ploeh.dk/2011/07/28/CompositionRoot

const singletonOnClient = (create: Function) => {
  // $FlowFixMe;
  const isServer = !process.browser;
  let singleton;
  return (...args) => {
    if (isServer) return create(...args);
    if (!singleton) singleton = create(...args);
    return singleton;
  };
};

const getApolloClient = singletonOnClient((headers, initialState) =>
  // FIXME: move url to config
  createApolloClient('https://api.graph.cool/simple/v1/svojsikac', headers, initialState),
);

const getReduxStore = singletonOnClient(client => {
  const platformReducers = { apollo: client.reducer() };
  const platformMiddlewares = [client.middleware()];
  return createReduxStore(client.initialState, {
    platformMiddlewares,
    platformReducers,
  });
});

// ApolloProvider provides also react-redux Provider. Nice.
const renderApp = (Page, client, store, props) => (
  <ApolloProvider client={client} store={store}>
    <Page {...props} />
  </ApolloProvider>
);

const createGetInitialProps = Page =>
  async ctx => {
    const headers = ctx.req ? ctx.req.headers : {};
    const initialState = ctx.req ? ctx.req.initialState : {};
    const client = getApolloClient(headers, initialState);
    const store = getReduxStore(client);

    const props = {
      url: { pathname: ctx.pathname, query: ctx.query },
      ...(await (Page.getInitialProps
        ? Page.getInitialProps(ctx)
        : {})),
    };

    if (!process.browser) {
      const app = renderApp(Page, client, store, props);
      await getDataFromTree(app);
    }

    const state = store.getState();

    return {
      ...props,
      headers,
      initialState: {
        ...state,
      },
    };
  };

// Higher order component.
// facebook.github.io/react/docs/higher-order-components.html
const app = (Component: any) => {
  const ComponentWithIntl = withIntl(Component);
  const App = (
    props: {
      headers: Object,
      initialState: State,
    },
  ) => {
    const { headers, initialState } = props;
    const client = getApolloClient(headers, initialState);
    const store = getReduxStore(client);
    return renderApp(ComponentWithIntl, client, store, props);
  };
  App.getInitialProps = createGetInitialProps(ComponentWithIntl);
  return App;
};

export default app;
