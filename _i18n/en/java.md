# Java

Please use the latest version

[![Download](https://api.bintray.com/packages/xudafeng/maven/macacaclient/images/download.svg)](https://bintray.com/xudafeng/maven/macacaclient/_latestVersion)

## Sample Code

- [Examples of side-by-side Java use case writing](//github.com/macaca-sample/sample-java)
- [A well-structured sample containing a lot of practical functions](//github.com/macaca-sample/macaca-java-biz-sample)

## Usage

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

## Links

- [API](//macacajs.github.io/wd.java)
- [Source code](//github.com/macacajs/wd.java)
- [Sample](//github.com/macaca-sample/sample-java)
