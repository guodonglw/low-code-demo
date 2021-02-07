import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant'
import 'vant/lib/index.less'
import './css/vant-fix.less'
import './css/global.less'
import './components/index'
import Contextmenu from 'vue-contextmenujs'
import Mock from './mock'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(Contextmenu)

// 引入mock数据
Mock.bootstrap()
Vue.prototype.$EventBus = new Vue()

Vue.use(Vant)
Vue.use(VueAxios, axios)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
