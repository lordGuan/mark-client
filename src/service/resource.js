import Vue from 'vue'
import VueResource from 'vue-resource'
import {SERVER_URL, LOCAL_URL} from "../config";

'../config'
Vue.use(VueResource)

// HTTP相关
// Vue.http.options.crossOrigin = true
// Vue.http.options.credentials = true

// TODO 增加拦截器 在登录后的所有请求都在headers中设置uid
Vue.http.interceptors.push((request, next) => {
  request.headers.set('uid', '2')
  next((response) => {
    return response
  })
})

export const UserService = Vue.resource(SERVER_URL + '/users{/id}')
export const UserMenuService = Vue.resource(LOCAL_URL + '/menu{/id}')
export const MarkService = Vue.resource(SERVER_URL + '/mark{/id}')
export const ExtraService = Vue.resource(LOCAL_URL + '/extra{/id}')
