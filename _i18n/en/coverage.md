# Coverage

Macaca provide coverage tool to support multiple platform, Web, Android, iOS. We can get coverage report after UI testing.

## Web

In order to collect coverage data, please use [macaca-coverage](//github.com/macacajs/macaca-coverage) and extend webdriver API.

like this:

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

mocha example:

```javascript
afterEach(function () {
  return driver
    .coverage()
    .saveScreenshots(this);
});
```

![](https://wx3.sinaimg.cn/large/6d308bd9gy1forkepibstj21kw0r6gta.jpg)

![](https://wx3.sinaimg.cn/large/6d308bd9gy1forl1pd99pj211x0rtgrt.jpg)

React, Vue, and common front-end projects are supportd, [More sample](//github.com/macacajs/awesome-macaca#coverage).

**Note**：We use [istanbul](//github.com/gotwarlost/istanbul) for coverage, project should be instrumented before testing.

---

## Android

JaCoCo configuration on Andrid Studio by `Gradle` scripts.

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

Execute `collect2ExecFile` to generate `.exec` file, which include the coverage data.

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

```
$ adb pull /storage/emulated/0/coverage.exec .
```

Generate report by Macaca coverage tool:

```bash
$ macaca coverage -r java -f ./coverage.exec -c ./android_app_bootstrap/build/intermediates/classes/debug -s ./android_app_bootstrap/src/main/java --html ./reporter
```
![](https://wx3.sinaimg.cn/large/6d308bd9gy1forl1qm602j21kw0sn15x.jpg)

![](https://wx3.sinaimg.cn/large/6d308bd9gy1forl1qxn7ij21kw16zkam.jpg)

**Node**：All our source code could be found in [sample](//github.com/macacajs/awesome-macaca#coverage).

---

## iOS

Enable test coverage by ticking the `Gather coverage data` checkbox when editing a scheme:

![](https://wx2.sinaimg.cn/large/6d308bd9gy1forlbdrx66j20ow0e0q55.jpg)

Generate report by Macaca coverage tool:

```bash
$ macaca coverage -r ios -n ios-app-bootstrap -p ./ios-app-bootstrap.xcodeproj --html ./reporter
```

![](https://wx3.sinaimg.cn/large/6d308bd9gy1forlgyhm6tj21030ok78y.jpg)

![](https://wx3.sinaimg.cn/large/6d308bd9gy1forlgyonr0j21030ok79b.jpg)

**Note**：iOS coverage report require [slather](//github.com/SlatherOrg/slather) installed in your system, all our source code could be found in [sample](//github.com/macacajs/awesome-macaca#coverage)。

---

## Command-line Tool

`macaca-cli` is an all-in-one tool sets, and include `coverage` command, please install it flow [quick start](./quick-start) document.

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

**Note**

- option `runtime type` is required
- for Java, `classfiles` is required, and you must pass the `source` if you want the code lines schedule.
