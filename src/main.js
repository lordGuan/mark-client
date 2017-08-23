// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import router from './router'
// 使用iView
import iView from 'iview'
import 'iview/dist/styles/iview.css'
// 使用Element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

// 使用vuex
import vuex from 'vuex'
import store from './vuex/store'

// 使用vue-resource
import VueResource from 'vue-resource'

Vue.use(VueResource)
Vue.use(iView)
Vue.use(ElementUI)
Vue.use(vuex)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
