# Browser Testing

## selenium-standalone

[selenium-standalone](//github.com/vvo/selenium-standalone) is command line or programmatic install and launch of selenium standalone server, chrome driver, internet explorer driver, firefox driver.

## Use As Service

[F2ETest DOC](//github.com/alibaba/f2etest)

![](//wx1.sinaimg.cn/large/6d308bd9gy1feru097e8cj20sw0dcagm.jpg)

### Usage

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
