// @flow
import config from './config';
import intlReducer from '../common/intl/reducer';
import loadMessages from './intl/loadMessages';

const messages = loadMessages();

const createInitialState = () => ({
  intl: {
    ...intlReducer(),
    currentLocale: config.defaultLocale,
    defaultLocale: config.defaultLocale,
    locales: config.locales,
    messages,
  },
});

export default createInitialState;
