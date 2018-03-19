# 三端录制器

三端录制器同时支持 Android, iOS, PC 端浏览器的录制回放。

## PC端

![](//wx1.sinaimg.cn/mw1024/7f3afc78gy1fdf5gass5rg20sg0g0kjo.gif)

## 移动端

![](//wx2.sinaimg.cn/mw1024/7f3afc78gy1fdf5hb8anig20sg0g0u12.gif)

## 安装

```bash
$ npm i uirecorder -g
```

## 用法

```bash
# 开启 Macaca 服务
$ macaca server --port 4444 --verbose
# 开始移动端录制
$ uirecorder start --mobile
# Macaca 运行
$ macaca run -p 4444 -d test.spec.js --verbose
```

[更多关于 UIRecorder](https://github.com/alibaba/uirecorder)
