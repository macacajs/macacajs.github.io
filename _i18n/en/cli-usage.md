# CLI Usage

### Run test tasks

```bash
# run test in current cwd
$ macaca run --verbose

# run test in a pointed directry and set a framework
# mocha, jasmine, tman, ava supported for Node.js env.
$ macaca run -d ./test -f mocha

# output log file as html code
$ macaca run -o

# run in silence, desktop only
$ macaca run --no-window

# custom mocha reporter
$ CUSTOM_DIR=path/to/screenshot macaca run -d ./test --reporter macaca-simple-reportor
```

### Start webdriver server only

```bash
# normal usage
$ macaca server --verbose

# set a port
$ macaca server -p 3456
```

### Environment doctor

```bash
$ macaca doctor
```

### More Help

```bash
$ macaca -h

# helper for server
$ macaca server -h

# helper for how to run test
$ macaca run -h

```
