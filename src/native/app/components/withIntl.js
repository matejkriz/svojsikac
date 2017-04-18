// @flow
import type { State } from '../../../common/types';
import React from 'react';
import { IntlProvider, injectIntl } from 'react-intl';
import { connect } from 'react-redux';

type Props = {
  intl: Object,
};

export default (WrappedComponent: Function) => {
  const WrappedComponentWithIntl = injectIntl(WrappedComponent);
  const withIntl = ({ intl, ...props }: Props) => {
    const { currentLocale, defaultLocale, initialNow, messages } = intl;

    return (
      <IntlProvider
        defaultLocale={defaultLocale}
        initialNow={initialNow}
        key={currentLocale} // github.com/yahoo/react-intl/issues/234#issuecomment-163366518
        locale={currentLocale}
        messages={messages[currentLocale]}
      >
        <WrappedComponentWithIntl {...props} />
      </IntlProvider>
    );
  };

  return connect((state: State) => ({
    intl: state.intl,
  }))(withIntl);
};
