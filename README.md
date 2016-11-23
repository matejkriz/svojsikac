
[![Dependency Status](https://david-dm.org/actum/devstack.svg)](https://david-dm.org/actum/devstack)

> Starter kit for universal full–fledged React apps. One stack for browser, mobile, server.

> Based on [Este.js](https://github.com/este/este)

## Prerequisites

- [node.js](http://nodejs.org) Node 6+
- [gulp](http://gulpjs.com/) `npm install -g gulp`
- [git](https://git-scm.com/downloads) git cmd tool is required

#### Optional

- [Facebook SDK for iOS](https://developers.facebook.com/docs/ios/) In order to make Facebook login work on iOS
- [Facebook SDK for Android](https://developers.facebook.com/docs/android/) In order to make Facebook login work on Android
- [firebase-cli](https://firebase.google.com/docs/cli/) `npm install -g firebase-tools`
- [firebase-bolt](https://github.com/firebase/bolt) `npm install -g firebase-bolt`
- [react-native-cli](http://facebook.github.io/react-native/docs/getting-started.html) `npm install -g react-native-cli`

If you are using different node versions on your machine, use [nvm](https://github.com/creationix/nvm) to manage them.

## Start Development

- run `gulp`
- point your browser to [localhost:3000](http://localhost:3000)
- build something beautiful

React Native: [Getting Started](https://facebook.github.io/react-native/docs/getting-started.html)

## Dev Tasks

- `gulp` run web app in development mode
- `gulp ios` run iOS app in development mode
- `gulp ios -p` run iOS app in production mode
- `gulp android` run Android app in development mode
- `gulp -p` run web app in production mode
- `gulp -f` run web app in development mode, but only browser source rebuilds on file changes
- `gulp jest` run jest tests
- `gulp jest-watch` continuous test running for TDD
- `gulp eslint` eslint
- `gulp eslint --fix` fix fixable eslint issues
- `gulp messages-extract` extract messages for translation
- `gulp messages-check` check missing and unused translations
- `gulp messages-clear` remove unused translations
- `gulp favicon` create universal favicon

## E2E Tasks
- `gulp test-e2e [-p] -d [ios|android|browser|i|a|b] [-s ${folderName}]` start E2E tests for selected platform, possibly in production mode
- `android avd &` open AVD manager to start Android simulator


More info in separate document [E2E-TESTING.md](https://github.com/actum/devstack/blob/master/E2E-TESTING.md)

## Production Tasks

- `gulp build -p` build app for production
- `npm test` run all checks and tests
- `node src/server` start app, remember to set NODE_ENV
- `gulp to-html` render app to HTML for static hosting like [Firebase](https://www.firebase.com/features.html#features-hosting)
- `gulp deploy-heroku` deploy [Heroku](https://www.heroku.com/) app
- `gulp deploy-firebase` deploy [Firebase](https://firebase.google.com/) app
- `gulp deploy-firebase-database` deploy Firebase database only

## Customize App

- set name in `package.json`
- set locales, firebaseUrl, sentryUrl, etc. in `src/server/config.js`
- change `src/common/app/favicons/original/favicon.png`, then `gulp favicon` and `gulp -p`
- modify your FB app_id e.g. for [iOS](https://developers.facebook.com/docs/ios/getting-started/#configure-xcode-project)

## Links

- [este wiki](https://github.com/este/este/wiki)
