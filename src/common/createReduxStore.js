import type { State } from './types';
import createReduxMiddleware from './createReduxMiddleware';
import createReduxReducer from './createReduxReducer';
import { createStore } from 'redux';

type Options = {|
  platformReducers?: Reducers,
  platformMiddlewares?: Middlewares,
|};

const createReduxStore = (initialState: State, options?: Options) => {
  const { platformMiddlewares = [], platformReducers = {} } = options || {};
  const reducer = createReduxReducer(platformReducers);
  const middleware = createReduxMiddleware(platformMiddlewares);
  return createStore(reducer, initialState, middleware);
};

export default createReduxStore;
