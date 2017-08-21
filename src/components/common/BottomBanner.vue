<template>
  <div id="BottomBanner">
    <div class="header-title">
      <span class="title">
        获取"智商"
      </span>
      <el-button type="primary" size="mini">更多</el-button>
    </div>
    <div class="content-list">
      <ul>
        <li>
          <img src="/static/images/od-index/od-01.jpg">
          <a>超赞的OPENDAY</a>
        </li>
        <li>
          <img src="/static/images/od-index/od-02.jpg">
          <a>大佬们的分享会</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {}
    }
  }
</script>

<style lang="less">
  #BottomBanner {
    margin-left: 116px;
    background: url("/static/images/od-index/od-bg.jpg") no-repeat top center;
    width: 985px;
    height: 210px;
    padding: 20px;
    .header-title {
      color: #FFFFFF;
      font-size: 20px;
      .title {
        float: left;
      }
      .el-button {
        float: right;
      }
    }
    .content-list {
      text-align: left;
      margin-top: 65px;
      li {
        text-align: center;
        &:first-child {
          margin-left: 0;
        }
        &:last-child {
          margin-right: 0;
        }
        display: inline-block;
        width: 125px;
        margin: 0 15px;
        img {
          width: 100%;
        }
        a {
          color: #ffffff;
          width: 100%;
        }
      }
    }
  }
</style>
