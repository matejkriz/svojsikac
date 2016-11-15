/**
* define desired capabilities for Appium server here
* http://appium.io/slate/en/master/#caps.md
*/

export const ios10 = {
  app: '/Volumes/AMachine/actum/este/ios/build/Build/Products/Release-iphonesimulator/Este.app',
  automationName: 'XCUITest',
  deviceName: 'iPhone 5s',
  platformName: 'iOS',
  platformVersion: '10.1',
};

export const ios10NoReset = {
  app: '/Volumes/AMachine/actum/este/ios/build/Build/Products/Release-iphonesimulator/Este.app',
  automationName: 'XCUITest',
  deviceName: 'iPhone 5s',
  noReset: true, // simulator not restarted and AsyncStorage is preserved
  platformName: 'iOS',
  platformVersion: '10.1',
};

export const ios10FullReset = {
  app: '/Volumes/AMachine/actum/este/ios/build/Build/Products/Release-iphonesimulator/Este.app',
  automationName: 'XCUITest',
  deviceName: 'iPhone 5s',
  fullReset: true, // restart simulator fully (and logout user)
  platformName: 'iOS',
  platformVersion: '10.1', // 10.1 is of Xcode 8.1, switch to 10.0 on Xcode 8.0
};

export const ios10Dev = {
  app: '/Volumes/AMachine/actum/este/ios/build/Build/Products/Debug-iphonesimulator/Este.app',
  automationName: 'XCUITest',
  deviceName: 'iPhone 5s',
  noReset: true, // simulator not restarted and AsyncStorage is preserved
  platformName: 'iOS',
  platformVersion: '10.1',
};
