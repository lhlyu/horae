<template>
    <el-container>
        <el-aside width="250px" class="u-transition" :class="fold ? 'u-fold':''"><ASide></ASide></el-aside>
        <el-container>
            <el-header><Header></Header></el-header>
            <el-breadcrumb separator="/">
                <el-breadcrumb-item v-for="(item,i) in breadcrumbItems" :key="i" :to="{ path: `${item.to}` }">{{item.name}}</el-breadcrumb-item>
            </el-breadcrumb>
            <el-main>
                <keep-alive>
                    <router-view></router-view>
                </keep-alive>
            </el-main>
            <el-footer><Footer></Footer></el-footer>
        </el-container>
    </el-container>
</template>

<script>

  import {mapState} from "vuex"

  import Header from "@/layout/Header"
  import ASide from "@/layout/ASide"
  import Footer from "@/layout/Footer"

  export default {
    name: "layout",
    components: {
        Header,
        ASide,
        Footer
    },
    mounted(){
    },
    computed:{
      ...mapState({
        breadcrumbItems: state => state.layout.breadcrumbItems,
        fold: state => state.layout.fold
      })
    }
  }
</script>
<style lang="scss">
  .el-container{
    height: 100%;
  }
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  .el-breadcrumb {
    font-size: 14px;
    line-height: 40px;
    height: 40px;
    padding-left: 10px;
  }

  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    line-height: 200px;
    overflow: hidden;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }

  body > .el-container {
    margin-bottom: 40px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
  .u-fold{
    width: 0px !important;
  }
</style>
