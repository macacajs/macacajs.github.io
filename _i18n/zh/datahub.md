# 多场景数据环境

[DataHub](//github.com/macacajs/macaca-datahub) 是 Macaca 提供的多场景数据环境管理方案。

> DataHub - Continuous data provider for development, testing, staging and production.

---

## 多环节覆盖

DataHub 支持从本地开发阶段，到集成测试阶段，以及上线前验证阶段的一系列数据环境需求，研发与测试工程师只需面向 DataHub 管理数据即可。

<img src="//wx4.sinaimg.cn/large/6d308bd9gy1fokqvum2gsj20s10l70vh.jpg" style="width: 80%;" />

## 去中心化

DataHub 采用去中心化设计，本地研发阶段每项实例都拥有一份独立的数据，数据为明文，可随当前项目版本管理工具进行版本化归档，使得项目数据能做到随开随用，支持离线开发。

另外，每份数据都可向远端服务推送并同步，满足中心化协同的需要。

<img src="//wx3.sinaimg.cn/large/6d308bd9gy1fokxgydf80j20np0cr0ts.jpg" style="width: 80%;" />

## 数据流动管理

DataHub 采用单向数据流动的原则，使当前项目下的数据状态及时变更。

<img src="//wx1.sinaimg.cn/large/6d308bd9gy1fokxgywfajj20mx0g0wfj.jpg" style="width: 80%;" />

## 文档一致性

DataHub 将 Mock 数据与字段描述整合处理，自动生成接口文档。使得文档能够与交互字段随时保持一致。

<img src="https://wx3.sinaimg.cn/large/6d308bd9gy1fpbm9w2ohoj21kw13ak2r.jpg" width="80%" />

## 场景管理

DataHub 采用多场景设计，能够根据场景名称进行数据分组，同时提供了场景数据的增、删、改，可以通过 DataHub 的面板界面进行操作。

<img src="https://wx3.sinaimg.cn/large/6d308bd9gy1fpbm9x6ctkj21kw13a16k.jpg" width="80%" />

## 快照录入

DataHub 兼备代理功能，会将最近请求的实时响应保存下来，便于归档。也就是说你可以通过已归档的快照随时复现当时的场景。

<img src="https://wx3.sinaimg.cn/large/6d308bd9gy1fpbm9xwssnj21kw13adu9.jpg" width="80%" />

---

## 命令行工具

通过如下命令即可完成 DataHub 命令行工具的安装，进阶配置项请阅读[项目 README](//github.com/macacajs/macaca-datahub)

```bash
$ npm i macaca-datahub -g
```

<img src="https://wx1.sinaimg.cn/large/6d308bd9gy1fpbm9v2ckvj213u0ri0xj.jpg" width="80%" />

## 创建一个 Hub

<img src="https://wx1.sinaimg.cn/large/6d308bd9gy1fpbm9ut1tuj213u0rijtq.jpg" width="80%" />

## 创建一个服务接口

<img src="https://wx2.sinaimg.cn/large/6d308bd9gy1fpbm9usykxj213u0riq58.jpg" width="80%" />

## 终端工程接入

- Web 工程接入可以直接使用 [datahub-proxy-middleware](//github.com/macacajs/datahub-proxy-middleware)

Webpack 工程集成以及如何与 React, Vue 等页面构建框架配合完成研发、测试以及覆盖率统计请直接参考[样板工程](//github.com/macacajs/awesome-macaca)。

- iOS, Android 项目集成也请直接参考[样板工程](//github.com/macacajs/awesome-macaca)。

## 多语言 SDK

DataHub 提供开放的操作 API 通过 SDK 包的形式提供给工程集成。有更深入的定制和操作请使用如下包：

- [datahub-nodejs-sdk](//github.com/macacajs/datahub-nodejs-sdk)
- [datahub-java-sdk](//github.com/macacajs/datahub-java-sdk)
- [datahub-python-sdk](//github.com/macacajs/datahub-python-sdk)
