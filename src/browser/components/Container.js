// @flow
import React from 'react';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    fontFamily: 'Arial',
    minHeight: '100vh', // make footer sticky
  },
};

type ContainerProps = {|
  props?: Object,
  children?: any,
  |};

const Container = ({ children, ...props }: ContainerProps) => (
  <div
    {...props}
    style={styles.container}
  >
    {children}
  </div>
);

export default Container;
