// @flow
import type { Reducers } from './types';
import { combineReducers } from 'redux';

import intl from './intl/reducer';

export default (platformReducers: Reducers) =>
  combineReducers({
    ...platformReducers,
    intl,
  });
