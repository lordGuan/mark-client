/**
 * 额外的数据内容
 */
import service from '../../service'
import {
  LATEST_MESSAGE_BOARD
} from '../type'

const state = {
  latestMessageBoard: []
}

const mutations = {
  [LATEST_MESSAGE_BOARD](state, action) {
    state.latestMessageBoard = action.list
  }
}

const actions = {
  getLatestMessageBoard({commit}) {
    service.getLatestMessageBoard().then(response => {
      if (response) {
        let list = JSON.parse(response.bodyText)
        commit(LATEST_MESSAGE_BOARD, {list})
      }
    })
  }
}

export default {
  state,
  mutations,
  actions
}
