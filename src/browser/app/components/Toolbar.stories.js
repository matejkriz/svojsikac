import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { Toolbar } from './index';

const style = {
  fontFamily: 'sans-serif',
};

storiesOf('Toolbar', module)
  .add('with text', () => (
    <Toolbar style={style}>
      Hello this is a Toolbar
    </Toolbar>
  ))
  .add('with button', () => (
    <Toolbar>
      <button onClick={action('clicked')}>Click me</button>
    </Toolbar>
  ));
