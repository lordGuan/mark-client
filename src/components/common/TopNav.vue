<template>
  <div id="TopNav">
    <el-col :span="2">
      <div class="main-logo"></div>
    </el-col>
    <el-col :span="10">
      <div class="main-search">
        <el-input v-model="globalSearchKeyWord" placeholder="想看更多小伙伴的照片？" icon="search"></el-input>
      </div>
    </el-col>
    <el-col :span="4" :offset="8">
      <user-info></user-info>
    </el-col>
  </div>
</template>

<script>
  import UserInfo from './UserInfo.vue'

  export default {
    name: 'TopNav',
    components: {
      UserInfo
    },
    data () {
      return {
        globalSearchKeyWord: ''
      }
    }
  }
</script>

<style lang="less">
  @import "../../assets/less/common-variable";

  #TopNav {
    background: @color-white;
    height: 110px;

    .main-logo {
      width: 116px;
      height: 110px;
      background: url(/static/images/main-logo.jpg);
    }

    .main-search {
      margin: 40px 40px;
      width: 470px;
      input {
        border-top: none;
        border-left: none;
        border-right: none;
        border-radius: 0;
      }
    }
  }
</style>
