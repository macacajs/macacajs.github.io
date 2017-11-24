# 上手指南

## 运行官方示例

将官方示例([sample-nodejs](//github.com/macaca-sample/sample-nodejs))克隆到本地，然后按照如下命令即可下载已提供好的`示例 App`，并运行自动化测试。

```bash
# 安装工具包和驱动
$ npm i macaca-cli macaca-ios -g
$ git clone https://github.com/macaca-sample/sample-nodejs.git --depth=1
$ cd sample-nodejs
# 安装项目依赖
$ npm i
# macaca run --verbose
# 更多运行方式见 Makefile
```

**注：** 相比桌面浏览器，移动 App 测试有更多环境上的要求，如果没有看到预期的效果一般都是简单的坏境问题导致的，可以看下面提供的示例视频进行了解，更多关于环境的配置可以参考[环境配置](./environment-setup)。

## 多语言栈

如上示例基于 Node.js 开发平台，Macaca 也提供多语言栈支持，请阅读[多语言](./multi-lang)。

## 示例集合

更多的示例请访问[macaca-sample](//github.com/macaca-sample)。

## 视频演示

### iOS 应用测试(含 WebView)

{% include video.html url="https://os.alipayobjects.com/rmsportal/fyuMolxdSsGMlNw.mp4" %}

### iOS 手机端浏览器

{% include video.html url="https://os.alipayobjects.com/rmsportal/TDeTXmTfeqRlxhj.mp4" %}

### Android 应用测试(含 WebView)

{% include video.html url="https://os.alipayobjects.com/rmsportal/vjoZfJaZmCvInDv.mp4" %}

### Android 手机端浏览器

{% include video.html url="https://os.alipayobjects.com/rmsportal/VoxFKOVDsOjKyMs.mp4" %}

### 桌面端 (Electron)

{% include video.html url="https://os.alipayobjects.com/rmsportal/bgBKHXYSrlYpuvv.mp4" %}
