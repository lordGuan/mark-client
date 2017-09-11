import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import mark from './modules/mark'
import extra from './modules/extra'
import home from './modules/home'
import * as actions from './actions'

Vue.use(Vuex)

const store = new Vuex.Store({
  actions,
  modules: {
    user,
    mark,
    extra,
    home
  }
})

export default store
