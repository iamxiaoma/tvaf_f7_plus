<template>
  <f7-page name="home" :no-navbar="noNavbar" :no-toolbar="noToolbar" @page:init="init" @page:reinit="reinit">
    <f7-navbar>
      <f7-nav-left>
        <f7-link icon-if-ios="f7:menu" icon-if-md="material:menu" panel-open="left"></f7-link>
      </f7-nav-left>
      <f7-nav-title>{{$t('app.page.home')}}</f7-nav-title>
      <f7-nav-right>
        <f7-link icon-if-ios="f7:menu" icon-if-md="material:menu" panel-open="right"></f7-link>
      </f7-nav-right>
    </f7-navbar>
      <f7-block strong>
        多语言用法示例：
        <span v-text="$t('app.app_name')"></span>
        <p>Here is your blank Framework7 app. Let's see what we have here.</p>
      </f7-block>
      <f7-block-title>Navigation</f7-block-title>
      <f7-list>
        <f7-list-item link="/about/" title="About"></f7-list-item>
        <f7-list-item link="/form/" title="Form"></f7-list-item>
      </f7-list>
      <f7-block-title>Modals</f7-block-title>
      <f7-block strong>
        <f7-row>
          <f7-col width="50">
            <f7-button fill raised popup-open="#popup">Popup</f7-button>
          </f7-col>
          <f7-col width="50">
            <f7-button fill raised login-screen-open="#login-screen">Login Screen</f7-button>
          </f7-col>
        </f7-row>
      </f7-block>
      <f7-block-title>Panels</f7-block-title>
      <f7-block strong>
        <f7-row>
          <f7-col width="50">
            <f7-button fill raised panel-open="left">Left Panel</f7-button>
          </f7-col>
          <f7-col width="50">
            <f7-button fill raised panel-open="right">Right Panel</f7-button>
          </f7-col>
        </f7-row>
      </f7-block>
      <f7-list>
        <f7-list-item link="/dynamic-route/blog/45/post/125/?foo=bar#about" title="Dynamic Route"></f7-list-item>
        <f7-list-item link="/load-something-that-doesnt-exist/" title="Default Route (404)"></f7-list-item>
      </f7-list>
    <!-- <keep-alive>
      <CommonToolbar active='home'></CommonToolbar>
    </keep-alive> -->
    <!-- <f7-toolbar tabbar labels :bottom-md="false">
      <f7-link href="/" tab-link="" tab-link-active text="F7Demos" icon-ios="f7:email_fill" icon-md="material:email"></f7-link>
      <f7-link href="/about/" tab-link="" text="H5Plus" icon-ios="f7:today_fill" icon-md="material:today"></f7-link>
      <f7-link href="/form/" tab-link="" text="我的" icon-ios="f7:cloud_fill" icon-md="material:file_upload"></f7-link>
    </f7-toolbar> -->

     <!-- additional "data-route-tab-id" must match to tab's ID in the specified routes -->
    <!-- <div class="toolbar tabbar">
      <div class="toolbar-inner">
        <a href="/" class="tab-link" data-route-tab-id="tab-1">Tab 1</a>
        <a href="/tab-2/" class="tab-link" data-route-tab-id="tab-2">Tab 2</a>
        <a href="/tab-3/" class="tab-link" data-route-tab-id="tab-3">Tab 3</a>
      </div>
    </div> -->
    
    <!-- Additional "tabs-routable" is required on tabs -->
    <!-- <div class="tabs tabs-routable">
      <div class="tab page-content" id="tab-1"></div>
      <div class="tab page-content" id="tab-2"></div>
      <div class="tab page-content" id="tab-3"></div>
    </div> -->

  </f7-page>
</template>
<script>
import { mapState } from "vuex";
import { WXJSSDK } from "@/mixins/wx_jssdk.js";
import { BackButton } from "@/mixins/backbutton.js";
import store from "@/store";
import { switchTabActive } from "@/store/actions";

export default {
  data() {
    return {
      noNavbar: false,
      noToolbar: false
    };
  },
  computed: {
    ...mapState({
      weixin: state => state.weixin,
      plusReady: state => state.plusReady
    })
  },
  mixins: [WXJSSDK, BackButton],
  mounted: function() {
    var that = this;
    // that.$nextTick(function() {
    //   console.log("home nextTick");
    //   that.updateShareConfigInfo();
    // });
    that.$f7ready(f7 => {
      console.log("home f7 ready", f7);
      var currentRoute = that.$f7route;
      console.log("router", currentRoute);
      switchTabActive(store, {
        active: "home"
      });
      //this.$f7.dialog.alert("f7 ready");
      // 切换语言
      // console.log("this.$i18n", this.$i18n);
      // this.$i18n.locale = "en";
      that.updateShareConfigInfo();
      if (that.weixin) {
        that.noNavbar = true;
      }
    });
  },
  methods: {
    updateShareConfigInfo() {
      var that = this;
      var title = "我是首页标题";
      var link = "http://fullstack.cn"; // 分享链接的根域名，必须与对应的微信公众号网页js安全域名保持一致
      var imgUrl = "http://cdn.framework7.cn/i/aplt.png";
      var desc = "我是首页内容";
      that.updateShareConfig(title, link, imgUrl, desc);
    },
    init() {
      console.log("home page init");
    },
    reinit() {
      console.log("home page reinit");
      var that = this;
      that.updateShareConfigInfo();
    }
  }
};
</script>
