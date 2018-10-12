<template>
  <f7-page name="accordion" :no-navbar="noNavbar" :no-toolbar="noToolbar" @page:init="init" @page:reinit="reinit">
    <f7-navbar title="h5plus" back-link="Back"></f7-navbar>
  </f7-page>
</template>
<script>
import { mapState } from "vuex";
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
      plusReady: state => state.plusReady
    })
  },
  mounted: function() {
    var that = this;
    // that.$nextTick(function() {
    //   console.log("home nextTick");
    //   that.updateShareConfigInfo();
    // });
    that.$f7ready(f7 => {
      console.log("home f7 ready");
      switchTabActive(store, {
        active: "h5plus"
      });
      //this.$f7.dialog.alert("f7 ready");
      // 切换语言
      // console.log("this.$i18n", this.$i18n);
      // this.$i18n.locale = "en";
    });
  },
  methods: {
    init() {
      console.log("home page init");
    },
    reinit() {
      console.log("home page reinit");
    }
  }
};
</script>
