# 脚本初始化参数

Desired Capabilities 是用来在启动时配置服务器的参数。

## 基本用法

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

## 常见的参数

| 键     | 类型                                  | 描述    |
| ---------- | ---------------------------------------- | --------- |
| platformName | String | 当前用例运行的平台 { iOS / Android / Desktop } |
| browserName | String | 当前测试的浏览器名称 { iOS: Safari } { Android: Chrome } { Desktop: Chrome / Electron } |

## App 相关参数

| 键     | 类型                                  | 描述    |
| ---------- | ---------------------------------------- | --------- |
| deviceName | String | 模拟器的名称，例如 'iPhone 6' 或者 'Nexus 5x'。 |
| app | Stirng | .ipa，.app 或者 .apk 文件的绝对地址或者远程地址，或者是包含上述文件格式的 Zip 文件。 |
| udid | String | 测试设备的唯一设备 ID。|

## Android 的参数介绍

| 键     | 类型                                  | 描述    |
| ---------- | ---------------------------------------- | --------- |
| reuse | Number | 0: 启动并安装 app。1 (默认): 卸载并重装 app。 2: 仅重装 app。3: 在测试结束后保持 app 状态。|
| package | String | Android app 的 package name。|
| activity | String | 启动时的 Activity name。|
| androidProcess | String | 使用 chromedriver 测试 webview 时需要的自定义的进程名。|

## iOS 的参数介绍

| 键     | 类型                                  | 描述    |
| ---------- | ---------------------------------------- | --------- |
| reuse | Number | 0: 清楚数据并重装 app。 1: (默认) 卸载并重装 app。 2: 仅重装 app。 3: 在测试结束后保持 app 状态。 |
| bundleId | String | 应用的 Bundle ID，例如 com.apple.Maps。|
| autoAcceptAlerts | Boolean | 自动接受所有的系统弹窗信息。默认是 false。|
| autoDismissAlerts | Boolean | 自动拒绝所有的系统弹窗信息。默认是 false。|
