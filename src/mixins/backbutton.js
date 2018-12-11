/**
 * H5Plus SDK 在 Android 系统下响应物理返回键的处理逻辑
 */
import axios from 'axios'
import {
    mapState
} from 'vuex';
import store from '@/store'
import {
    initJSSDK
} from '@/store/actions'

export const BackButton = {
    data() {
        return {}
    },
    computed: {
        // 这里的三点叫做： 扩展运算符
        ...mapState({
            plusReady: state => state.plusReady,
        }),
    },
    watch: {
        // 因为 plusReady 初始化的时间比较久，所以这里采用监听的方式来监听物理返回键的事件
        plusReady: function (value) {
            var that = this;
            console.log('watch plusReady ' + value);
            if (value) {
                // 首先移除事件
                window.plus.key.removeEventListener('backbutton', function () {
                    console.log('removeEventListener')
                }, false)
                window.plus.key.addEventListener('backbutton', function () {
                    that.backbutton()
                }, false)
            }
        }
    },
    mounted() {
        var that = this;
        that.$nextTick(function () {
            console.log('backbutton mixin mounted')
            //console.log('device', that.$device);
        });
    },
    methods: {
        backbutton() {
            var that = this;
            if (that.plusReady) {
                // 监听返回按键
                let now = false
                let time = null
                // 当前弹出的层
                var modalIn = that.$$('.modal-in')
                console.log('modal_in', modalIn)
                if (modalIn.length === 0) {
                    var currentRoute = that.$f7route
                    console.log("router", that.$f7.router.currentRoute)
                    // 如果是首页则执行退出操作
                    if (currentRoute.name === "home" || currentRoute.name === "member") {
                        time = null
                        if (now) {
                            now = false
                            plus.runtime.quit()
                        } else {
                            now = true
                            plus.nativeUI.toast("再按一次退出", {
                                duration: 'short'
                            })
                            time = setTimeout(() => {
                                now = false
                            }, 1000)
                        }
                        // 如果是内页则执行路由返回操作
                    } else {
                        that.$f7.router.back()
                    }
                } else {
                    that.$f7.closeModal(modalIn[modalIn.length - 1])
                }
            }
        }
    }
}