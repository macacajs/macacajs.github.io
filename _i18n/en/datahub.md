# DataHub

[DataHub](//github.com/macacajs/macaca-datahub) - Continuous data(testing/mock) provider for development, testing, staging and production.

---

## Continuous
DataHub is born to solving the lifecycle needs of mock/testing data of project development, from development, testing, staging to final production. Developers and test engineers use DataHub to manage their mock/testing data. 

<img src="//wx4.sinaimg.cn/large/6d308bd9gy1fokqvum2gsj20s10l70vh.jpg" style="width: 80%;" />

## Decentration
DataHub is flexible with how and where mock/testing data is stored. If you just start to develop your project, you can use your an instance of Datahub on your local machine to manage your testing/mock data. Datahub also manage your mock data version for you, along with your project version. 
In the meanwhile, you can choose sync your local mock/testing data with a remote Datahub server to meet your needs.

<img src="//wx3.sinaimg.cn/large/6d308bd9gy1fokxgydf80j20np0cr0ts.jpg" style="width: 80%;" />

## Data Flow

DataHub control data flow to migrate your project's data.

<img src="//wx1.sinaimg.cn/large/6d308bd9gy1fokxgywfajj20mx0g0wfj.jpg" style="width: 80%;" />

## Consistent between API Document and Mock Data
Datahub also has the feature that generates an API interface document, based on your mock/testing data. It will helps to keep your API document up to date and in consistent with your mock data.

<img src="https://wx2.sinaimg.cn/large/6d308bd9gy1fpbmdx2whdj21kw13a7fa.jpg" width="80%" />


## DataHub Dashboard
DataHub provides a dashboard for you to manage your data, such as groupping, adding/deleting/modifying your test data, or just for different development stage such as development, testing or staging.
<img src="https://wx4.sinaimg.cn/large/6d308bd9gy1fpbmdxv2ehj21kw13awr0.jpg" width="80%" />

## Save Snapshot
DataHub provides a feauture that save the response of each request by taking snapshot. You can use the archieved snapshot to find out what happened.  

<img src="https://wx4.sinaimg.cn/large/6d308bd9gy1fpbmdy5o65j21kw13a7i2.jpg" width="80%" />

## Command-line tool
DataHub provides a command line tool for fast installation and development. To install:

```bash
$ npm i macaca-datahub -g
```

[More about](//github.com/macacajs/macaca-datahub)

<img src="https://wx4.sinaimg.cn/large/6d308bd9gy1fpbmdwggkgj21kw13ak7y.jpg" width="80%" />

## Create new hub

<img src="https://wx3.sinaimg.cn/large/6d308bd9gy1fpbmdv54jzj213u0ridi2.jpg" width="80%" />

## Create new API

<img src="https://wx1.sinaimg.cn/large/6d308bd9gy1fpbmdvacmvj213u0riwgp.jpg" width="80%" />

## Examples
- Web, refer to [datahub-proxy-middleware](//github.com/macacajs/datahub-proxy-middleware)

- Webpack with React or Vue, refer to [here](//github.com/macacajs/awesome-macaca).

- iOS or android, refer to [here](//github.com/macacajs/awesome-macaca).

## SDKs
DataHub comes with SDKs for easy integration. To understand more, refer one of those SDKs with your programming language preference. 

- [datahub-nodejs-sdk](//github.com/macacajs/datahub-nodejs-sdk)
- [datahub-java-sdk](//github.com/macacajs/datahub-java-sdk)
- [datahub-python-sdk](//github.com/macacajs/datahub-python-sdk)
