# Page UI Test

## With torchjs (recommended)

> Test framework to light up the world.

![](//wx4.sinaimg.cn/large/6d308bd9gy1fiw8er0a5eg20zc0k0he0.gif)

### Installation

```bash
$ npm i torchjs --save-dev
```

### Options

```bash
$ torch --help

  Usage: torch [options]

  Options:

    -h, --help                              output usage information
    -V, --version                           output the version number
    -C, --no-colors                         force disabling of colors
    -O, --reporter-options <k=v,k2=v2,...>  reporter-specific options
    -R, --reporter <name>                   specify the reporter to use
    -S, --sort                              sort test files
    -b, --bail                              bail after first test failure
    -g, --grep <pattern>                    only run tests matching <pattern>
    -f, --fgrep <string>                    only run tests containing <string>
    -i, --invert                            inverts --grep and --fgrep matches
    -r, --require <name>                    require the given module
    -s, --slow <ms>                         "slow" test threshold in milliseconds [75]
    -t, --timeout <ms>                      set test-case timeout in milliseconds [2000]
    -u, --ui <name>                         specify user-interface (bdd|tdd|exports)
    --check-leaks                           check for global variable leaks
    --compile                               compile with babel
    --compile-opts <path>                   path of compile options
    --compilers <ext>:<module>,...          use the given module(s) to compile files
    --coverage                              report coverage
    --debug                                 enable Electron debugger on port [5858]; for --renderer tests show window and dev-tools
    --debug-brk                             like --debug but pauses the script on the first line
    --globals <names>                       allow the given comma-delimited global [names]
    --inline-diffs                          display actual/expected differences inline within each string
    --interactive                           run tests in renderer process in a visible window that can be reloaded to re-run tests
    --interfaces                            display available interfaces
    --no-timeouts                           disables timeouts
    --notify-on-fail                        notify on failures
    --notify-on-success                     notify on success
    --opts <path>                           specify opts path
    --preload <name>                        preload the given script in renderer process
    --recursive                             include sub directories
    --renderer                              run tests in renderer process
    --require-main <name>                   load the given script in main process before executing tests
    --source-pattern <sources>              glob pattern of source files
    --watch                                 watching source file changes
    --watch-aggregate-timeout               delay time for re-run test cases after files changed
```

[More options](//github.com/macacajs/torchjs)

![](//wx4.sinaimg.cn/large/6d308bd9gy1fivuatxep5j21kw13dgs6.jpg)

![](//wx3.sinaimg.cn/large/6d308bd9gy1fivtfos9r5j21kw130af7.jpg)

---

## With UITest

### Installation

```bash
$ npm i uitest --save-dev
```

### Usage

![](http://ww3.sinaimg.cn/large/6d308bd9gw1f6wsic5dmxj20rl0qqtbi.jpg)

Directly import `uitest-mocha-shim.js` file to run in browser.

``` html
<!DOCTYPE html>
<html>
  <head>
    <title>macaca mocha test</title>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./node_modules/mocha/mocha.css" />
  </head>
  <body>
    <div id="mocha"></div>
    <script src="./node_modules/mocha/mocha.js"></script>
    <script src='./node_modules/uitest/uitest-mocha-shim.js'></script>
    <script src="./node_modules/should/should.js"></script>
    <script>
    _macaca_uitest.setup({
      ui: 'bdd',
      timeout: 5000,
      slow: 2000
    });
    </script>
    <script>
    describe('sample', function() {

      beforeEach('init', function() {
      });

      it('#case_1', function() {
      });

    });
    </script>
    <script>
    _macaca_uitest.run();
    </script>
  </body>
</html>
```

### With Node.js

![](http://ww1.sinaimg.cn/large/6d308bd9gw1f6wsibnfldg20nk0gr7kg.gif)

Your can start uitest using Node API:

```javascript
const uitest = require('uitest');

uitest({
  url: 'file:///Users/name/path/index.html',
  width: 600,
  height: 480,
  hidpi: false,
  useContentSize: true,
  show: false,
}).then(() => {
  console.log('uitest success')
}).catch(() => {
  console.log('uitest error')
});
```

### With Gulp

Or with Gulp:

```bash
$ npm i gulp-uitest --save-dev
```

```javascript
const uitest = require('gulp-uitest');
//test
gulp.task('test', function() {
  return gulp
    .src('test/html/index.html')
    .pipe(uitest({
      width: 600,
      height: 480,
      hidpi: false,
      useContentSize: true,
      show: false,
    }));
});

```

- [More About UITest](//github.com/macacajs/uitest)
- [UITest sample](//github.com/macaca-sample/uitest-sample)
- [Game framework Hilo test sample](//github.com/hiloteam/Hilo)
- [Game framework pillow.js test sample](//github.com/xudafeng/pillow)
- [Canvas framework monitor.js test sample](//github.com/xudafeng/monitor.js)
