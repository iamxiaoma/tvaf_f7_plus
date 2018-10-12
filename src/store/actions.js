import * as types from './mutation-types'

export function plusReady({
  commit
}, {
  isReady
}) {
  commit(types.SET_PLUS_READY, {
    isReady: isReady
  })
}

export function setWeixin({
  commit
}, {
  weixin
}) {
  console.log('setWeixin', weixin);
  commit(types.SET_WEIXIN, weixin)
}

export function initJSSDK({
  commit
}, {
  init
}) {
  console.log('initJSSDK', init);
  commit(types.INIT_JSSDK, init);
}

// 登录
export function login({
  commit
}, {
  data
}) {}

// 设置语言
export function setLang({
  commit
}, {
  lang
}) {
  console.log('setLang', lang)
  commit(types.UPDATE_LANG, lang)
}

// 切换激活状态的底部栏
export function switchTabActive({
  commit
}, {
  active
}) {
  console.log('switchTabActive', active)
  commit(types.SWITCH_TAB_ACTIVE, active)
}