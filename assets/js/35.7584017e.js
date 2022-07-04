(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{300:function(a,s,t){"use strict";t.r(s);var e=t(13),r=Object(e.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"环境配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#环境配置"}},[a._v("#")]),a._v(" 环境配置")]),a._v(" "),s("p"),s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#安装-node-js"}},[a._v("安装 Node.js")])]),s("li",[s("a",{attrs:{href:"#ios-环境"}},[a._v("iOS 环境")])]),s("li",[s("a",{attrs:{href:"#ios-真机环境"}},[a._v("iOS 真机环境")])]),s("li",[s("a",{attrs:{href:"#android-环境"}},[a._v("Android 环境")])]),s("li",[s("a",{attrs:{href:"#desktop-环境"}},[a._v("Desktop 环境")])]),s("li",[s("a",{attrs:{href:"#命令行工具"}},[a._v("命令行工具")])]),s("li",[s("a",{attrs:{href:"#准备移动端app"}},[a._v("准备移动端App")])]),s("li",[s("a",{attrs:{href:"#一些开源镜像"}},[a._v("一些开源镜像")])])])]),s("p"),a._v(" "),s("h2",{attrs:{id:"安装-node-js"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装-node-js"}},[a._v("#")]),a._v(" 安装 Node.js")]),a._v(" "),s("p",[a._v("请安装 "),s("a",{attrs:{href:"https://nodejs.org/",target:"_blank",rel:"noopener noreferrer"}},[a._v("Node.js"),s("OutboundLink")],1),a._v(" v8.0 或者更高版本，装好 "),s("code",[a._v("Node.js")]),a._v(" 后命令行里就已经集成了 "),s("code",[a._v("npm")]),a._v(" 工具，为了提高安装模块的速度，请使用国内的 "),s("code",[a._v("cnpm")]),a._v("。")]),a._v(" "),s("h2",{attrs:{id:"ios-环境"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ios-环境"}},[a._v("#")]),a._v(" iOS 环境")]),a._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[a._v("重要")]),a._v(" "),s("p",[a._v("请安装 "),s("strong",[a._v("Xcode9")]),a._v(" 或者更高版本")])]),a._v(" "),s("ul",[s("li",[a._v("请安装 "),s("a",{attrs:{href:"//github.com/libimobiledevice/usbmuxd"}},[a._v("usbmuxd")]),a._v(" 以便于通过 USB 通道测试 iOS 真机，不需要测试真机则不用安装")])]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ brew "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" usbmuxd\n")])])]),s("ul",[s("li",[a._v("请安装 "),s("a",{attrs:{href:"//github.com/libimobiledevice/ideviceinstaller"}},[a._v("ideviceinstaller")]),a._v(" 用来给真机安装 App。")])]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ brew "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" ideviceinstaller\n")])])]),s("ul",[s("li",[a._v("应用中如含有 WebView，请安装 "),s("a",{attrs:{href:"//github.com/google/ios-webkit-debug-proxy"}},[a._v("ios-webkit-debug-proxy")])])]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ brew "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" ios-webkit-debug-proxy\n")])])]),s("ul",[s("li",[a._v("请安装 "),s("a",{attrs:{href:"https://github.com/macacajs/macaca-ios",target:"_blank",rel:"noopener noreferrer"}},[a._v("macaca-ios"),s("OutboundLink")],1),a._v(" 驱动")])]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 本地安装")]),a._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("npm")]),a._v(" i macaca-ios --save-dev\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 全局安装")]),a._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("npm")]),a._v(" i macaca-ios -g\n")])])]),s("ul",[s("li",[a._v("在运行的过程中，如果发现问题， 可以在macaca 启动时设置 --verbose 参数， 运行的日志中会显示XCTestWD的"),s("RouterLink",{attrs:{to:"//github.com/macacajs/XCTestWD/blob/master/#43-debug-info"}},[a._v("诊断日志信息")]),a._v(".")],1)]),a._v(" "),s("p",[a._v("备注：使用brew命令需要安装"),s("a",{attrs:{href:"http://brew.sh/index_zh-cn.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("Homebrew"),s("OutboundLink")],1),a._v("（一款常用的 MacOS 的包管理器），请按照官网提示安装。")]),a._v(" "),s("ul",[s("li",[a._v("准备 App 包：如需要测试 iOS 应用，请使用 Scheme 设置为 debug 的 "),s("code",[a._v(".app")]),a._v(" 包。")])]),a._v(" "),s("h2",{attrs:{id:"ios-真机环境"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ios-真机环境"}},[a._v("#")]),a._v(" iOS 真机环境")]),a._v(" "),s("p",[a._v("首先要明白两个概念：")]),a._v(" "),s("ul",[s("li",[a._v("Macaca 依赖 "),s("code",[a._v("macaca-ios")]),a._v("，而 "),s("code",[a._v("macaca-ios")]),a._v(" 依赖安装到真机的 "),s("code",[a._v("XCTestWD")]),a._v("，所以要确保 Macaca 最终调用的 "),s("code",[a._v("XCTestWD")]),a._v(" 是安装到真机上的 "),s("code",[a._v("XCTestWD")]),a._v("。")]),a._v(" "),s("li",[a._v("iOS 真机上的 "),s("code",[a._v("XCTestWD")]),a._v(" 需要签名("),s("code",[a._v("TEAM_ID")]),a._v(")，且和被测试的app一样。")])]),a._v(" "),s("h3",{attrs:{id:"通过安装-macaca-ios-自动配置-xctestwd-推荐"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#通过安装-macaca-ios-自动配置-xctestwd-推荐"}},[a._v("#")]),a._v(" 通过安装 macaca-ios 自动配置 XCTestWD（推荐）")]),a._v(" "),s("p",[a._v("如果你已经知道了你的 "),s("code",[a._v("TEAM_ID")]),a._v("， 在安装 "),s("code",[a._v("macaca-ios")]),a._v(" 过程中将 "),s("code",[a._v("TEAM_ID")]),a._v(" 通过环境变量传入即可，"),s("code",[a._v("XCTestWD")]),a._v(" 会自动使用该 "),s("code",[a._v("TEAM_ID")]),a._v("。")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 卸载之前安装的 macaca-ios")]),a._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("npm")]),a._v(" uninstall -g macaca-ios\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 安装有 TEAM_ID 的 macaca-ios")]),a._v("\n$ "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("DEVELOPMENT_TEAM_ID")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("TEAM_ID "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("npm")]),a._v(" i macaca-ios -g\n")])])]),s("p",[a._v("然后在测试脚本中配置真机测试参数，比如 "),s("code",[a._v("udid")]),a._v(", "),s("code",[a._v("bundleId")]),a._v(" 和 "),s("code",[a._v("app")]),a._v("。参见 "),s("a",{attrs:{href:"https://macacajs.github.io/guide/helpful-settings.html#desired-capabilities",target:"_blank",rel:"noopener noreferrer"}},[a._v("desiredCaps"),s("OutboundLink")],1),a._v("。\n"),s("img",{attrs:{src:"/assets/88fe9010ly1g1cro765ovj20va0mgtc3.jpg",alt:""}})]),a._v(" "),s("ul",[s("li",[a._v("如果真机中有相应的测试app，参数中app 可不填")])]),a._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[a._v("关于 TEAM_ID")]),a._v(" "),s("p",[a._v("如果你不知道你的 "),s("code",[a._v("TEAM_ID")]),a._v("，可以在 "),s("code",[a._v("XCode")]),a._v(" 你的项目里设置或找到 "),s("code",[a._v("TEAM_ID")]),a._v("（需要登录Apple账号）。在设置 Development Team 下拉列表里点击Other即可查看当前 "),s("code",[a._v("TEAM_ID")]),a._v("。\n"),s("img",{attrs:{src:"/assets/6d308bd9gy1fg7cnt9hf6j20t70h7782.jpg",alt:""}})])]),a._v(" "),s("h3",{attrs:{id:"手动配置-xctestwd-不推荐"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#手动配置-xctestwd-不推荐"}},[a._v("#")]),a._v(" 手动配置 XCTestWD（不推荐）")]),a._v(" "),s("p",[a._v("如果你是手动下载或者安装了 "),s("code",[a._v("XCTestWD")]),a._v("，或项目已有 "),s("code",[a._v("XCTestWD")]),a._v("：")]),a._v(" "),s("ul",[s("li",[a._v("用 XCode 打开 "),s("code",[a._v("/XCTestWD/XCTestWD.xcodeproj")])]),a._v(" "),s("li",[a._v("手动配置 "),s("code",[a._v("TEAM_ID")]),a._v(" (参考上面步骤)。")]),a._v(" "),s("li",[a._v("Run Test 将 "),s("code",[a._v("XCTestWDUITest")]),a._v(" 装入真机：\n"),s("img",{attrs:{src:"/assets/88fe9010ly1g1cro3j4ugj20ya0jc78m.jpg",alt:""}})]),a._v(" "),s("li",[a._v("确定正确的 "),s("code",[a._v("XCTestWD")]),a._v(" 被 Macaca 使用：\n"),s("ul",[s("li",[a._v("用环境变量 "),s("code",[a._v("MACACA_XCTESTWD_ROOT_PATH")]),a._v(" 传入 "),s("code",[a._v("XCTestWD")]),a._v(" 位置，参见"),s("a",{attrs:{href:"https://github.com/macacajs/XCTestWD#44",target:"_blank",rel:"noopener noreferrer"}},[a._v("XCTestWD 文档"),s("OutboundLink")],1),a._v("。\n"),s("ul",[s("li",[a._v("这个位置应该包含 "),s("code",[a._v("XCTestWD.xcodeproj")]),a._v(" 的上级目录 "),s("code",[a._v("XCTestWD")]),a._v("，而不是直接包含 "),s("code",[a._v("XCTestWD.xcodeproj")])]),a._v(" "),s("li",[a._v("比如 "),s("code",[a._v("MACACA_XCTESTWD_ROOT_PATH=/path/to/macaca_xctest app-inspector -u xxx --verbose")])])])]),a._v(" "),s("li",[s("code",[a._v("XCTestWD")]),a._v(" 位置可以是另一个包的里 "),s("code",[a._v("node_modules")]),a._v(" 里，或者全局安装在 "),s("code",[a._v("/usr/local/lib/node_modules/xctestwd")])])])])]),a._v(" "),s("h2",{attrs:{id:"android-环境"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#android-环境"}},[a._v("#")]),a._v(" Android 环境")]),a._v(" "),s("ul",[s("li",[s("p",[s("a",{attrs:{href:"http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("安装 JDK"),s("OutboundLink")],1),a._v("，要求 1.8 （不支持Java 9）")])]),a._v(" "),s("li",[s("p",[a._v("配置 "),s("code",[a._v("JAVA_HOME")]),a._v("，根据你所使用的 shell 工具修改不同的文件，比如 "),s("code",[a._v("~/.bashrc")]),a._v(", "),s("code",[a._v("~/.bash_profile")]),a._v(", "),s("code",[a._v("~/.zshrc")])])])]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 例如")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("export")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("JAVA_HOME")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("path/to/your/Java/Home\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 或")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("export")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("JAVA_HOME")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"'),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),a._v("/usr/libexec/java_home -v "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1.8")]),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v('"')]),a._v("\n")])])]),s("ul",[s("li",[a._v("安装 "),s("code",[a._v("18-25")]),a._v(" 版本中的任一 "),s("code",[a._v("Android SDK")]),a._v(" 和 "),s("code",[a._v("Android Support Repository")])]),a._v(" "),s("li",[a._v("shell 环境设置 "),s("code",[a._v("ANDROID_HOME")]),a._v("，根据你所使用的Terminal修改不同的文件，比如 "),s("code",[a._v("~/.bashrc")]),a._v(", "),s("code",[a._v("~/.bash_profile")]),a._v(", "),s("code",[a._v("~/.zshrc")])])]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 例如")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("export")]),a._v(" ANDROID_HOME "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" /usr/local/opt/android-sdk\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 或")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("export")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("ANDROID_HOME")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"/Users/<UserName>/Library/Android/sdk"')]),a._v("\n")])])]),s("ul",[s("li",[a._v("请安装 "),s("a",{attrs:{href:"https://gradle.org",target:"_blank",rel:"noopener noreferrer"}},[a._v("gradle"),s("OutboundLink")],1),a._v(" 来构建 "),s("a",{attrs:{href:"//github.com/macacajs/UIAutomatorWD"}},[a._v("UIAutomatorWD")]),a._v(" 和其它依赖包。 ( Windows 用户请安装 "),s("a",{attrs:{href:"https://gradle.org/releases/",target:"_blank",rel:"noopener noreferrer"}},[a._v("gradle 安装包"),s("OutboundLink")],1),a._v(" 并且设置对应的环境变量。)")])]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ brew "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" gradle\n")])])]),s("p",[a._v("可以设置Maven源地址获取更快的安装速度。")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("MAVEN_MIRROR_URL")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("http://maven.aliyun.com/nexus/content/groups/public/ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("npm")]),a._v(" i macaca-android -g\n")])])]),s("ul",[s("li",[a._v("请安装 "),s("a",{attrs:{href:"https://github.com/macacajs/macaca-android",target:"_blank",rel:"noopener noreferrer"}},[a._v("macaca-android"),s("OutboundLink")],1),a._v(" 驱动")])]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 本地安装")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("npm")]),a._v(" i macaca-android --save-dev\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 全局安装")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("npm")]),a._v(" i macaca-android -g\n")])])]),s("ul",[s("li",[a._v("准备 App 包：如需要测试 Android 应用，请使用 "),s("code",[a._v(".apk")]),a._v(" 格式的包。")]),a._v(" "),s("li",[a._v("如果在运行 "),s("code",[a._v("npm i macaca-android -g")]),a._v(" 的过程中出现 [You have not accepted the license agreements of the following SDK components]，请执行如下命令(该命令将同意所有的AndroidSDK 协议)后再次执行安装。")])]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("yes")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$ANDROID_HOME")]),a._v("/tools/bin/sdkmanager --licenses\n")])])]),s("h2",{attrs:{id:"desktop-环境"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#desktop-环境"}},[a._v("#")]),a._v(" Desktop 环境")]),a._v(" "),s("ul",[s("li",[a._v("如需要测试 Electron 环境，请安装 "),s("a",{attrs:{href:"https://github.com/macacajs/macaca-electron",target:"_blank",rel:"noopener noreferrer"}},[a._v("macaca-electron"),s("OutboundLink")],1),a._v(" 驱动")])]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 本地安装")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("npm")]),a._v(" i macaca-electron --save-dev\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 全局安装")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("npm")]),a._v(" i macaca-electron -g\n")])])]),s("ul",[s("li",[a._v("如需要测试 Chrome 环境，请安装 "),s("a",{attrs:{href:"https://github.com/macacajs/macaca-chrome",target:"_blank",rel:"noopener noreferrer"}},[a._v("macaca-chrome"),s("OutboundLink")],1),a._v(" 驱动")])]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 本地安装")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("npm")]),a._v(" i macaca-chrome --save-dev\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 全局安装")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("npm")]),a._v(" i macaca-chrome -g\n")])])]),s("p",[s("a",{attrs:{href:"https://github.com/macacajs/macaca-chromedriver/blob/master/package.json#L43",target:"_blank",rel:"noopener noreferrer"}},[a._v("Chrome driver 默认版本请到这里看"),s("OutboundLink")],1)]),a._v(" "),s("h2",{attrs:{id:"命令行工具"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#命令行工具"}},[a._v("#")]),a._v(" 命令行工具")]),a._v(" "),s("h3",{attrs:{id:"全局安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#全局安装"}},[a._v("#")]),a._v(" 全局安装")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("npm")]),a._v(" i -g macaca-cli\n")])])]),s("p",[a._v("如果看到如下可爱的🐒，那恭喜你安装成功啦！重新安装则会覆盖更新。")]),a._v(" "),s("p",[s("img",{attrs:{src:"/assets/6d308bd9gw1faie2w55hnj20rs0ov4fu.jpg",alt:""}})]),a._v(" "),s("h3",{attrs:{id:"环境检查"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#环境检查"}},[a._v("#")]),a._v(" 环境检查")]),a._v(" "),s("p",[a._v("通过 "),s("code",[a._v("macaca doctor")]),a._v(" 可以检查环境是否配置成功")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ macaca doctor\n")])])]),s("p",[a._v("如下图所示则表示环境均配置正常，如果有标红提示，则需要对应处理。")]),a._v(" "),s("p",[s("img",{attrs:{src:"/assets/6b65a607jw1fa3cqjexk2j21c20padqa.jpg",alt:"macaca-doctor"}})]),a._v(" "),s("h2",{attrs:{id:"准备移动端app"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#准备移动端app"}},[a._v("#")]),a._v(" 准备移动端App")]),a._v(" "),s("p",[a._v("iOS: 支持 "),s("code",[a._v(".app")]),a._v(" 格式的包。")]),a._v(" "),s("p",[a._v("Android: 支持 "),s("code",[a._v(".apk")]),a._v(" 格式的包。")]),a._v(" "),s("p",[a._v("Desktop: 支持任意浏览器网页。")]),a._v(" "),s("h2",{attrs:{id:"一些开源镜像"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一些开源镜像"}},[a._v("#")]),a._v(" 一些开源镜像")]),a._v(" "),s("blockquote",[s("p",[a._v("由于网络原因导致的安装失败可以通过指定软件的镜像来解决")])]),a._v(" "),s("p",[a._v("Chromedriver 和 Electron 可以使用如下镜像：")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("export")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("CHROMEDRIVER_CDNURL")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("http://npm.taobao.org/mirrors/chromedriver/\n$ "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("export")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("ELECTRON_MIRROR")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("https://npm.taobao.org/mirrors/electron/\n")])])]),s("p",[a._v("Homebrew 可以使用如下镜像：")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("HOMEBREW_BOTTLE_DOMAIN")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("https://mirrors.ustc.edu.cn/homebrew-bottles brew "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" ios-webkit-debug-proxy\n")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);