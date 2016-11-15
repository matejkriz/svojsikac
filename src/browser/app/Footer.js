/* @flow */
import React from 'react';
import { Footer } from '../app/components';
import { FormattedMessage, defineMessages } from 'react-intl';

const messages = defineMessages({
  madeByHtml: {
    defaultMessage: 'Made by Actum for Actum',
    id: 'footer.madeByHtml',
  },
});

const AppFooter = () => (
  <Footer>
    <FormattedMessage {...messages.madeByHtml} />
  </Footer>
);

export default AppFooter;
