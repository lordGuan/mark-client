<template>
  <div id="TopNav">
    <div class="main-logo"></div>
    <div class="main-search">
      <el-input v-model="globalSearchKeyWord" @keyup.enter.native="doGlobalSearch" placeholder="想看更多小伙伴的照片？" icon="search"></el-input>
    </div>
    <user-info></user-info>
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
    },
    methods:{
      doGlobalSearch () {
        if(this.globalSearchKeyWord){
          alert(this.globalSearchKeyWord)
        }
      }
    }
  }
</script>

<style lang="less">
  @import "../../assets/less/common";

  #TopNav {
    background: @color-white;
    position: relative;
    height: 110px;

    .main-logo {
      width: 116px;
      height: 110px;
      background: url(/static/images/main-logo.jpg);
      position: absolute;
      left: 0;
    }

    .main-search {
      margin: 35px 40px;
      width: 470px;
      position: absolute;
      left:116px;
      input {
        .input-fix
      }
    }
  }
</style>
