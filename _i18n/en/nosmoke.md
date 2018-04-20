# NoSmoke Automated UI Crawler

> A cross platform UI crawler which scans view trees then generate and execute UI test cases. 
- Conduct automated UI test without writing a single UI test scripts!!
- More accurate than Monkey test!!
- One tool and configuration, multiple platforms!

## Architecture Overview

![image](//wx3.sinaimg.cn/large/6d308bd9gy1fkcda5ls5bj20va0cy41b.jpg)


- **Platform Proxies**: <br/>
Platform-specific applications responsible for proxying test requests and responses between Macaca server and the applications being tested on each platform. The proxy communicates with the Macaca server over sockets using the [WebDriver](https://w3c.github.io/webdriver/webdriver-spec.html) protocol, and with the application under test via the automated UI testing frameworks provided by each platform.<br/>
[iOS Swift XCUITest WebDriver](//github.com/macacajs/XCTestWD) <br/>
[Android UIAutomator WebDriver](//github.com/macacajs/UIAutomatorWD) <br/>

- **Macaca-Server**: <br/>
A node.js server installed on a PC. It listens for test requests from test clients over HTTP, routes them to the platform-specific request sender for each platform (macaca-ios, macaca-android, macaca-chrome), listens for test results, and returns the response over HTTP to the test clients. It also provides a set of commands through the cli tool. <br/>
[macaca-ios package](//github.com/macacajs/macaca-ios)<br/>
[macaca-android pacakge](//github.com/macacajs/macaca-android)<br/>


- **NoSmoke**: <br/>
It contains a node client which posting various crawling and analysis commands to **Macaca-Server** layer. The crawling algorithm in this module utilizes the node client to fetch window sources and convert it to a DFS tree model, then eventually send out a UI action to the target app via **macaca-server** and **proxy**.
Responsible for initializing the Macaca service and the corresponding driver of the proxy layer. Internally it provides a client to communicate with the Macaca server using WebDriver protocol. After initialization, it posts UI crawling commands to fetch window sources and converts them into a DFS tree model, and then sends out UI interaction commands to the application under test.

For more information, please visit: [macacajs/NoSmoke](//github.com/macacajs/NoSmoke)
