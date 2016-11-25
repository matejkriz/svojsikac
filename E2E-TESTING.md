# Appium
[Homepage - https://github.com/appium/appium](https://github.com/appium/appium)



### Installing dependencies
```
yarn global add appium  # get appium
yarn global add mocha   # get test runner
yarn global add webdriver-manager # get webdriver-manager for browser testing
```
> Make sure you have not installed Node or Appium with sudo, otherwise you'll run into problems

Prepare iOS and Android environments following the [RN Getting Started](https://facebook.github.io/react-native/docs/getting-started.html) for both platforms if you have not done it yet.
> For Android don't forget to set up your Android Virtual Device! Use **Android 6** (API level **23**)


With Xcode 8 you will need to install Carthage dependency manager also:
```
brew install carthage
```



### Authorizing iOS on the computer

You need to authorize use of the iOS Simulator by running the `authorize-ios`
binary made available through `npm`. Install the program by running

```
yarn global add authorize-ios
```

And the invoke the program using

```
sudo authorize-ios
```

If you are running [Appium.app](https://github.com/appium/appium-dot-app), you can
authorize iOS through the GUI.

You need to do this every time you install a new version of Xcode.

### Usage

> "Be patient. Good things come to those who wait."
>
> It could take more than five minutes...

```
gulp test-e2e -p -d ios       # run tests on ios in release mode
gulp test-e2e -d ios          # run tests on ios in debug mode
gulp test-e2e                 # run tests on browser in debug mode (browser is default)
gulp test-e2e -p -d browser   # run tests on browser in release mode
gulp test-e2e -d android      # run tests on ios in debug mode
gulp test-e2e -d ios -s menu  # run only tests in folder test/e2e/native/home/**
android avd &                 # open android virtual device manager so you could start simulator
```
- use `-p` or `--production` to test against app in release mode
- use `-d` or `--device` with `android` or `browser` or `ios` to select platform for testing (only first letter is important, so you could use `gulp test-e2e -p -d a` and test will run in release mode on Android)
- use `-s` or `--suite` to run tests only from one subfolder e.g. `-s menu ` will run  tests from `test/e2e/native/home/**` only

> For **Android**, simulator must be running before you call `gulp test-e2e -d a`! You could start it (if you've gone through all the steps from [RN Getting Started](https://facebook.github.io/react-native/docs/getting-started.html) for Android) using `android avd` command.

> Run device with Android 6.0 (API 23)

Put your test inside `test/e2e/browser/**` or `test/e2e/native/**` folder and name it with `.spec.js` extension. Example is in `test/e2e/native/menu.spec.js`.

> If you use gulp test-e2e, test cases in `test/e2e/native/**` folder will run only on Android or iOS, whereas test cases inside `test/e2e/browser/**` will run only in Chrome browser.

Example of basic WD methods with description:
```
driver.
  elementById('menuBtn').click() // click on element with accessibilityLabel="menuBtn"
  .sleep(1000) // doing nothing for 1 second
  .isDisplayed((err, isVisible) => // test case fails when element is not visible
    isVisible.should.be.ok,
  )
  .elementByName('Todos') // get text element with label Todos
    .should.eventually.exist // check if element exists,
  .waitForElementByName('Todos', 10000) // waiting for element with label Todos at most 10 seconds

```

### Finding elements

For inspecting components labels and ids you could use `Accessibility Inspector` available from Xcode's Developer tools.

- Text elements could be found by name
```
 <Text>{'My name'}</Text> // driver.elementByName('My name')
```
- for other components `accessibilityLabel` could be defined (use [BEM](http://getbem.com/introduction/) for the labels)
```
<Menu>
    <MyComponent accessibilityLabel="menu__my-component" />
    { /* elementById('menu__my-component') */ }

    <MyComponent accessibilityLabel="menu__my-component--blue" blue />
    { /* elementById('menu__my-component--blue') */ }
 </Menu>
```
If `MyComponent` doesn't get `accessibilityLabel` props, you may need to wrap it in `View` component.
```
<Menu>
    <View accessibilityLabel="menu__my-component" >
      <MyComponent />
    </View>
 </Menu>
```
- other option is `xpath` and it could locate UI elements without any changes in code using [XCUIElementType](https://developer.apple.com/reference/xctest/xcuielementtype?language=objc)
```
elementByXPath('//XCUIElementTypeStaticText') // find some Text element
```

[Appium docs about finding elements](https://github.com/appium/appium/blob/master/docs/en/writing-running-appium/finding-elements.md)

### Resources
[Appium setup for all platforms](https://github.com/appium/appium/tree/master/docs/en/appium-setup)


[Webdriver API](https://github.com/admc/wd/blob/master/doc/api.md) describes all methods available

[Docs about finding elements](https://github.com/appium/appium/blob/master/docs/en/writing-running-appium/finding-elements.md)

[Appium server capabilities](http://appium.io/slate/en/master/#caps.md) like `platformName`, `platformVersion`, `locale`, `fullReset`, used in `test/e2e/helpers/caps.js`

[Chai - should interface](http://chaijs.com/api/bdd/) describes all assertion posibilities

[chai-as-promised extension](http://chaijs.com/plugins/chai-as-promised/) extends Chai with `eventually` for promises


### Examples
https://github.com/appium/sample-code/tree/master/sample-code/examples/node

### Files generated by iOS test runs

Testing on iOS generates files that can sometimes get large. These include logs,
temporary files, and derived data from Xcode runs. Generally the following locations
are where they are found, should they need to be deleted:

```
$HOME/Library/Logs/CoreSimulator/*
```

For XCUITest-based tests:

```
$HOME/Library/Developer/Xcode/DerivedData/*
```

### Xcode 7.3 (useful for trying older examples)
Older Xcode could be downloaded from here https://developer.apple.com/download/more/

selecting Xcode version for building from command line using `xcode-select`:
```
sudo xcode-select -s /Applications/Xcode7/Xcode.app/Contents/Developer
sudo xcode-select -s /Applications/Xcode.app/Contents/Developer
```

to inspect which version is currently selected:
```
xcode-select -p
```

# Detox

## looks promising, but not ready for production yet

[Homepage - https://github.com/wix/detox](https://github.com/wix/detox)

- iOS only
- only Xcode 7.3 so iOS 9 at this time https://github.com/wix/detox/issues/44
- react-native 0.33.1 or **lower!** https://github.com/wix/detox/issues/43
