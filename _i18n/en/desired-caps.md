# Desired Capabilities

Desired Capabilities are used to configure webdriver when initiating the session.

## Basic usage

```javascript
const wd = require('macaca-wd');
const driver = wd.promiseChainRemote({
  host: 'localhost',
  port: 3456
});

const desiredCaps = {
  platformName: 'ios',
  deviceName: 'iPhone 6s',
  app: 'path/to/app'
}

driver.init(desiredCaps);
```

## Common Capabilities

| Key     | Type                                  | Description    |
| ---------- | ---------------------------------------- | --------- |
| platformName | String | Which platform the app/browser should be running on. { iOS / Android / Desktop } |
| browserName | String | The name of the browser being used. { iOS: Safari } { Android: Chrome } { Desktop: Chrome / Electron } |

## App Capabilities

| Key     | Type                                  | Description    |
| ---------- | ---------------------------------------- | --------- |
| deviceName | String | The name of the Simulator such as 'iPhone 6' or 'Nexus 5x'. |
| app | Stirng | The absolute local path or remote http URL to an .ipa or .apk file, or a .zip containing one of these. |
| udid | String | Unique device identifier of the connected Device/Simulator or  device. |

## Android-only Capabilities

| Key     | Type                                  | Description    |
| ---------- | ---------------------------------------- | --------- |
| reuse | Number | 0: Launch the simulator and install the app. 1 (default): Uninstall the app and reinstall the app. 2: Only reinstall the app. 3: Keep the simulator and app after testing. |
| package | String | Java package of the Android app you want to run. |
| activity | String | Activity name for the Android activity you want to launch from your package. |

## iOS-only Capabilities

| Key     | Type                                  | Description    |
| ---------- | ---------------------------------------- | --------- |
| reuse | Number | 0: Erase the simulator and install the app. 1: (default) Uninstall the app and reinstall the app. 2: Only reinstall the app. 3: Keep the simulator and app after testing. |
| bundleId | String | Bundle ID of the app such as com.apple.Maps.|
| autoAcceptAlerts | Boolean | Accept all iOS alerts automatically if they pop up. Default is false. |
| autoDismissAlerts | Boolean | Dismiss all iOS alerts automatically if they pop up. Default is false.|
