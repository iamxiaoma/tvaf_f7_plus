<template>
  <f7-page name="accordion" :no-navbar="noNavbar" :no-toolbar="noToolbar" @page:init="init" @page:reinit="reinit">
    <f7-navbar title="Accelerometer" back-link="Back"></f7-navbar>
    <f7-list inset>
	  <f7-list-button @click="getCurrentAcceleration" title="获取设置当前加速度"></f7-list-button>
	  <f7-list-button @click="watchAcceleration" title="监听设备加速度变化"></f7-list-button>
	  <f7-list-button @click="clearWatch" title="停止监听设备加速度变化"></f7-list-button>
	</f7-list>
	<f7-block-title>加速度信息</f7-block-title>
	  <f7-block>
	    <p v-text="watching"></p>
	    <p>x轴方向的加速度：<span v-text="xAxis"></span></p>
	    <p>y轴方向的加速度：<span v-text="yAxis"></span></p>
	    <p>z轴方向的加速度：<span v-text="zAxis"></span></p>
	  </f7-block>
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
      noToolbar: false,
      watching: '',
      watchId: null,
      xAxis: 0,
      yAxis: 0,
      zAxis: 0,
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
    },
    getCurrentAcceleration(){
    		var that = this;
    		if(that.plusReady){
    			plus.accelerometer.getCurrentAcceleration( function( a ) {
    				that.xAxis = a.xAxis;
    				that.yAxis = a.yAxis;
    				that.zAxis = a.zAxis;
			} );
    		}else{
    			console.log('need plusReady');
    		}
    },
    watchAcceleration(){
    		var that = this;
    		that.watching = '正在监听设备加速度';
    		if(that.watchId == null){
    			that.watchId = plus.accelerometer.watchAcceleration( function ( a ) {
				that.xAxis = a.xAxis;
				that.yAxis = a.yAxis;
				that.zAxis = a.zAxis;
			}, function ( e ) {
				console.log('error', e);
			}, {frequency:1000} ); // 设置更新间隔时间为1s
    	}
  	},
  	clearWatch(){
  		var that = this;
  		that.watching = '';
  		if(that.watchId){
  			plus.accelerometer.clearWatch(that.watchId);	
  		}
  		that.watchId = null;
  	}
  
  }
};
</script>
