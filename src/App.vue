<template>
  <div id="app">
    <TopNav></TopNav>
    <!-- <div class=""> -->
      <SideMenu></SideMenu>
      <router-view></router-view>
    <!-- </div> -->
  </div>
</template>

<script>
  import TopNav from './components/common/TopNav.vue'
  import SideMenu from './components/common/SideMenu.vue'
  export default {
    name: 'app',
    components: { TopNav, SideMenu }
  }
</script>

<style lang="less">
  @font-color: #2c3e50;

  html, body {
    height: 100%;
  }

  body {
    margin: 0;
  }

  body {
    background: url(/static/images/main-bg.png) no-repeat center top;
    background-size: 100% 100%;
    min-width: 1366px;
  }

  #app {
    position: relative;
    margin: 0 auto;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    width: 1366px;
    height: 100%;
    overflow: hidden;
    text-align: center;
    color: @font-color;
  }
</style>
