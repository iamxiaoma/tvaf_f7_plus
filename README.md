# tvaf_f7_plus

## Project setup
```
npm install   安装报错请切换为 cnpm install ，需要先安装 npm install -g cnpm --registry=https://registry.npm.taobao.org
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Run your unit tests
```
npm run test:unit
```

### 基础脚手架支持的功能：
#### 0、基于 vue-cli3 构建
#### 1、Framework7-Vue 
#### 2、微信公众号分享参数自定义设置，解决了微信公众号网页分享 iOS 和 Android 不同版本下效果不一致的问题
#### 3、vue-i18n 多语言
#### 4、支持 pushState 模式，路由匹配
#### 5、集成了 vuex 状态管理机制

### Framework7 基础组件示例
#### Accordion
#### Action Sheet
#### 持续更新中

### Html5Plus 调用设备底层接口示例
#### Accelerometer 设备加速度
#### 持续更新中

### 可以直接导入为 Hbuilder 的 App 项目，然后进行真机调试
#### 使用 npm run build 构建之后，设置 manifest.json 里的 launch_path 为 dist/index.html
#### 基于 DCloud.IO HBuilder 5+SDK 的离线打包 Android、iOS 项目脚手架后续会更新