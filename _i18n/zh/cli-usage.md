# 命令行工具

### 执行测试用例

``` bash
# run test in current cwd
$ macaca run --verbose

# 指定测试文件目录及测试框架，此功能只支持 Node.js 版
# 目前支持 mocha, jasmine, tman 和 ava。
$ macaca run -d ./test -f mocha

# 将结果导出为文件
$ macaca run -o

# 静默执行（只支持桌面浏览器）
$ macaca run --no-window

# 使用自定义的报告器
$ CUSTOM_DIR=path/to/screenshot macaca run -d ./test --reporter macaca-simple-reportor
```

`macaca-simple-reportor` 是自定义报告器的一个示例，可以作为参考。

### 只启动服务器

``` bash
# 普通用法，添加了 --verbose 可以看到详细的信息
$ macaca server --verbose

# 设置端口号
$ macaca server -p 3456
```

### 检查当前 Macaca 的安装环境

``` bash
$ macaca doctor
```

### 更多的选项

``` bash
$ macaca -h

# 服务器相关选项
$ macaca server -h

# 如何执行用例的选项
$ macaca run -h

```
