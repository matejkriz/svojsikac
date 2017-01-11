// @flow
import React from 'react';
import { Box, Text } from './components';
import { FormattedMessage, defineMessages } from 'react-intl';

const messages = defineMessages({
  madeByHtml: {
    defaultMessage: 'Made by Actum for Actum',
    id: 'footer.madeByHtml',
  },
});

const Footer = () => (
  <Box
    border="top"
    marginTop={1}
    paddingVertical={1}
  >
    <Text size={-1}>
      <FormattedMessage {...messages.madeByHtml} />
    </Text>
  </Box>
);

export default Footer;
