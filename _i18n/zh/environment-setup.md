# 环境配置

## 安装 Node.js

请安装 [Node.js](https://nodejs.org/) v4.0 或者更高版本，装好 `Node.js` 后命令行里就已经集成了 `npm` 工具，为了提高安装模块的速度，请使用国内的 `cnpm`。

## iOS 环境

0. 请安装 Xcode8 或者更高版本
0. 需要安装 [usbmuxd](//github.com/libimobiledevice/usbmuxd) 以便于通过 USB 通道测试 iOS 真机，不需要测试真机则不用安装

```shell
$ brew install usbmuxd
```

0. 应用中如含有 WebView，请安装 [ios-webkit-debug-proxy](//github.com/google/ios-webkit-debug-proxy)

```shell
$ brew install ios-webkit-debug-proxy
```

备注：使用brew命令需要安装[Homebrew](http://brew.sh/index_zh-cn.html)（一款常用的 MacOS 的包管理器），请按照官网提示安装。

## 安卓

0. [安装 JDK](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html)

0. 配置 JAVA_HOME，根据你所使用的 shell 工具修改不同的文件，比如 ~/.bashrc, ~/.bash_profile, ~/.zshrc

  ```shell
  export JAVA_HOME=path/to/your/Java/Home
  ```

0. 安装安卓 SDK，运行 `brew install android-sdk`，然后安装`18-24`版本中的任一 SDK
0. shell 环境设置 `ANDROID_HOME`
	根据你所使用的Terminal修改不同的文件，比如~/.bashrc, ~/.bash_profile, ~/.zshrc

```shell
# 如果是通过homebrew安装的android-sdk，则路径如下
export ANDROID_HOME = /usr/local/opt/android-sdk

# 如果通过其他方式安装的sdk，路径设置为对应的android sdk的路径
export ANDROID_HOME = path/to/your/Android/sdk

```

## 命令行工具

当前版本: [![NPM version][npm-image]][npm-url]

[npm-image]: https://img.shields.io/npm/v/macaca-cli.svg?style=flat-square
[npm-url]: https://npmjs.org/package/macaca-cli

### 全局安装

```shell
$ npm i -g macaca-cli
```

如果看到如下可爱的🐒，那恭喜你安装成功啦！重新安装则会覆盖更新。

![](https://os.alipayobjects.com/rmsportal/zSmLbyWUarTabaP.png)

### 安装驱动（不同驱动适应不同平台的支持）

| 驱动       | 版本                                     | CI状态    |安装命令
| ---------- | ---------------------------------------- | --------- |
| [Android](//github.com/macacajs/macaca-android)     | [![NPM version][npm-image-0]][npm-url-0] | [![build status][travis-image-0]][travis-url-0] 	|npm i macaca-android -g         |
| [Chrome](//github.com/macacajs/macaca-chrome)       | [![NPM version][npm-image-1]][npm-url-1] | [![build status][travis-image-1]][travis-url-1]  |npm i macaca-chrome -g          |
| [Electron](//github.com/macacajs/macaca-electron)   | [![NPM version][npm-image-2]][npm-url-2] | [![build status][travis-image-2]][travis-url-2] 	|npm i macaca-electron -g           |
| [iOS](//github.com/macacajs/macaca-ios)             | [![NPM version][npm-image-3]][npm-url-3] | [![build status][travis-image-3]][travis-url-3]  |npm i macaca-ios -g          |

[npm-image-0]: https://img.shields.io/npm/v/macaca-android.svg?style=flat-square
[npm-url-0]: https://npmjs.org/package/macaca-android
[npm-image-1]: https://img.shields.io/npm/v/macaca-chrome.svg?style=flat-square
[npm-url-1]: https://npmjs.org/package/macaca-chrome
[npm-image-2]: https://img.shields.io/npm/v/macaca-electron.svg?style=flat-square
[npm-url-2]: https://npmjs.org/package/macaca-electron
[npm-image-3]: https://img.shields.io/npm/v/macaca-ios.svg?style=flat-square
[npm-url-3]: https://npmjs.org/package/macaca-ios

[travis-image-0]: https://img.shields.io/travis/macacajs/macaca-android.svg?style=flat-square
[travis-url-0]: https://travis-ci.org/macacajs/macaca-android
[travis-image-1]: https://img.shields.io/travis/macacajs/macaca-chrome.svg?style=flat-square
[travis-url-1]: https://travis-ci.org/macacajs/macaca-chrome
[travis-image-2]: https://img.shields.io/travis/macacajs/macaca-electron.svg?style=flat-square
[travis-url-2]: https://travis-ci.org/macacajs/macaca-electron
[travis-image-3]: https://img.shields.io/travis/macacajs/macaca-ios.svg?style=flat-square
[travis-url-3]: https://travis-ci.org/macacajs/macaca-ios

上述驱动可以按照自身需要选择性的安装，比如只需要测试 iOS平台用例，就执行iOS的安装命令：

```shell
$ npm i macaca-ios -g
```

### 环境检查

通过 `macaca doctor` 可以检查环境是否配置成功

```shell
$ macaca doctor
```

如下图所示则表示环境均配置正常，如果有标红提示，则需要对应处理。

![macaca-doctor](http://ww1.sinaimg.cn/mw690/6b65a607jw1fa3cqjexk2j21c20padqa.jpg)

## 大功告成！

运行个[例子](./getting-started.html)试试吧，若在环境配置过程中遇到问题，请查看常见问题列表寻找解决办法，或提
issue。
