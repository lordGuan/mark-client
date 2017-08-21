<template>
  <div id="Participation" class="content-wrap">
    <el-row :gutter="20">
      <el-col :span="12">
        <el-card id="openday" class="box-card">
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
              label="日期"
              width="100">
            </el-table-column>
            <el-table-column
              prop="content"
              label="主题名称"
              width="180">
            </el-table-column>
            <el-table-column
              prop="credits"
              label="积分变动">
            </el-table-column>
          </el-table>
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card id="e-school" class="box-card">
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
              label="日期"
              width="100">
            </el-table-column>
            <el-table-column
              prop="content"
              label="主题名称"
              width="180">
            </el-table-column>
            <el-table-column
              prop="credits"
              label="积分变动">
            </el-table-column>
          </el-table>
        </el-card>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12"></el-col>
      <el-col :span="12"></el-col>
    </el-row>
  </div>
</template>

<script>

</script>

<style lang="less">
  #Participation {
    padding: 15px;
    .box-card {
      margin-bottom: 15px;
    }
  }
</style>
