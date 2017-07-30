<template>
  <div id="Home">
    <div class="home-carousel">
      <el-carousel height="225px" :autoplay="false">
        <el-carousel-item v-for="item in 4" :key="item">
          <h3>{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Home',
    data () {
      return {
      }
    }
  }
</script>

<style lang="less">
  @import "../assets/less/common-variable";
  #Home {
    padding-left: 116px;
    background: @color-main-background;
    height: 100%;
    .home-carousel {
      width: 985px;
    }
  }
</style>
