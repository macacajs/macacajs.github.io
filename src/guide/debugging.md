# Debugging

## Start the server

```bash
$ macaca server --verbose
```

```bash
# Use the Node.js REPL environment directly
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

[More About Node.js Inspector](//nodejs.org/en/docs/inspector/)
