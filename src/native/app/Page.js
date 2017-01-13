// @flow
import Header from './Header';
import React from 'react';
import linksMessages from '../../common/app/linksMessages';
import { Alert, Container } from './components';
import Match from '../../common/app/components/Match';
import { injectIntl, intlShape } from 'react-intl';

const titles = {
  '/': linksMessages.home,
};

const Page = ({ component: Component, intl, pattern, ...props }) => (
  <Match
    {...props}
    pattern={pattern}
    render={renderProps => (
      <Container>
        {titles[pattern] &&
          <Header title={intl.formatMessage(titles[pattern])} />
        }
        <Alert />
        <Component {...renderProps} />
      </Container>
    )}
  />
);

Page.propTypes = {
  component: React.PropTypes.func.isRequired,
  intl: intlShape.isRequired,
  pattern: React.PropTypes.string.isRequired,
};

export default injectIntl(Page);
