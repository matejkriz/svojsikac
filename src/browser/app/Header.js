// @flow
import React from 'react';
import linksMessages from '../../common/app/linksMessages';
import { Box, Link } from '../app/components';
import { FormattedMessage } from 'react-intl';

const HeaderLink = ({ exactly, to, message }) => (
  <Link
    backgroundColor="primary"
    bold
    color="white"
    exactly={exactly}
    paddingHorizontal={0.5}
    paddingVertical={0.5}
    to={to}
  >
    <FormattedMessage {...message} />
  </Link>
);

const Header = () => (
  <Box
    backgroundColor="primary"
    display="flex"
    flexWrap="wrap"
    marginVertical={0.5}
    paddingHorizontal={0.5}
  >
    <HeaderLink exactly to="/" message={linksMessages.home} />
  </Box>
);

export default Header;
