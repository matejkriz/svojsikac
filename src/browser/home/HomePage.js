// @flow
import React from 'react';
import {
  PageHeader,
  Title,
  View,
} from '../app/components';

const HomePage = () => (
  <View>
    <Title message="Actum app" />
    <PageHeader
      description="Actum starter"
      heading="Actum"
    />
  </View>
);

export default HomePage;
