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

## Rename app

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

## Run tests

## Run native e2e tests

## Build browser app

## Build iOS app

## Build Android app
