# 环境配置

[[toc]]

## 安装 Node.js

请安装 [Node.js](https://nodejs.org/) v8.0 或者更高版本，装好 `Node.js` 后命令行里就已经集成了 `npm` 工具，为了提高安装模块的速度，请使用国内的 `cnpm`。

## iOS 环境


::: warning 重要
请安装 **Xcode9** 或者更高版本
:::

- 请安装 [usbmuxd](//github.com/libimobiledevice/usbmuxd) 以便于通过 USB 通道测试 iOS 真机，不需要测试真机则不用安装

```bash
$ brew install usbmuxd
```

- 请安装 [ideviceinstaller](//github.com/libimobiledevice/ideviceinstaller) 用来给真机安装 App。

```bash
$ brew install ideviceinstaller
```

- 应用中如含有 WebView，请安装 [ios-webkit-debug-proxy](//github.com/google/ios-webkit-debug-proxy)

```bash
$ brew install ios-webkit-debug-proxy
```

- 在运行的过程中，如果发现问题， 可以在macaca 启动时设置 --verbose 参数， 运行的日志中会显示XCTestWD的[诊断日志信息](//github.com/macacajs/XCTestWD/blob/master/README.md#43-debug-info).

备注：使用brew命令需要安装[Homebrew](http://brew.sh/index_zh-cn.html)（一款常用的 MacOS 的包管理器），请按照官网提示安装。

* 准备 App 包：如需要测试 iOS 应用，请使用 Scheme 设置为 debug 的 `.app` 包。

## iOS 真机环境

* 下载 [XCTestWD](https://github.com/macacajs/XCTestWD)
  * 如果 `XCTestWD` 是另一个包的依赖，从另一个包的里 `node_modules` 找
  * 比如全局安装的 `app-inspector`，在 `/usr/local/lib/node_modules/app-inspector/node_modules/xctestwd`
* 用 XCode 打开 `/XCTestWD/XCTestWD.xcodeproj`
* 导入开发者账号（证书）
* Run Test 将 `XCTestWDUITest` 装入真机：

![](https://wx3.sinaimg.cn/large/88fe9010ly1g1cro3j4ugj20ya0jc78m.jpg)

* 在安装过程中将 `TEAM_ID` 通过环境变量传入即可支持真机。真机安装 `XCTestWD` 后可以获取 `TEAM_ID` ：
![](//wx1.sinaimg.cn/large/6d308bd9gy1fg7cnt9hf6j20t70h7782.jpg)

```bash
$ DEVELOPMENT_TEAM_ID=TEAM_ID npm i macaca-ios -g
```

* 在测试脚本中配置真机测试参数，比如 `udid`, `bundleId` 和 `app`。参见 [desiredCaps](https://macacajs.github.io/guide/helpful-settings.html#desired-capabilities)。

![](https://wx1.sinaimg.cn/large/88fe9010ly1g1cro765ovj20va0mgtc3.jpg)

::: tip 更多细节
参考 [这里](https://github.com/alibaba/macaca/issues/654) 
:::

## Android 环境

- [安装 JDK](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html)，要求 1.8 （不支持Java 9）

- 配置 `JAVA_HOME`，根据你所使用的 shell 工具修改不同的文件，比如 `~/.bashrc`, `~/.bash_profile`, `~/.zshrc`

```bash
# 例如
export JAVA_HOME=path/to/your/Java/Home
# 或
export JAVA_HOME="$(/usr/libexec/java_home -v 1.8)"
```

- 安装 `18-25` 版本中的任一 `Android SDK` 和 `Android Support Repository`
- shell 环境设置 `ANDROID_HOME`，根据你所使用的Terminal修改不同的文件，比如 `~/.bashrc`, `~/.bash_profile`, `~/.zshrc`

```bash
# 例如
export ANDROID_HOME = /usr/local/opt/android-sdk
# 或
export ANDROID_HOME="/Users/<UserName>/Library/Android/sdk"
```

请安装 [gradle](https://gradle.org) 来构建 [UIAutomatorWD](//github.com/macacajs/UIAutomatorWD) 和其它依赖包。 ( Windows 用户请安装 [gradle 安装包](https://gradle.org/releases/) 并且设置对应的环境变量。)

```bash
$ brew install gradle
```

可以设置Maven源地址获取更快的安装速度。

```bash
$ MAVEN_MIRROR_URL=http://maven.aliyun.com/nexus/content/groups/public/ npm i macaca-android -g
```

* 准备 App 包：如需要测试 Android 应用，请使用 `.apk` 格式的包。
* 如果在运行 npm i macaca-android -g 的过程中出现 [You have not accepted the license agreements of the following SDK components]，请执行如下命令(该命令将同意所有的AndroidSDK 协议)后再次执行安装。

```bash
$ yes | $ANDROID_HOME/tools/bin/sdkmanager --licenses
```

## ChromeDriver

[默认版本请到这里看](//github.com/macacajs/macaca-chromedriver/blob/master/README.md#default-version)

## 准备移动端App

iOS: 支持 `.app` 格式的包。

Android: 支持 `.apk` 格式的包。

Desktop: 支持任意浏览器网页。

## 命令行工具

### 全局安装

```bash
$ npm i -g macaca-cli
```

如果看到如下可爱的🐒，那恭喜你安装成功啦！重新安装则会覆盖更新。

![](http://ww4.sinaimg.cn/large/6d308bd9gw1faie2w55hnj20rs0ov4fu.jpg)

### 安装驱动（不同驱动适应不同平台的支持）

上述驱动可以按照自身需要选择性的安装，比如只需要测试 iOS平台用例，就执行iOS的安装命令：

```bash
$ npm i macaca-ios -g
```

### 环境检查

通过 `macaca doctor` 可以检查环境是否配置成功

```bash
$ macaca doctor
```

如下图所示则表示环境均配置正常，如果有标红提示，则需要对应处理。

![macaca-doctor](http://ww1.sinaimg.cn/large/6b65a607jw1fa3cqjexk2j21c20padqa.jpg)

## 一些开源镜像

> 由于网络原因导致的安装失败可以通过指定软件的镜像来解决

Chromedriver 和 Electron 可以使用如下镜像：

```bash
$ export CHROMEDRIVER_CDNURL=http://npm.taobao.org/mirrors/chromedriver/
$ export ELECTRON_MIRROR=https://npm.taobao.org/mirrors/electron/
```

Homebrew 可以使用如下镜像：

```bash
HOMEBREW_BOTTLE_DOMAIN=https://mirrors.ustc.edu.cn/homebrew-bottles brew install ios-webkit-debug-proxy
```
