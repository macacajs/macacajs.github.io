# Quick Start

If you are new to UI automation test or cross-platform automation tool, the basic idea is

0. You have a test target, such as a website, or an mobile app.
0. You need to write some test codes to validate the properties and state of UI elements of your target.
0. Your test codes talk to Macaca, and Macaca talks to your target, execute what you have commanded in your test codes such as switching between screens, inputting text you predefined, return the UI element and properties you described in your test code, and generate a report about pass or failure. 
Watching the following videos will help you understand the concepts better.

If you have done some UI automation before, you probably have grasped what Macaca can do. You might want to jum right into what's capability. 
We prepare an example for you to get a taste.

## Examples

Check out the sample located in this repo([sample-nodejs](//github.com/macaca-sample/sample-nodejs)).

```bash
$ git clone https://github.com/macaca-sample/sample-nodejs.git --depth=1
$ cd sample-nodejs
$ npm i
$ npm run doctor
$ npm run test:ios
```

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

## Sample Video

### iOS APP

{% include video.html url="//os.alipayobjects.com/rmsportal/fyuMolxdSsGMlNw.mp4" %}

### Mobile Safari

{% include video.html url="//os.alipayobjects.com/rmsportal/TDeTXmTfeqRlxhj.mp4" %}

### Android APP

{% include video.html url="//os.alipayobjects.com/rmsportal/vjoZfJaZmCvInDv.mp4" %}

### Android Browser

{% include video.html url="//os.alipayobjects.com/rmsportal/VoxFKOVDsOjKyMs.mp4" %}

### Desktop (Electron)

{% include video.html url="//os.alipayobjects.com/rmsportal/bgBKHXYSrlYpuvv.mp4" %}

## More Examples
[more sample](//github.com/macaca-sample).
