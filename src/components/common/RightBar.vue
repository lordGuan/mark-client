<template>
  <div id="RightBar">
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
    <div class="message-board">
      <div class="header-title">留言板</div>
      <div class="content-list">
        <ul>
          <li v-for="message in messageList" :key="message.id">
            <div class="content-avatar">
              <img src="/static/images/avatar.jpg">
            </div>
            <div class="content-message">
              <span class="message-user">{{message.user == '' ? '匿名' : message.user}}</span>
              <p>{{message.message}}</p>
            </div>
          </li>
        </ul>
      </div>
      <div class="footer-input">
        <el-form>
          <el-input type="text" icon="edit" v-model="message.message" @keyup.enter.native="doSendMessage"
                    placeholder="说点啥？"></el-input>
          <el-checkbox v-model="message.isAnonymous">匿名发送</el-checkbox>
        </el-form>
      </div>
    </div>
    <div class="news-board">
      <div class="header-title">
        <span class="title">最新公告</span>
        <el-button type="primary" size="mini">更多</el-button>
      </div>
      <div class="content-list">
        <ul>
          <li><a><i class="el-icon-star-on"></i>积分系统1.0上线</a></li>
          <li><a><i class="el-icon-star-on"></i>欢迎大家留言板留言</a></li>
          <li><a><i class="el-icon-star-on"></i>第三条</a></li>
          <li><a><i class="el-icon-star-on"></i>第四条</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        message: {
          user: '',
          message: '',
          isAnonymous: true
        },
        messageList: []
      }
    },
    methods: {
      doSendMessage: function () {
        this.messageList.push(this.message)
      }
    },
    mounted: function () {
      this.$http.get('./static/json/getLatestMessageBoard.json').then(response => {
        console.log('success')
        this.messageList = (JSON.parse(response.bodyText))
      }, response => {
        console.log('error' + response)
      })
    }
  }
</script>

<style lang="less">
  @import "../../assets/less/common";

  #RightBar {
    position: absolute;
    background: #FFFFFF;
    width: 265px;
    top: 110px;
    right: 0;

    .vice-info {
      width: 265px;
      height: 224px;
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

    .message-board {
      position: relative;
      height: 630px;
      padding: 0 20px;
      .header-title {
        position: relative;
        text-align: left;
        padding: 38px 0;
        font-size: 20px;
        color: #9e9e9e
      }

      .content-list {
        text-align: left;
        li {
          margin-bottom: 25px;
          display: inline-flex;
          .content-avatar {
            width: 30px;
            height: 30px;
            display: inline-block;
            img {
              width: 100%;
            }
          }
          .content-message {
            margin-left: 10px;
            display: inline-block;
            width: 180px;
            .message-user {
              color: #7fb1ed;
            }
          }
        }

      }

      .footer-input {
        height: 110px;
        width: 225px;
        position: absolute;
        bottom: 0;
        text-align: left;
        input {
          .input-fix;
        }
        .el-checkbox {
          margin-top: 10px;
          .el-checkbox__label {
            font-size: 12px;
          }
        }
      }
    }

    .news-board {
      height: 258px;
      padding: 0 20px;
      .header-title {
        padding-top: 20px;
        .title {
          display: inline-block;
          width: 180px;
          text-align: left;
          font-size: 20px;
          color: #7fb1ed
        }
      }
      .content-list {
        text-align: left;
        li {
          padding-top: 5px;
          color: #7fb1ed;
          a {
            font-size: 14px;
            i {
              margin-right: 5px;
            }
          }
        }
      }
    }
  }
</style>
