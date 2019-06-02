// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index'
import 'swiper/dist/css/swiper.css'
import 'mint-ui/lib/style.css'
import Mint from 'mint-ui'
/* reset.css初始化浏览器默认样式 */
import './assets/styles/reset.css'

/* border.css一像素边框解决方案 */
import './assets/styles/border.css'

/* header图标 */
import './assets/styles/iconfont.css'

/* 解决移动端点击事件三百毫秒延迟事件 */
import fastClick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper /* { default global options } */)
Vue.use(Mint)
fastClick.attach(document.body)

/* astClick绑定到body上 */
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
