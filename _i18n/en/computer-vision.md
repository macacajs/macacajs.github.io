# Computer Vision

## OpenCV

### Installation

for MacOS, please use brew to install opencv2:

```bash
$ brew install opencv
```

### Usage

#### Node.js:

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

from: [macaca-sample/cv-sample-node](//github.com/macaca-sample/cv-sample-node)。

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

from: [macaca-sample/cv-sample-python](//github.com/macaca-sample/cv-sample-python)。

#### Java:

from: [macaca-sample/cv-sample-java](//github.com/macaca-sample/cv-sample-java)。

### Use As Service

```bash
$ git clone https://github.com/macacajs/nodecv-server.git --depth=1
$ cd nodecv-server
$ docker build . -t="node-server"
```

Please visit demo page： `http://localhost:9900/opencv/demo`

![](//wx3.sinaimg.cn/large/6d308bd9gy1fek6oa9i3vj21kw0zrn4y.jpg)

API DOC: [nodecv-server](//github.com/macacajs/nodecv-server), [Raspberry Pi](//github.com/macacajs/nodecv-server/issues/1)

## Other

### Sikuli

[Sikuli](//github.com/sikuli/sikuli) is a visual technology to automate graphical user interfaces (GUI) using images (screenshots).

### Tesseract

[tesseract](//github.com/tesseract-ocr/tesseract) for OCR。

### Image Diff

- [uber-archive/image-diff](//github.com/uber-archive/image-diff)
- [yahoo/blink-diff](//github.com/yahoo/blink-diff)
- [macaca-sample/react-native-sample](//github.com/macaca-sample/react-native-sample)
- [hiloteam/Hilo](//github.com/hiloteam/Hilo)

![](http://ww3.sinaimg.cn/large/6d308bd9gw1f3ymytc3mzj21kw0xpjx1.jpg)
