<template>
  <f7-page name="about">
    <f7-navbar title="About" back-link="Back"></f7-navbar>
    <f7-block-title>About My App</f7-block-title>
    <f7-block strong>
      <p>Here is About page!</p>
      <p>You can go <f7-link back>back</f7-link>.</p>
      <p>Mauris posuere sit amet metus id venenatis. Ut ante dolor, tempor nec commodo rutrum, varius at sem. Nullam ac nisi non neque ornare pretium. Nulla mauris mauris, consequat et elementum sit amet, egestas sed orci. In hac habitasse platea dictumst.</p>
      <p>Fusce eros lectus, accumsan eget mi vel, iaculis tincidunt felis. Nulla tincidunt pharetra sagittis. Fusce in felis eros. Nulla sit amet aliquam lorem, et gravida ipsum. Mauris consectetur nisl non sollicitudin tristique. Praesent vitae metus ac quam rhoncus mattis vel et nisi. Aenean aliquet, felis quis dignissim iaculis, lectus quam tincidunt ligula, et venenatis turpis risus sed lorem. Morbi eu metus elit. Ut vel diam dolor.</p>
    </f7-block>
    <!-- <f7-toolbar tabbar labels :bottom-md="false">
      <f7-link href="/" tab-link="" text="F7Demos" icon-ios="f7:email_fill" icon-md="material:email"></f7-link>
      <f7-link href="/about/" tab-link="" tab-link-active text="H5Plus" icon-ios="f7:today_fill" icon-md="material:today"></f7-link>
      <f7-link href="/form/" tab-link="" text="我的" icon-ios="f7:cloud_fill" icon-md="material:file_upload"></f7-link>
    </f7-toolbar> -->
  </f7-page>
</template>

<script>
import { mapState } from "vuex";
// @ is an alias to /src
import { WXJSSDK } from "@/mixins/wx_jssdk.js";
import store from "@/store";
import { switchTabActive } from "@/store/actions";

export default {
  data() {
    return {};
  },
  computed: {
    ...mapState({
      plusReady: state => state.plusReady
    })
  },
  mixins: [WXJSSDK],
  mounted: function() {
    var that = this;
    that.$nextTick(function() {
      console.log("about nextTick");
      switchTabActive(store, {
        active: "about"
      });
      var currentRoute = that.$f7route;
      console.log("about router", currentRoute);
      that.$f7router.back();
      var title = "我是关于页面标题";
      var link = "http://fullstack.cn"; // 分享链接的根域名，必须与对应的微信公众号网页js安全域名保持一致
      var imgUrl = "http://cdn.framework7.cn/i/aplt.png";
      var desc = "我是关于页面内容";
      that.updateShareConfig(title, link, imgUrl, desc);
    });
    // this.$f7ready(f7 => {
    //   console.log("home f7 ready");
    //   this.$f7.dialog.alert("f7 ready");
    //   // 切换语言
    //   // console.log("this.$i18n", this.$i18n);
    //   // this.$i18n.locale = "en";
    //   var title = "测试分享标题";
    //   var link = "http://h5.xcourage.fullstack.cn";
    //   var imgUrl = "http://cdn.framework7.cn/i/aplt.png";
    //   var desc = "测试分享内容";
    //   this.updateShareConfig(title, link, imgUrl, desc);
    // });
  },
  methods: {}
};
</script>