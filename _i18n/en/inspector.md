# Inspector

## Android

![](http://ww4.sinaimg.cn/large/7dfcf2f7gw1f7bwlhpakwg20s40kge3k.gif)

## iOS

![](http://ww4.sinaimg.cn/large/7dfcf2f7gw1f7bwp1mgiyg20s40kg7wh.gif)

## Installation

```bash
$ npm i app-inspector -g
```

## Usage

```bash
# Directly -u device udid
$ app-inspector -u xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
```

## iOS Device

![](//wx1.sinaimg.cn/large/6d308bd9gy1fg7cnt9hf6j20t70h7782.jpg)

TEAM ID can be passed in through the environment variable to support the device during the installation process. See above for how to obtain the TEAM_ID.

```bash
$ DEVELOPMENT_TEAM_ID=TEAM_ID npm i app-inspector -g
```

## Help

```bash
$ app-inspector -h
```

[More About Inspector](//macacajs.github.io/app-inspector)
