<template>
  <el-container>
    <el-aside width="250px" class="u-transition" :class="fold ? 'u-fold':''"><ASide></ASide></el-aside>
    <el-container  class="u-transition"  v-loading="isLoading">
      <el-header><Header></Header></el-header>
      <el-breadcrumb separator="/">
        <el-breadcrumb-item v-for="(item,i) in breadcrumbItems" :key="i">{{item.name}}</el-breadcrumb-item>
      </el-breadcrumb>
      <el-main>
        <transition name="fade">
          <keep-alive>
            <router-view></router-view>
          </keep-alive>
        </transition>
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
    background-color: white;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  .el-header{
    border-bottom: solid 1px #e6e6e6;
  }
  .el-footer{
    border-top: solid 1px #e6e6e6;
  }

  .el-breadcrumb {
    font-size: 14px;
    line-height: 40px;
    height: 40px;
    padding-left: 10px;
    background: #ffffff;
    border-bottom: solid 1px #e6e6e6;
  }

  .el-aside {
    background-color: #ffffff;
    color: #333;
    overflow-x: hidden;
    border-right: solid 1px #e6e6e6;
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
