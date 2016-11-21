/**
* define desired capabilities for Appium server here
* http://appium.io/slate/en/master/#caps.md
*/

export const ios10 = {
  app: 'ios/build/Build/Products/Release-iphonesimulator/Este.app',
  automationName: 'XCUITest',
  deviceName: 'iPhone 6',
  platformName: 'iOS',
  platformVersion: '10.1',
};

export const ios10NoReset = {
  ...ios10,
  noReset: true, // simulator not restarted and AsyncStorage is preserved
};

export const ios10FullReset = {
  ...ios10,
  fullReset: true, // restart simulator fully (and logout user)
};

export const ios10Dev = {
  ...ios10,
  app: 'ios/build/Build/Products/Debug-iphonesimulator/Este.app',
  noReset: true, // simulator not restarted and AsyncStorage is preserved
};
