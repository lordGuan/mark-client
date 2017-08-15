<template>
  <aside id="SideMenu">
    <el-menu :router="true" default-active="/" @open="handleOpen" @close="handleClose">
      <el-menu-item index="/">首页</el-menu-item>
      <el-menu-item index="/profile">我的智商</el-menu-item>
    </el-menu>
  </aside>
</template>

<script>
  export default {
    data () {
      return {}
    },
    methods: {
      handleOpen (key, keyPath) {
        console.log(key, keyPath)
      },
      handleClose (key, keyPath) {
        console.log(key, keyPath)
      }
    }
  }
</script>

<style lang="less">
  #SideMenu {
    width: 116px;
    position: absolute;
    left: 0;
    top: 110px;
    height: 1112px;
    ul {
      background: #121921;
      border-radius: 0;
      height: 100%;
      .el-menu--horizontal.el-menu--dark .el-submenu .el-menu-item.is-active, .el-menu-item.is-active{
        color: #ff0084;
      }
    }

  }
</style>
