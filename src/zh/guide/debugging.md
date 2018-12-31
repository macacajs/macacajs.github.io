# 单步调试用例

## 先将服务启动

```bash
$ macaca server --verbose
```

## REPL 环境

```bash
# 直接使用 Node.js REPL 环境
$ node
```

```javascript
// run sample code
> const wd = require('wd');
> const driver = wd.promiseChainRemote({
    host: 'localhost',
    port: 3456
  });

> driver.init({
    platformName: 'ios',
    platformVersion: '9.3',
    deviceName: 'iPhone 6s',
    app: 'path/to/app'
  });
```

[更多关于 Node.js 调试器](//nodejs.org/en/docs/inspector/)
