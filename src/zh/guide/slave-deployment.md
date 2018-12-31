**注：** 本方案适合有 Node.js 二次开发能力的用户实践

# Reliable Slave 部署

启动成功 `reliable-master` 后，我们接着来部署 `reliable-slave`。

![Reliable Macaca Slave](http://ww2.sinaimg.cn/large/6d308bd9gw1fajd8rayohj20qc0j0tbw.jpg)

## 依赖

首先，为了运行 iOS app，reliable-slave 只能在 macOS 上运行（当然如果不跑 iOS 任务，Linux 平台也可以）。接着你需要安装 iOS 和 Android 开发环境用以运行测试用例。

执行以下命令检查环境：

```bash
$ npm i macaca-cli -g
$ macaca doctor
```

## 安装

首先请安装 Nodejs。

在安装 reliable-slave 之前，请先安装 zeromq。

```bash
$ brew install pkg-config
$ brew install zeromq

# Then

$ npm install reliable-macaca-slave -g
```

在完成环境检查和安装步骤后，来部署 reliable-slave 吧！

## 部署

在部署 reliable-slave 之前，我们应该先让 reliable-master 运行起来，如果没有的话，你应该先部署 [reliable-master](/zh/master-deployment) 。reliable-master 运行起来后, 执行命令来部署 reliable-slave。

```bash
$ reliable server -m <reliable-master:port> --verbose
```

初始化完成后，会有相应的日志显示在你的终端里.
