<template>
  <div id="Home">
    <div class="home-carousel">
      <el-carousel height="225px" :autoplay="false">
        <el-carousel-item v-for="item in 4" :key="item">
          <h3>{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="vice-info">
      <div class="changes">
        <ul class="detail">
          <li><i class="el-icon-time font-32"></i></li>
          <li><span class="font-18">智商变动</span></li>
          <li><span>2017.8.1</span><span>+300</span></li>
          <li><span>2017.8.1</span><span>+300</span></li>
          <li><span>2017.8.1</span><span>+300</span></li>
        </ul>
      </div>
      <div class="activities">
        <ul class="detail">
          <li><i class="el-icon-time font-32"></i></li>
          <li><span class="font-18">近期活动</span></li>
          <li><span>2017.7.21</span></li>
          <li><span>星期五 18：00</span></li>
          <li><span>6F休闲区</span></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Home',
    data () {
      return {}
    }
  }
</script>

<style lang="less">
  @import "../assets/less/common";

  #Home {
    padding-left: 116px;
    background: @color-main-background;
    height: 100%;
    .home-carousel {
      width: 985px;
      display: inline-block;
      position: absolute;
      left: 116px;
    }

    .vice-info {
      width: 265px;
      height: 224px;
      float: right;
      position: relative;
      div {
        width: 132.5px;
        height: 100%;
        position: absolute;
        top: 0;
      }
      .detail {
        li:first-child {
          padding: 30px 5px;
        }
        li {
          padding: 5px;
        }
      }
      .changes {
        right: 132.5px;
        background: #7fb1ed;
        .detail {
          li {
            span:last-child {
              .padding-left(10px);
            }
          }
        }
      }
      .activities {
        right: 0;
        background: #ff7fc1;
      }
    }
  }
</style>
