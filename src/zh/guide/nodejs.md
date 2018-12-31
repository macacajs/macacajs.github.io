# 使用 Node.js 语言

## 环境

由于Macaca工具链就是基于Node.js实现的，所以在安装环境的时候已经配置过Node.js环境，无需再次配置。

## 快速创建

```bash
$ git clone https://github.com/macaca-sample/macaca-nodejs-boilerplate.git
```

一个Macaca可以使用的工程就创建好了，可在此基础上添加和运行测试用例，Macaca 推荐使用[mocha 测试框架](//github.com/mochajs/mocha)。

## 示例合集

[示例仓库](//github.com/macaca-sample/sample-nodejs)中包含iOS, Android的App测试示例，手机系统浏览器的测试示例以及PC端浏览器的测试示例。

## 用法示例

```javascript

// 引入官方webdriver client 包
var wd = require('macaca-wd');

// 定义webdriver client 要链接的服务端 host 和 port
var remoteConfig = {
  host: 'localhost',
  port: 3456 // Macaca server 默认使用 3456 端口
};

// 后面 driver 直接使用链式调用即可
var driver = wd.promiseChainRemote(remoteConfig);

before(function() {
  return driver.init({
    platformName: 'desktop', // iOS, Android, Desktop
    browserName: 'chrome'    // Chrome, Electron
    app: path/to/app         // Only for mobile
  });
});

after(function() {
  return driver
    .sleep(1000)
    .quit();
});

it('#1 should', function() {

  ...

});

...
```

## 扩展 API

```javascript
wd.addPromiseChainMethod(name, method);
```

## API 文档

API 文档请见[文档链接](//macacajs.github.io/macaca-wd)
