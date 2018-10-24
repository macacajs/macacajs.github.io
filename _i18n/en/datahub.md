# DataHub

[DataHub](//github.com/macacajs/macaca-datahub) is a multi-scenario data environment management solution provided by Macaca.

> DataHub - Continuous data(testing/mock) provider for development, testing, staging and production.

---

## A Comprehensive Solution

DataHub is born to solving the lifecycle needs of mock/testing data of software development, from development, testing, staging to final production. Software engineers and test engineers use DataHub to manage their mock/testing data.

<img src="//wx4.sinaimg.cn/large/6d308bd9gy1fokqvum2gsj20s10l70vh.jpg" style="width: 80%;" />

## Decentralization

DataHub is flexible with how and where mock/testing data is stored. 

You can use a local instance of Datahub on your local machine to manage your local testing/mock data during development. The mock/testing data is in plain text. It can be versioned and archived with any version control software, together with your project files. 

In addition, the local mock/testing data can be pushed and synchronized to a remote Datahub server to meet the needs of data sharing and collaboration.

<img src="//wx3.sinaimg.cn/large/6d308bd9gy1fokxgydf80j20np0cr0ts.jpg" style="width: 80%;" />

## Data Flow Management

DataHub adopts the principle of unidirectional data flow to make sure you will always get the latest data.

<img src="//wx1.sinaimg.cn/large/6d308bd9gy1fokxgywfajj20mx0g0wfj.jpg" style="width: 80%;" />

## Consistency Between API Document and Mock Data

Datahub can also automatically generate an API document from your mock/testing data, to help keep your API document up to date and consistent with your mock data.


<img src="https://cdn.nlark.com/yuque/0/2018/png/95383/1540386244435-90820ae6-62e1-4161-bce3-ed27664b9903.png" style="width: 80%;" />

## DataHub Dashboard

DataHub adopts multi-scenario design, can group data according to the scene name, and provide scene data addition, deletion, and change, and can operate through DataHub's panel interface

DataHub provides a dashboard for you to manage your data. You can group data by scene, or by stage such as development, testing, or staging. Datahub provides standard CRUD funtions.

<img src="https://cdn.nlark.com/yuque/0/2018/png/95383/1540386278325-31e12ed6-234f-4418-b715-12f2d7bf8101.png" style="width: 80%;" />

## Save Snapshot

DataHub can save the response of each request by taking snapshot. You can use the archieved snapshot to find out what happened.

<img src="https://wx4.sinaimg.cn/large/6d308bd9gy1fpbmdy5o65j21kw13a7i2.jpg" width="80%" />

## Command-line Tool

DataHub provides a command line tool for fast installation and development. To install:

```bash
$ npm i macaca-datahub -g
```

For advanced configuration items, read the project [README](//github.com/macacajs/macaca-datahub).

<img src="https://cdn.nlark.com/yuque/0/2018/png/95383/1540386305217-e2d0ba59-e55e-4869-a55f-9934aa0b538e.png" style="width: 80%;" />

## Create New Hub

<img src="https://cdn.nlark.com/yuque/0/2018/png/95383/1540386353929-47fb1570-09de-456d-a05b-a79bb3270a92.png" style="width: 80%;" />

## Create a New API

<img src="https://cdn.nlark.com/yuque/0/2018/png/95383/1540386388109-b00dcc34-ac37-424b-bc0e-73ade0768666.png" style="width: 80%;" />

## Upload and Download Project Data

<img src="https://cdn.nlark.com/yuque/0/2018/png/95383/1540386639997-722beff9-cc11-432a-9040-84d1cbe617b8.png" style="width: 80%;" />

## Upload and Download Interface Data

<img src="https://cdn.nlark.com/yuque/0/2018/png/95383/1540386700272-09be79d4-f63f-40e6-8825-acdeeb4526ba.png" style="width: 80%;" />

## Examples

- [Web](//github.com/macacajs/datahub-proxy-middleware)
- [Webpack with React or Vue](//github.com/macacajs/awesome-macaca).
- [iOS or Android](//github.com/macacajs/awesome-macaca).

## SDKs

DataHub provides SDKs in multiple languages for easy integration with your test code.

- [Node.js](//github.com/macacajs/datahub-nodejs-sdk)
- [Java](//github.com/macacajs/datahub-java-sdk)
- [Python](//github.com/macacajs/datahub-python-sdk)
