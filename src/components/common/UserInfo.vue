<template>
  <div id="UserInfo">
    <el-col :span="6">
      <div class="avatar">
        <img v-bind:src="userInfo.userAvatar">
      </div>
    </el-col>
    <el-col :span="12">
      <div class="basic-info">
        {{ userInfo.userDept + '-' + userInfo.userName }}<br>
        {{ userInfo.userCredit + '智商' }}
      </div>
    </el-col>
    <el-col :span="4">
      <div class="user-config">
        <a href="javascript:">
          <i class="el-icon-setting"></i>
        </a>
      </div>
    </el-col>
  </div>
</template>

<script>
  export default {
    name: 'UserInfo',
    data () {
      return {
        userInfo: {
          userId: 10001,
          userName: '张全蛋',
          userDept: '行政部',
          userCredit: 23333,
          userAvatar: './static/images/avatar.jpg'
        }
      }
    }
  }
</script>

<style lang="less">
  #UserInfo {
    height: 110px;
    padding: 30px 0;
    .el-col {
      height: 100%;
    }
    .avatar {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      img {
        height: 100%;
        width: 100%;
      }
    }

    .basic-info {
      width: 120px;
    }
  }
</style>
