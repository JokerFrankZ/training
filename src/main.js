import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/vendor/iconfont'
import '@/assets/css/reset'
import '@/assets/css/border'
import '@/assets/css/font'
// import '@/assets/css/index'
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
