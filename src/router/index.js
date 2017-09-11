import Vue from 'vue'
import Router from 'vue-router'
import {isLogin} from '../util/authUtil'

const Home = () => import('@/components/Home')
const Profile = () => import('@/components/pages/Profile')
const Participation = () => import('@/components/pages/Participation')

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'HomeDefault',
      component: Home,
      meta: {// 路由原信息，可以在跳转的钩子程序中进行读取
        requiresNotAuth: true
      }
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/participation',
      name: 'Participation',
      component: Participation,
      meta: {
        requiresAuth: true
      }
    }
  ]
})

// TODO 路由跳转时先判断登录状态
// 根据路由元信息的配置判断该路径是否可以跳转
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.goTop)) {
    window.scroll(0, 0)
  }
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!isLogin()) {
      return next({path: '/'})
    }
  }
  if (to.matched.some(record => record.meta.requiresNotAuth)) {
    if (isLogin()) {
      return next({path: '/'})
    }
  }
  next()
})

export default router
