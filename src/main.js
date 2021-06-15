import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import toast from 'components/common/toast'  //导入自定义插件
import FastClick from 'fastclick'
import VueLazyLoad from 'vue-lazyload'

Vue.config.productionTip = false
Vue.prototype.$bus = new Vue()  //利用vue的原型将vue实例赋值给$bus（事件总线），即所有vue组件就都可以访问到$bus
Vue.use(toast)  //安装自定义插件
FastClick.attach(document.body)
Vue.use(VueLazyLoad, {
  loading: require('./assets/img/common/placeholder.png')
})

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')


// let arr =[{id:1,name:'zhangsan'},{id:2,name:'lisi'}]
// let ary = !arr.find(item=>item.id==2)
// console.log(ary)