(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{279:function(a,e,t){"use strict";t.r(e);var s=t(13),n=Object(s.a)({},(function(){var a=this,e=a._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"environment-setup"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#environment-setup"}},[a._v("#")]),a._v(" Environment Setup")]),a._v(" "),e("p"),e("div",{staticClass:"table-of-contents"},[e("ul",[e("li",[e("a",{attrs:{href:"#node-js"}},[a._v("Node.js")])]),e("li",[e("a",{attrs:{href:"#ios"}},[a._v("iOS")])]),e("li",[e("a",{attrs:{href:"#ios-real-device"}},[a._v("iOS Real Device")])]),e("li",[e("a",{attrs:{href:"#android"}},[a._v("Android")])]),e("li",[e("a",{attrs:{href:"#desktop"}},[a._v("Desktop")])]),e("li",[e("a",{attrs:{href:"#macaca-cli"}},[a._v("Macaca Cli")])]),e("li",[e("a",{attrs:{href:"#prepare-application"}},[a._v("Prepare Application")])])])]),e("p"),a._v(" "),e("h2",{attrs:{id:"node-js"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#node-js"}},[a._v("#")]),a._v(" Node.js")]),a._v(" "),e("p",[e("a",{attrs:{href:"https://nodejs.org/",target:"_blank",rel:"noopener noreferrer"}},[a._v("Node.js"),e("OutboundLink")],1),a._v(" v8.0 or higher.")]),a._v(" "),e("h2",{attrs:{id:"ios"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ios"}},[a._v("#")]),a._v(" iOS")]),a._v(" "),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[a._v("Important")]),a._v(" "),e("p",[e("strong",[a._v("Xcode v9")]),a._v(" or higher is "),e("strong",[a._v("required")]),a._v(".")])]),a._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"//github.com/libimobiledevice/usbmuxd"}},[a._v("usbmuxd")]),a._v(" is needed in order to testing real iOS device via USB.")])]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("$ brew "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" usbmuxd\n")])])]),e("ul",[e("li",[e("a",{attrs:{href:"//github.com/libimobiledevice/ideviceinstaller"}},[a._v("ideviceinstaller")]),a._v(" is needed in order to install App to real device.")])]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("$ brew "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" ideviceinstaller\n")])])]),e("ul",[e("li",[e("a",{attrs:{href:"//github.com/google/ios-webkit-debug-proxy"}},[a._v("ios-webkit-debug-proxy")]),a._v(" is needed in order to testing WebViews.")])]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("$ brew "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" ios-webkit-debug-proxy\n")])])]),e("ul",[e("li",[a._v("Install "),e("a",{attrs:{href:"https://github.com/macacajs/macaca-ios",target:"_blank",rel:"noopener noreferrer"}},[a._v("macaca-ios"),e("OutboundLink")],1),a._v(" driver")])]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# local installation")]),a._v("\n$ "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("npm")]),a._v(" i macaca-ios --save-dev\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# global installation")]),a._v("\n$ "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("npm")]),a._v(" i macaca-ios -g\n")])])]),e("ul",[e("li",[e("RouterLink",{attrs:{to:"//github.com/macacajs/XCTestWD/blob/master/#43-debug-info"}},[a._v("debug log")]),a._v(" will be displayed when '--verbose' is set as an argument when initiating macaca.")],1)]),a._v(" "),e("h2",{attrs:{id:"ios-real-device"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ios-real-device"}},[a._v("#")]),a._v(" iOS Real Device")]),a._v(" "),e("p",[a._v("First, there are two concepts that we need to clarify:")]),a._v(" "),e("ul",[e("li",[a._v("Macaca depends on "),e("code",[a._v("macaca-ios")]),a._v(", and "),e("code",[a._v("macaca-ios")]),a._v(" depends on "),e("code",[a._v("XCTestWD")]),a._v(" which is installed on real device. Hence we need to ensure that the "),e("code",[a._v("XCTestWD")]),a._v(" we are using is the "),e("code",[a._v("XCTestWD")]),a._v(" installed on the real device.")]),a._v(" "),e("li",[a._v("The "),e("code",[a._v("XCTestWD")]),a._v(" installed on real device needs the same signature ("),e("code",[a._v("TEAM_ID")]),a._v(") as the app that we are testing against.")])]),a._v(" "),e("h3",{attrs:{id:"install-macaca-ios-and-configure-xctestwd-automatically-recommended"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#install-macaca-ios-and-configure-xctestwd-automatically-recommended"}},[a._v("#")]),a._v(" Install macaca-ios and configure XCTestWD automatically (recommended)")]),a._v(" "),e("p",[a._v("Set "),e("code",[a._v("TEAM_ID")]),a._v(" as an environmental variable when installing "),e("code",[a._v("macaca-ios")]),a._v(". "),e("code",[a._v("XCTestWD")]),a._v(" will automatically use that "),e("code",[a._v("TEAM_ID")]),a._v(".")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Uninstall previously installed macaca-ios")]),a._v("\n$ "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("npm")]),a._v(" uninstall -g macaca-ios\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Install macaca-ios with TEAM_ID")]),a._v("\n$ "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("DEVELOPMENT_TEAM_ID")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("TEAM_ID "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("npm")]),a._v(" i macaca-ios -g\n")])])]),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[a._v("About TEAM_ID")]),a._v(" "),e("p",[a._v("If you don't know your "),e("code",[a._v("TEAM_ID")]),a._v(", you can find it or configure it inside your project in "),e("code",[a._v("XCode")]),a._v(' (requires Apple account login) Click on "Other" when selecting Development Team to view the current '),e("code",[a._v("TEAM_ID")]),a._v(".\n"),e("img",{attrs:{src:"/assets/6d308bd9gy1fg7cnt9hf6j20t70h7782.jpg",alt:""}})])]),a._v(" "),e("p",[a._v("Configure "),e("code",[a._v("udid")]),a._v(", "),e("code",[a._v("bundleId")]),a._v(" and "),e("code",[a._v("app")]),a._v(" inside the testing script. Refer to "),e("a",{attrs:{href:"https://macacajs.github.io/guide/helpful-settings.html#desired-capabilities",target:"_blank",rel:"noopener noreferrer"}},[a._v("desiredCaps"),e("OutboundLink")],1),a._v(".\n"),e("img",{attrs:{src:"/assets/88fe9010ly1g1cro765ovj20va0mgtc3.jpg",alt:""}})]),a._v(" "),e("ul",[e("li",[a._v("Leave out the "),e("code",[a._v("app")]),a._v(" config if the app is already installed on the device.")])]),a._v(" "),e("h3",{attrs:{id:"configure-xctestwd-manually-not-recommended"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#configure-xctestwd-manually-not-recommended"}},[a._v("#")]),a._v(" Configure XCTestWD manually (not recommended)")]),a._v(" "),e("p",[a._v("If you manually installed or downloaded "),e("code",[a._v("XCTestWD")]),a._v(", or the project already comes with "),e("code",[a._v("XCTestWD")]),a._v(":")]),a._v(" "),e("ul",[e("li",[a._v("Open "),e("code",[a._v("/XCTestWD/XCTestWD.xcodeproj")]),a._v(" with XCode")]),a._v(" "),e("li",[a._v("Configure "),e("code",[a._v("TEAM_ID")]),a._v("  (Refer to steps above)")]),a._v(" "),e("li",[a._v("Run Test to install "),e("code",[a._v("XCTestWDUITest")]),a._v(" into the real device:\n"),e("img",{attrs:{src:"/assets/88fe9010ly1g1cro3j4ugj20ya0jc78m.jpg",alt:""}})]),a._v(" "),e("li",[a._v("Make sure that the correct "),e("code",[a._v("XCTestWD")]),a._v(" is used by Macaca:\n"),e("ul",[e("li",[a._v("Use environmental variable "),e("code",[a._v("MACACA_XCTESTWD_ROOT_PATH")]),a._v(" to set the location of "),e("code",[a._v("XCTestWD")]),a._v(", refer to "),e("a",{attrs:{href:"https://github.com/macacajs/XCTestWD#44",target:"_blank",rel:"noopener noreferrer"}},[a._v("XCTestWD docs"),e("OutboundLink")],1),a._v(".\n"),e("ul",[e("li",[a._v("The location should contain "),e("code",[a._v("XCTestWD")]),a._v(" folder outside "),e("code",[a._v("XCTestWD.xcodeproj")]),a._v(", instead of "),e("code",[a._v("XCTestWD.xcodeproj")]),a._v(" directly.")]),a._v(" "),e("li",[a._v("For example, "),e("code",[a._v("MACACA_XCTESTWD_ROOT_PATH=/path/to/macaca_xctest app-inspector -u xxx --verbose")])])])]),a._v(" "),e("li",[e("code",[a._v("XCTestWD")]),a._v(" location could be inside "),e("code",[a._v("node_modules")]),a._v(" of another package, or globally installed at "),e("code",[a._v("/usr/local/lib/node_modules/xctestwd")])])])])]),a._v(" "),e("h2",{attrs:{id:"android"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#android"}},[a._v("#")]),a._v(" Android")]),a._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("Install the latest JDK 1.8"),e("OutboundLink")],1),a._v(" (Java 9 is not supported)")]),a._v(" "),e("li",[a._v("Set the "),e("code",[a._v("JAVA_HOME")]),a._v(" environment variable in your "),e("code",[a._v("~/.bashrc")]),a._v(", "),e("code",[a._v("~/.bash_profile")]),a._v(", "),e("code",[a._v("~/.zshrc")]),a._v(" or whatever your shell uses:")])]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# for example")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("export")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("JAVA_HOME")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("path/to/your/Java/Home\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# or")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("export")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("JAVA_HOME")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"'),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),a._v("/usr/libexec/java_home -v "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("1.8")]),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v('"')]),a._v("\n")])])]),e("ul",[e("li",[a._v("Install the "),e("code",[a._v("Android SDK")]),a._v(" and "),e("code",[a._v("Android Support Repository")]),a._v(", using any of the versions within "),e("code",[a._v("18-25")])]),a._v(" "),e("li",[a._v("Set the "),e("code",[a._v("ANDROID_HOME")]),a._v(" environment variable in your "),e("code",[a._v("~/.bashrc")]),a._v(", "),e("code",[a._v("~/.bash_profile")]),a._v(", "),e("code",[a._v("~/.zshrc")]),a._v(" or whatever your shell uses:")])]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# for example")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("export")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("ANDROID_HOME")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("/usr/local/opt/android-sdk\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# or")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("export")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("ANDROID_HOME")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"/Users/<UserName>/Library/Android/sdk"')]),a._v("\n")])])]),e("ul",[e("li",[e("a",{attrs:{href:"https://gradle.org",target:"_blank",rel:"noopener noreferrer"}},[a._v("gradle"),e("OutboundLink")],1),a._v(" is needed in order to build "),e("a",{attrs:{href:"//github.com/macacajs/UIAutomatorWD"}},[a._v("UIAutomatorWD")]),a._v(" and other package.(For Windows Users plz download "),e("a",{attrs:{href:"https://gradle.org/releases/",target:"_blank",rel:"noopener noreferrer"}},[a._v("gradle installer"),e("OutboundLink")],1),a._v(" and set PATH environment variable.)")])]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("$ brew "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" gradle\n")])])]),e("ul",[e("li",[a._v("Install "),e("a",{attrs:{href:"https://github.com/macacajs/macaca-android",target:"_blank",rel:"noopener noreferrer"}},[a._v("macaca-android"),e("OutboundLink")],1),a._v(" driver")])]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# local installation")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("npm")]),a._v(" i macaca-android --save-dev\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# global installation")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("npm")]),a._v(" i macaca-android -g\n")])])]),e("ul",[e("li",[a._v("If you got a error like [You have not accepted the license agreements of the following SDK components] on your install command "),e("code",[a._v("npm i macaca-android -g")]),a._v(", please accept all Android SDK licenses uses command below, and retry install.")])]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("yes")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$ANDROID_HOME")]),a._v("/tools/bin/sdkmanager --licenses\n")])])]),e("h2",{attrs:{id:"desktop"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#desktop"}},[a._v("#")]),a._v(" Desktop")]),a._v(" "),e("ul",[e("li",[a._v("If you want to test in Electron, install "),e("a",{attrs:{href:"https://github.com/macacajs/macaca-electron",target:"_blank",rel:"noopener noreferrer"}},[a._v("macaca-electron"),e("OutboundLink")],1),a._v(" driver")])]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# local installation")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("npm")]),a._v(" i macaca-electron --save-dev\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# global installation")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("npm")]),a._v(" i macaca-electron -g\n")])])]),e("ul",[e("li",[a._v("If you want to test in Chrome, install "),e("a",{attrs:{href:"https://github.com/macacajs/macaca-chrome",target:"_blank",rel:"noopener noreferrer"}},[a._v("macaca-chrome"),e("OutboundLink")],1),a._v(" driver")])]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# local installation")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("npm")]),a._v(" i macaca-chrome --save-dev\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# global installation")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("npm")]),a._v(" i macaca-chrome -g\n")])])]),e("p",[e("a",{attrs:{href:"https://github.com/macacajs/macaca-chromedriver/blob/master/package.json#L43",target:"_blank",rel:"noopener noreferrer"}},[a._v("Chrome driver default version"),e("OutboundLink")],1)]),a._v(" "),e("h2",{attrs:{id:"macaca-cli"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#macaca-cli"}},[a._v("#")]),a._v(" Macaca Cli")]),a._v(" "),e("h3",{attrs:{id:"global-installation"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#global-installation"}},[a._v("#")]),a._v(" Global Installation")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("npm")]),a._v(" i -g macaca-cli\n")])])]),e("p",[a._v("If you saw the picture below, congratulations! Macaca has been installed successfully!")]),a._v(" "),e("p",[e("img",{attrs:{src:"/assets/6d308bd9gw1faie2w55hnj20rs0ov4fu.jpg",alt:""}})]),a._v(" "),e("h3",{attrs:{id:"local-installation"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#local-installation"}},[a._v("#")]),a._v(" Local Installation")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("npm")]),a._v(" i macaca-cli --save-dev\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# start Macaca")]),a._v("\n$ ./node_modules/.bin/macaca run --verbose\n")])])]),e("h3",{attrs:{id:"environment-check"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#environment-check"}},[a._v("#")]),a._v(" Environment Check")]),a._v(" "),e("p",[a._v("Let's check the version and verify the environment.")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# show version")]),a._v("\n$ macaca -v\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# verify environment")]),a._v("\n$ macaca doctor\n")])])]),e("h2",{attrs:{id:"prepare-application"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#prepare-application"}},[a._v("#")]),a._v(" Prepare Application")]),a._v(" "),e("p",[a._v("iOS: An valid iOS application package suffixed with "),e("code",[a._v(".app")]),a._v(".")]),a._v(" "),e("p",[a._v("Android: An valid Android application package suffixed with "),e("code",[a._v(".apk")]),a._v(".")]),a._v(" "),e("p",[a._v("Desktop: All web application could be run with initial url.")])])}),[],!1,null,null,null);e.default=n.exports}}]);