# Recorder

The recorder supports simultaneous recording and playback of Android, iOS, and PC browsers.

## PC Browser

![](//wx1.sinaimg.cn/mw1024/7f3afc78gy1fdf5gass5rg20sg0g0kjo.gif)

## Mobile Browser

![](//wx2.sinaimg.cn/mw1024/7f3afc78gy1fdf5hb8anig20sg0g0u12.gif)

## Installation

```bash
$ npm i uirecorder -g
```

## Usage

```bash
# start macaca server
$ macaca server --port 4444 --verbose
# start recorder for mobile browser
$ uirecorder start --mobile
# run macaca
$ macaca run -p 4444 -d test.spec.js --verbose
```

Inspired by [uirecorder](https://github.com/alibaba/uirecorder)
