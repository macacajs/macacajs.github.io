# Coverage Statistics

Macaca provides a tool for multiple platforms: Web, Android, iOS to collect code coverage statistics during test execution and generate coverage report after completion of test.

> Code coverage is an important measure of test effectiveness.

## Web

In order to collect coverage data, please use [macaca-coverage](//github.com/macacajs/macaca-coverage) and extend webdriver API.

Example:

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

Recommend to collect coverage statistics after each test case:

```javascript
afterEach(function () {
  return driver
    .coverage()	// Collect coverage statistics
    .saveScreenshots(this);
});
```

![](https://wx3.sinaimg.cn/large/6d308bd9gy1forkepibstj21kw0r6gta.jpg)

![](https://wx3.sinaimg.cn/large/6d308bd9gy1forl1pd99pj211x0rtgrt.jpg)

React, Vue, Angular, and common front-end projects are supportd. [More examples](//github.com/macacajs/awesome-macaca#coverage).

**Note**：We use [istanbul](//github.com/gotwarlost/istanbul) for JavaScript code coverage. Project should be instrumented before testing.

---

## Android

Using Android Studio 2.x as an example. The most common method is to introduce the Jacoco plug-in to enable the coverage switch in the `Gradle` script.

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

Then use the Jacoco provided collection method `collect2ExecFile` to generate the `.exec` file, which contains the coverage data, by reflection.

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

Get the `coverage.exec` file

```
$ adb pull /storage/emulated/0/coverage.exec .
```

Generate report with Macaca coverage tool:

```bash
$ macaca coverage -r java -f ./coverage.exec -c ./android_app_bootstrap/build/intermediates/classes/debug -s ./android_app_bootstrap/src/main/java --html ./reporter
```
![](https://wx3.sinaimg.cn/large/6d308bd9gy1forl1qm602j21kw0sn15x.jpg)

![](https://wx3.sinaimg.cn/large/6d308bd9gy1forl1qxn7ij21kw16zkam.jpg)

**Note**：Java code coverage is done using the popular [Jacoco]((//github.com/jacoco/jacoco)) package. Please refer to the [sample](//github.com/macacajs/awesome-macaca#coverage).

---

## iOS

The current implementation for iOS requires Xcode's coverage collection switch to be enabled, and then introduce the Mac-provided iOS driver package `xctestwd` to test

Enable test coverage by ticking the `Gather coverage data` checkbox when editing a scheme:

![](https://wx2.sinaimg.cn/large/6d308bd9gy1forlbdrx66j20ow0e0q55.jpg)

**Note**: The next release will provide an intrusive integration package that integrates directly with the application without relying on launching Xcode. The current version does not yet support this feature.

After completion of test, generate report with Macaca coverage tool:

```bash
$ macaca coverage -r ios -n ios-app-bootstrap -p ./ios-app-bootstrap.xcodeproj --html ./reporter
```

![](https://wx3.sinaimg.cn/large/6d308bd9gy1forlgyhm6tj21030ok78y.jpg)

![](https://wx3.sinaimg.cn/large/6d308bd9gy1forlgyonr0j21030ok79b.jpg)

**Note**：iOS coverage report requires [slather](//github.com/SlatherOrg/slather) to be installed in your system. [Sample](//github.com/macacajs/awesome-macaca#coverage).

---

## Command-line Tool

`macaca-cli` is an all-in-one command-line tool, including the `coverage` command. To install, follow the [quick start guide](./quick-start).

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

Currently supports several common format (`html`, `xml`, `json`) reporters.

**Note**

- Runtime type option `--runtime` or `-r` is required
- For Java, compiled classfiles location (`--classfiles`) is required. If you want source code line mapping, you must set the `--source` option.
- iOS project requires project address `--project` or `-p` and specific `scheme` name.
