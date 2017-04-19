/* eslint-env node */
/* eslint-disable no-console */
// Bootstrap environment
require('babel-register');
require('babel-polyfill');

const express = require('express');
const next = require('next');
const config = require('./common/config').default;
const { readFileSync } = require('fs');
const accepts = require('accepts');
const polyfillLocales = require('./common/intl/polyfillLocales');
const createInitialState = require('./common/createInitialState').default;

polyfillLocales(global, config.locales);

const dev = process.env.NODE_ENV !== 'production';
const dir = config.nextjsDir;
const app = next({ dev, dir });
const handle = app.getRequestHandler();

const languages = config.locales;

// We need to expose React Intl's locale data on the request for the user's
// locale. This function will also cache the scripts by lang in memory.
const localeDataCache = new Map();
const getLocaleDataScript = locale => {
  const lang = locale.split('-')[0];
  if (!localeDataCache.has(lang)) {
    const localeDataFile = require.resolve(`react-intl/locale-data/${lang}`);
    const localeDataScript = readFileSync(localeDataFile, 'utf8');
    localeDataCache.set(lang, localeDataScript);
  }
  return localeDataCache.get(lang);
};

app.prepare().then(() => {
  const server = express();

  server.get('*', (req, res) => {
    const accept = accepts(req);
    const locale = accept.language(languages);
    req.localeDataScript = getLocaleDataScript(locale);
    req.initialState = createInitialState(locale);
    return handle(req, res);
  });

  server.listen(config.port, err => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${config.port}`);
  });
});
