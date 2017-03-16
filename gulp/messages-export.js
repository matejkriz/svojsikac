import fs from 'fs';
import gulp from 'gulp';
import loadMessages from '../src/server/intl/loadMessages';
import { diff, messagesToCode } from './support/messages';

gulp.task('messages-export', ['messages-extract'], () => {
  const messages = loadMessages({ includeDefault: true });
  const defaultMessages = messages._default; // eslint-disable-line no-underscore-dangle
  const defaultMessagesKeys = Object
    .keys(defaultMessages);

  Object.keys(messages)
    .filter(locale => locale.charAt(0) !== '_')
    .forEach(locale => {
      const localeMessages = messages[locale];
      const localeMessagesKeys = Object.keys(localeMessages);
      const missingMessagesKeys = diff(defaultMessagesKeys, localeMessagesKeys);
      if (!missingMessagesKeys.length) return;

      const mergedMessages = [];
      defaultMessagesKeys.forEach(messageKey => {
        const message = (missingMessagesKeys.indexOf(messageKey) > -1)
          ? (`MISSING: ${defaultMessages[messageKey]}`)
          : localeMessages[messageKey];
        mergedMessages.push({
          defaultMessage: message,
          id: messageKey,
        });
      });
      const code = messagesToCode(mergedMessages);
      fs.writeFileSync(`messages/_${locale}.js`, code);
    });
});
