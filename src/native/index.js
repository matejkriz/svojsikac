// @flow
/* eslint-disable react/require-extension */
// Bootstrap environment
const locales = require('./initialState').default.intl.locales;
const polyfillLocales = require('../common/intl/polyfillLocales');

polyfillLocales(global, locales);

const { addLocaleData } = require('react-intl');

const cs = require('react-intl/locale-data/cs');
const en = require('react-intl/locale-data/en');

[cs, en].forEach(locale => addLocaleData(locale));

require('./main');
