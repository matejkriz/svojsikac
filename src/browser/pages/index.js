import React from 'react';
import Page from '../layout/Page';
import withIntl from '../components/withIntl';
import { FormattedTime, FormattedMessage, defineMessages } from 'react-intl';

// eslint-disable max-len
const messages = defineMessages({
  description: {
    defaultMessage: 'Starter kit for universal full–fledged React apps. One stack for browser, mobile, server. Based on Este.',
    id: 'home.description',
  },
  time: {
    defaultMessage: 'The time is',
    id: 'home.time',
  },
  welcome: {
    defaultMessage: 'Welcome to actum devstack',
    id: 'home.welcome',
  },
});
// eslint-enable max-len

const Homepage = () => (
  <Page>
    <p className="message">
      <FormattedMessage {...messages.welcome} />
    </p>
    <p className="description">
      <FormattedMessage {...messages.description} />
    </p>
    <p className="time">
      <FormattedMessage {...messages.time} />: <FormattedTime value={Date.now()} />
    </p>
    <style jsx>{`
      .description {
        font-size: 0.8em;
      }
      .time {
        color: #333;
        font-size: 0.8em;
      }
      .message {
        color: #908483;
        text-transform: uppercase;
      }
    `}</style>
  </Page>
);

export default withIntl(Homepage);
