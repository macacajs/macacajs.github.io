# Environment Setup

[[toc]]

## Node.js

[Node.js](https://nodejs.org/) v8.0 or higher.

## iOS

::: warning Important
**Xcode v9** or higher is **required**.
:::

- [usbmuxd](//github.com/libimobiledevice/usbmuxd) is needed in order to testing real iOS device via USB.

```bash
$ brew install usbmuxd
```

- [ideviceinstaller](//github.com/libimobiledevice/ideviceinstaller) is needed in order to install App to real device.

```bash
$ brew install ideviceinstaller
```

- [ios-webkit-debug-proxy](//github.com/google/ios-webkit-debug-proxy) is needed in order to testing WebViews.

```bash
$ brew install ios-webkit-debug-proxy
```

- Install [macaca-ios](https://github.com/macacajs/macaca-ios) driver

```bash
# local installation
$ npm i macaca-ios --save-dev
# global installation
$ npm i macaca-ios -g
```

- [debug log](//github.com/macacajs/XCTestWD/blob/master/README.md#43-debug-info) will be displayed when '--verbose' is set as an argument when initiating macaca.

## iOS Real Device

First, there are two concepts that we need to clarify:
* Macaca depends on `macaca-ios`, and `macaca-ios` depends on `XCTestWD` which is installed on real device. Hence we need to ensure that the `XCTestWD` we are using is the `XCTestWD` installed on the real device.
* The `XCTestWD` installed on real device needs the same signature (`TEAM_ID`) as the app that we are testing against.

### Install macaca-ios and configure XCTestWD automatically (recommended)
Set `TEAM_ID` as an environmental variable when installing `macaca-ios`. `XCTestWD` will automatically use that `TEAM_ID`。

```bash
# 卸载之前安装的 macaca-ios
$ npm uninstall -g macaca-ios

# 安装有 TEAM_ID 的 macaca-ios
$ DEVELOPMENT_TEAM_ID=TEAM_ID npm i macaca-ios -g
```

::: tip About TEAM_ID
If you don't know your `TEAM_ID`, you can find it or configure it inside your project in `XCode` (requires Apple account login) Click on "Other" when selecting Development Team to view the current `TEAM_ID`.
![](/assets/6d308bd9gy1fg7cnt9hf6j20t70h7782.jpg)
:::

Configure `udid`, `bundleId` and `app` inside the testing script. Refer to [desiredCaps](https://macacajs.github.io/guide/helpful-settings.html#desired-capabilities)。
![](/assets/88fe9010ly1g1cro765ovj20va0mgtc3.jpg)
* Leave out the `app` config if the app is already installed on the device.

### Configure XCTestWD manually (not recommended)
If you manually installed or downloaded `XCTestWD`, or the project already comes with `XCTestWD`:
* Open `/XCTestWD/XCTestWD.xcodeproj` with XCode
* Configure `TEAM_ID`  (Refer to steps above)
* Run Test to install `XCTestWDUITest` into the real device:
![](/assets/88fe9010ly1g1cro3j4ugj20ya0jc78m.jpg)
* Make sure that the correct `XCTestWD` is used by Macaca:
  * Use environmental variable `MACACA_XCTESTWD_ROOT_PATH` to set the location of `XCTestWD`, refer to [XCTestWD docs](https://github.com/macacajs/XCTestWD#44).
    * The location should contain `XCTestWD` folder outside `XCTestWD.xcodeproj`, instead of `XCTestWD.xcodeproj` directly.
    * For example, `MACACA_XCTESTWD_ROOT_PATH=/path/to/macaca_xctest app-inspector -u xxx --verbose`
  * `XCTestWD` location could be inside `node_modules` of another package, or globally installed at `/usr/local/lib/node_modules/xctestwd`

## Android

- [Install the latest JDK 1.8](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html) (Java 9 is not supported)
- Set the `JAVA_HOME` environment variable in your `~/.bashrc`, `~/.bash_profile`, `~/.zshrc` or whatever your shell uses:

```bash
# for example
export JAVA_HOME=path/to/your/Java/Home
# or
export JAVA_HOME="$(/usr/libexec/java_home -v 1.8)"
```

- Install the `Android SDK` and `Android Support Repository`, using any of the versions within `18-25`
- Set the `ANDROID_HOME` environment variable in your `~/.bashrc`, `~/.bash_profile`, `~/.zshrc` or whatever your shell uses:

```bash
# for example
export ANDROID_HOME=/usr/local/opt/android-sdk
# or
export ANDROID_HOME="/Users/<UserName>/Library/Android/sdk"
```

- [gradle](https://gradle.org) is needed in order to build [UIAutomatorWD](//github.com/macacajs/UIAutomatorWD) and other package.(For Windows Users plz download [gradle installer](https://gradle.org/releases/) and set PATH environment variable.)

```bash
$ brew install gradle
```

- Install [macaca-android](https://github.com/macacajs/macaca-android) driver

```bash
# local installation
npm i macaca-android --save-dev
# global installation
npm i macaca-android -g
```

* If you got a error like [You have not accepted the license agreements of the following SDK components] on your install command `npm i macaca-android -g`, please accept all Android SDK licenses uses command below, and retry install.

```bash
$ yes | $ANDROID_HOME/tools/bin/sdkmanager --licenses
```

## Desktop

- If you want to test in Electron, install [macaca-electron](https://github.com/macacajs/macaca-electron) driver

```bash
# local installation
npm i macaca-electron --save-dev
# global installation
npm i macaca-electron -g
```

- If you want to test in Chrome, install [macaca-chrome](https://github.com/macacajs/macaca-chrome) driver

```bash
# local installation
npm i macaca-chrome --save-dev
# global installation
npm i macaca-chrome -g
```

[Chrome driver default version](https://github.com/macacajs/macaca-chromedriver/blob/master/package.json#L43)

## Macaca Cli

### Global Installation

```bash
$ npm i -g macaca-cli
```

If you saw the picture below, congratulations! Macaca has been installed successfully!

![](/assets/6d308bd9gw1faie2w55hnj20rs0ov4fu.jpg)

### Local Installation

```bash
$ npm i macaca-cli --save-dev

# start Macaca
$ ./node_modules/.bin/macaca run --verbose
```

### Environment Check

Let's check the version and verify the environment.

```bash
# show version
$ macaca -v

# verify environment
$ macaca doctor
```

## Prepare Application

iOS: An valid iOS application package suffixed with `.app`.

Android: An valid Android application package suffixed with `.apk`.

Desktop: All web application could be run with initial url.
