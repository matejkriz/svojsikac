// @flow
import React from 'react';
import theme from './themes/initial';
import { Text } from './components';
import { Platform, StyleSheet, View } from 'react-native';

const iOSDefaultStatusBarHeight = 20;
const paddingTopOffset = Platform.OS === 'ios' ? iOSDefaultStatusBarHeight : 0;

const styles = StyleSheet.create({
  header: {
    alignItems: 'center', // align items in the cross-axis flexDirection
    backgroundColor: theme.brandPrimary,
    borderBottomColor: theme.bright(theme.brandPrimary),
    borderBottomWidth: StyleSheet.hairlineWidth,
    flexDirection: 'row',
    justifyContent: 'space-between', // align items in the flexDirection
    paddingBottom: theme.fontSize * 0.625,
    paddingTop: (theme.fontSize * 0.625) + paddingTopOffset,
  },
  title: {
    color: theme.inverseTextColor,
    fontSize: theme.fontSizeH5,
  },
});

type HeaderProps = {|
  title: string,
  |};

const Header = ({ title }: HeaderProps) => (
  <View style={styles.header}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

export default Header;
