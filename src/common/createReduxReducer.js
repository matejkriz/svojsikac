// @flow
import { combineReducers } from 'redux';

import intl from './intl/reducer';

export default () =>
  combineReducers({
    intl,
  });
