// @flow
import type { State } from '../common/types';
import React from 'react';
import { Provider as Redux } from 'react-redux';
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

const getReduxStore = singletonOnClient(initialState =>
  createReduxStore(initialState));

const createApp = (Component, store, props) => (
  <Redux store={store}>
    <Component {...props} />
  </Redux>
);

const createGetInitialProps = Component =>
  async ctx => {
    const headers = ctx.req ? ctx.req.headers : {};
    const initialState = ctx.req ? ctx.req.initialState : {};
    const store = getReduxStore(initialState);

    const props = {
      url: { pathname: ctx.pathname, query: ctx.query },
      ...(await (Component.getInitialProps
        ? Component.getInitialProps(ctx)
        : {})),
    };

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
    const { initialState } = props;
    const store = getReduxStore(initialState);
    return createApp(ComponentWithIntl, store, props);
  };
  App.getInitialProps = createGetInitialProps(ComponentWithIntl);
  return App;
};

export default app;
