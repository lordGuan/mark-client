<template>
  <div id="Home" class="content-wrap">
    <div class="home-carousel">
      <el-carousel height="225px" :autoplay="false">
        <el-carousel-item v-for="item in latestActivities" :key="item.id">
          <a :href="item.activityUrl">
            <img :src="item.activityImg">
          </a>
        </el-carousel-item>
      </el-carousel>
    </div>

  </div>
</template>

<script>
  import {mapState, mapActions} from 'vuex'

  export default {
    name: 'Home',
    data() {
      return {}
    },
    created() {
      this.getLatestActivities()
    }
    ,
    computed: {
      ...mapState({
        latestActivities: ({home}) => home.latestActivities
      })
    },
    methods: {
      ...mapActions([
        'getLatestActivities'
      ])
    }
  }
</script>

<style lang="less">
  @import "../assets/less/common";

  #Home {

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
