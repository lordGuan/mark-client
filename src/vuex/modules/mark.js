/**
 * 积分相关数据内容
 */
import service from '../../service'
import {GET_ALL_MARK_CHANGE, GET_LATEST_MARK_CHANGE} from '../type'

const state = {
  latestMarkChange: {},
  allMarkChange: []
}

const mutations = {
  [GET_LATEST_MARK_CHANGE](state, action) {
    state.latestMarkChange = action.list
  },
  [GET_ALL_MARK_CHANGE](state, action) {
    state.allMarkChange = action.list
  }
}

const actions = {
  // 获取最近积分变化
  getLatestMarkChange({commit}) {
    service.getLatestMarkChange().then(response => {
      console.log(response)
      let list = JSON.parse(response.bodyText)
      commit(GET_LATEST_MARK_CHANGE, {list})
    })
  },
  // 获取所有的积分变化
  getAllMarkChange({commit}) {
    service.getAllMarkChange().then(response => {
      console.log(GET_ALL_MARK_CHANGE + response.body)
      let list = JSON.parse(response.bodyText)
      commit(GET_ALL_MARK_CHANGE, list)
    })
  }
}

export default {
  state,
  mutations,
  actions
}
