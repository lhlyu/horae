<template>
    <div class="aside-nav">
        <el-menu class="el-menu-vertical-demo" :collapse-transition="false" default-active="home" :collapse="collapse" @select="menuSelect">
            <el-menu-item index="home">
                <i class="el-icon-house"></i>
                <span slot="title">首页</span>
            </el-menu-item>
            <el-submenu index="user">
                <template slot="title">
                    <i class="el-icon-user"></i>
                    <span slot="title">用户管理</span>
                </template>
                <el-menu-item-group>
                    <el-menu-item index="user:list">用户列表</el-menu-item>
                </el-menu-item-group>
            </el-submenu>
            <el-submenu index="article">
                <template slot="title">
                    <i class="el-icon-document"></i>
                    <span slot="title">内容管理</span>
                </template>
                <el-menu-item-group>
                    <el-menu-item index="article:list">文章列表</el-menu-item>
                    <el-menu-item index="article:label">文章标签</el-menu-item>
                    <el-menu-item index="article:class">文章类别</el-menu-item>
                </el-menu-item-group>
            </el-submenu>
            <el-submenu index="system">
                <template slot="title">
                    <i class="el-icon-setting"></i>
                    <span slot="title">系统管理</span>
                </template>
                <el-menu-item-group>
                    <el-menu-item index="system:config">网站配置</el-menu-item>
                    <el-menu-item index="system:log">系统日志</el-menu-item>
                </el-menu-item-group>
            </el-submenu>
        </el-menu>
    </div>
</template>

<script>
    export default {
        name: "aside-nav",
        props:{
            "collapse":Boolean
        },
        watch:{
            collapse:function(value) {

            }
        },
        data(){
            return {

            }
        },
        methods:{
            menuSelect:function(index){
                this.$message(index)
                this.$emit('select',index)
            }
        }
    }
</script>

<style scoped lang="less">

    .el-menu{
        overflow: hidden;
        border-right: none;
    }
</style>