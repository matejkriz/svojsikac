> This tutorial should help you to start a new project based on the Actum Devstack.

# Tutorial - Creating your first app

Make sure you checked the [prerequisites](https://github.com/actum/devstack/blob/f45d6d19e8a0fb81605a8b0fd93548d07d0bcc35/README.md#prerequisites)!

## Checkout and Install

To start your `my-app` project, you have to clone the Devstack repository.
Then just go into the directory and install dependencies with [Yarn](https://yarnpkg.com/).
Be patient, it will take few minutes. There are some postinstall tasks that
will be auto executed by yarn.

```bash
git clone git@github.com:actum/devstack.git my-app
cd my-app
yarn
```

## Install browser or native dependencies

There should be no need for manual tasks after the `yarn` command. Everything
should be installed automatically. Of course you need to have [Android studio and Xcode ready](https://facebook.github.io/react-native/docs/getting-started.html)
if you want to create React native app.

## Architecture overview

The goal of this Devstack is to be universal stack for development of React apps
for browser, mobile and server. This means there are some abstractions in the code and
it's not always clear where to look when you are doing something for the first time.

All the source code of your app is in `src` folder. There four sub folders:
 - `browser` - browser specific code. UI components, routes and some wiring in `index.js`, `main.js`, `app/App.js` and `Root.js`.
 - `common` - configuration and shared business logic. All the code that can be shared across platforms (reducers, actions...) and global configuration is here.
 - `native` - mobile app code. Same as `browser`, only UI components and wiring should be here if you are developing for more platforms.
 - `server` - backend part, by default server side rendering of browser app. It's implemented with Express, add new routes into `frontend/index.js` when needed.

It's absolutely OK to have code only in `native` folder when you are doing
just a React Native mobile app.

## Rename app

Close the XCode project before renaming the app!

Tool `react-native-rename` could do the major part of the work:

```bash
yarn global add react-native-rename

react-native-rename "Awesome App"
```

Save the new name with spaces removed to variable `new_name`:

```bash
new_name=AwesomeApp
```

Rename ios entitlements file:

```bash
mv ./ios/${new_name}/Este.entitlements ./ios/${new_name}/${new_name}.entitlements
```

Then you need to replace Este in schemes, AppRegistry component, links for e2e testing and entitlements:

```bash
 sed -i -e 's/Este/'${new_name}'/g' ./ios/${new_name}.xcodeproj/xcshareddata/xcschemes/Debug.xcscheme ./ios/${new_name}.xcodeproj/xcshareddata/xcschemes/Release.xcscheme ./src/native/main.js ./test/e2e/helpers/caps.js ./ios/${new_name}/${new_name}.entitlements
```

Test all environments (`gulp`, `gulp ios` and `gulp android`), review and then commit changes.

## Run dev mode browser / iOS / Android

There is gulp command ready for every platform

### Browser

```bash
gulp
```

Open your browser on [http://localhost:3000](http://localhost:3000) to see the app.
There is a watcher running so browser will reload on every file change you make.

### iOS

```bash
gulp ios
```

This will compile the app and open it in iPhone Simulator. The compilation
can take some time so be patient. There will be new terminal window opened for the
[packager](https://github.com/facebook/react-native/tree/master/packager).

Because of long time of first compilation, the Simulator often timeout with red
screen "Could not connect to development server". Just focus on the Simulator
and press `Cmd+R` to reload it. It will show the app immediately.

To enable live reload, open the Developer Menu by typing `Cmd+D` and select
"Enable Live Reload".

### Android

```bash
gulp android
```

This will compile the app and open it in Android Simulator. Make sure you have
at least one virtual device ready. Run `android avd` to manage virtual devices.

Running virtual device can take more time then compilation of app and
`gulp android` then fails with `BUILD FAILED, Could not install the app on the device` error.
Exit with `Ctrl+C`, wait until virtual device is booted and run `gulp android` again.

To enable live reload, open the Developer Menu by typing `Cmd+M` and select
"Enable Live Reload".

## Tests

```bash
npm test
```

This command runs ESLint, Jest, Flow and when there is no fail, the browser app is
built with Webpack.

## Continuous integration

There is [`circle.yml`](https://github.com/actum/devstack/blob/f45d6d19e8a0fb81605a8b0fd93548d07d0bcc35/circle.yml) file with Yarn enabled, so integration with CircleCI is [very easy](https://circleci.com/integrations/github/).

## E2E tests

End to End tests are stored in `test/e2e/browser` and `test/e2e/native`.
There is [dedicated page](https://github.com/actum/devstack/blob/f45d6d19e8a0fb81605a8b0fd93548d07d0bcc35/E2E-TESTING.md)
about installation, setup and other e2e testing topics.

### Browser

```bash
gulp test-e2e -d browser
```

### iOS

```bash
gulp test-e2e -d ios
```

### Android

```bash
gulp test-e2e -d android
```

## Build browser app

```bash
npm run build -p
```

JS, CSS and source map files will be stored in `build` directory. If you are
curious what's included in the bundle, run `npm run build-size-check`

## Build iOS app

Once you have Signing set in Xcode (Project > General > Signing) you can build
the app from command line. Manage builds in Window > Organizer > Archives

```bash
xcodebuild archive -scheme Release -project MyApp.xcodeproj -configuration Relase
```

## Build Android app

Take a look at [Generating Signed APK](https://facebook.github.io/react-native/docs/signed-apk-android.html) on React Native web.
