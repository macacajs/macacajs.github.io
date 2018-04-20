# Python

## Usage

```python

import unittest
from macaca import WebDriver

desired_caps = {
    'platformName': 'Desktop', // iOS, Android, Desktop
    'browserName': 'Chrome'    // Chrome, Electron
    'app': 'path/to/app'       // Only for mobile
}

server_url = {
    'hostname': '127.0.0.1',
    'port': 3456
}

class MacacaTest(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.driver = WebDriver(desired_caps, server_url)
        cls.driver.init()

    @classmethod
    def tearDownClass(cls):
        cls.driver.quit()

    def test_get_url(self):
        self.driver.get('https://www.google.com')
        self.assertEqual(self.driver.title, 'Google')

    def test_search_macaca(self):
        self.driver                  \
            .element_by_id("lst-ib") \
            .send_keys("macaca")     \
        self.driver                  \
            .element_by_name("btnK") \
            .click()
        html = self.driver.source
        self.assertTrue('macaca' in html)

if __name__ == '__main__':
    unittest.main()

```

## Links

- [API](//macacajs.github.io/wd.py)
- [Source code](//github.com/macacajs/wd.py)
- [Sample](//github.com/macaca-sample/sample-python)
