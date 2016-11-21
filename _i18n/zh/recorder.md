# 三端录制器

三端录制器同时支持 Android, iOS, PC 端浏览器的录制回放。

## 安装

```shell
$ npm i uirecorder -g
```

## 用法

```shell
# 开启 Macaca 服务
$ macaca server --port 4444 --verbose
# 开始移动端录制
$ uirecorder start --mobile
# Macaca 运行
$ macaca run -p 4444 -d test.spec.js --verbose
```

![](http://ww2.sinaimg.cn/large/6d308bd9gw1f95rxivtetg211y0iqu19.gif)

[更多关于 UIRecorder](https://github.com/alibaba/uirecorder)
