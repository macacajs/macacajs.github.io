After run the `reliable-master` server, we could use command to deploy `reliable-macaca-slave`.

![Reliable Macaca Slave](http://ww2.sinaimg.cn/large/6d308bd9gw1fajd8rayohj20qc0j0tbw.jpg)

## Requirements

First of all, in order to run iOS apps, the reliable-macaca-slave can only be installed on a mac.Then you need to install both the iOS and Android Dev Environment to run the test.

run command to check environment:

```bash
$ npm i macaca-cli -g
$ macaca doctor
```

## Installation

You need to install Node.js before.

And before install reliable-macaca-slave, you need to install the zeromq library first.

```bash
$ brew install pkg-config
$ brew install zeromq

# Then

$ npm install reliable-macaca-slave -g
```

After enviroment checking and installation, it is ready to deploy the reliable-macaca-slave.

## Deployment

Before deploy the reliable-macaca-slave, there should be a reliable-master server running already, if there wasn't, you should deploy the [reliable-master](//github.com/reliablejs/reliable-master) first. After the reliable-master server is running, we could use command to deploy reliable-macaca-slave.

### For Development:

```bash
$ reliable server -m <reliable-master:port> --verbose
```
After initialization successfully. Server logs will be shown in your terminal.
