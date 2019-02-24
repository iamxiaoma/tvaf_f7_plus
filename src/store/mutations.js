import Vue from 'vue'
import * as types from './mutation-types'
import StoreCache from '@/utils/storeCache'

let cache = new StoreCache('f7')

export default {
  [types.SET_PLUS_READY] (state, {
    isReady
  }) {
    Vue.set(state, 'plusReady', isReady)
  },
  [types.INIT_JSSDK] (state, {
    init
  }) {
    Vue.set(state, 'wxjssdk_inited', init)
  },
  [types.SET_WEIXIN] (state, weixin) {
    Vue.set(state, 'weixin', weixin)
  },
  [types.UPDATE_LANG] (state, lang) {
    Vue.set(state, 'lang', lang)
    cache.set('lang', lang)
  },
  [types.SWITCH_TAB_ACTIVE] (state, active) {
    Vue.set(state, 'tab_active', active)
  }
}
