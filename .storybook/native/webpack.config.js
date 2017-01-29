// https://getstorybook.io/docs/react-storybook/configurations/custom-webpack-config
const path = require('path');
const webpack = require('webpack');

const ABSOLUTE_BASE = path.normalize(path.join(__dirname, '../..'));
const NODE_MODULES_DIR = path.join(ABSOLUTE_BASE, 'node_modules');

module.exports = {
  resolve: {
    alias: {
      'react-native': require.resolve(path.join(NODE_MODULES_DIR, 'react-native-web')),
    }
  }
}
