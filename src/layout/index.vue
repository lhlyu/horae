<template>
    <el-container>
        <el-aside width="250px" class="u-transition" :class="fold ? 'u-fold':''"><ASide></ASide></el-aside>
        <el-container  class="u-transition">
            <el-header><Header></Header></el-header>
            <el-breadcrumb separator="/">
                <el-breadcrumb-item v-for="(item,i) in breadcrumbItems" :key="i">{{item.name}}</el-breadcrumb-item>
            </el-breadcrumb>
            <el-main v-loading="isLoading">
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
        fold: state => state.layout.fold,
        isLoading: state => state.layout.isLoading,
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
    background: #ffffff;
  }

  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    overflow-x: hidden;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
  }

  body > .el-container {
    margin-bottom: 40px;
  }
  .u-fold{
    width: 0px !important;
    opacity: 0;
  }
</style>
