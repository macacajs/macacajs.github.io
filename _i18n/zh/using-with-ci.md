# 使用其他 CI 服务

## Travis-CI

| Platform   | Status                                          |  Repo              |
| ---------- | ----------------------------------------------- | ------------------ |
| Desktop PC | [![build status][travis-image-0]][travis-url-0] | [macaca-test-sample](//github.com/macaca-sample/macaca-test-sample-nodejs)                   |
| iOS        | [![build status][travis-image-1]][travis-url-1] | [macaca-test-sample-ios-ci](//github.com/macaca-sample/macaca-test-sample-ios-ci)         |
| Android    | [![build status][travis-image-2]][travis-url-2] | [macaca-test-sample-android-ci](//github.com/macaca-sample/macaca-test-sample-android-ci) |

[travis-image-0]: https://img.shields.io/travis/macaca-sample/macaca-test-sample-nodejs.svg?style=flat-square
[travis-url-0]: https://travis-ci.org/macaca-sample/macaca-test-sample
[travis-image-1]: https://img.shields.io/travis/macaca-sample/macaca-test-sample-ios-ci.svg?style=flat-square
[travis-url-1]: https://travis-ci.org/macaca-sample/macaca-test-sample-ios-ci
[travis-image-2]: https://img.shields.io/travis/macaca-sample/macaca-test-sample-android-ci.svg?style=flat-square
[travis-url-2]: https://travis-ci.org/macaca-sample/macaca-test-sample-android-ci

### Chrome

Add config to your `.travis.yml`:

```yml
language: node_js
sudo: required
node_js:
  - "4"
dist: trusty
addons:
  apt:
    sources:
    - google-chrome
    packages:
    - google-chrome-stable
    - xvfb
before_install:
 - export DISPLAY=:99.0
 - sh -e /etc/init.d/xvfb start
```

### Electron

Add config to your `.travis.yml`:

```yml
language: node_js
sudo: false
node_js:
  - "4"
addons:
  apt:
    packages:
      - xvfb
install:
  - export DISPLAY=':99.0'
  - Xvfb :99 -screen 0 1366x768x24 > /dev/null 2>&1 &
```

### iOS

Add config to your `.travis.yml`:

```yml
os: osx
osx_image: xcode7.3
before_install:
  - source $(brew --prefix nvm)/nvm.sh
  - nvm install 4.4.3
  - brew update
  - brew install ios-webkit-debug-proxy
```

### Android

Add config to your `.travis.yml`:

```yml
language: android
sudo: false
addons:
  apt:
    packages:
    - xvfb
jdk:
  - openjdk7
android:
  components:
    - build-tools-23.0.2
    - android-23
    - extra-android-m2repository
    - extra-android-support
before_install:
  - export CHROME_BIN=chromium-browser
  - export JAVA_HOME=/usr/lib/jvm/java-7-openjdk-amd64
  - export ANDROID_HOME=/usr/local/android-sdk
  - echo yes | android update sdk --all --filter build-tools-23.0.2 --no-ui --force
  - export DISPLAY=:99.0
  - sh -e /etc/init.d/xvfb start
before_script:
  - . $HOME/.nvm/nvm.sh
  - nvm install 4
  - nvm use 4
  - npm install
  - echo no | android create avd --force -n test -t android-19 --abi armeabi-v7a
  - emulator -avd test -no-audio -no-window &
  - android-wait-for-emulator
  - adb shell input keyevent 82 &
```

## Circle-CI

### Electron

Circle CI is awesome and has xvfb and $DISPLAY already setup, so no further configuration is required.

Add config to your `circle.yml`:

```yml
general:
  branches:
    ignore:
      - gh-pages # list of branches to ignore
machine:
  node:
    version: v4.2.1
```
