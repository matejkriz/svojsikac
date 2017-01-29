import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { Text } from 'react-native';
import Button from '../Button';

const onButtonPress = action('Button has been pressed!');

const styles = {
  button: {
    borderColor: '#ed3d25',
    borderWidth: 2,
    fontWeight: 'bold',
    padding: 10,
  },
  text: {
    color: '#ed3d25',
  },
};

storiesOf('Button', module)
  .add('Simple Button', () => (
        <Button style={styles.button} onPress={onButtonPress}>
          <Text style={styles.text}>Press the Button</Text>
        </Button>
  ));
