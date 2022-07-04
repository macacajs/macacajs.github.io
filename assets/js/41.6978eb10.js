(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{306:function(t,s,a){"use strict";a.r(s);var n=a(13),r=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"使用-python-语言"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用-python-语言"}},[t._v("#")]),t._v(" 使用 Python 语言")]),t._v(" "),s("h2",{attrs:{id:"用法示例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#用法示例"}},[t._v("#")]),t._v(" 用法示例")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" unittest\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" macaca "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" WebDriver\n\ndesired_caps "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'platformName'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Desktop'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("//")]),t._v(" iOS"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Android"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Desktop\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'browserName'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Chrome'")]),t._v("    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("//")]),t._v(" Chrome"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Electron\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'app'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'path/to/app'")]),t._v("       "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("//")]),t._v(" Only "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" mobile\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nserver_url "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'hostname'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'127.0.0.1'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'port'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3456")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MacacaTest")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("unittest"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("TestCase"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@classmethod")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setUpClass")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cls"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        cls"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("driver "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" WebDriver"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("desired_caps"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" server_url"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        cls"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("driver"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("init"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@classmethod")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("tearDownClass")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cls"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        cls"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("driver"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("quit"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("test_get_url")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("driver"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("get"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://www.google.com'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("assertEqual"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("driver"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("title"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Google'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("test_search_macaca")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("driver                  \\\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("element_by_id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"lst-ib"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \\\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("send_keys"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"macaca"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("     \\\n        self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("driver                  \\\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("element_by_name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"btnK"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \\\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("click"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        html "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("driver"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("source\n        self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("assertTrue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'macaca'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" html"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" __name__ "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'__main__'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    unittest"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("main"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])]),s("h2",{attrs:{id:"相关链接"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#相关链接"}},[t._v("#")]),t._v(" 相关链接")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"//macacajs.github.io/wd.py"}},[t._v("API 文档")])]),t._v(" "),s("li",[s("a",{attrs:{href:"//github.com/macaca-sample/sample-python"}},[t._v("示例")])]),t._v(" "),s("li",[s("a",{attrs:{href:"//github.com/macacajs/wd.py"}},[t._v("源代码")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);