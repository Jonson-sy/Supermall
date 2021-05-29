import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false
Vue.prototype.$bus = new Vue()  //利用vue的原型将vue实例赋值给$bus（事件总线），即所有vue组件就都可以访问到$bus

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
