import type { State } from './types';
import createReduxMiddleware from './createReduxMiddleware';
import createReduxReducer from './createReduxReducer';
import { createStore } from 'redux';

const createReduxStore = (initialState: State) => {
  const reducer = createReduxReducer();
  const middleware = createReduxMiddleware();
  return createStore(reducer, initialState, middleware);
};

export default createReduxStore;
