// @flow
import React from 'react';
import Title from '../app/components/Title';

const styles = {
  container: {
    alignItems: 'center',
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  description: {
    fontSize: '0.7em',
  },
  message: {
    color: '#908483',
  },
};

const HomePage = () => (
  <div style={styles.container}>
    <Title message="ACTUM DEVSTACK" />
    <span style={styles.message}>
      WELLCOME TO ACTUM DEVSTACK
    </span>
    <p style={styles.description}>
      ( Starter kit for universal full–fledged React apps.
        One stack for browser, mobile, server.Based on Este. )
    </p>
  </div>
);

export default HomePage;
