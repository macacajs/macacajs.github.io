# 计算机视觉

Macaca 提供计算机视觉解决方案，用来处理 View 体系之外的问题。如识别测试过程中的截图、测试游戏类产品等，本文档会介绍 OpenCV, Sikuli 和其它被广泛使用的库是如何与 Macaca 结合使用的。另外也会介绍 NodeCV 服务部署，然后便可随时随地使用此图形服务。

## OpenCV

### 安装

MacOS 可使用 brew 来安装:

```bash
$ brew install opencv
```

请使用稳定的v2(2.4.13.2)版本，源码包[下载地址](//codeload.github.com/opencv/opencv/zip/2.4.13.2)，windows 平台的安装请参考 [OpenCV 官网](//github.com/opencv/opencv)。

如果不想本机安装使用的请直接使用后面提到的 NodeCV 服务，避免环境的诸多问题。

### 各语言使用方法

#### Node.js:

只需要引入 [nodecv](https://github.com/xudafeng/nodecv) 模块即可完成图像相似度，特征匹配，特征识别等功能，如下示例。

```javascript
const nodecv = require('nodecv');

nodecv.imread(image1Path, (err, image1) => {
  if (err) {
    throw err;
  }
  nodecv.imread(image2Path, (err, image2) => {
    if (err) {
      throw err;
    }
    nodecv.imageDissimilarity(image1, image2, (err, dissimilarity) => {
      if (err) {
        throw err;
      }
      console.log(`Dissimilarity: ${dissimilarity}`);
    });
  });
});
```

匹配方式枚举：

```
CV_TM_SQDIFF        =0 平方差匹配法
CV_TM_SQDIFF_NORMED =1 归一化平方差匹配法
CV_TM_CCORR         =2 相关匹配法
CV_TM_CCORR_NORMED  =3 归一化相关匹配法
CV_TM_CCOEFF        =4 相关系数匹配法
CV_TM_CCOEFF_NORMED =5 归一化相关系数匹配法
```

更多 Node.js 示例请访问 [macaca-sample/cv-sample-node](//github.com/macaca-sample/cv-sample-node)。

#### Python:

``` python

import cv2
import numpy as np

class opencvSample:

    def __init__(self, sourceimage):
        self.sourceimage = sourceimage

    def match(self, templateimage, threshold=0.8):
        image = cv2.imread(self.sourceimage)
        template = cv2.imread(templateimage)
        result = cv2.matchTemplate(image, template, cv2.TM_CCOEFF_NORMED)
        similarity = cv2.minMaxLoc(result)[1]
        if similarity < threshold:
            return similarity
        else:
            return np.unravel_index(result.argmax(), result.shape)
```

更多 Python 示例请访问 [macaca-sample/cv-sample-python](//github.com/macaca-sample/cv-sample-python)。

#### Java:

Java 端请直接使用 [JavaCV](//github.com/bytedeco/javacv)，更多 Java 示例请访问 [macaca-sample/cv-sample-java](//github.com/macaca-sample/cv-sample-java)。

### 部署 NodeCV 服务

Macaca 提供便捷的 Opencv 服务部署，只需要 Docker 环境便可一键部署。

```bash
$ git clone https://github.com/macacajs/nodecv-server.git --depth=1
$ cd nodecv-server
$ docker build . -t="node-server"
```

然后便可在任意服务器环境，甚至[树莓派](//github.com/macacajs/nodecv-server/issues/1)启动 OpenCV 的 `HTTP` 服务，[macaca-sample](//github.com/macaca-sample) 也提供各语言针对服务端通信的示例。

服务启动成功后可访问 demo 页面： `http://localhost:9900/opencv/demo`

![](//wx3.sinaimg.cn/large/6d308bd9gy1fek6oa9i3vj21kw0zrn4y.jpg)

## API

```
POST /opencv/dissimilarity
```

```
POST /opencv/matchtemplate
```

```
POST /opencv/cascadedetect
```

请求 HTTP 服务示例：

```javascript
request.post({
  url: `${remoteHost}/opencv/dissimilarity`,
  formData: formData
}, function(err, httpResponse, body) {
  if (err) {
    return console.error('upload failed:', err);
  }
  console.log('Server responded with:', body);
  try {
    const data = JSON.parse(body);
    console.log(`Dissimilarity is: ${data.dissimilarity}`);
  } catch (e) {
  }
});

```

更多请见 [nodecv-server](//github.com/macacajs/nodecv-server)。

## 其它方案

### Sikuli

Sikuli 是一种图形脚本语言，与 Macaca 配合使用可适应特定的测试场景，更多请见官网[sikuli](//github.com/sikuli/sikuli)。

### Tesseract

[tesseract](//github.com/tesseract-ocr/tesseract) 在文字识别等方面非常专业，可与 OpenCV 配合使用。

### Image Diff

基于像素点对比的图像 Diff，可以使用：

- [uber-archive/image-diff](//github.com/uber-archive/image-diff)
- [yahoo/blink-diff](//github.com/yahoo/blink-diff)

与 Macaca 结合使用的[示例地址：macaca-sample/react-native-sample](//github.com/macaca-sample/react-native-sample)，效果如下：

![](http://ww3.sinaimg.cn/large/6d308bd9gw1f3ymytc3mzj21kw0xpjx1.jpg)

游戏框架 Hilo 也是基于像素点对比的，与 Macaca 结合使用示例见 [hiloteam/Hilo 官网](//github.com/hiloteam/Hilo)。
