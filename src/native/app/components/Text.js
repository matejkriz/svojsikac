import React from 'react';
import PropTypes from 'prop-types';
import theme from '../themes/initial';
import { StyleSheet, Text } from 'react-native';

// https://github.com/facebook/react-native/issues/7877
const round = value => Math.round(value);

const styles = StyleSheet.create({
  text: {
    // eslint-disable-line react-native/no-unused-styles
    color: theme.textColor,
    fontFamily: theme.fontFamily,
    fontSize: theme.fontSize,
    lineHeight: round(theme.fontSize * theme.lineHeight),
  },
});

// Normalize multiline strings because Text component preserves spaces.
const normalizeMultilineString = message => message.replace(/ +/g, ' ').trim();

class AppText extends React.Component {
  onTextRef(text) {
    this.text = text;
  }

  setNativeProps(nativeProps) {
    this.text.setNativeProps(nativeProps);
  }

  getTextStyleWithMaybeComputedLineHeight() {
    const { style } = this.props;
    if (!style) {
      return styles.text;
    }
    const customFontSize = StyleSheet.flatten(style).fontSize;
    if (!Number.isInteger(customFontSize)) {
      return [styles.text, style];
    }
    const lineHeight = round(customFontSize * theme.lineHeight);
    return [styles.text, style, { lineHeight }];
  }

  render() {
    const { children } = this.props;
    const textStyle = this.getTextStyleWithMaybeComputedLineHeight();

    return (
      <Text
        {...this.props}
        ref={text => this.onTextRef(text)}
        style={textStyle}
      >
        {typeof children === 'string'
          ? normalizeMultilineString(children)
          : children}
      </Text>
    );
  }
}

AppText.propTypes = {
  children: PropTypes.node.isRequired,
  style: Text.propTypes.style,
};

AppText.defaultProps = {
  style: '',
};

export default AppText;
