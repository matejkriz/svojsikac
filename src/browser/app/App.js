// @flow
import type { State } from '../../common/types';
import type { Theme } from './themes/types';
import * as themes from './themes';
import Footer from './Footer';
import Header from './Header';
import Helmet from 'react-helmet';
import React from 'react';
import favicon from '../../common/app/favicon';
import start from '../../common/app/start';
import { Match } from '../../common/app/components';
import { Miss } from 'react-router';
import { compose } from 'ramda';
import { connect } from 'react-redux';
import {
  Box,
  Container,
  ThemeProvider,
} from './components';

// Pages
import HomePage from '../home/HomePage';
import NotFoundPage from '../notfound/NotFoundPage';

type AppProps = {
  currentLocale: string,
  themeName: string,
  theme: Theme,
};

const App = ({
  currentLocale,
  theme,
  themeName,
}: AppProps) => (
  <ThemeProvider
    key={themeName} // Enforce rerender.
    theme={theme}
  >
    <Container>
      <Helmet
        htmlAttributes={{ lang: currentLocale }}
        meta={[
          // v4-alpha.getbootstrap.com/getting-started/introduction/#starter-template
          { charset: 'utf-8' },
          { content: 'width=device-width, initial-scale=1, shrink-to-fit=no', name: 'viewport' },
          { content: 'ie=edge', 'http-equiv': 'x-ua-compatible' },
          ...favicon.meta,
        ]}
        link={[
          ...favicon.link,
        ]}
      />
      <Header />
      <Box
        flex={1} // make footer sticky
      >
        <Match exactly pattern="/" component={HomePage} />
        <Miss component={NotFoundPage} />
      </Box>
      <Footer />
    </Container>
  </ThemeProvider>
);

export default compose(
  connect(
    (state: State) => ({
      currentLocale: state.intl.currentLocale,
      theme: themes.defaultTheme,
      themeName: themes.defaultTheme,
    }),
  ),
  start,
)(App);
