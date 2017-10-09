# NoSmoke 自动冒烟遍历器

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]
[![node version][node-image]][node-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/nosmoke.svg?style=flat-square
[npm-url]: https://npmjs.org/package/nosmoke
[travis-image]: https://img.shields.io/travis/macacajs/NoSmoke.svg?style=flat-square
[travis-url]: https://travis-ci.org/macacajs/NoSmoke
[coveralls-image]: https://img.shields.io/coveralls/macacajs/NoSmoke.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/macacajs/NoSmoke?branch=master
[node-image]: https://img.shields.io/badge/node.js-%3E=_7-green.svg?style=flat-square
[node-url]: http://nodejs.org/download/
[download-image]: https://img.shields.io/npm/dm/nosmoke.svg?style=flat-square
[download-url]: https://npmjs.org/package/nosmoke

> 支持多端的自动化遍历测试工具，基于深度遍历算法，具有以下特点:
- 不需编写UI 测试脚本!!
- 比monkey test 更精准!!
- 一套工具，多个平台!!

## 架构剖析
![image](https://user-images.githubusercontent.com/8198256/31303704-aa26c68a-ab44-11e7-9346-02db403edc48.png)

- Platform Proxies: <br/>
安装在各类终端的测试驱动程序，负责建立与Macaca Server 的socket 通讯端口， 并在内部根据各个平台提供的UI 测试框架 封装 WebDriver 测试协议, 便于Macaca Server 层统一通过WebDriver 协议发送测试请求指令. <br/>
iOS Swift 版XCUITest 驱动:  https://github.com/macacajs/XCTestWD <br/>
android UIAutomator 驱动: https://github.com/macacajs/UIAutomatorWD <br/>

- Macaca Server: <br/>
安装Macaca 服务层， 通过cli 工具提供对外命令指令集， 内部封装了各个平台对应的请求发送器： macaca-ios, macaca-android, macaca-chrome <br/>
macaca-ios 封装:  https://github.com/macacajs/macaca-ios<br/>
macaca-android 封装: https://github.com/macacajs/macaca-android<br/>

- NoSmoke: <br/>
负责初始化Macaca 服务以及代理层对应端的驱动程序， 内部提供一个 client 与 macaca server 进行通讯， 通讯协议遵守 WebDriver 规范； 初始化完毕后开始按照深度遍历算法， 结合android， ios ，以及web 各平台的特性对当前界面进行<br/>
抓取， 分解界面可操作的基本元素后， 通过client 与router 进行交互， 发出操作指令，并进一步分解刷新后的界面. <br/>

更多信息， 请访问 https://github.com/macacajs/NoSmoke 
