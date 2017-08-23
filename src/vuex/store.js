import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    userMenu: [
      {
        name: '首页',
        route: '/'
      },
      {
        name: '我的智商',
        route: '/profile'
      }
    ]
  },
  mutations: {
    userLogin (state, msg) {
      state.userMenu = msg
    }
  }
})

export default store
