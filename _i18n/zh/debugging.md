# 单步调试用例

## 先将服务启动

```shell
$ macaca server --verbose
```

## REPL 环境

```shell
# 直接使用 Node.js REPL 环境
$ node
```

## Devtool 用法[推荐]

```shell
# 请安装 1.11.2 版本的 devtool
$ npm i -g devtool@1.11.2
# 然后在工程根目录运行
$ devtool
```

![](http://ww3.sinaimg.cn/large/3fb01b8agw1f2m0n619wpj21d019aaey.jpg)

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

在如上的界面直接运行 JavaScript 代码即可，此时可看到服务端日志变化，如有疑惑可参看社区的文章。

[更多关于 Devtool](//github.com/Jam3/devtool)
