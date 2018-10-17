<template>
  <f7-page name="accordion" :no-navbar="noNavbar" :no-toolbar="noToolbar" @page:init="init" @page:reinit="reinit">
    <f7-navbar title="Accordion" back-link="Back"></f7-navbar>
    <f7-block-title>List View Accordion</f7-block-title>
    <f7-list accordion-list>
    <f7-list-item accordion-item title="Lorem Ipsum">
        <f7-accordion-content>
        <f7-block>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean elementum id neque nec commodo. Sed vel justo at turpis laoreet pellentesque quis sed lorem. Integer semper arcu nibh, non mollis arcu tempor vel. Sed pharetra tortor vitae est rhoncus, vel congue dui sollicitudin. Donec eu arcu dignissim felis viverra blandit suscipit eget ipsum.
            </p>
        </f7-block>
        </f7-accordion-content>
    </f7-list-item>
    <f7-list-item accordion-item title="Nested List">
        <f7-accordion-content>
        <f7-list>
            <f7-list-item title="Item 1"></f7-list-item>
            <f7-list-item title="Item 2"></f7-list-item>
            <f7-list-item title="Item 3"></f7-list-item>
            <f7-list-item title="Item 4"></f7-list-item>
        </f7-list>
        </f7-accordion-content>
    </f7-list-item>
    <f7-list-item accordion-item title="Integer semper">
        <f7-accordion-content>
        <f7-block>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean elementum id neque nec commodo. Sed vel justo at turpis laoreet pellentesque quis sed lorem. Integer semper arcu nibh, non mollis arcu tempor vel. Sed pharetra tortor vitae est rhoncus, vel congue dui sollicitudin. Donec eu arcu dignissim felis viverra blandit suscipit eget ipsum.
            </p>
        </f7-block>
        </f7-accordion-content>
    </f7-list-item>
    </f7-list>

    <f7-block-title>Inset Accordion</f7-block-title>
    <f7-list accordion-list inset>
    <f7-list-item accordion-item title="Lorem Ipsum">
        <f7-accordion-content>
        <f7-block>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean elementum id neque nec commodo. Sed vel justo at turpis laoreet pellentesque quis sed lorem. Integer semper arcu nibh, non mollis arcu tempor vel. Sed pharetra tortor vitae est rhoncus, vel congue dui sollicitudin. Donec eu arcu dignissim felis viverra blandit suscipit eget ipsum.
            </p>
        </f7-block>
        </f7-accordion-content>
    </f7-list-item>
    <f7-list-item accordion-item title="Nested List">
        <f7-accordion-content>
        <f7-list>
            <f7-list-item title="Item 1"></f7-list-item>
            <f7-list-item title="Item 2"></f7-list-item>
            <f7-list-item title="Item 3"></f7-list-item>
            <f7-list-item title="Item 4"></f7-list-item>
        </f7-list>
        </f7-accordion-content>
    </f7-list-item>
    <f7-list-item accordion-item title="Integer semper">
        <f7-accordion-content>
        <f7-block>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean elementum id neque nec commodo. Sed vel justo at turpis laoreet pellentesque quis sed lorem. Integer semper arcu nibh, non mollis arcu tempor vel. Sed pharetra tortor vitae est rhoncus, vel congue dui sollicitudin. Donec eu arcu dignissim felis viverra blandit suscipit eget ipsum.
            </p>
        </f7-block>
        </f7-accordion-content>
    </f7-list-item>
    </f7-list>

    <f7-block-title>Custom Collapsible</f7-block-title>
    <f7-block inner accordion-list>
    <f7-accordion-item v-for="n in 3" :key="n">
        <f7-accordion-toggle><b>Item {{n}}</b></f7-accordion-toggle>
        <f7-accordion-content>Content {{n}}</f7-accordion-content>
    </f7-accordion-item>
    </f7-block>

  </f7-page>
</template>
<script>
import { mapState } from "vuex";
import { WXJSSDK } from "@/mixins/wx_jssdk.js";
import store from "@/store";
import { switchTabActive } from "@/store/actions";

export default {
  name: "f7demos",
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
  mixins: [WXJSSDK],
  mounted: function() {
    var that = this;
    // that.$nextTick(function() {
    //   console.log("home nextTick");
    //   that.updateShareConfigInfo();
    // });
    that.$f7ready(f7 => {
      console.log("home f7 ready");
      switchTabActive(store, {
        active: "f7demos"
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
