// @flow weak
import chroma from 'chroma-js';
import { Platform } from 'react-native';

export default {
  activeOpacity: 0.5,

  backgroundColor: '#fff',
  brandDanger: '#d9534f',
  brandInfo: '#5bc0de',
  brandPrimary: '#31AACC',
  brandSuccess: '#5cb85c',
  brandWarning: '#f0ad4e',

  bright(color) { return chroma(color).brighten(this.brighten).hex(); },
  brighten: 0.3,
  dark(color) { return chroma(color).darken(this.darken).hex(); },
  darken: 0.3,
  disabledOpacity: 0.3,

  fontFamily: 'System',
  fontSize: Platform.select({
    android: 18,
    ios: 16,
  }),
  get fontSizeH1() { return this.fontSize * 2.5; },
  get fontSizeH2() { return this.fontSize * 2; },
  get fontSizeH3() { return this.fontSize * 1.75; },
  get fontSizeH4() { return this.fontSize * 1.5; },
  get fontSizeH5() { return this.fontSize * 1.25; },
  get fontSizeH6() { return this.fontSize * 1; },

  inverseBackgroundColor: '#2C2C2C',
  inverseTextColor: '#eee',

  lineHeight: 1.5,

  get placeholderTextColor() { return this.bright(this.textColor); },

  separator: '#f1f1f1',
  textColor: '#7C7C7C',
};
