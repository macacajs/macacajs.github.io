# Computer Vision

Macaca provides computer vision solutions to analyze the UI outside the View system, e.g. to identify screenshots during testing, test game products, etc. This document will describe how OpenCV, Sikuli, and other widely used libraries are used in conjunction with Macaca, and introduces the NodeCV service deployment, after which you can use this graphics service anytime, anywhere.

## OpenCV

### Installation

For MacOS, please use brew to install opencv2:

```bash
$ brew install opencv
```

Please use the stable version of [v2 (2.4.13.2)](//codeload.github.com/opencv/opencv/zip/2.4.13.2). For installation on Windows platform, please refer to the [OpenCV website](//github.com/opencv/opencv). 

If you do not want to install on your local machine, please use the NodeCV service mentioned later to avoid any problems in the environment.

### Usage

#### Node.js:

You only need to introduce [nodecv](https://github.com/xudafeng/nodecv) module to use the image similarity, feature matching, feature recognition and other functions. 

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

Matching method enumeration:

```
CV_TM_SQDIFF        =0 Square difference matching method
CV_TM_SQDIFF_NORMED =1 Normalized squared difference matching metho
CV_TM_CCORR         =2 Correlation matching method
CV_TM_CCORR_NORMED  =3 Normalized Correlation Matching
CV_TM_CCOEFF        =4 Correlation coefficient matching method
CV_TM_CCOEFF_NORMED =5 Normalized correlation coefficient matching method
```

For more Node.js samples, visit [macaca-sample/cv-sample-node](//github.com/macaca-sample/cv-sample-node)。

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

For more Python samples, visit [macaca-sample/cv-sample-python](//github.com/macaca-sample/cv-sample-python)。

#### Java:

For Java, please directly use [JavaCV](//github.com/bytedeco/javacv). For more Java samples, visit [macaca-sample/cv-sample-java](//github.com/macaca-sample/cv-sample-java).

### NodeCV as a Service

Macaca provides easy deployment of OpenCV services and requires only a Docker environment for one-click deployment.

```bash
$ git clone https://github.com/macacajs/nodecv-server.git --depth=1
$ cd nodecv-server
$ docker build . -t="node-server"
```
You can then start OpenCV's HTTP service in any server environment, or even on a [Raspberry Pi](//github.com/macacajs/nodecv-server/issues/1), and [macaca-sample](//github.com/macaca-sample) also provides examples of language-specific server-side communication.

After starting the server, please visit `http://localhost:9900/opencv/demo`

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

HTTP service request example:

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

For more information, visit [nodecv-server](//github.com/macacajs/nodecv-server). 

## Other Solutions

### Sikuli

[Sikuli](//github.com/sikuli/sikuli) is a graphics scripting language, and can be used with Macaca to automate graphical user interfaces (GUI) using images (screenshots).

### Tesseract

[tesseract](//github.com/tesseract-ocr/tesseract) excels at OCR, and can be used with OpenCV.

### Image Diff

For image diff based on pixel contrast, the following can be used:

- [uber-archive/image-diff](//github.com/uber-archive/image-diff)
- [yahoo/blink-diff](//github.com/yahoo/blink-diff) 

Example usage with Macaca [macaca-sample/react-native-sample](//github.com/macaca-sample/react-native-sample). Effect is as follows

![](http://ww3.sinaimg.cn/large/6d308bd9gw1f3ymytc3mzj21kw0xpjx1.jpg)

The game framework Hilo is also based on pixel comparison. See the example of combining with Macaca. See the [hiloteam/Hilo](//github.com/hiloteam/Hilo).
