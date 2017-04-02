// @flow
import type { State } from '../../../common/types';
import React from 'react';
import { IntlProvider } from 'react-intl';
import { connect } from 'react-redux';

type Props = {
  intl: Object,
};

const withIntl = (WrappedComponent: Function) => {
  const WithIntl = ({ intl, ...props }: Props) => {
    const { currentLocale, defaultLocale, initialNow, messages } = intl;

    return (
      <IntlProvider
        defaultLocale={defaultLocale}
        initialNow={initialNow}
        key={currentLocale} // github.com/yahoo/react-intl/issues/234#issuecomment-163366518
        locale={currentLocale}
        messages={messages[currentLocale]}
      >
        <WrappedComponent {...props} />
      </IntlProvider>
    );
  };


  return connect(
    (state: State) => ({
      intl: state.intl,
    }),
  )(WithIntl);
};

export default withIntl;
