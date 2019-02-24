import Vue from 'vue'

import axios from 'axios'

// Import F7
import Framework7 from 'framework7/framework7.esm.bundle.js'

import 'framework7-icons'

// Import F7 Vue Plugin
import Framework7Vue from 'framework7-vue/framework7-vue.esm.bundle.js'

// Import F7 Styles
import 'framework7/css/framework7.css'

// Import Icons and App Custom Styles
import './css/icons.css'
import './css/app.css'

import app from './app.vue'
import store from './store'

import {
  setLang,
  setWeixin,
  plusReady
} from '@/store/actions'

import StoreCache from './utils/storeCache'

// Import language file
import VueI18n from 'vue-i18n'
import zh from './lang/zh_cn'
import en from './lang/en_us'

// 使用Hb打包的情况下，监听 plusready 已经加载就绪了
document.addEventListener('plusready', function () {
  console.log('doPlusReady')
  // 标记 h5plus 已经加载就绪
  plusReady(store, {
    'isReady': true
  })
  // 仅支持竖屏显示
  window.plus.screen.lockOrientation('portrait-primary')
  // 隐藏滚动条
  window.plus.webview.currentWebview().setStyle({
    scrollIndicator: 'none'
  })
})

const messages = {
  en,
  zh
}
// console.log('messages', messages)

// Init F7 Vue Plugin
Framework7.use(Framework7Vue, {
  Vue
})

Vue.use(VueI18n)

let cache = new StoreCache('f7')

var lang = cache.get('lang') || 'zh'

const i18n = new VueI18n({
  locale: lang, // set locale
  fallbackLocale: 'zh',
  messages
})

setLang(store, {
  'lang': lang
})

// 判断是否微信浏览器里打开
const ua = window.navigator.userAgent.toLowerCase()
// 如果不在微信浏览器内，微信分享也没意义了对吧？这里判断一下
setWeixin(store, {
  'weixin': ua.indexOf('micromessenger') > 0
})

Vue.config.productionTip = true

// 网页调试模式下，直接初始化
// Init App
new Vue({
  store,
  i18n,
  render: h => h(app)
}).$mount('#app')

axios.defaults.baseURL = 'http://api.fullstack.cn/mp/' // 接口请求根域名
axios.defaults.timeout = 30000 // 接口请求超时时间，毫秒
axios.defaults.headers.common['Token'] = cache.get('token') || '' // 接口请求的 token
// Add a request interceptor
axios.interceptors.request.use(config => {
  return config
}, error => {
  return Promise.reject(error)
})

// Add a response interceptor
axios.interceptors.response.use(response => {
  let data = response.data
  return !data.err_code ? data : Promise.reject(data)
}, error => {
  return Promise.reject(error)
})

window.addEventListener('resize', function () {
  console.log('resize')
  if (document.activeElement.tagName === 'INPUT' || document.activeElement.tagName === 'TEXTAREA') {
    window.setTimeout(function () {
      console.log('scrollIntoViewIfNeeded')
      document.activeElement.scrollIntoViewIfNeeded()
    }, 300)
  }
})