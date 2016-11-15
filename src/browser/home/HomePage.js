/* @flow */
import React from 'react';
import {
  PageHeader,
  Title,
  View,
} from '../app/components';

const HomePage = () => (
  <View>
    <Title message="Café app" />
    <PageHeader
      description="Aplikace pro kavárnu"
      heading="Actum"
    />
  </View>
);

export default HomePage;
