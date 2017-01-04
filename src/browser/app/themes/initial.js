/* @flow */

/*
  Styling
    - jxnblk.com/writing/posts/patterns-for-style-composition-in-react
    - medium.com/@yoniweisbrod/a-mini-course-on-react-native-flexbox-2832a1ccc6
    - Default rebass theme: github.com/jxnblk/rebass/blob/master/src/config.js
*/

const typography = {
  bold: 600,
  // www.smashingmagazine.com/2015/11/using-system-ui-fonts-practical-guide
  fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif', // minimal set
  fontSizes: [48, 32, 24, 20, 16, 14, 12],
  lineHeight: 1.5,
  monospace: '"Roboto Mono", Menlo, Consolas, monospace',
  scale: [0, 8, 16, 32, 64], // rhythm
};

const colors = {
  black: '#333',
  error: '#f52',
  gray: '#ddd',
  info: '#08e',
  primary: '#08e',
  secondary: '#888',
  success: '#1c7',
  warning: '#f70',
  white: '#fff',
};

const borders = {
  borderColor: 'rgba(0, 0, 0, .25)',
  borderRadius: 2,
};

const inverted = colors.white;

const zIndex = [0, 2, 4, 8, 16];

const states = {
  disabled: { cursor: 'default', opacity: 0.5 },
};

const theme = {
  ...typography,
  colors,
  ...borders,
  inverted,
  states,
  zIndex,
};

export const compute = (theme: Object) => ({
  ...theme,
  Container: {
    backgroundColor: theme.colors.white,
    color: theme.colors.black, // inherited
    fontFamily: theme.fontFamily, // inherited
    fontSize: theme.fontSizes[4], // inherited
    lineHeight: theme.lineHeight, // inherited
  },
  link: {
    active: { textDecoration: 'underline' },
    bold: { fontWeight: theme.bold },
    color: theme.colors.primary,
    hover: { textDecoration: 'underline' },
    link: { textDecoration: 'none' },
  },
  Toolbar: {
    marginTop: theme.scale[2],
    padding: theme.scale[2],
  },
});

export default compute(theme);
