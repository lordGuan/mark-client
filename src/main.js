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
import store from './vuex'

import moment from 'moment'
import VueMoment from 'vue-momentjs'

Vue.use(iView)
Vue.use(ElementUI)
Vue.use(VueMoment, moment)
Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {App}
})
