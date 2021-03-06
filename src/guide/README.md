# Introduction

Macaca is an open-source automation test solution for native, mobile, hybrid, web and mobile web application.

Macaca provides automation drivers, environmental support, peripheral tools, and integration solutions designed to address issues such as test automation, and performance on the client end.

> Macaca is a kind of Monkey. Monkey testing means smart and agile testing.

::: tip Native, Web, Mobile, Hybrid and Mobile web
- Native means apps written with iOS or Android SDKs.
- Web means apps written in HTML, CSS and Javascript.
- Hybrid is apps created by WebView in native app.
- Mobile web means apps written in HTML, CSS and JavaScript and displayed via a mobile device browser such as Safari, Chrome or WebView in iOS and android.
:::

## Cross-Platform

Macaca is **cross-platform**. It means you can use the same API to write test scripts, and same test scripts to test your apps running on devices such as iOS, Android or desktops.

## Architecture

![](/assets/88fe9010gy1g1k8o53d0ej20wb0ggwgu.jpg)

## Language Support

Macaca does not limit what [languages](#client) you will use to write your tests.

[Introduction Video On YouTube Channel](//github.com/macacajs/awesome-macaca#video)

## Features

0. Macaca has a [MIT license](https://opensource.org/licenses/MIT).
0. Macaca's [App Inspector](https://macacajs.com/app-inspector/) is web based.
0. Macaca's [iOS WebDriver](https://github.com/macacajs/XCTestWD) is written in Swift and built in-house.
0. Macaca's Android WebDrive is built in-house, and supports Android UIAutomator 2.0.
0. Macaca has built-in [UI recorder](https://macacajs.github.io/guide/recorder.html) functionality.
0. Macaca has built-in support for using [computer vision](https://macacajs.github.io/guide/computer-vision.html) to verify UI elements.
0. Macaca supports major browsers such as Chrome, Firefox, Safari.
0. Macaca follows [W3C WebDriver Wire Protocol](//www.w3.org/TR/webdriver/). It means Macaca has much better chances to be compatible with current and future web standard.

## Requirements

To run Macaca, you need to have `Node.js` and `npm` installed.

To run your test against a particular platform (iOS, Android or web browsers), you need to set up for this platform. Don't worry, we do have `macaca doctor` help you inspect whether your environment is ready.

To quickly get to where you want to know, jump right in our [Quick Start](/guide/quick-start.html).

## Macaca Concepts

### Server

Macaca's core is a REST API web server. The server connects with clients, listens for requesting, executes request commands on a mobile device or a desktop browser, and responses with results conforming HTTP response protocol.

The beauty of a client/server architecture is that REST API and W3C WebDriver Wire Protocol opens the opportunities. Test codes can be written any common languages, as long as it has a http client API. On the other hand, the server can be on a different machine, or in cloud.

Besides this Macaca's core, we call it `macaca server`,  Macaca's extra utility tool is also server/client centric, such as UI Inspector, computer vision tool.

### Session

Macaca uses session to accept and respond requests. A client initiates a session with Macaca server by sending `POST /session` request. Macaca server will response with this session with a `sessionId`. The further request needs to contain this `sessionId` to move forward.

### Client

Client is where you write tests and execute them. Macaca doesn't limit what language you use. We provide [Node.js](/guide/nodejs.html), [Java](/guide/java.html) and [Python](/guide/python.html) API libraries to get you started quickly.

## Macaca Community Ecosystem

![](/assets/88fe9010gy1g1u1s0bzwsj20rz0kwtdx.jpg)
