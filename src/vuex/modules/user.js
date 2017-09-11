/**
 * 用户相关数据内容 用户基本信息 用户菜单等
 */
import service from '../../service'
import userDefaultMenu from './userDefaultMenu'
import {Message} from 'element-ui'
import {USER_DEFAULT_MENU, USER_LOGIN, USER_LOGOUT, USER_MENU} from "../type"
import {getCookieUserInfo, getCookieUserMenu, login, loginMenu, logout} from "../../util/authUtil";

const state = {
  userInfo: getCookieUserInfo() || {},
  userMenu: getCookieUserMenu() || userDefaultMenu,
  userDefaultMenu: userDefaultMenu
}

const mutations = {
  [USER_LOGIN](state, msg) {
    state.userInfo = msg
  },
  [USER_LOGOUT](state) {
    state.userInfo = {}
  },
  [USER_MENU](state, action) {
    state.userMenu = action.menu
  },
  [USER_DEFAULT_MENU]() {
    state.userMenu = state.userDefaultMenu
  }
}

const actions = {
  doUserLogin(store, userLoginInfo) {
    service.userLogin(userLoginInfo).then(response => {
      if (!response.body) {
        // 弹窗提示错误
        Message.error({
          showClose: true,
          message: '用户名或密码错误',
        })
      } else {
        // TODO 登录成功 根据用户权限获取相应的菜单
        store.dispatch('setUserMenu')
        store.dispatch('getLatestMarkChange')
        let userInfo = JSON.parse(response.bodyText)
        store.commit(USER_LOGIN, userInfo)
        login(response.bodyText)
      }
    })
  },
  setUserMenu({commit}) {
    service.getUserMenu().then(response => {
      let menu = JSON.parse(response.bodyText)
      commit(USER_MENU, {menu})
      loginMenu(response.bodyText)
    })
  },
  doUserLogout(store) { // 登出
    logout()
    // 清除用户信息和用户菜单
    store.commit(USER_LOGOUT)
    store.commit(USER_DEFAULT_MENU)
  }
}

export default {
  state,
  mutations,
  actions
}
