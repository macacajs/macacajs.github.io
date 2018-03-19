# NoSmoke 自动冒烟遍历器

> 支持多端的自动化遍历测试工具，基于深度遍历算法，具有以下特点:
- 不需编写UI 测试脚本!!
- 比monkey test 更精准!!
- 一套工具，多个平台!!

## 架构剖析
![image](//wx3.sinaimg.cn/large/6d308bd9gy1fkcda5ls5bj20va0cy41b.jpg)

- Platform Proxies: <br/>
安装在各类终端的测试驱动程序，负责建立与Macaca Server 的socket 通讯端口， 并在内部根据各个平台提供的UI 测试框架 封装 WebDriver 测试协议, 便于Macaca Server 层统一通过WebDriver 协议发送测试请求指令. <br/>
iOS Swift 版XCUITest 驱动:  [XCTestWD](//github.com/macacajs/XCTestWD) <br/>
android UIAutomator 驱动: [UIAutomatorWD](//github.com/macacajs/UIAutomatorWD) <br/>

- Macaca Server: <br/>
安装Macaca 服务层， 通过cli 工具提供对外命令指令集， 内部封装了各个平台对应的请求发送器： macaca-ios, macaca-android, macaca-chrome <br/>
macaca-ios 封装:  [macaca-ios](//github.com/macacajs/macaca-ios)<br/>
macaca-android 封装: [macaca-android](//github.com/macacajs/macaca-android)<br/>

- NoSmoke: <br/>
负责初始化Macaca 服务以及代理层对应端的驱动程序， 内部提供一个 client 与 macaca server 进行通讯， 通讯协议遵守 WebDriver 规范； 初始化完毕后开始按照深度遍历算法， 结合android， ios ，以及web 各平台的特性对当前界面进行<br/>
抓取， 分解界面可操作的基本元素后， 通过client 与router 进行交互， 发出操作指令，并进一步分解刷新后的界面. <br/>

更多信息， 请访问 [macacajs/NoSmoke](//github.com/macacajs/NoSmoke)
