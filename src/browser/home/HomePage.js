// @flow
import React from 'react';
import {
  Box,
  Link,
  PageHeader,
  Title,
} from '../app/components';

const HomePage = () => (
  <Box>
    <Title message="Actum" />
    <PageHeader
      heading="Actum"
      description="Actum Starter kit for universal full–fledged React apps.
      One stack for browser, mobile, server. Based on Este."
    />
    <Link
      display="block"
      to="https://github.com/este/este"
    >github.com/este/este</Link>
  </Box>
);

export default HomePage;
