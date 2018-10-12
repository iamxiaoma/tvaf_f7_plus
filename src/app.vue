<template>
  <div id="app">
    <!-- App -->
  <f7-app :params="f7params">

    <!-- Statusbar -->
    <f7-statusbar></f7-statusbar>

    <!-- Left Panel -->
    <f7-panel left reveal theme-dark>
      <f7-view id="panel_left" url="/panel-left/"></f7-view>
    </f7-panel>

    <!-- Right Panel -->
    <f7-panel right cover theme-dark>
      <f7-view id="panel_right" url="/panel-right/"></f7-view>
    </f7-panel>

    <!-- Main View -->
    <f7-view @init="main_view_init" id="main-view" url="/" main class='ios-edges' :pushState="pushState" :pushStateRoot="pushStateRoot" :pushStateSeparator="pushStateSeparator">
      <f7-toolbar tabbar labels>
        <f7-link href="/" tab-link="" :tab-link-active="tab_active == 'home'" text="首页" icon-ios="f7:home_fill"></f7-link>
        <f7-link href="/f7demos/" tab-link="" :tab-link-active="tab_active == 'f7demos'" text="F7Demos" icon-ios="f7:tabs_fill"></f7-link>
        <f7-link href="/h5plus/" tab-link="" :tab-link-active="tab_active == 'h5plus'" text="H5Plus" icon-ios="f7:briefcase_fill"></f7-link>
        <f7-link href="/member/" tab-link="" :tab-link-active="tab_active == 'member'" text="我的" icon-ios="f7:person_fill"></f7-link>
      </f7-toolbar>
    </f7-view>

    <!-- Popup -->
    <f7-popup id="popup">
      <f7-view id="popup_view">
        <f7-page>
          <f7-navbar title="Popup">
            <f7-nav-right>
              <f7-link popup-close>Close</f7-link>
            </f7-nav-right>
          </f7-navbar>
          <f7-block>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque, architecto. Cupiditate laudantium rem nesciunt numquam, ipsam. Voluptates omnis, a inventore atque ratione aliquam. Omnis iusto nemo quos ullam obcaecati, quod.</f7-block>
        </f7-page>
      </f7-view>
    </f7-popup>
    <!-- Login Screen -->
    <f7-login-screen id="login-screen">
      <f7-view id="login_screen">
        <f7-page login-screen>
          <f7-login-screen-title>Login</f7-login-screen-title>
          <f7-list form>
            <f7-list-item>
              <f7-label>Username</f7-label>
              <f7-input name="username" placeholder="Username" type="text"></f7-input>
            </f7-list-item>
            <f7-list-item>
              <f7-label>Password</f7-label>
              <f7-input name="password" type="password" placeholder="Password"></f7-input>
            </f7-list-item>
          </f7-list>
          <f7-list>
            <f7-list-button title="Sign In" login-screen-close></f7-list-button>
            <f7-block-footer>
              <p>Click Sign In to close Login Screen</p>
            </f7-block-footer>
          </f7-list>
        </f7-page>
      </f7-view>
    </f7-login-screen>
  </f7-app>
  </div>
</template>

<style lang="scss">
 /*隐藏头部标题栏的时候，需要去掉 page-content 的顶部外边距*/
.page.no-navbar {
  .page-content {
    padding-top: 0px;
  }
}
 /*隐藏底部栏的时候，需要去掉 page-content 的底部外边距*/
.page.no-toolbar {
  .page-content {
    padding-bottom: 0px;
  }
}
</style>

<script>
import { mapState } from "vuex";
// import { f7App, f7Panel, f7View, f7Statusbar } from "framework7-vue";
// Import Routes
import routes from "./router.js";

export default {
  // components: {
  //   f7App,
  //   f7View,
  //   f7Statusbar
  // },
  data() {
    return {
      // Framework7 parameters here
      f7params: {
        id: "cn.framework7.app", // App bundle ID
        name: "f7", // App name
        theme: "ios", // Automatic theme detection
        // App routes
        routes: routes,
        // view: {
        //   //main: true,
        //   // xhrCache: false,
        //   // iosDynamicNavbar: false
        //   // pushState: true,
        //   // pushStateRoot: "http://localhost:8080", // 确保与部署的根域名保持一致
        //   // pushStateSeparator: "" // 这里保持为空
        // },
        on: {
          init: function() {
            console.log("App init");
          }
        }
      },
      pushState: false,  // 打包 app 的情况下，必须关闭 pushState 模式
      pushStateRoot: "http://localhost:8080",
      pushStateSeparator: ""
    };
  },
  computed: {
    ...mapState({
      weixin: state => state.weixin,
      plusReady: state => state.plusReady,
      tab_active: state => state.tab_active,
      no_navbar: state => state.no_navbar,
      no_toolbar: state => state.no_toolbar
    })
  },
  methods: {
    main_view_init() {
      console.log("main_view_init");
    }
  }
};
</script>

