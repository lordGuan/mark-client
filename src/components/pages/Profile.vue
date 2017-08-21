<template>
  <div id="Profile" class="content-wrap">
    <el-row>
      <el-col :span="24">
        <el-card id="main-info" class="box-card">
          <el-row>
            <el-col :span="8">
              <img src="/static/images/profile/xidada.jpg" width="280px">
            </el-col>
            <el-col :span="16">
              <el-form>
                <el-form-item label="姓名">
                  <span>某某某</span>
                </el-form-item>
                <el-form-item label="司龄">
                  <span>5年</span>
                </el-form-item>
                <el-form-item label="入职时间">
                  <span>2017年08月15日</span>
                </el-form-item>
                <el-form-item label="基础积分">
                  <span>5*1000</span>
                </el-form-item>
                <el-form-item label="俱乐部管理">
                  <span>健身房教练</span>
                </el-form-item>
              </el-form>
            </el-col>
          </el-row>
        </el-card>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12" >
        <el-card id="my-credits" class="box-card">
          <div slot="header" class="clearfix">
            <el-row type="flex" justify="space-between">
                <span class="title">我的智商</span>
                <el-button type="primary" size="mini">智商兑换</el-button>
            </el-row>
          </div>
          <div class="credits">
              10000
          </div>
        </el-card>
      </el-col>
    </el-row>
    <el-row type="flex" justify="space-between">
      <el-col :span="12">
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
      <el-col :span="11">
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
  export default {
    data () {
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
        }]
      }
    },
    methods: {}
  }
</script>

<style lang="less">
  #Profile {
    padding: 15px;
    .box-card {
      margin-bottom: 15px;
    }
    .el-card__header{
      border-bottom: none;
      border-left: 4px solid #4db3ff;
      padding: 7px 10px;
      .title{
        font-size:18px
      }
    }
    .el-card__body {
      padding: 7px 10px;
    }

    #my-credits {
      .credits {
        padding-left: 4px;
        text-align: left;
        font-size: 22px;
        color: #4db3ff
      }
    }
    #credits-info{
      .cell {
        text-align: left;
      }
    }
  }
</style>
