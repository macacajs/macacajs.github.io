# 成为贡献者

---

向 Macaca 项目的贡献者们致敬！

---

## 前言

本篇文档写给正即将成为 `contributor` 的你。Macaca 起源于国内，长期保持技术开放的形态。整套方案涉及的语言栈很多，仅用户端就有 Java, Node.js, Python 等语言栈，工具层面也包括 `C++`, `shell` 等。开发平台涉及 `Docker`, `iOS`, `Android`, `Chromium`, `x11` 等多个开发平台，横跨 `软件测试`、`计算机视觉`、`Node.js工具链`、`WEB及客户端技术` 等多领域。

> 无论擅长哪一个技术领域，哪一种语言，都可以尝试加入 Macaca，贡献形式不限。

## 贡献 Issue

在新创建 `issue` 和在已有 `issue` 下评论，请尽量描述所遇到的问题和表达的意思，尽量避免反复确认信息，请在 [FAQ](./faq) 先确认问题是否已知。

## 贡献文档

如有文档遗漏或错误，欢迎补充，形式不限。

## 贡献代码

### 第一步：Fork

选择需要修改的仓库，Fork 到自己本地，如。

```bash
$ git clone https://github.com/macacajs/macaca-ios.git
$ cd macaca-ios
```

### 第二步：创建分支

请根据修改级别创建分支名如：`features-xxx` 或 `bugfix-xxx`


```bash
$ git checkout -b features-xxx -t origin/master
```

### 第三步：提交

确认你的用户名和邮箱正确：

```bash
$ git config --global user.name "awesome"
$ git config --global user.email "awesome@macacajs.com"
```

### 第四步：发起 PR

向 `github/macacajs` 下的原仓库发起 `pull request(PR)`，通过前提为当前仓库 `CI` 通过，`github/macaca-sample` 下的 `sample` 回归通过。

## 如何调试

Macaca 是很多模块是集成在一起才能运行的，环境较单一功能的开源库要复杂很多。请参考具体`核心模块`仓库下的 `CONTRIBUTING.md` 了解如何调试，比如 [UIAutomatorWD/CONTRIBUTING.md](//github.com/macacajs/UIAutomatorWD/blob/master/CONTRIBUTING.md)。

## 贡献者公示

贡献者将会自动公示在项目主页，遵循 [git-contributor](//github.com/xudafeng/git-contributor) 规则，如：

[![](//wx4.sinaimg.cn/large/6d308bd9gy1fqda9m7kktj21es0n0ttg.jpg)](//github.com/macacajs/macacajs.github.io#contributors)

## 加入 Github 开源组

在任意模块有意义 `PR` 3次以上，或解决重要问题的提交者，在征得提交者同意的情况下会邀请加入 `Macaca Open Source Team`。

## LICENSE

[MIT LICENSE](//github.com/alibaba/macaca/blob/master/LICENSE)
