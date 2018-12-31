# Browser Testing
This document describes how to test desktop browser compatibility.

## Multi-Browser Support

Run [selenium-standalone](//github.com/vvo/selenium-standalone) on the desktop to drive desktop browser. [selenium-standalone](//github.com/vvo/selenium-standalone) is a command line program to install and launch the selenium standalone server, chrome driver, internet explorer driver, and firefox driver.

```bash
selenium-standalone install --drivers.firefox.baseURL=http://npm.taobao.org/mirrors/geckodriver --baseURL=http://npm.taobao.org/mirrors/selenium --drivers.chrome.baseURL=http://npm.taobao.org/mirrors/chromedriver --drivers.ie.baseURL=http://npm.taobao.org/mirrors/selenium
```
## Private Cloud Deployment

[F2ETest DOC](//github.com/alibaba/f2etest) supports private deployment of servers, and is the overall solution for multi-browser compatibility testing

![](//wx1.sinaimg.cn/large/6d308bd9gy1feru097e8cj20sw0dcagm.jpg)

### Usage

Various types of desktop browsers can be tested with the following configuration:

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
