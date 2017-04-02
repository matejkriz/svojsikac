// @flow weak
/* global window */
import { applyMiddleware, createStore, combineReducers, compose } from 'redux';

import intl from './intl/reducer';
import type { IntlState } from './types';

export type AppState = {
  intl: IntlState,
};

const createDiMiddleware = deps =>
  ({ dispatch, getState }: any) =>
    (next: any) =>
      async (action: any) =>
        next(
          typeof action === 'function'
            ? await action({ ...deps, dispatch, getState })
            : action,
        );

const createMidleware = () => {
  /* eslint-disable no-underscore-dangle */
  const composeEnhancers = (typeof window !== 'undefined' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
    compose;
  /* eslint-enable */
  const enhancers = composeEnhancers(
    applyMiddleware(createDiMiddleware()),
  );
  return enhancers;
};

export const initStore = (initialState: Object) => {
  const reducer = combineReducers({
    intl,
  });
  const middleware = createMidleware();
  return createStore(reducer, initialState, middleware);
};
