import VueCookie from 'vue-cookie'
import {CookieDomain, CookieExpire} from '../config'

// vue-cookie设置过期时间支持字符串，具体参考README.MD
let cookieConfig = {
  domain: 'localhost',
  expires: CookieExpire
}
if (CookieDomain !== '') {
  cookieConfig = {domain: CookieDomain, expires: CookieExpire}
}

/**
 * 获取缓存的用户数据
 */
export function getCookieUserInfo() {
  return JSON.parse(VueCookie.get('user'))
}

/**
 * 获取缓存的用户菜单
 */
export function getCookieUserMenu() {
  return JSON.parse(VueCookie.get('userMenu'))
}

/**
 * 判断是否缓存了登录信息
 * @returns {boolean}
 */
export function isLogin() {
  return !!VueCookie.get('user')
}

/**
 * 记录用户登录信息
 * @param userInfo
 */
export function login(userInfo) {
  VueCookie.set('user', userInfo, cookieConfig)
}

/**
 * 缓存用户的菜单
 * @param menu
 */
export function loginMenu(menu) {
  VueCookie.set('userMenu', menu, cookieConfig)
}

/**
 * 登出
 */
export function logout() {
  VueCookie.delete('user')
  VueCookie.delete('userMenu')
}


