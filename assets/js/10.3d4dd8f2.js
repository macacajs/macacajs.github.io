(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{275:function(t,a,s){"use strict";s.r(a);var n=s(13),e=Object(n.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"computer-vision"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#computer-vision"}},[t._v("#")]),t._v(" Computer Vision")]),t._v(" "),a("p",[t._v("Macaca provides computer vision solutions to analyze the UI outside the View system, e.g. to identify screenshots during testing, test game products, etc. This document will describe how OpenCV, Sikuli, and other widely used libraries are used in conjunction with Macaca, and introduces the NodeCV service deployment, after which you can use this graphics service anytime, anywhere.")]),t._v(" "),a("h2",{attrs:{id:"opencv"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#opencv"}},[t._v("#")]),t._v(" OpenCV")]),t._v(" "),a("h3",{attrs:{id:"installation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[t._v("#")]),t._v(" Installation")]),t._v(" "),a("p",[t._v("For MacOS, please use brew to install opencv2:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ brew "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" opencv\n")])])]),a("p",[t._v("Please use the stable version of "),a("a",{attrs:{href:"//codeload.github.com/opencv/opencv/zip/2.4.13.2"}},[t._v("v2 (2.4.13.2)")]),t._v(". For installation on Windows platform, please refer to the "),a("a",{attrs:{href:"//github.com/opencv/opencv"}},[t._v("OpenCV website")]),t._v(".")]),t._v(" "),a("p",[t._v("If you do not want to install on your local machine, please use the NodeCV service mentioned later to avoid any problems in the environment.")]),t._v(" "),a("h3",{attrs:{id:"usage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[t._v("#")]),t._v(" Usage")]),t._v(" "),a("h4",{attrs:{id:"node-js"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#node-js"}},[t._v("#")]),t._v(" Node.js:")]),t._v(" "),a("p",[t._v("You only need to introduce "),a("a",{attrs:{href:"https://github.com/macacajs/nodecv",target:"_blank",rel:"noopener noreferrer"}},[t._v("nodecv"),a("OutboundLink")],1),t._v(" module to use the image similarity, feature matching, feature recognition and other functions.")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" nodecv "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'nodecv'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nnodecv"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("imread")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("image1Path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("err"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" image1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("err"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throw")]),t._v(" err"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  nodecv"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("imread")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("image2Path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("err"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" image2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("err"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throw")]),t._v(" err"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    nodecv"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("imageDissimilarity")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("image1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" image2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("err"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" dissimilarity")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("err"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throw")]),t._v(" err"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("Dissimilarity: ")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("dissimilarity"),a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("Matching method enumeration:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("CV_TM_SQDIFF        =0 Square difference matching method\nCV_TM_SQDIFF_NORMED =1 Normalized squared difference matching metho\nCV_TM_CCORR         =2 Correlation matching method\nCV_TM_CCORR_NORMED  =3 Normalized Correlation Matching\nCV_TM_CCOEFF        =4 Correlation coefficient matching method\nCV_TM_CCOEFF_NORMED =5 Normalized correlation coefficient matching method\n")])])]),a("p",[t._v("For more Node.js samples, visit "),a("a",{attrs:{href:"//github.com/macaca-sample/cv-sample-node"}},[t._v("macaca-sample/cv-sample-node")]),t._v("。")]),t._v(" "),a("h4",{attrs:{id:"python"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#python"}},[t._v("#")]),t._v(" Python:")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" cv2\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" numpy "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" np\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("opencvSample")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("__init__")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" sourceimage"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sourceimage "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" sourceimage\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("match")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" templateimage"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" threshold"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.8")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        image "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" cv2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("imread"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sourceimage"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        template "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" cv2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("imread"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("templateimage"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        result "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" cv2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("matchTemplate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("image"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" template"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" cv2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("TM_CCOEFF_NORMED"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        similarity "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" cv2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("minMaxLoc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("result"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" similarity "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" threshold"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" similarity\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" np"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("unravel_index"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("result"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("argmax"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" result"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("shape"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("For more Python samples, visit "),a("a",{attrs:{href:"//github.com/macaca-sample/cv-sample-python"}},[t._v("macaca-sample/cv-sample-python")]),t._v("。")]),t._v(" "),a("h4",{attrs:{id:"java"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#java"}},[t._v("#")]),t._v(" Java:")]),t._v(" "),a("p",[t._v("For Java, please directly use "),a("a",{attrs:{href:"//github.com/bytedeco/javacv"}},[t._v("JavaCV")]),t._v(". For more Java samples, visit "),a("a",{attrs:{href:"//github.com/macaca-sample/cv-sample-java"}},[t._v("macaca-sample/cv-sample-java")]),t._v(".")]),t._v(" "),a("h3",{attrs:{id:"nodecv-as-a-service"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nodecv-as-a-service"}},[t._v("#")]),t._v(" NodeCV as a Service")]),t._v(" "),a("p",[t._v("Macaca provides easy deployment of OpenCV services and requires only a Docker environment for one-click deployment.")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://github.com/macacajs/nodecv-server.git --depth"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" nodecv-server\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v(" build "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v(" -t"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"node-server"')]),t._v("\n")])])]),a("p",[t._v("You can then start OpenCV's HTTP service in any server environment, or even on a "),a("a",{attrs:{href:"//github.com/macacajs/nodecv-server/issues/1"}},[t._v("Raspberry Pi")]),t._v(", and "),a("a",{attrs:{href:"//github.com/macaca-sample"}},[t._v("macaca-sample")]),t._v(" also provides examples of language-specific server-side communication.")]),t._v(" "),a("p",[t._v("After starting the server, please visit "),a("code",[t._v("http://localhost:9900/opencv/demo")])]),t._v(" "),a("p",[a("img",{attrs:{src:"/assets/6d308bd9gy1fek6oa9i3vj21kw0zrn4y.jpg",alt:""}})]),t._v(" "),a("h2",{attrs:{id:"api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#api"}},[t._v("#")]),t._v(" API")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("POST /opencv/dissimilarity\n")])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("POST /opencv/matchtemplate\n")])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("POST /opencv/cascadedetect\n")])])]),a("p",[t._v("HTTP service request example:")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("post")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("url")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("remoteHost"),a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("/opencv/dissimilarity")]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("formData")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" formData\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("err"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" httpResponse"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" body")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("err"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("error")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'upload failed:'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" err"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Server responded with:'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" body"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" data "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("JSON")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("parse")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("body"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("Dissimilarity is: ")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("dissimilarity"),a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("catch")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),a("p",[t._v("For more information, visit "),a("a",{attrs:{href:"//github.com/macacajs/nodecv-server"}},[t._v("nodecv-server")]),t._v(".")]),t._v(" "),a("h2",{attrs:{id:"other-solutions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#other-solutions"}},[t._v("#")]),t._v(" Other Solutions")]),t._v(" "),a("h3",{attrs:{id:"sikuli"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sikuli"}},[t._v("#")]),t._v(" Sikuli")]),t._v(" "),a("p",[a("a",{attrs:{href:"//github.com/sikuli/sikuli"}},[t._v("Sikuli")]),t._v(" is a graphics scripting language, and can be used with Macaca to automate graphical user interfaces (GUI) using images (screenshots).")]),t._v(" "),a("h3",{attrs:{id:"tesseract"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tesseract"}},[t._v("#")]),t._v(" Tesseract")]),t._v(" "),a("p",[a("a",{attrs:{href:"//github.com/tesseract-ocr/tesseract"}},[t._v("tesseract")]),t._v(" excels at OCR, and can be used with OpenCV.")]),t._v(" "),a("h3",{attrs:{id:"image-diff"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#image-diff"}},[t._v("#")]),t._v(" Image Diff")]),t._v(" "),a("p",[t._v("For image diff based on pixel contrast, the following can be used:")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"//github.com/uber-archive/image-diff"}},[t._v("uber-archive/image-diff")])]),t._v(" "),a("li",[a("a",{attrs:{href:"//github.com/yahoo/blink-diff"}},[t._v("yahoo/blink-diff")])])]),t._v(" "),a("p",[t._v("Example usage with Macaca "),a("a",{attrs:{href:"//github.com/macaca-sample/react-native-sample"}},[t._v("macaca-sample/react-native-sample")]),t._v(". Effect is as follows")]),t._v(" "),a("p",[a("img",{attrs:{src:"/assets/6d308bd9gw1f3ymytc3mzj21kw0xpjx1.jpg",alt:""}})]),t._v(" "),a("p",[t._v("The game framework Hilo is also based on pixel comparison. See the example of combining with Macaca. See the "),a("a",{attrs:{href:"//github.com/hiloteam/Hilo"}},[t._v("hiloteam/Hilo")]),t._v(".")])])}),[],!1,null,null,null);a.default=e.exports}}]);