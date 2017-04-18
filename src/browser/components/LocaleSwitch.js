// @flow
import React from 'react';
import { connect } from 'react-redux';
import type { State } from '../../common/types';
import Button from './Button';
import { setCurrentLocale } from '../../common/intl/actions';

type LocaleSwitchProps = {
  currentLocale: string,
  handleChange: (locale: string) => void,
  locales: Array<string>,
};

const LocaleSwitch = (
  { currentLocale, handleChange, locales }: LocaleSwitchProps,
) => (
  <div>
    {locales.map(locale => (
      <Button
        // eslint-disable-next-line react-native/no-color-literals
        style={currentLocale === locale ? { color: '#ed3d25' } : {}}
        key={locale}
        onClick={() => handleChange(locale)}
      >
        {locale}
      </Button>
    ))}
  </div>
);

export default connect(
  (state: State) => ({
    currentLocale: state.intl.currentLocale,
    locales: state.intl.locales,
  }),
  {
    handleChange: setCurrentLocale,
  },
)(LocaleSwitch);
