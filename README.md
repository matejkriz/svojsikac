> Starter kit for universal full–fledged React apps. One stack for browser, mobile, server.

> Based on [Este.js](https://github.com/este/este)

## Prerequisites

- [node.js](http://nodejs.org) Node 6+, install via [nvm](https://github.com/creationix/nvm) highly recommended
- [gulp](http://gulpjs.com/) `yarn global add gulp`
- [yarn](https://yarnpkg.com/en/docs/install)
- [react-native-cli](http://facebook.github.io/react-native/docs/getting-started.html) `yarn global add react-native-cli`

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
- `gulp messages-export` export messages for translators (with `MISSING` prefix when untranslated)
- `gulp messages-extract` extract messages for translation
- `gulp messages-check` check missing and unused translations
- `gulp messages-clear` remove unused translations
- `npm run build-size-check` display info about latest build

## E2E Tasks
- `gulp test-e2e [-p] -d [ios|android|browser|i|a|b] [-s ${folderName}]` start E2E tests for selected platform, possibly in production mode
- `android avd &` open AVD manager to start Android simulator


More info in separate document [E2E-TESTING.md](https://github.com/actum/devstack/blob/master/E2E-TESTING.md)

## Next.js
Look at [Next.js github](https://github.com/zeit/next.js/), not just the old [blogpost](https://zeit.co/blog/next).

Next.js give us:
- server side rendering with automatic code splitting
- prefetching pages
- nice [documentation](https://github.com/zeit/next.js/blob/master/readme.md) and many [examples](https://github.com/zeit/next.js/tree/master/examples)

Almost everything in Next.js is configurable, but the folders structure not yet. So the `pages` folder is temporally in `src`, although it should goes inside `browser` folder. The `pages` folder will be moved as soon as this PR [#936](https://github.com/zeit/next.js/pull/936/) will be merged in Next.js.

## [Storybook](https://github.com/storybooks/react-storybook)
- `yarn run storybook-web` run Storybook for Web
- point your browser to [localhost:9001](http://localhost:9001)
- `yarn run storybook-native` run Storybook for native
- We can show react-native components in browser due to the library [react-native-web](https://github.com/necolas/react-native-web)
- point your browser to [localhost:9002](http://localhost:9002)

- [create stories](https://getstorybook.io/docs/react-storybook/basics/writing-stories) alongside components (eg. `Button.stories.js` for `Button.js`)
- Storybook watches `/src/browser` directory for web app and `/src/native` for native app, and rebuilds itself as you touch any `*.stories.js`


## Production Tasks

- `gulp build` build app for production
- `gulp start` run app in production mode
- `npm test` run all checks and tests

## Updates from devstack to your project

- create branch in your project's repo (e.g. `devstack-update`) and push it
- add devstack as remote to your project (`git remote add devstack https://github.com/actum/devstack.git`)
- fetch remote (`git fetch devstack`)
- merge branch from devstack remote to `devstack-update` (use `--allow-unrelated-histories` if necessary)
- merge your project's `master` to `devstack-update`
- solve eventual conflicts
- create PR from `devstack-update` to your `master`

## Links

- [Este wiki](https://github.com/este/este/wiki)
