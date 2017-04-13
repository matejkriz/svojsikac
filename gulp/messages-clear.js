/* eslint-disable no-console */
import fs from 'fs';
import gulp from 'gulp';
import loadMessages from '../src/common/intl/loadMessages';
import { diff, messagesToCode } from './support/messages';

gulp.task('messages-clear', ['messages-extract'], () => {
  const messages = loadMessages({ includeDefault: true });
  // eslint-disable-next-line no-underscore-dangle
  const defaultMessagesKeys = Object.keys(messages._default);

  Object.keys(messages)
    .filter(locale => locale !== '_default')
    .forEach(locale => {
      const localeMessagesKeys = Object.keys(messages[locale]);
      const unusedMessagesKeys = diff(localeMessagesKeys, defaultMessagesKeys);
      // eslint-disable-next-line import/no-dynamic-require
      const clearedMessages = require(`../messages/${locale}`).default.filter(
        translation => unusedMessagesKeys.indexOf(translation.id) === -1,
      );
      const code = messagesToCode(clearedMessages);
      console.log(locale);
      unusedMessagesKeys.forEach(messageKey => console.log(`  ${messageKey}`));
      fs.writeFile(`messages/${locale}.js`, code);
    });
});
