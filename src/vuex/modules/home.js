/**
 * 首页数据内容
 */

import service from '../../service'
import {
  HOME_CAROUSEL
} from '../type'

const state = {
  latestActivities: []
}

const mutations = {
  [HOME_CAROUSEL](state, action) {
    state.latestActivities = action.list
  }
}

const actions = {
  getLatestActivities: ({commit}) => {
    service.getLatestActivities().then(response => {
      if (response) {
        let list = JSON.parse(response.bodyText)
        commit(HOME_CAROUSEL, {list})
      }
    })
  }
}

export default {
  state,
  mutations,
  actions
}
