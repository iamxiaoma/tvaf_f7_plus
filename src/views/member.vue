<template>
  <f7-page name="member">
    <f7-navbar>
      <f7-nav-title>{{$t('app.page.member')}}</f7-nav-title>
    </f7-navbar>
    <f7-block-title>会员中心</f7-block-title>
  </f7-page>
</template>

<script>
import { mapState } from 'vuex'
import { WXJSSDK } from '@/mixins/wx_jssdk.js'
import store from '@/store'
import { switchTabActive } from '@/store/actions'

export default {
  name: 'member',
  data () {
    return {
      noNavbar: false,
      noToolbar: false
    }
  },
  computed: {
    ...mapState({
      weixin: state => state.weixin,
      plusReady: state => state.plusReady
    })
  },
  mixins: [WXJSSDK],
  mounted: function () {
    var that = this
    // that.$nextTick(function() {
    //   console.log("home nextTick");
    //   that.updateShareConfigInfo();
    // });
    that.$f7ready(f7 => {
      console.log('h5plus f7 ready')
      switchTabActive(store, {
        active: 'member'
      })
      // this.$f7.dialog.alert("f7 ready");
      // 切换语言
      // console.log("this.$i18n", this.$i18n);
      // this.$i18n.locale = "en";
      that.updateShareConfigInfo()
      if (that.weixin) {
        that.noNavbar = true
      }
    })
  },
  methods: {
    updateShareConfigInfo () {
      var that = this
      var title = '我是首页标题'
      var link = 'http://fullstack.cn' // 分享链接的根域名，必须与对应的微信公众号网页js安全域名保持一致
      var imgUrl = 'http://cdn.framework7.cn/i/aplt.png'
      var desc = '我是首页内容'
      that.updateShareConfig(title, link, imgUrl, desc)
    },
    init () {
      console.log('home page init')
    },
    reinit () {
      console.log('home page reinit')
      var that = this
      that.updateShareConfigInfo()
    }
  }
}
</script>
