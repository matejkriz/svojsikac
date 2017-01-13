// @flow
import React from 'react';
import NavigationLink from '../app/components/NavigationLink';

const styles = {
  container: {
    alignItems: 'center',
    backgroundColor: '#ed3d25',
    color: 'white',
    display: 'flex',
    flexDirection: 'column',
    padding: '1em',
  },
  description: {
    fontSize: '0.7em',
  },
  logo: {
    fontFamily: 'Arial',
    fontSize: '1.5em',
  },
  navigation: {
    display: 'flex',
    width: '100%',
  },
};

const Header = () => (
  <header style={styles.container}>
    <div>
      <span style={styles.logo}>ACTUM DEVSTACK </span>
      <span style={styles.description}>
        (based on <a title="Este on github" href="https://github.com/este">Este</a>)
      </span>
    </div>
    <navigation style={styles.navigation}>
      <NavigationLink exactly to="/">Home</NavigationLink>
      <NavigationLink exactly to="/info">Info</NavigationLink>
    </navigation>
  </header>
);

export default Header;
