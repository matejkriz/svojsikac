import React from 'react';
import { storiesOf, linkTo } from '@kadira/storybook';
import Button from '../Button';

storiesOf('Button', module)
  .add('link button', () => (
    <Button onClick={linkTo('Button', 'some emojies as the text')}>Next Story</Button>
  ))
  .add('some emojies as the text', () => (
    <Button>😀 😎 👍 💯</Button>
  ))
  .add('custom styles', () => {
    const style = {
      borderColor: '#ed3d25',
      borderWidth: '2px',
      color: '#ed3d25',
      fontSize: 20,
      textTransform: 'uppercase',
    };
    return (
      <Button style={style}>Button</Button>
    );
  });
