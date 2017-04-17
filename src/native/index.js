// @flow
/* eslint-disable react/require-extension */
// Bootstrap environment
const locales = require('./initialState').default.intl.locales;
const polyfillLocales = require('../common/intl/polyfillLocales');

polyfillLocales(global, locales);

require('./main');
