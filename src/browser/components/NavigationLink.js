// @flow
import React from 'react';
import { Link } from 'react-router';

const styles = {
  active: {
    textDecoration: 'underline',
  },
  link: {
    color: 'white',
    fontFamily: 'Arial',
    padding: '0.5em',
    textDecoration: 'none',
  },
};

type LinkProps = {|
  children?: any,
  exactly?: boolean,
  to: string,
|};

const NavigationLink = ({ children, exactly, to }: LinkProps) => (
  <Link
    style={styles.link}
    activeOnlyWhenExact={exactly}
    activeStyle={styles.active}
    to={to}
  >
    {children}
  </Link>
);

export default NavigationLink;
