# Environment Setup

## Node.js

[Node.js](https://nodejs.org/) v6.0 or higher.

## iOS

Xcode v9 or higher is required.

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

- [carthage](//github.com/Carthage/Carthage) is needed in order to build [XCTestWD](//github.com/macacajs/XCTestWD).

```bash
$ brew install carthage
```

- [debug log](//github.com/macacajs/XCTestWD/blob/master/README.md#43-debug-info) will be displayed when '--verbose' is set as an argument when initiating macaca.

### iOS Real Device

![](//wx1.sinaimg.cn/large/6d308bd9gy1fg7cnt9hf6j20t70h7782.jpg)

```bash
$ DEVELOPMENT_TEAM_ID=TEAM_ID npm i macaca-ios -g
```

## Android

- [Install the latest JDK 1.8](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html) (Java 9 is not supported)
- Install the Android SDK`
- Set the `ANDROID_HOME` environment variable to your `~/.bashrc`, `~/.bash_profile`, `~/.zshrc` or whatever your shell uses:

```bash
export ANDROID_HOME = /usr/local/opt/android-sdk
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
