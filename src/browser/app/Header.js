// @flow
import React from 'react';
import linksMessages from '../../common/app/linksMessages';
import { FormattedMessage } from 'react-intl';
import { Link, Toolbar } from '../app/components';

const styles = {
  prefetch: {
    display: 'none',
  },
  toolbar: {
    flexWrap: 'wrap',
  },
};

const Header = () => (
  <Toolbar style={styles.toolbar}>
    <Link bold inverted exactly to="/">
      <FormattedMessage {...linksMessages.home} />
    </Link>
  </Toolbar>
);

Header.propTypes = {
  viewer: React.PropTypes.object,
};

export default Header;
