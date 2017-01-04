import path from 'path';

const ABSOLUTE_BASE = path.normalize(path.join(__dirname, '..'));

const constants = Object.freeze({
  ABSOLUTE_BASE,
  ASSETS_DIR: path.join(ABSOLUTE_BASE, 'assets'),
  BUILD_DIR: path.join(ABSOLUTE_BASE, 'build'),
  DIST_DIR: path.join(ABSOLUTE_BASE, 'dist'),
  HOT_RELOAD_PORT: process.env.HOT_RELOAD_PORT || 8080,
  NODE_MODULES_DIR: path.join(ABSOLUTE_BASE, 'node_modules'),
  SRC_DIR: path.join(ABSOLUTE_BASE, 'src'),
});

export default constants;
