# NoSmoke

> A cross platform UI crawler which scans view trees then generate and execute UI test cases. with it you can:
- conduct automated UI test without writing a single UI test scripts!!
- more accurate than mokey test!!
- one tool and configuration, multiple platform!

## How it works?

![image](//wx3.sinaimg.cn/large/6d308bd9gy1fkcda5ls5bj20va0cy41b.jpg)

In order to design a multiplatform UI automation tool, the overall architcture is devided into 3 different layers.

- The **Proxy** layer, which are tester drivers wrapping local platform testing tool like UIAutomator, XCUITest. They establishes sockets which recieve and executes requests in format of [web driver](//w3c.github.io/webdriver/webdriver-spec.html) protocol.

- The **Macaca-Server** layer, which are node server created on PC. It provides a set of cli-command based on which users can install the testing app and init the proxy on a specific device. Further it routes http request to proxies in various platforms.

- The **NoSmoke** layer, it contains a node client which posting various crawling and analysis commands to **Macaca-Server** layer. The crawling algorithm in this module utilizes the node client to fetch window sources and convert it to a DFS tree model, then eventually send out a UI action to the target app via **macaca-server** and **proxy**.

For more information, please visit: [macacajs/NoSmoke](//github.com/macacajs/NoSmoke)
