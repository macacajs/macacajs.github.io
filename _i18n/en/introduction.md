# Introduction
Macaca is an open-source solution for automating native, hybrid, mobile web and web application on mobile and desktop platforms. 
1. Native means apps written with iOS or android SDKs. 
2. Mobile web means apps written in HTML, CSS and Javascript and displayed via a mobile device browser such as Safari, Chrome or webview in iOS and android. 
3. Hybrid is apps created by Reactive Native or Weex. 
4. Web means apps written in HTML, CSS and Javacript. 

Macaca is "cross-platform". It means you can use the same API to write test scripts, and same test scripts to test your apps running on devices such as iOS, android or desktops.

Macaca doesn't limit what languages you will use to write your tests.

# Difference from Appium
As much similarity as Appium, Macaca is different from Appium 
1. Macaca has a [MIT license](https://opensource.org/licenses/MIT).
2. Macaca's Inspector(https://macacajs.com/inspector) is web based
4. Macaca's iOS WebDriver is written by SWift and in-house built.
5. Macaca's android WebDrive is in-house built, and supports Android UIAutomator 2.0.
6. Macaca supports apps created by [Electron](https://electron.atom.io/)
7. Macaca has built-in [UI recorder](https://macacajs.com/recorder) functionality
8. Macaca has built-in support for using computer vision to verify UI elements
9. Macaca supports major browsers such as Chrome, Firefox, Safari 
10. Macaca follows [W3C WebDriver Wire Protocol](https://www.w3.org/TR/webdriver/).It means Macaca has much better chances to be compatiable with current and future web standard.


# Requirements
To run Macaca, you need to have node.js and npm installed. 
To run your test against a particular platform (iOS, android or web browsers), you need to set up for this platform. Don't worry, we do have `macaca doctor` help you inspect whether your enviroment is ready.

To quickly get to where you want to know, jump right in our [Quick Start](https://macacajs.com/quick-start) 

# Macaca Concepts

## Server
Macaca's core is a REST API web server. It connects with clients, listens for requesting, and executes request commands on a mobile device, and a desktop browser, responses with results conforming HTTP response protocol. 
The beauty of a client/server architecute, REST API and W3C WebDriver Wire Protocol opens the opportunities that test codes can be written any common languages, as long as it has a http client API. On the other hand, the server can be on a different machine, or in cloud. 

Besides this Macaca's core, we call it `macaca server`,  Macaca's extra utility tool is also server/client centric, such as UI Inspector, computer vision tool.  

## Session
Macaca uses session to accept and respond requests. A client initiates a session with Macaca server by sending `POST /session` request. Macaca server will response with this session with a `sessionId`. The further request needs to contain this `sessionId` to move forward. 

## Client
Macaca doesn't limit what client you use. We provide [Node.js](https://macacajs.github.io/macaca-wd/), [Java](https://macacajs.github.io/wd.java/) and [Python API](https://macacajs.com/python) libraries to get you started quickly. 

# Getting Started
Once you have node.js and npm installed, run our `sample test project ` to see Macaca in action
```
$ git clone https://github.com/macaca-sample/sample-nodejs.git --depth=1
$ cd sample-nodejs
$ npm i
$ make
```


