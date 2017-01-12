// @flow
import './App.css';
import { compose } from 'ramda';
import { connect } from 'react-redux';
import { Miss } from 'react-router';
import favicon from '../../common/app/favicon';
import Helmet from 'react-helmet';
import HomePage from '../homePage/HomePage';
import InfoPage from '../infoPage/InfoPage';
import NotFoundPage from '../notFoundPage/NotFoundPage';
import Match from '../../common/app/components/Match';
import React from 'react';
import start from '../../common/app/start';
import type { State } from '../../common/types';
import Header from '../app/Header';
import Footer from '../app/Footer';

type AppProps = {
  currentLocale: string,
};

const App = ({
  currentLocale,
}: AppProps) => (
    <div>
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
      <div>
          <Match exactly pattern="/" component={HomePage} />
          <Match pattern="/info" component={InfoPage} />
          <Miss component={NotFoundPage} />
      </div>
      <Footer />
    </div>
);

export default compose(
  connect(
    (state: State) => ({
      currentLocale: state.intl.currentLocale,
    }),
  ),
  start,
)(App);
