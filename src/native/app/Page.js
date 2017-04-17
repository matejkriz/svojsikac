// @flow
import Header from './Header';
import React from 'react';
import linksMessages from '../../common/linksMessages';
import { Container } from './components';
import { Match } from 'react-router';
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
