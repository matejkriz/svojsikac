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
      // Reboot
      //
      // Global resets to common HTML elements and more for easier usage by Bootstrap.
      // Adds additional rules on top of Normalize.css, including several overrides.

      // Reset the box-sizing
      //
      // Change from "box-sizing: content-box" to "border-box" so that when you add
      // "padding" or "border"s to an element, the overall declared "width" does not
      // change. For example, "width: 100px;" will always be "100px" despite the
      // "border: 10px solid red;" and "padding: 20px;".
      //
      // Heads up! This reset may cause conflicts with some third-party widgets. For
      // recommendations on resolving such conflicts, see
      // https://getbootstrap.com/getting-started/#third-box-sizing.
      //
      // Credit: https://css-tricks.com/inheriting-box-sizing-probably-slightly-better-best-practice/

      html {
        box-sizing: border-box;
      }

      *,
      *::before,
      *::after {
        box-sizing: border-box;
      }

      // Make viewport responsive
      //
      // @viewport is needed because IE 10+ doesn't honor <meta name="viewport"> in
      // some cases. See https://timkadlec.com/2012/10/ie10-snap-mode-and-responsive-design/.
      // Eventually @viewport will replace <meta name="viewport">.
      //
      // However, "device-width" is broken on IE 10 on Windows (Phone) 8,
      // (see https://timkadlec.com/2013/01/windows-phone-8-and-device-width/ and https://github.com/twbs/bootstrap/issues/10497)
      // and the fix for that involves a snippet of JavaScript to sniff the user agent
      // and apply some conditional CSS.
      //
      // See https://getbootstrap.com/getting-started/#support-ie10-width for the relevant hack.
      //
      // Wrap "@viewport" with "@at-root" for when folks do a nested import (e.g.,
      // ".class-name { @import "bootstrap"; }").
      @at-root {
        @-ms-viewport { width: device-width; }
      }


      //
      // Reset HTML, body, and more
      //

      html {
        // We assume no initial pixel "font-size" for accessibility reasons. This
        // allows web visitors to customize their browser default font-size, making
        // your project more inclusive and accessible to everyone.

        // As a side-effect of setting the @viewport above,
        // IE11 & Edge make the scrollbar overlap the content and automatically hide itself when not in use.
        // Unfortunately, the auto-showing of the scrollbar is sometimes too sensitive,
        // thus making it hard to click on stuff near the right edge of the page.
        // So we add this style to force IE11 & Edge to use a "normal", non-overlapping, non-auto-hiding scrollbar.
        // See https://github.com/twbs/bootstrap/issues/18543
        // and https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/7165383/
        -ms-overflow-style: scrollbar;

        // Changes the default tap highlight to be completely transparent in iOS.
        -webkit-tap-highlight-color: rgba(0,0,0,0);
      }

      body {
        margin: 0;
        font-size: 1rem;
        // Go easy on the eyes and use something other than "#000" for text
        color: #333;
        // By default, "<body>" has no "background-color" so we set one as a best practice.
        background-color: #fff;
      }

      // Suppress the focus outline on elements that cannot be accessed via keyboard.
      // This prevents an unwanted focus outline from appearing around elements that
      // might still respond to pointer events.
      //
      // Credit: https://github.com/suitcss/base
      [tabindex="-1"]:focus {
        outline: none !important;
      }

      // Avoid 300ms click delay on touch devices that support the touch-action CSS property.
      //
      // In particular, unlike most other browsers, IE11+Edge on Windows 10 on touch devices and IE Mobile 10-11
      // DON'T remove the click delay when <meta name="viewport" content="width=device-width"> is present.
      // However, they DO support removing the click delay via touch-action: manipulation.
      // See:
      // * https://v4-alpha.getbootstrap.com/content/reboot/#click-delay-optimization-for-touch
      // * http://caniuse.com/#feat=css-touch-action
      // * https://patrickhlauke.github.io/touch/tests/results/#suppressing-300ms-delay

      a,
      area,
      button,
      [role="button"],
      input,
      label,
      select,
      summary,
      textarea {
        touch-action: manipulation;
      }
    `
      }
    </style>

    <style jsx>{`
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
    `}</style>
  </div>
);

Page.defaultProps = {
  title: 'Actum universal devstack',
};

Page.propTypes = {
  title: PropTypes.string,
};

export default Page;
