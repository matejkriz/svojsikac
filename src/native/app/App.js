// @flow
import Page from './Page';
import React from 'react';
import { Container } from './components';
import { Match, Redirect } from 'react-router';
import { Platform, StatusBar } from 'react-native';
import withIntl from './components/withIntl';

// Pages
import HomePage from '../home/HomePage';

const App = () => (
  <Container inverse>
    {Platform.OS === 'ios' && // Because iOS StatusBar is an overlay.
      <StatusBar />
    }
      <Page exactly pattern="/" component={HomePage} />
      {/* Miss does't work in React Native for some reason. */}
      {/* <Miss render={() => <Redirect to="/" />} /> */}
      <Match
        pattern="/"
        render={({ location: { pathname } }) => {
          const urls = ['/'];
          if (urls.indexOf(pathname) !== -1) return null;
          return (
            <Redirect to="/" />
          );
        }}
      />
  </Container>
);

export default withIntl(App);
