# 版本说明

Macaca 命令行工具，驱动模块和周边工具遵从 [Semantic Versioning](//github.com/mojombo/semver) 规范。

升级与安装的命令是一致的，直接使用 `npm install` 命令即可，比如安装命令行工具和 `Android` 端驱动：

```bash
$ npm i macaca-cli macaca-android -g
```

## 工具版本

当前版本: [![NPM version][npm-image]][npm-url]

[npm-image]: https://img.shields.io/npm/v/macaca-cli.svg
[npm-url]: https://npmjs.org/package/macaca-cli

## 驱动模块版本

| 驱动                                               | 版本                                     | CI状态                                           | 安装与升级                 |
| -------------------------------------------------- | ---------------------------------------- | ------------------------------------------------ | -------------------------- |
| [Android](//github.com/macacajs/macaca-android)    | [![NPM version][npm-image-0]][npm-url-0] | [![build status][github-action-image-0]][github-action-url-0]  | npm i macaca-android -g    |
| [Chrome](//github.com/macacajs/macaca-chrome)      | [![NPM version][npm-image-1]][npm-url-1] | [![build status][github-action-image-1]][github-action-url-1]  | npm i macaca-chrome -g     |
| [Electron](//github.com/macacajs/macaca-electron)  | [![NPM version][npm-image-2]][npm-url-2] | [![build status][github-action-image-2]][github-action-url-2]  | npm i macaca-electron -g   |
| [iOS](//github.com/macacajs/macaca-ios)            | [![NPM version][npm-image-3]][npm-url-3] | [![build status][github-action-image-3]][github-action-url-3]  | npm i macaca-ios -g        |
| [Puppeteer](//github.com/macacajs/macaca-puppeteer)| [![NPM version][npm-image-4]][npm-url-4] | [![build status][github-action-image-4]][github-action-url-4]  | npm i macaca-puppeteer -g |
| [Playwright](//github.com/macacajs/macaca-playwright) | [![NPM version][npm-image-5]][npm-url-5] | [![build status][github-action-image-5]][github-action-url-5]  | npm i macaca-playwright -g |

[npm-image-0]: https://img.shields.io/npm/v/macaca-android.svg
[npm-url-0]: https://npmjs.org/package/macaca-android
[npm-image-1]: https://img.shields.io/npm/v/macaca-chrome.svg
[npm-url-1]: https://npmjs.org/package/macaca-chrome
[npm-image-2]: https://img.shields.io/npm/v/macaca-electron.svg
[npm-url-2]: https://npmjs.org/package/macaca-electron
[npm-image-3]: https://img.shields.io/npm/v/macaca-ios.svg
[npm-url-3]: https://npmjs.org/package/macaca-ios
[npm-image-4]: https://img.shields.io/npm/v/macaca-puppeteer.svg
[npm-url-4]: https://npmjs.org/package/macaca-puppeteer
[npm-image-5]: https://img.shields.io/npm/v/macaca-playwright.svg
[npm-url-5]: https://npmjs.org/package/macaca-playwright

[github-action-image-0]: https://github.com/macacajs/macaca-android/actions/workflows/ci.yml/badge.svg
[github-action-url-0]: https://github.com/macacajs/macaca-android/actions/workflows/ci.yml
[github-action-image-1]: https://github.com/macacajs/macaca-chrome/actions/workflows/ci.yml/badge.svg
[github-action-url-1]: https://github.com/macacajs/macaca-chrome/actions/workflows/ci.yml
[github-action-image-2]: https://github.com/macacajs/macaca-electron/actions/workflows/ci.yml/badge.svg
[github-action-url-2]: https://github.com/macacajs/macaca-electron/actions/workflows/ci.yml
[github-action-image-3]: https://github.com/macacajs/macaca-ios/actions/workflows/ci.yml/badge.svg
[github-action-url-3]: https://github.com/macacajs/macaca-ios/actions/workflows/ci.yml
[github-action-image-4]: https://github.com/macacajs/macaca-puppeteer/actions/workflows/ci.yml/badge.svg
[github-action-url-4]: https://github.com/macacajs/macaca-puppeteer/actions/workflows/ci.yml
[github-action-image-5]: https://github.com/macacajs/macaca-playwright/actions/workflows/ci.yml/badge.svg
[github-action-url-5]: https://github.com/macacajs/macaca-playwright/actions/workflows/ci.yml/badge.svg

## 稳定性基线

| 仓库     | CI 状态    |
| ---------- | --------- |
| [sample-nodejs](//github.com/macaca-sample/sample-nodejs) | [![build status][github-action-image1]][github-action-url1] |
| [sample-java](//github.com/macaca-sample/sample-java) | [![build status][github-action-image2]][github-action-url2] |
| [sample-python](//github.com/macaca-sample/sample-python) | [![build status][github-action-image3]][github-action-url3] |
| [macaca-cli](//github.com/macacajs/macaca-cli) | [![build status][github-action-image4]][github-action-url4] |
| [app-inspector](//github.com/macacajs/app-inspector) | [![build status][github-action-image5]][github-action-url5] |
| [NoSmoke](//github.com/macacajs/nosmoke) | [![build status][github-action-image6]][github-action-url6] |
| [torchjs](//github.com/macacajs/torchjs) | [![build status][github-action-image7]][github-action-url7] |

[github-action-image1]: https://github.com/macaca-sample/sample-nodejs/actions/workflows/ci.yml/badge.svg
[github-action-url1]: https://github.com/macaca-sample/sample-nodejs/actions/workflows/ci.yml
[github-action-image2]: https://github.com/macaca-sample/sample-java/actions/workflows/ci.yml/badge.svg
[github-action-url2]: https://github.com/macaca-sample/sample-java/actions/workflows/ci.yml
[github-action-image3]: https://github.com/macaca-sample/sample-python/actions/workflows/ci.yml/badge.svg
[github-action-url3]: https://github.com/macaca-sample/sample-python/actions/workflows/ci.yml
[github-action-image4]: https://github.com/macacajs/macaca-cli/actions/workflows/ci.yml/badge.svg
[github-action-url4]: https://github.com/macacajs/macaca-cli/actions/workflows/ci.yml
[github-action-image5]: https://github.com/macacajs/app-inspector/actions/workflows/ci.yml/badge.svg
[github-action-url5]: https://github.com/macacajs/app-inspector/actions/workflows/ci.yml
[github-action-image6]: https://github.com/macacajs/NoSmoke/actions/workflows/ci.yml/badge.svg
[github-action-url6]: https://github.com/macacajs/NoSmoke/actions/workflows/ci.yml
[github-action-image7]: https://github.com/macacajs/torchjs/actions/workflows/ci.yml/badge.svg
[github-action-url7]: https://github.com/macacajs/torchjs/actions/workflows/ci.yml
