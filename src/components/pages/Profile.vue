<template>
  <div id="Profile" class="content-wrap">
    <el-row>
      <el-col :span="24">
        <el-card id="main-info" class="box-card">
          <el-row>
            <el-col :span="8">
              <img src="/static/images/profile/xidada.jpg" width="280px">
            </el-col>
            <el-col :span="8">
              <el-form :label-position="labelPosition" class="demo-table-expand">
                <el-form-item label="姓名">
                  <span>{{userInfo.name}}</span>
                </el-form-item>
                <el-form-item label="司龄">
                  <span>{{userInfo.companyAge > 0 ? (userInfo.companyAge + '年') : '不足一年'}}</span>
                </el-form-item>
                <el-form-item label="入职时间">
                  <span>{{this.$moment(userInfo.registerTime).format('YYYY年MM月DD日')}}</span>
                </el-form-item>
                <el-form-item label="基础积分">
                  <span>{{userInfo.mark + '分'}}</span>
                </el-form-item>
                <el-form-item label="俱乐部管理">
                  <span>{{userInfo.primarySector}}</span>
                </el-form-item>
              </el-form>
            </el-col>
          </el-row>
        </el-card>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="12">
        <el-card id="my-credits" class="box-card">
          <div slot="header" class="clearfix">
            <el-row type="flex" justify="space-between">
              <span class="title">我的智商</span>
              <el-button type="primary" size="mini">智商兑换</el-button>
            </el-row>
          </div>
          <div class="credits">
            {{userInfo.mark + '分'}}
          </div>
        </el-card>
        <el-card id="credits-info" class="box-card">
          <div slot="header" class="clearfix">
            <el-row type="flex" justify="space-between">
              <span class="title">智商变动</span>
            </el-row>
          </div>
          <el-table
            :data="tableData"
            style="width: 100%">
            <el-table-column
              prop="date"
              label="时间"
              width="180">
            </el-table-column>
            <el-table-column
              prop="content"
              label="项目"
              width="180">
            </el-table-column>
            <el-table-column
              prop="credits"
              label="分数">
            </el-table-column>
          </el-table>
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card id="credits-rules" class="box-card">
          <div slot="header" class="clearfix">
            <el-row type="flex" justify="space-between">
              <span class="title">规则解释</span>
            </el-row>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import {mapState} from 'vuex'

  export default {
    data() {
      return {
        tableData: [{
          date: '2016-05-02',
          content: '助人为乐',
          credits: '+500'
        }, {
          date: '2016-05-04',
          content: '残羹剩饭',
          credits: '-100'
        }, {
          date: '2016-05-01',
          content: '扶老奶奶过马路',
          credits: '+100'
        }, {
          date: '2016-05-03',
          content: '抽烟喝酒',
          credits: '-100'
        }],
        labelPosition: 'left'
      }
    },
    methods: {},
    computed: {
      ...mapState({
        // 这里不要使用箭头函数，因为要使用moment
        userInfo: function ({user}) {
          let now = this.$moment()
          let userInfo = user.userInfo
          userInfo.companyAge = now.diff(userInfo.registerTime, 'years')
          return userInfo
        }
      }),

    }
  }
</script>

<style lang="less">
  #Profile {
    padding: 15px;
    .box-card {
      margin-bottom: 15px;
    }
    .el-card__header {
      border-bottom: none;
      border-left: 4px solid #4db3ff;
      padding: 7px 10px;
      .title {
        font-size: 18px
      }
    }
    .el-card__body {
      padding: 7px 10px;
    }

    #main-info {
      text-align: left;
      .demo-table-expand {
        font-size: 0;
        label {
          width: 120px;
          color: #99a9bf;
        }
        .el-form-item {
          margin-right: 0;
          width: 80%;
        }
      }
    }

    #my-credits {
      .credits {
        padding-left: 4px;
        text-align: left;
        font-size: 22px;
        color: #4db3ff
      }
    }
    #credits-info {
      .cell {
        text-align: left;
      }
    }

  }
</style>
