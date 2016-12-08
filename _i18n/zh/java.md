# Java 版

请使用如下最新版本

[![Download](https://api.bintray.com/packages/xudafeng/maven/macacaclient/images/download.svg)](https://bintray.com/xudafeng/maven/macacaclient/_latestVersion)

## 用法示例

```java
package macaca.client;

import static org.hamcrest.Matchers.containsString;

import org.apache.log4j.Logger;
import org.junit.After;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;

import com.alibaba.fastjson.JSONObject;
import macaca.client.MacacaClient;

public class SampleTest {

	MacacaClient driver = new MacacaClient();

	@Before
	public void setUp() throws Exception {
		Logger logger = Logger.getLogger(getClass());
		JSONObject porps = new JSONObject();
		porps.put("autoAcceptAlerts", true);
		porps.put("browserName", "electron");
		porps.put("platformName", "desktop"); // android or ios
		porps.put("version", "");
		porps.put("javascriptEnabled", true);
		porps.put("platform", "ANY");
		//porps.put("app", "path/to/app");
		JSONObject desiredCapabilities = new JSONObject();
		desiredCapabilities.put("desiredCapabilities", porps);
		driver.initDriver(desiredCapabilities)
      .setWindowSize(1280, 800)
      .get("https://macacajs.github.io/");
	}

	@Test
	public void test_case_1() throws Exception {
		driver
			.elementById("kw")
			.sendKeys("macaca")
			.sleep(1000)
			.elementById("su")
			.click();
		
		String html = driver.source();

		Assert.assertThat(html, containsString("macaca"));
	}

	@Test
	public void test_case_2() throws Exception {
		System.out.println("test case #2");
	}

	@After
	public void tearDown() throws Exception {
		driver.quit();
	}
}
```

## 相关链接

- [API 文档](//macacajs.github.io/wd.java)
- [源代码](//github.com/macacajs/wd.java)
- [示例](//github.com/macaca-sample/macaca-test-sample-java)
