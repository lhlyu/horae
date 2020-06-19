<template>
  <div class="u-container">
    <el-card shadow="never">
      <el-tabs tab-position="left" style="min-height: 500px;">
        <el-tab-pane label="信息">
          <Info></Info>
        </el-tab-pane>
        <el-tab-pane label="头像">
          <Avatar></Avatar>
        </el-tab-pane>
        <el-tab-pane label="数据">
          <Data></Data>
        </el-tab-pane>
        <el-tab-pane label="权限">
          <Power></Power>
        </el-tab-pane>
        <el-tab-pane label="安全">
          <Security></Security>
        </el-tab-pane>
      </el-tabs>
    </el-card>
  </div>
</template>

<script>

  import Info from './info'
  import Avatar from './avatar'
  import Data from './data'
  import Power from './power'
  import Security from './security'

  export default {
    name: "index",
    components:{
      Info,
      Avatar,
      Data,
      Power,
      Security
    }
  }
</script>

