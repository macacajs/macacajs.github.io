# Environment Setup

## Node.js

[Node.js](https://nodejs.org/) v4.0 or higher.

## iOS

Xcode v7.3 or higher is required.

[usbmuxd](//github.com/libimobiledevice/usbmuxd) is needed in order to testing real iOS device via USB.

```shell
$ brew install usbmuxd
```

[ios-webkit-debug-proxy](//github.com/google/ios-webkit-debug-proxy) is needed in order to testing WebViews.

```shell
$ brew install ios-webkit-debug-proxy
```

## Android

0. [Install the latest JDK](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html)
0. Install the Android SDK, run `brew install android-sdk`
0. Set the `ANDROID_HOME` environment variable to your `~/.bashrc`, `~/.bash_profile`, `~/.zshrc` or whatever your shell uses:

```shell
## if you have installed the SDK via Homebrew
export ANDROID_HOME = /usr/local/opt/android-sdk

## otherwise
export ANDROID_HOME = path/to/your/Android/sdk
```

## Macaca Cli

### Global Installation

```shell
$ npm i -g macaca-cli
```

If you saw the picture below, congratulations! Macaca has been installed successfully!

![](http://ww4.sinaimg.cn/large/6d308bd9gw1faie2w55hnj20rs0ov4fu.jpg)

### Local Installation

```shell
$ npm i macaca-cli --save-dev

# start Macaca
$ ./node_modules/.bin/macaca run --verbose
```

### Driver Installation

```shell
# please run below for newer npm
$ npm i macaca-ios -g
```

### Environment

Let's check the version and verify the environment.

```shell
# show version
$ macaca -v

# verify environment
$ macaca doctor
```
