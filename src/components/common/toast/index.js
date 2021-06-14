import Toast from './Toast'

const obj = {}

obj.install = function (Vue) {
  //一：根据Toast组件手动的创建一个组件对象,并将其模板添加到body中
  //1,创建组件构造器
  const toastConstructor = Vue.extend(Toast)

  //2，根据组件构造器(new)出来一个组件对象
  const toast = new toastConstructor()

  //3，将组件对象手动挂载到某一个元素上
  toast.$mount(document.createElement('div'))

  //4，将这个div元素添加到body中（toast.$el === div）
  document.body.appendChild(toast.$el)

  //二：将此组件对象添加到Vue原型上面
  Vue.prototype.$toast = toast;
}

export default obj