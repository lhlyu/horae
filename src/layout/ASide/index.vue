<template>
    <div>
        <el-menu
            default-active="0"
            class="el-menu-vertical-demo"
            v-for="(v,i) in items" :key="i"
        >
            <el-submenu :index="`${i}`" v-if="v.children && v.children.length">
                <template slot="title">
                    <i :class="v.icon" v-if="v.icon"></i>
                    <span>{{v.title}}</span>
                </template>
                <el-menu-item :index="`${i-j}`" v-for="(c,j) in v.children" :key="j">
                    <i :class="c.icon" v-if="c.icon"></i>
                    <span>{{c.title}}</span>
                </el-menu-item>
            </el-submenu>
            <el-menu-item :index="`${i}`" v-else>
                <i :class="v.icon" v-if="v.icon"></i>
                <span>{{v.title}}</span>
            </el-menu-item>
        </el-menu>
    </div>
</template>

<script>

  import {mapState} from "vuex"

  export default {
    name: "index",
    data(){
      return {

      }
    },
    watch:{
      $route(val,oldVal){
        console.log(val)
        console.log(oldVal)
      }
    },
    computed:{
      ...mapState({
        items: state => state.layout.menuItems
      })
    }
  }
</script>
