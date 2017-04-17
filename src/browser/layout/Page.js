import React, { PropTypes } from 'react';
import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';

const Page = ({ children, title }) => (
  <div className="page-container">
    <Head>
      <title>{title}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/static/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        href="/static/favicon-32x32.png"
        sizes="32x32"
      />
      <link
        rel="icon"
        type="image/png"
        href="/static/favicon-16x16.png"
        sizes="16x16"
      />
      <link rel="manifest" href="/static/manifest.json" />
      <link
        rel="mask-icon"
        href="/static/safari-pinned-tab.svg"
        color="#5bbad5"
      />
      <link rel="shortcut icon" href="/static/favicon.ico" />
      <meta name="msapplication-config" content="/static/browserconfig.xml" />
      <meta name="theme-color" content="#ffffff" />
    </Head>
    <Header />
    <main className="main-container">{children}</main>
    <Footer />

    <style jsx global>
      {
        `
        body {
          margin: 0;
        }
        `
      }
    </style>

    <style jsx>
      {
        `
        .page-container {
          display: flex;
          flex-direction: column;
          font-family: Arial;
          min-height: 100vh;
        }
        .main-container {
          align-items: center;
          display: flex;
          flex: 1;
          flex-direction: column;
          justify-content: center;
        }
        div {
          display: flex;
          flex-direction: column;
        }
        main {
          flex: 1;
        }
    `
      }
    </style>
  </div>
);

Page.defaultProps = {
  title: 'Actum universal devstack',
};

Page.propTypes = {
  title: PropTypes.string,
};

export default Page;
