/**
* define desired capabilities for Appium server here
* http://appium.io/slate/en/master/#caps.md
*/

export const ios = {
  release: {
    app: 'ios/build/Build/Products/Release-iphonesimulator/Este.app',
    automationName: 'XCUITest',
    deviceName: 'iPhone 6',
    platformName: 'iOS',
    platformVersion: '10.2',
  },
};

ios.debug = {
  app: 'ios/build/Build/Products/Debug-iphonesimulator/Este.app',
  noReset: true, // simulator not restarted and AsyncStorage is preserved
  ...ios.release,
};


export const android = {
  release: {
    app: 'android/app/build/outputs/apk/app-debug.apk', // FIXME
    deviceName: 'Android Emulator',
    platformName: 'Android',
    platformVersion: '6',
  },
};

android.debug = {
  ...android.release,
};

export const browser = {
  release: {
    app: 'http://localhost:',
    browserName: 'chrome',
    platform: 'ANY',
  },
};

browser.debug = {
  ...browser.release,
};
