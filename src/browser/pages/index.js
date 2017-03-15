import React from 'react';
import Page from '../layout/Page';

export default () => (
  <Page>
    <span className="message">
      Wellcome to actum devstack
    </span>
    <p className="description">
      ( Starter kit for universal full–fledged React apps.
        One stack for browser, mobile, server.Based on Este. )
    </p>
    <style jsx>{`
      .description {
        font-size: 0.7em;
      }
      .message {
        color: #908483;
        text-transform: uppercase;
      }
    `}</style>
  </Page>
);
