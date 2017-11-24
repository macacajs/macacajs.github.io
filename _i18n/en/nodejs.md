# Node.js

## Usage

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

## Extend

```javascript
wd.addPromiseChainMethod(name, method);
```

## Links

- [API doc](//macacajs.github.io/macaca-wd)
- [source code](//github.com/macacajs/macaca-wd)
- [sample](//github.com/macaca-sample/sample-nodejs)
