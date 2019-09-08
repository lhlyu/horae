<template>
    <div class="container">
        <el-container class="yu1">
            <el-header class="yu2" style="height: auto;padding: 0">
                <headerNav class="yu3" @collapse="collapseHandler"></headerNav>
            </el-header>
            <el-container>
                <el-aside :class="aside" style="width: unset;height: unset;overflow: unset">
                    <asideNav :collapse="collapse"></asideNav>
                </el-aside>
                <el-main style="padding: 0;border-left: solid 1px #e6e6e6;">
                    <right></right>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
    import headerNav from '../components/header';
    import asideNav from '../components/aside'
    import right from '../components/right'

    export default {
        name: "admin",
        components:{
            headerNav,
            asideNav,
            right
        },
        data() {
            return {
                collapse: false,
                aside:"aside-open",
            };
        },
        methods: {
            collapseHandler(collapse){
                this.collapse = collapse
                if(this.collapse){
                    this.aside = "aside-close"
                }else{
                    this.aside = "aside-open"
                }

            }
        }
    }
</script>

<style scoped lang="less">

    @borderLine: solid 1px #e6e6e6;

    .container{
        width: 100vw;
        height: 100vh;
        .el-container{
            height: 100%;
            .el-header{
                border-bottom: @borderLine;
                box-sizing: border-box;
            }
            .el-aside{
                overflow: hidden;
                height: 100%;
                box-sizing: border-box;
                background-color: rgba(255,255,255,0.8);
            }
            .aside-open{
                width: 210px !important;
                transition: all 0.5s ease;
            }
            .aside-close{
                width: 70px !important;
                transition: all 0.7s ease;
            }
        }
    }
</style>