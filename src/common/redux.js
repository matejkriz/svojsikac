// @flow
/* global window */
import { createStore, combineReducers, compose } from 'redux';

import intl from './intl/reducer';
import type { IntlState } from './types';

export type AppState = {
  intl: IntlState,
};

export const initStore = (initialState: Object) => {
  const reducer = combineReducers({
    intl,
  });
  /* eslint-disable no-underscore-dangle */
  // const middleware = typeof window !== 'undefined' &&
  //   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
  const composeEnhancers = (typeof window !== 'undefined' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
    compose;
  /* eslint-enable */
  return createStore(reducer, initialState, composeEnhancers());
};
