import Vue from 'vue'
import VueRouter from 'vue-router'

//懒加载的方式导入
const Home = () => import('../views/home/Home')
const Category = () => import('../views/category/Category')
const Shopcart = () => import('../views/shopcart/Shopcart')
const Profile = () => import('../views/profile/Profile')
const Detail = () => import('../views/detail/Detail')

//安装插件
Vue.use(VueRouter)

// 解决重复点击路由报错的BUG
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location) {
  return originalPush.call(this, location).catch((err) => err)
}

//配置路由映射关系
const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home,
  },
  {
    path: '/category',
    component: Category,
  },
  {
    path: '/shopcart',
    component: Shopcart,
  },
  {
    path: '/profile',
    component: Profile,
  },
  {
    path: '/detail/:iid',
    component: Detail,
  },
]

const router = new VueRouter({
  routes,
  mode: 'history',
})

export default router