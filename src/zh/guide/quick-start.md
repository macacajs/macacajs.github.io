# 上手指南

## 运行官方示例

将官方示例([sample-nodejs](//github.com/macaca-sample/sample-nodejs))克隆到本地，然后按照如下命令即可下载已提供好的`示例 App`，并运行自动化测试。

```bash
# 安装工具包和驱动
$ npm i macaca-cli macaca-ios -g
$ git clone https://github.com/macaca-sample/sample-nodejs.git --depth=1
$ cd sample-nodejs
# 安装项目依赖
$ npm i
$ npm run doctor
$ npm run test:ios
```
### 执行测试用例

```bash
# run test in current cwd
$ macaca run --verbose

# 指定测试文件目录及测试框架，此功能只支持 Node.js 版
# 目前支持 mocha, jasmine, tman 和 ava。
$ macaca run -d ./test -f mocha

# 将结果导出为文件
$ macaca run -o

# 静默执行（只支持桌面浏览器）
$ macaca run --no-window

# 使用自定义的报告器
$ CUSTOM_DIR=path/to/screenshot macaca run -d ./test --reporter macaca-simple-reportor
```

`macaca-simple-reportor` 是自定义报告器的一个示例，可以作为参考。

将官方示例([macaca-electron-app-sample](//github.com/macaca-sample/macaca-electron-app-sample))克隆到本地，然后按照如下命令即可下载已提供好的`Eelectron.App`，并运行自动化测试。

```bash
# 安装项目依赖
$ npm i
$ npm run build
$ npm run dist
```
### 执行测试用例
```bash
# Mac
$ npm run mac-start
$ npm run test

# Windows
$ npm run win-start
$ npm run win-server
$ npm run test
```
## 用法示例

```javascript

// 引入官方webdriver client 包
const wd = require('macaca-wd');

describe('test electron.app', function() {
  this.timeout(5 * 60 * 1000);                     // 设置超时时间
  const driver = wd.promiseChainRemote({           // 后面 driver 直接使用链式调用即可
    host: 'localhost',                             // 定义 webdriver client 要链接的服务端 host 和 port
    port: process.env.MACACA_SERVER_PORT || 3456   // Macaca server 默认使用 3456 端口
  });

  before(function () {
    return driver.init({
      platformName: 'desktop',    //设置支持 Desktop 参数
      browserName: 'chrome',      //设置支持 Eletron 参数
      chromeOptions: {            //设置chromeDriver chromeOptions object 参数
        "binary": "/Applications/macaca-electron-builder.app/Contents/MacOS/macaca-electron-builder" // 填写自己的执行文件路劲或者安装之后的文件路劲
      }
    }).sleep(2 * 1000)
  });

  after(function () {
    return driver
      .sleep(1000)
      .close()
  })

  it('click link', function () {
    return driver
      .waitForElementById('macacaId', 5000, 100)
      .click()
  })

  it('click button', function () {
    return driver
      .elementByCss('#app > div > header > div.sidebar-button')
      .click()
  })
  ...
})
```
### 只启动服务器

```bash
# 普通用法，添加了 --verbose 可以看到详细的信息
$ macaca server --verbose

# 设置端口号
$ macaca server -p 3456
```

### 检查当前 Macaca 的安装环境

```bash
$ macaca doctor
```

### 更多的选项

```bash
$ macaca -h

# 服务器相关选项
$ macaca server -h

# 如何执行用例的选项
$ macaca run -h

```

**注：** 相比桌面浏览器，移动 App 测试有更多环境上的要求，如果没有看到预期的效果一般都是简单的坏境问题导致的，可以看下面提供的示例视频进行了解，更多关于环境的配置可以参考[环境配置](./environment-setup)。

## 多语言栈

如上示例基于 Node.js 开发平台，Macaca 也提供多语言栈支持，请阅读[多语言](./multi-lang)。

## 示例集合

更多的示例请访问[macaca-sample](//github.com/macaca-sample)。

## 视频演示

### iOS 应用测试(含 WebView)

<video src="//os.alipayobjects.com/rmsportal/fyuMolxdSsGMlNw.mp4" controls="controls" preload="auto" controlslist="nodownload"></video>

### iOS 手机端浏览器

<video src="//os.alipayobjects.com/rmsportal/TDeTXmTfeqRlxhj.mp4" controls="controls" preload="auto" controlslist="nodownload"></video>

### Android 应用测试(含 WebView)

<video src="//os.alipayobjects.com/rmsportal/vjoZfJaZmCvInDv.mp4" controls="controls" preload="auto" controlslist="nodownload"></video>

### Android 手机端浏览器

<video src="//os.alipayobjects.com/rmsportal/VoxFKOVDsOjKyMs.mp4" controls="controls" preload="auto" controlslist="nodownload"></video>

### 桌面端 (Electron)

<video src="//os.alipayobjects.com/rmsportal/bgBKHXYSrlYpuvv.mp4" controls="controls" preload="auto" controlslist="nodownload"></video>
