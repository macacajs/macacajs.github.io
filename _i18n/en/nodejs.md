# Node.js

## Environment

Because the Macaca toolchain is based on Node.js, the Node.js environment has been configured during the installation and does not need to be configured again.

## Quickstart

```bash
$ git clone https://github.com/macaca-sample/macaca-nodejs-boilerplate.git
```

A project that Macaca can use is created and test cases can be added and run. Macaca recommends [mocha testing framework]((//github.com/mochajs/mocha)).

## Sample Code

The [sample code repository](//github.com/macaca-sample/sample-nodejs) contains iOS and Android's App sample tests, sample test of mobile browser and sample test of PC browser.

## Usage

```javascript

// Import official webdriver client package
var wd = require('macaca-wd');

// Configure the host and port of the Macaca server that the webdriver client will connec to
var remoteConfig = {
  host: 'localhost',
  port: 3456 // Macaca server defaults to using port 3456
};

// After this, the driver can directly use method chaining
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

## API Extension

```javascript
wd.addPromiseChainMethod(name, method);
```

## Links

- [API](//macacajs.github.io/macaca-wd)
- [Source code](//github.com/macacajs/macaca-wd)
- [Sample](//github.com/macaca-sample/sample-nodejs)
