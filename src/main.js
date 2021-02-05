import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant'
import 'vant/lib/index.less'
import './css/vant-fix.less'
import './css/global.less'
import './components/index'

Vue.config.productionTip = false

Vue.prototype.$EventBus = new Vue()

Vue.use(Vant)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
