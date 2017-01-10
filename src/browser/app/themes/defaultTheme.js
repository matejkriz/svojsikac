
import type { Theme } from './types';
import openColor from './openColor';
import typography from './typography';

// www.smashingmagazine.com/2015/11/using-system-ui-fonts-practical-guide/
// Taken from from Bootstrap 4.
export const nativeFontFamily = [
  '-apple-system',
  'system-ui',
  'BlinkMacSystemFont',
  '"Segoe UI"',
  'Roboto',
  '"Helvetica Neue"',
  'Arial',
  'sans-serif',
].join(', ');

const theme: Theme = {
  block: {
    marginBottom: 1,
    maxWidth: 21,
  },
  border: {
    radius: 2,
    width: 1,
  },
  colors: {
    black: openColor.gray8,
    danger: openColor.red6,
    gray: openColor.gray5,
    open: openColor,
    primary: openColor.blue6,
    success: openColor.green5,
    warning: openColor.orange6,
    white: openColor.white,
  },
  container: {
    maxWidths: {
      big: 960,
      bigger: 1140,
      medium: 720,
      small: 540,
    },
  },
  heading: {
    fontFamily: nativeFontFamily,
    marginBottom: 1,
  },
  paragraph: {
    marginBottom: 1,
  },
  states: {
    active: {
      darken: 0.2,
    },
    disabled: {
      cursor: 'default',
      opacity: 0.5,
    },
  },
  text: {
    bold: 600,
    fontFamily: nativeFontFamily,
  },
  typography: typography({
    fontSize: 16,
    fontSizeScale: 'step5', // perfect fourth, modularscale.com
    lineHeight: 24,
  }),
};

export default theme;
