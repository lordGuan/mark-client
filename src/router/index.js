import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home.vue'
import Profile from '@/components/pages/Profile.vue'
import Participation from '@/components/pages/Participation.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/participation',
      name: 'Participation',
      component: Participation
    }
  ]
})
