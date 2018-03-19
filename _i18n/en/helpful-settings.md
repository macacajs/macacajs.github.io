# Helpful Settings

## Desired Capabilities

Desired Capabilities are used to configure webdriver when initiating the session.

#### Basic usage

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

#### Common Capabilities

| Key     | Type                                  | Description    |
| ---------- | ---------------------------------------- | --------- |
| platformName | String | Which platform the app/browser should be running on. { iOS / Android / Desktop } |
| browserName | String | The name of the browser being used. { iOS: Safari } { Android: Chrome } { Desktop: Chrome / Electron } |

#### App Capabilities

| Key     | Type                                  | Description    |
| ---------- | ---------------------------------------- | --------- |
| deviceName | String | The name of the Simulator such as 'iPhone 6' or 'Nexus 5x'. |
| app | Stirng | The absolute local path or remote http URL to an .ipa or .apk file, or a .zip containing one of these. |
| udid | String | Unique device identifier of the connected Device/Simulator or  device. |
| autoAcceptAlerts | Boolean | Accept all iOS alerts automatically if they pop up. Default is false. |
| autoDismissAlerts | Boolean | Dismiss all iOS alerts automatically if they pop up. Default is false.|
| reuse | Number | 0: Launch the simulator and install the app. 1 (default): Uninstall the app and reinstall the app. 2: Only reinstall the app. 3: Keep the simulator and app after testing. |

#### Android-only Capabilities

| Key     | Type                                  | Description    |
| ---------- | ---------------------------------------- | --------- |
| package | String | Java package of the Android app you want to run. |
| activity | String | Activity name for the Android activity you want to launch from your package. |
| androidProcess | String | Process name for the chromedriver binding when test webview |
| isWaitActivity | Boolean | Wait the app's main acitivity. Default is true. |

#### iOS-only Capabilities

| Key     | Type                                  | Description    |
| ---------- | ---------------------------------------- | --------- |
| bundleId | String | Bundle ID of the app such as com.apple.Maps.|

#### Electron-only Capabilities

| Key     | Type                                  | Description    |
| ---------- | ---------------------------------------- | --------- |
| uesrAgent | String | A user agent originating the request.|
| extraHeaders | String | Extra headers separated by “\n”.|

### Puppeteer Capabilities

| Key     | Type                                  | Description    |
| ---------- | ---------------------------------------- | --------- |
| uesrAgent | String | A user agent originating the request.|

## Keycode

#### PC keycode

* `\uE002`	"HELP" => `259 (0x00000103)`
* `\uE003`	"BACK_SPACE" => `67 (0x00000043)`
* `\uE004`	"TAB" => `61 (0x0000003d)`
* `\uE005`	"CLEAR" => `28 (0x0000001c)`
* `\uE007`	"ENTER" => `66 (0x00000042)`
* `\uE008`	"SHIFT" => `59 (0x0000003b)`
* `\uE009`	"CONTROL" => `113 (0x00000071)`
* `\uE00A`	"ALT" => `57 (0x00000039)`
* `\uE00B`	"PAUSE" => `121 (0x00000079)`
* `\uE00C`	"ESCAPE" =>  `111 (0x0000006f)`
* `\uE00E`	"PAGE_UP" => `92 (0x0000005c)`
* `\uE00F`	"PAGE_DOWN" => `93 (0x0000005d)`
* `\uE010`	"END" => `123 (0x0000007b)`
* `\uE011`	"HOME" => `122 (0x0000007a)`
* `\uE012`	"ARROW_LEFT" => `21 (0x00000015)`
* `\uE013`	"ARROW_UP" => `19 (0x00000013)`
* `\uE014`	"ARROW_RIGHT" => `22 (0x00000016)`
* `\uE015`	"ARROW_DOWN" => `20 (0x00000014)`
* `\uE016`	"INSERT" => `124 (0x0000007c)`
* `\uE017`	"DELETE" => `112 (0x00000070)`
* `\uE031`	"F1" => `131 (0x00000083)`
* `\uE032`	"F2" => `132 (0x00000084)`
* `\uE033`	"F3" => `133 (0x00000085)`
* `\uE034`	"F4" => `134 (0x00000086)`
* `\uE035`	"F5" => `135 (0x00000087)`
* `\uE036`	"F6" => `136 (0x00000088)`
* `\uE037`	"F7" => `137 (0x00000089)`
* `\uE038`	"F8" => `138 (0x0000008a)`
* `\uE039`	"F9" => `139 (0x0000008b)`
* `\uE03A`	"F10" => `140 (0x0000008c)`
* `\uE03B`	"F11" => `141 (0x0000008d)`
* `\uE03C`	"F12" => `142 (0x0000008e)`
* `\uE03D`	"META" => `117 (0x00000075)`

#### Android keycode

* `\uE101` "POWER" =>  `26 (0x0000001a)`
* `\uE102` "VOLUME_UP" => `24 (0x00000018)`
* `\uE103` "VOLUME_DOWN" => `25 (0x00000019)`
* `\uE104` "VOLUME_MUTE" => `164 (0x000000a4)`
* `\uE105` "HOME_SCREEN" => `3 (0x00000003)`
* `\uE106` "BACK BACK" => `4 (0x00000004)`
* `\uE107` "MENU MENU" => `82 (0x00000052)`
* `\uE108` "CAMERA" => `27 (0x0000001b)`
* `\uE109` "CALL" => `5 (0x00000005)`
* `\uE10A` "END_CALL" => `6 (0x00000006)`
* `\uE10B` "SEARCH" => `84 (0x00000054)`
* `\uE10C` "DPAD_LEFT" => `21 (0x00000015)`
* `\uE10D` "DPAD_UP" => `19 (0x00000013)`
* `\uE10E` "DPAD_RIGHT" => `22 (0x00000016)`
* `\uE10F` "DPAD_DOWN" => `20 (0x00000014)`
* `\uE110` "DPAD_CENTER" => `23 (0x00000017)`

[android-reference-KeyEvent](https://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_SPACE)


#### iOS keycode

* `\uE105` "HOME_SCREEN HOME键"

---

## Locator

| Locator | iOS | Android | PC |
| --- | --- | --- | --- |
| name | label or value | content-desc or rawtext | element name |
| xpath | xpath | xpath | xpath |
| class name | class/type | class | element node name |
| id | accessibility Id |	resource Id | element id |
| css | native unsupport | native	unsupport | element css |

---

## Touch Gestures

| Type              | Params                                   | Example                                  | Description       |
| ----------------- | ---------------------------------------- | ---------------------------------------- | ----------------- |
| tap               | { x: 100,  y: 100 }                      | driver.touch('tap', { x: 100, y: 100}) \| element.touch('tap') | 点击某个坐标或者当前元素   |
| doubleTap         | { x: 100,  y: 100 }                      | driver.touch('doubleTap', { x: 100, y: 100}) \| element.touch('doubleTap') | 双击某个坐标或者当前元素    |
| press             | { x: 100,  y: 100, duration: 2 (单位 S) } | driver.touch('press', { x: 100, y: 100}) \| element.touch('press', { duration: 2 }) | 长按某个坐标或者当前元素    |
| pinch             | { x: 100,  y: 100，scale: 2 (iOS), velocity: 1(iOS),  direction: "in" or "out"(Android), percent: 200(Android), duration: 2 (单位 S) } | iOS: element.touch('pinch', { scale: 2 }), Android: element.touch('pinch', { direction: "in", percent: 50 })  | 两只手指放大或者缩小当前元素    |
| rotate (iOS Only) | { rotation: 6(弧度), velocity: 1 }         | element.touch('rotate', { rotation: 6, velocity: 1 }) | 旋转当前元素            |
| drag              | { fromX: 100, fromY: 100, toX: 200, toY: 200, duration: 2(iOS，单位 S) } | driver.touch('drag', { fromX: 100, fromY: 100, toX: 200, toY: 200 }) \| element.touch('drag', { toX: 200, toY: 200 }) | 拖拽一个元素或者在多个坐标之间移动 |

#### 连续操作

连续执行多个 touch 操作，类似于下图的密码解锁。

```javascript
driver.touch([{
  type: 'drag',
  fromX: 265,
  fromY: 860,
  toX: 825,
  toY: 860,
  steps: 200
}, {
  type: 'drag',
  toX: 265,
  toY: 1460,
  duration: 3
}, {
  type: 'drag',
  toX: 825,
  toY: 1460,
  duration: 3
}]);
```

![touch-gestures](//wx3.sinaimg.cn/large/6d308bd9gy1ffji0wxvjij20ri0mg4al.jpg)

<img src="//wx3.sinaimg.cn/large/6d308bd9gy1ffji0we3eig20g60ssqv6.gif" width="240" />
