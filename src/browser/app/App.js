// @flow
import type { State } from '../../common/types';
import './App.css';
import Helmet from 'react-helmet';
import React from 'react';
import favicon from '../../common/app/favicon';
import start from '../../common/app/start';
import { compose } from 'ramda';
import { connect } from 'react-redux';

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
      REMOVE FELA from Actum devstack
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
