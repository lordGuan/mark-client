import {UserService, UserMenuService, MarkService, ExtraService} from './resource'

export default {
  userLogin(userLoginInfo) {
    return UserService.update({id: 'login'}, userLoginInfo)
  },
  getUserMenu() {
    return UserMenuService.get({id: 'userMenu.json'})
  },
  getLatestMarkChange() {
    return MarkService.get({id: 'top'})
  },
  getAllMarkChange() {
    return MarkService.get({id: 'all'})
  },
  getLatestMessageBoard() {
    return ExtraService.get({id: 'latestMessageBoard.json'})
  },
  getLatestActivities() {
    return ExtraService.get({id: 'latestActivities.json'})
  }
}
