# 环境配置

## 安装 Node.js

请安装 [Node.js](https://nodejs.org/) v6.0 或者更高版本，装好 `Node.js` 后命令行里就已经集成了 `npm` 工具，为了提高安装模块的速度，请使用国内的 `cnpm`。

## iOS 环境

0. 请安装 Xcode8.3 或者更高版本
0. 需要安装 [usbmuxd](//github.com/libimobiledevice/usbmuxd) 以便于通过 USB 通道测试 iOS 真机，不需要测试真机则不用安装

``` bash
$ brew install usbmuxd
```

0. 应用中如含有 WebView，请安装 [ios-webkit-debug-proxy](//github.com/google/ios-webkit-debug-proxy)

``` bash
$ brew install ios-webkit-debug-proxy
```

0. 请安装 [carthage](//github.com/Carthage/Carthage) 来构建 Macaca [XCTestWD](//github.com/macacajs/XCTestWD).

``` bash
$ brew install carthage
```

备注：使用brew命令需要安装[Homebrew](http://brew.sh/index_zh-cn.html)（一款常用的 MacOS 的包管理器），请按照官网提示安装。

* 准备 App 包：如需要测试 iOS 应用，请使用 Scheme 设置为 debug 的 `.app` 包。

### iOS 真机环境

![](http://wx1.sinaimg.cn/large/6d308bd9gy1fg7cnt9hf6j20t70h7782.jpg)

在安装过程中可以将 TEAM_ID 通过环境变量传入即可支持真机，TEAM_ID 如何获取请见上图。

``` bash
$ DEVELOPMENT_TEAM_ID=TEAM_ID npm i macaca-ios -g
```

## Android 环境

0. [安装 JDK](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html)，要求 1.8 或更高版本

0. 配置 JAVA_HOME，根据你所使用的 shell 工具修改不同的文件，比如 ~/.bashrc, ~/.bash_profile, ~/.zshrc

``` bash
$ export JAVA_HOME=path/to/your/Java/Home
```

0. 安装安卓 SDK，运行 `brew install android-sdk`，然后安装`18-25`版本中的任一 SDK 和 `Android Support Repository`
0. shell 环境设置 `ANDROID_HOME`
	根据你所使用的Terminal修改不同的文件，比如~/.bashrc, ~/.bash_profile, ~/.zshrc

``` bash
# 如果是通过homebrew安装的android-sdk，则路径如下
$ export ANDROID_HOME = /usr/local/opt/android-sdk

# 如果通过其他方式安装的sdk，路径设置为对应的android sdk的路径
$ export ANDROID_HOME = path/to/your/Android/sdk
```

请安装 [gradle](https://gradle.org) 来构建 [UIAutomatorWD](//github.com/macacajs/UIAutomatorWD) 和其它依赖包。

``` bash
$ brew install gradle
```

* 准备 App 包：如需要测试 Android 应用，请使用 `.apk` 格式的包。

## 准备移动端App

iOS: 支持 `.app` 格式的包。

Android: 支持 `.apk` 格式的包。

Desktop: 支持任意浏览器网页。

## 命令行工具

### 全局安装

``` bash
$ npm i -g macaca-cli
```

如果看到如下可爱的🐒，那恭喜你安装成功啦！重新安装则会覆盖更新。

![](http://ww4.sinaimg.cn/large/6d308bd9gw1faie2w55hnj20rs0ov4fu.jpg)

### 安装驱动（不同驱动适应不同平台的支持）

上述驱动可以按照自身需要选择性的安装，比如只需要测试 iOS平台用例，就执行iOS的安装命令：

``` bash
$ npm i macaca-ios -g
```

### 环境检查

通过 `macaca doctor` 可以检查环境是否配置成功

``` bash
$ macaca doctor
```

如下图所示则表示环境均配置正常，如果有标红提示，则需要对应处理。

![macaca-doctor](http://ww1.sinaimg.cn/large/6b65a607jw1fa3cqjexk2j21c20padqa.jpg)

## 一些开源镜像

> 由于网络原因导致的安装失败可以通过指定软件的镜像来解决

Chromedriver 和 Electron 可以使用如下镜像：

``` bash
$ export CHROMEDRIVER_CDNURL=http://npm.taobao.org/mirrors/chromedriver/
$ export ELECTRON_MIRROR=https://npm.taobao.org/mirrors/electron/
```

Homebrew 可以使用如下镜像：

``` bash
HOMEBREW_BOTTLE_DOMAIN=https://mirrors.ustc.edu.cn/homebrew-bottles brew install ios-webkit-debug-proxy
```
