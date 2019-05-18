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

- [debug log](//github.com/macacajs/XCTestWD/blob/master/README.md#43-debug-info) will be displayed when '--verbose' is set as an argument when initiating macaca.

## iOS Real Device


* Download [XCTestWD](https://github.com/macacajs/XCTestWD)
  * If `XCTestWD` is a dependency of another package, use environmental variable to pass in the location of `XCTestWD`, refer to the [XCTestWD doc](https://github.com/macacajs/XCTestWD#44)
    * For example, `MACACA_XCTESTWD_ROOT_PATH=/path/to/macaca_xctest app-inspector -u xxx --verbose`
  * Alternatively, find it in the relevant `node_modules`
  * For example, in the case of globally installed `app-inspector`, it is at `/usr/local/lib/node_modules/app-inspector/node_modules/xctestwd`
* Open `/XCTestWD/XCTestWD.xcodeproj` with XCode
* Import developer certificate
* Execute `Run Test` to import `XCTestWDUITest` into the real device

![](https://wx3.sinaimg.cn/large/88fe9010ly1g1cro3j4ugj20ya0jc78m.jpg)

* Install macaca-ios with `TEAM_ID`, find `TEAM_ID` in XCode after importing `XCTestWDUITest` into the real device:

![](https:////wx1.sinaimg.cn/large/6d308bd9gy1fg7cnt9hf6j20t70h7782.jpg)

```bash
$ DEVELOPMENT_TEAM_ID=TEAM_ID npm i macaca-ios -g
```

* If you need to run iOS tests, also remember to pass in relevant parameters for real device in [desiredCaps](https://macacajs.github.io/guide/helpful-settings.html#desired-capabilities), such as `udid`, `bundleId` and `app`.

![](/assets/88fe9010ly1g1cro765ovj20va0mgtc3.jpg)

::: tip More details
Refer to [this issue](https://github.com/alibaba/macaca/issues/654) for more details
:::

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

[gradle](https://gradle.org) is needed in order to build [UIAutomatorWD](//github.com/macacajs/UIAutomatorWD) and other package.(For Windows Users plz download [gradle installer](https://gradle.org/releases/) and set PATH environment variable.)

```bash
$ brew install gradle
```

* If you got a error like [You have not accepted the license agreements of the following SDK components] on your install command [npm i macaca-android -g]，plz accept all Android SDK licenses uses command below, and retry install.

```bash
$ yes | $ANDROID_HOME/tools/bin/sdkmanager --licenses
```

## ChromeDriver

[Default Version](//github.com/macacajs/macaca-chromedriver/blob/master/README.md#default-version)

## Macaca Cli

### Global Installation

```bash
$ npm i -g macaca-cli
```

If you saw the picture below, congratulations! Macaca has been installed successfully!

![](http://ww4.sinaimg.cn/large/6d308bd9gw1faie2w55hnj20rs0ov4fu.jpg)

### Local Installation

```bash
$ npm i macaca-cli --save-dev

# start Macaca
$ ./node_modules/.bin/macaca run --verbose
```

### Driver Installation

```bash
# please run below for newer npm
$ npm i macaca-ios -g
```

### Environment

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
