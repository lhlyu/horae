<template>
    <div>
        <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            v-for="(v,i) in items" :key="i"
        >
            <el-submenu :index="`${i}`" v-if="v.children.length">
                <template slot="title">
                    <i :class="v.icon" v-if="v.icon"></i>
                    <span>{{v.name}}</span>
                </template>
                <el-menu-item :index="`${i-j}`" v-for="(c,j) in v.children" :key="j">
                    <i :class="c.icon" v-if="c.icon"></i>
                    <span>{{c.name}}</span>
                </el-menu-item>
            </el-submenu>
            <el-menu-item :index="`${i}`" v-else>
                <i :class="v.icon" v-if="v.icon"></i>
                <span>{{v.name}}</span>
            </el-menu-item>
        </el-menu>
    </div>
</template>

<script>
    export default {
        name: "index",
        data(){
            return {
                items: [{
                    name: "仪表板",
                    icon: "el-icon-location",
                    children: []
                },{
                    name: "管理",
                    icon: "el-icon-setting",
                    children: [{
                        name: "网站",
                        icon: "",
                        children: []
                    },{
                        name: "日志",
                        icon: "",
                        children: []
                    }]
                }]
            }
        }
    }
</script>
