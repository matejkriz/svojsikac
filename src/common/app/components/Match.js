// @flow
import type { State } from '../../../common/types';
import { Match as ReactRouterMatch } from 'react-router';
import { connect } from 'react-redux';

export default connect(
  (state: State) => state,
)(ReactRouterMatch);
