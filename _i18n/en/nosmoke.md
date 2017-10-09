# NoSmoke

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

> A cross platform UI crawler which scans view trees then generate and execute UI test cases. with it you can:
- conduct automated UI test without writing a single UI test scripts!!
- more accurate than mokey test!!
- one tool and configuration, multiple platform!

## How it works?
![image](https://user-images.githubusercontent.com/8198256/31303704-aa26c68a-ab44-11e7-9346-02db403edc48.png)

In order to design a multiplatform UI automation tool, the overall architcture is devided into 3 different layers. 

- The **Proxy** layer, which are tester drivers wrapping local platform testing tool like UIAutomator, XCUITest. They establishes sockets which recieve and executes requests in format of [web driver](https://www.w3.org/TR/webdriver/) protocol. 

- The **Macaca-Server** layer, which are node server created on PC. It provides a set of cli-command based on which users can install the testing app and init the proxy on a specific device. Further it routes http request to proxies in various platforms.

- The **NoSmoke** layer, it contains a node client which posting various crawling and analysis commands to **Macaca-Server** layer. The crawling algorithm in this module utilizes the node client to fetch window sources and convert it to a DFS tree model, then eventually send out a UI action to the target app via **macaca-server** and **proxy**.

For more information, please visit: https://github.com/macacajs/NoSmoke

