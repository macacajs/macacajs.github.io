# 覆盖率统计

Macaca 提供多端覆盖率统计方案，支持 Web, Android, iOS 以相一致的方案在测试执行过程中收集行覆盖率，并生成覆盖率报告。

> 覆盖率是测试有效性的重要度量。

## Web

通过在前端项目中集成 [macaca-coverage](//github.com/macacajs/macaca-coverage) 模块并扩展 webdriver API 方法实现覆盖率收集。

扩展示例：

```javascript
wd.addPromiseChainMethod('coverage', function (context) {
  const coverageHtml = path.join(cwd, 'coverage', 'index.html');
  return this
    .execute('return window.__coverage__')
    .then(__coverage__ => {
      if (!__coverage__) {
        return this
          .execute('return location.href')
          .then(url => {
            console.log(`>> coverage failed: ${url}`);
          });
      }
      const reporter = new Reporter();
      collector.add(__coverage__);
      reporter.addAll([
        'html',
        'lcov'
      ]);
      return new Promise(resolve => {
        reporter.write(collector, true, () => {
          console.log(`>> coverage: ${coverageHtml}`);
          resolve('ok');
        });
      });
    })
    .catch(e => {
      console.log(e);
    });
});
```

推荐在每个用例执行后收集：

```javascript
afterEach(function () {
  return driver
    .coverage()  // 收集覆盖率
    .saveScreenshots(this);
});
```

![](https://wx3.sinaimg.cn/large/6d308bd9gy1forkepibstj21kw0r6gta.jpg)

![](https://wx3.sinaimg.cn/large/6d308bd9gy1forl1pd99pj211x0rtgrt.jpg)

通过 Macaca Coverage 实现 React, Vue, Angular, 常规前端工程的覆盖率请看[更多示例项目](//github.com/macacajs/awesome-macaca#coverage)。

**注意**：JavaScript 语言的覆盖率是使用流行的 [istanbul](//github.com/gotwarlost/istanbul) 包完成的，在执行前需要进行插桩。

---

## Android

Android 端以 Android Studio 2.x 为例，最常规的做法是在 gradle 脚本中引入 jacoco 插件开启覆盖率开关。

```gradle
apply plugin: 'jacoco'

jacoco {
    toolVersion = '0.7.9'
}

android {
    buildTypes {
        debug {
            testCoverageEnabled true
        }
    }
}
```

随后通过反射的方式调用 jacoco 提供的收集方法生成 `.exec` 文件。

```java
public static void collect2ExecFile(boolean isNew) {
    String coverageFileDir = Environment.getExternalStorageDirectory()
            .getPath() + "/coverage.exec";
    File mCoverageFilePath = new File(coverageFileDir);
    OutputStream out = null;
    try {
        if (isNew && mCoverageFilePath.exists()) {
            mCoverageFilePath.delete();
        }
        if (!mCoverageFilePath.exists()) {
            mCoverageFilePath.createNewFile();
        }
        out = new FileOutputStream(mCoverageFilePath.getPath(), true);
        Object agent = Class.forName("org.jacoco.agent.rt.RT")
                .getMethod("getAgent")
                .invoke(null);
        out.write((byte[]) agent.getClass().getMethod("getExecutionData", boolean.class)
                .invoke(agent, false));
    } catch (Exception e) {
        Log.i("Jacoco", e.getMessage());
    } finally {
        if (out == null)
            return;
        try {
            out.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
```

获取 `coverage.exec` 文件

```
$ adb pull /storage/emulated/0/coverage.exec .
```

然后使用 Macaca 提供的覆盖率工具生成报告：

```bash
$ macaca coverage -r java -f ./coverage.exec -c ./android_app_bootstrap/build/intermediates/classes/debug -s ./android_app_bootstrap/src/main/java --html ./reporter
```
![](https://wx3.sinaimg.cn/large/6d308bd9gy1forl1qm602j21kw0sn15x.jpg)

![](https://wx3.sinaimg.cn/large/6d308bd9gy1forl1qxn7ij21kw16zkam.jpg)

**注意**：Java 语言的覆盖率是使用流行的 [jacoco](//github.com/jacoco/jacoco) 包完成的，请参考[示例项目](//github.com/macacajs/awesome-macaca#coverage)。

---

## iOS

iOS 目前的实现需要开启 Xcode IDE 的覆盖率收集开关。然后引入 Macaca 提供的 iOS 端驱动包 `xctestwd` 进行测试。

![](https://wx2.sinaimg.cn/large/6d308bd9gy1forlbdrx66j20ow0e0q55.jpg)

**注意**：下一版本会提供侵入式集成包，直接与应用集成而不依赖 Xcode
启动，当前版本还不支持。

在测试执行完成后使用 Macaca 提供的覆盖率工具生成报告：

```bash
$ macaca coverage -r ios -n ios-app-bootstrap -p ./ios-app-bootstrap.xcodeproj --html ./reporter
```
![](https://wx3.sinaimg.cn/large/6d308bd9gy1forlgyhm6tj21030ok78y.jpg)

![](https://wx3.sinaimg.cn/large/6d308bd9gy1forlgyonr0j21030ok79b.jpg)

**注意**：iOS 平台的覆盖率请参考[示例项目](//github.com/macacajs/awesome-macaca#coverage)。

---

## 命令行工具

Macaca 覆盖率工具集成在 `macaca-cli` 中，请按照 [快速上手](./quick-start)中提供的方式安装即可。

```bash
$ macaca coverage -h
```

```
  Options:

    -r, --runtime <s>     set the type of runtime(web, java, ios)
    -f, --file <s>        coverage file to read(java<*.exec>, web)
    -s, --source <s>      location of the source files(java only)
    -c, --classfiles <s>  location of Java class files(java only)
    -p, --project <s>     location of Xcode project(ios only)
    -n, --name <s>        name of Xcode project's scheme(ios only)
    --html <s>            generate HTML report
    --json <s>            generate JSON report
    --xml <s>             generate XML report(java, ios)
    --verbose             show more debugging information
    -h, --help            output usage information
```

目前支持几种常用格式(`html`, `xml`, `json`) 的报告器。

**注意**

- 需要指定运行时类型 `--runtime` 或 `-r`
- Java 语言项目需要传入编译好的 `classfiles` 地址，如需源码映射需要传入源码地址
- iOS 项目需要工程地址 `--project` 或 `-p` 和具体的 `scheme` 名称。
