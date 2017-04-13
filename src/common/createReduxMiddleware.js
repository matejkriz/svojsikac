// @flow
import type { Action, ThunkAction } from '../common/types';
import { applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';

// Redux logger for Node.js.
const nodeLogger = () =>
  next =>
    (action: Action) => {
      const { type, ...props } = action;
      const propsAsShortString = JSON.stringify(props).slice(0, 60);
      // eslint-disable-next-line
      console.log(`action ${type}, ${propsAsShortString}...`);
      return next(action);
    };

const createDiMiddleware = ({ dispatch, getState }): ThunkAction =>
  next =>
    async action =>
      next(
        typeof action === 'function'
          ? await action({ dispatch, getState })
          : action,
      );

const createReduxMiddleware = () => {
  const middleware = [createDiMiddleware];

  // Logger must be the last middleware in chain.
  if (process.env.NODE_ENV !== 'production') {
    // $FlowFixMe
    const isServer = !process.browser;
    const logger = isServer ? nodeLogger : createLogger({ collapsed: true });
    middleware.push(logger);
  }

  // $FlowFixMe;
  const appliedMiddleware = applyMiddleware(...middleware);

  // eslint-disable-next-line no-undef
  if (process.browser && window.__REDUX_DEVTOOLS_EXTENSION__) {
    // eslint-disable-next-line no-undef
    return compose(appliedMiddleware, window.__REDUX_DEVTOOLS_EXTENSION__());
  }
  return appliedMiddleware;
};

export default createReduxMiddleware;
