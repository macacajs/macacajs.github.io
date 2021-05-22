# 配置iOS对应xcode版本

iOS配置过程中需要对应的企业证书, 开发者团队, 开发者账号

更加重要的是需要 macos系统版本,xcode版本,iOS系统版本

目前比较稳定的版本

macos系统10.15

xcode版本11.5

iOS系统13.5(版本10以上13.5以下版本都可调用)

iOS10以上自动化测试需要调用XCTest单元测试框架

xcode 11.5 要求macos系统必须是10.15版本以上

为什么必须要比较新的xcode版本呢?

因为没有办法,比如xcode 11.4.1版本 只能对应测试iOS 13.4版本设备, 无法测试13.5版本

默认测试系统时需要xcode有相关设备的驱动, 驱动向下兼容

查询兼容版本

虚拟机:Simulator--Device—iOS13.4(支持的最大版本iOS14就无法驱动)

真机: xcode--Generic iOS Device--真机设
