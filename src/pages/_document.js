import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';

// The document (which is SSR-only) is customized to expose the locale
// data for the user's locale for React Intl to work in the browser.
export default class MyDocument extends Document {
  static async getInitialProps(context) {
    const props = await super.getInitialProps(context);
    const { req: { localeDataScript } } = context;
    return {
      ...props,
      localeDataScript,
    };
  }

  render() {
    return (
      <html>
        <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"
        />
        </Head>
        <body>
          <Main />
          <script
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{
              __html: this.props.localeDataScript,
            }}
          />
          <NextScript />
        </body>
      </html>
    );
  }
}
