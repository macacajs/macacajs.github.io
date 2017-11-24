# Debugging

## Launch server only

```bash
$ macaca server --verbose
```

## REPL

```bash
# go into REPL environment
$ node
```

## Devtool Usage

```bash
# only version 1.11.2 can be use
$ npm i -g devtool@1.11.2
# run devtool in your project directory
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

[More About Devtool](//github.com/Jam3/devtool)
