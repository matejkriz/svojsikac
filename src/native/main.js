// @flow
import React from 'react';
import ReactNativeI18n from 'react-native-i18n';
import Root from './app/Root';
import { initStore } from '../common/redux';
import initialState from './initialState';
import { AppRegistry } from 'react-native';

const getDefaultDeviceLocale = () => {
  const { defaultLocale, locales } = initialState.intl;
  const deviceLocale = ReactNativeI18n.locale.split('-')[0];
  const isSupported = locales.indexOf(deviceLocale) !== -1;
  return isSupported ? deviceLocale : defaultLocale;
};

const nativeInitialState = {
  ...initialState,
  intl: {
    ...initialState.intl,
    currentLocale: getDefaultDeviceLocale(),
  },
};

const store = initStore(nativeInitialState);

const Este = () => (
  <Root store={store} />
);

AppRegistry.registerComponent('Este', () => Este);
