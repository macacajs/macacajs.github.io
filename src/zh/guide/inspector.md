# 元素查看器

## Android 端

![](http://ww4.sinaimg.cn/large/7dfcf2f7gw1f7bwlhpakwg20s40kge3k.gif)

## iOS 端

![](http://ww4.sinaimg.cn/large/7dfcf2f7gw1f7bwp1mgiyg20s40kg7wh.gif)

## 安装

```bash
$ npm i app-inspector -g
```

## 用法

```bash
# 直接 -u + 设备的 udid 即可
$ app-inspector -u xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
```

## iOS 真机环境

![](//wx1.sinaimg.cn/large/6d308bd9gy1fg7cnt9hf6j20t70h7782.jpg)

在安装过程中可以将 TEAM_ID 通过环境变量传入即可支持真机，TEAM_ID 如何获取请见上图。

```bash
$ DEVELOPMENT_TEAM_ID=TEAM_ID npm i app-inspector -g
```

## 帮助

```bash
$ app-inspector -h
```

[更多关于 Inspector](//macacajs.github.io/app-inspector/cn/)
