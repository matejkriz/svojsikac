// @flow
import React from 'react';
import Title from '../app/components/Title';

const styles = {
  container: {
    alignItems: 'center',
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
  },
  message: {
    color: '#908483',
  },
};

const NotFoundPage = () => (
  <div style={styles.container}>
    <Title message="Not found page" />
    <span style={styles.message}>Page Not Found</span>
  </div>
);

export default NotFoundPage;
