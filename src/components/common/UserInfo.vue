<template>
  <div id="UserInfo" v-if="userInfo.uid">
    <el-col :span="6">
      <div class="avatar">
        <img v-bind:src="userInfo.userAvatar">
      </div>
    </el-col>
    <el-col :span="12">
      <div class="basic-info">
        {{ userInfo.name + '-' + userInfo.primarySector }}<br>
        {{ userInfo.mark + '智商' }}
      </div>
    </el-col>
    <el-col :span="4">
      <div class="user-config">
        <a href="javascript:" @click="logout">
          <i class="el-icon-setting"></i>
        </a>
      </div>
    </el-col>
  </div>
  <div id="LoginInfo" v-else="userInfo.uid">
    <el-tabs v-model="defaultLoginMethod" @tab-click="handleClick">
      <el-tab-pane label="扫码登录" name="qr-code-login">
        <img src="/static/images/qr-login.jpg">
        <p>手机钉钉扫描二维码登录</p>
      </el-tab-pane>
      <el-tab-pane label="密码登录" name="pwd-login">
        <el-form ref="form" :model="loginForm">
          <el-form-item>
            <el-input placeholder="请输入手机号" type="text" v-model="loginForm.name"></el-input>
          </el-form-item>
          <el-form-item>
            <el-input placeholder="请输入密码" type="password" v-model="loginForm.password"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="login">登录</el-button>
          </el-form-item>
        </el-form>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
  import {mapState, mapActions} from 'vuex'

  export default {
    name: 'UserInfo',
    data() {
      return {
        isLogin: false,
        defaultLoginMethod: 'pwd-login',
        loginForm: {
          name: '',
          password: ''
        },
        today: ''
      }
    },
    computed: {
      ...mapState({
        userInfo: ({user}) => user.userInfo
      })
    },
    methods: {
      ...mapActions([
        'doUserLogin',
        'doUserLogout'
      ]),
      handleClick(tab, event) {
        console.log(tab, event)
      },
      login() {
        // TODO 校验用户填写的内容是否齐全
        this.doUserLogin(this.loginForm)
      },
      logout() {
        this.doUserLogout()
        this.$router.push('/')
      }
    },
    created() {

    },
    watch: {
      userInfo(oldVal, currentVal) {

      }
    }
  }
</script>

<style lang="less">
  @import '../../assets/less/common';

  #UserInfo {
    height: 110px;
    width: 265px;
    padding: 30px 0;
    float: right;
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

  #LoginInfo {
    background: @color-login-background;
    z-index: 999;
    height: 336px;
    width: 265px;
    position: absolute;
    right: 0;

    .el-tabs {
      height: 100%;
      .el-tabs__header {
        width: 176px;
        margin: 20px auto;
        text-align: center;
      }
      .el-tabs__nav {
        height: 50px;
        float: none;
      }
      .el-tabs__content {
        .el-tab-pane {
          margin: 25px 0;
          form {
            padding: 10px;
            .el-input__inner {
              .input-fix;
              background: @color-login-background;
            }
          }
        }
      }
    }
  }
</style>
