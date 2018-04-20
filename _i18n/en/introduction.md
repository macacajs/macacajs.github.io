# Introduction

Macaca is an open-source automation test solution for native, hybrid, mobile web and web application on mobile and desktop platforms. Macaca provides automation drivers, environmental support, peripheral tools, and integration solutions designed to address issues such as test automation, and performance on the client end.

0. Native means apps written with iOS or Android SDKs.
0. Mobile web means apps written in HTML, CSS and Javascript and displayed via a mobile device browser such as Safari, Chrome or Webview in iOS and android.
0. Hybrid is apps created by webview in native app.
0. Web means apps written in HTML, CSS and Javascript.

Macaca is "cross-platform". It means you can use the same API to write test scripts, and same test scripts to test your apps running on devices such as iOS, Android or desktops.

Macaca doesn't limit what languages you will use to write your tests.

> [Macaca](https://en.wikipedia.org/wiki/Macaque) is a kind of Monkey. Monkey testing means smart and agile testing.

## Features

0. Macaca has a [MIT license](https://opensource.org/licenses/MIT).
0. Macaca's [Inspector](//macacajs.com/inspector) is web based.
0. Macaca's iOS WebDriver is written by Swift and in-house built.
0. Macaca's Android WebDrive is in-house built, and supports Android UIAutomator 2.0.
0. Macaca has built-in [UI recorder](//macacajs.com/recorder) functionality.
0. Macaca has built-in support for using computer vision to verify UI elements
0. Macaca supports major browsers such as Chrome, Firefox, Safari.
0. Macaca follows [W3C WebDriver Wire Protocol](//www.w3.org/TR/webdriver/).It means Macaca has much better chances to be compatible with current and future web standard.

## Requirements

To run Macaca, you need to have node.js and npm installed.
To run your test against a particular platform (iOS, android or web browsers), you need to set up for this platform. Don't worry, we do have `macaca doctor` help you inspect whether your environment is ready.

To quickly get to where you want to know, jump right in our [Quick Start](//macacajs.com/quick-start).

## Macaca Concepts

### Server

Macaca's core is a REST API web server. It connects with clients, listens for requesting, and executes request commands on a mobile device, and a desktop browser, responses with results conforming HTTP response protocol.

The beauty of a client/server architecure, REST API and W3C WebDriver Wire Protocol opens the opportunities that test codes can be written any common languages, as long as it has a http client API. On the other hand, the server can be on a different machine, or in cloud.

Besides this Macaca's core, we call it `macaca server`,  Macaca's extra utility tool is also server/client centric, such as UI Inspector, computer vision tool.

### Session

Macaca uses session to accept and respond requests. A client initiates a session with Macaca server by sending `POST /session` request. Macaca server will response with this session with a `sessionId`. The further request needs to contain this `sessionId` to move forward.

### Client

Macaca doesn't limit what client you use. We provide [Node.js](//macacajs.github.io/macaca-wd/), [Java](//macacajs.github.io/wd.java/) and [Python API](https://macacajs.com/python) libraries to get you started quickly.
