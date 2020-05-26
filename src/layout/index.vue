<template>
    <el-container>
        <el-aside width="250px"><ASide></ASide></el-aside>
        <el-container>
            <el-header><Header></Header></el-header>
            <TabNav></TabNav>
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

    import Header from "@/layout/Header"
    import TabNav from "@/layout/TabNav"
    import ASide from "@/layout/ASide"
    import Footer from "@/layout/Footer"

    export default {
      name: "layout",
      components: {
          Header,
          TabNav,
          ASide,
          Footer
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

    .el-aside {
        background-color: #D3DCE6;
        color: #333;
        line-height: 200px;
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
</style>
