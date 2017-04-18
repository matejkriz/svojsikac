// @flow
import config from './config';
import intlReducer from './intl/reducer';
import loadMessages from './intl/loadMessages';

const messages = loadMessages();

const createInitialState = (locale: String) => ({
  intl: {
    ...intlReducer(),
    currentLocale: locale || config.defaultLocale,
    defaultLocale: config.defaultLocale,
    locales: config.locales,
    messages,
  },
});

export default createInitialState;
