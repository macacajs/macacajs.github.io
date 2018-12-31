# 浏览器测试

本篇文档介绍如何对桌面端浏览器做兼容性测试。

## 多浏览器支持

通过在本机运行 [selenium-standalone](//github.com/vvo/selenium-standalone) 实现驱动桌面端浏览器。

可以通过如下命令加速安装：

```bash
selenium-standalone install --drivers.firefox.baseURL=http://npm.taobao.org/mirrors/geckodriver --baseURL=http://npm.taobao.org/mirrors/selenium --drivers.chrome.baseURL=http://npm.taobao.org/mirrors/chromedriver --drivers.ie.baseURL=http://npm.taobao.org/mirrors/selenium
```

## 私有云部署

[F2ETest](//github.com/alibaba/f2etest) 支持服务端私有部署，是多浏览器兼容性测试整体解决方案。

![](//wx1.sinaimg.cn/large/6d308bd9gy1feru097e8cj20sw0dcagm.jpg)

### 用法

通过如下配置可以测试多种类型的桌面端浏览器：

```javascript
const wd = require('macaca-wd');
const remoteConfig = {
  host: 'host',
  port: 4444
};
const driver = wd.promiseChainRemote(remoteConfig);
driver.init({
  platformName: 'desktop',
  browserName: 'ie',
  version: '11',
  'f2etest.userid': 'xxxxxx',
  'f2etest.apiKey': 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
})
```
