# Node.js 版

## 用法示例

```javascript
var wd = require('macaca-wd');

var remoteConfig = {
  host: 'localhost',
  port: 3456
};

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

## 相关链接

- [API 文档](//macacajs.github.io/macaca-wd)
- [源代码](//github.com/macacajs/macaca-wd)
- [示例仓库](//github.com/macaca-sample/mobile-app-sample-nodejs)
