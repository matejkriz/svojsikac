> Starter kit for universal full–fledged React apps. One stack for browser, mobile, server.

> Based on [Este.js](https://github.com/este/este)

## Prerequisites

- [node.js](http://nodejs.org) Node 6+, install via [nvm](https://github.com/creationix/nvm) highly recommended
- [gulp](http://gulpjs.com/) `npm install -g gulp`
- [yarn](https://yarnpkg.com/en/docs/install)
- [react-native-cli](http://facebook.github.io/react-native/docs/getting-started.html) `npm install -g react-native-cli`

## Start Development

- install dependencies `yarn`

### Web app
- run `gulp`
- point your browser to [localhost:3000](http://localhost:3000)

### iOS app
- run `gulp ios`

### Android app
- run `gulp android`

## Dev Tasks

- `gulp eslint` eslint
- `gulp eslint --fix` fix fixable eslint issues
- `gulp messages-extract` extract messages for translation
- `gulp messages-check` check missing and unused translations
- `gulp messages-clear` remove unused translations
- `npm run build-size-check` display info about latest build

See [complete list of dev tasks](https://github.com/este/este/tree/af909fce150201a7355a52321f555df8af7994f5#dev-tasks) on Este.

## E2E Tasks
- `gulp test-e2e [-p] -d [ios|android|browser|i|a|b] [-s ${folderName}]` start E2E tests for selected platform, possibly in production mode
- `android avd &` open AVD manager to start Android simulator


More info in separate document [E2E-TESTING.md](https://github.com/actum/devstack/blob/master/E2E-TESTING.md)

## Production Tasks

- `gulp build -p` build app for production
- `npm test` run all checks and tests

See [complete list of production tasks](https://github.com/este/este/tree/af909fce150201a7355a52321f555df8af7994f5#production-tasks) on Este.

## Updates from devstack to your project

- create branch in your project's repo (e.g. `devstack-update`) and push it
- add devstack as remote to your project (`git remote add devstack https://github.com/actum/devstack.git`)
- merge branch from devstack remote to `devstack-update`
- merge your project's `master` to `devstack-update`
- solve eventual conflicts
- create PR from `devstack-update` to your `master`

## Links

- [Este wiki](https://github.com/este/este/wiki)
