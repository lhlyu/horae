<template>
    <div>
        <el-menu
            class="el-menu-vertical-demo"
            :default-active="activeMenu"
            :router="true"
            @select="selectHandler"
            v-for="(v,i) in items" :key="i"
        >
            <el-submenu :index="v.path" v-if="v.children && v.children.length">
                <template slot="title">
                    <i :class="v.icon" v-if="v.icon"></i>
                    <span>{{v.name}}</span>
                </template>
                <el-menu-item :index="c.path" v-for="(c,j) in v.children" :key="j">
                    <i :class="c.icon" v-if="c.icon"></i>
                    <span>{{c.name}}</span>
                </el-menu-item>
            </el-submenu>
            <el-menu-item :index="v.path" v-else>
                <i :class="v.icon" v-if="v.icon"></i>
                <span>{{v.name}}</span>
            </el-menu-item>
        </el-menu>
    </div>
</template>

<script>

  import {mapState,mapMutations} from "vuex"

  export default {
    name: "index",
    data(){
      return {

      }
    },
    methods:{
      ...mapMutations({
        selectHandler(commit,index) {
          commit("SET_ACTIVEMENU", index)
        }
      }),
    },
    computed:{
      ...mapState({
        items: state => state.layout.menuItems,
        activeMenu: state => state.layout.activeMenu
      }),
    }
  }
</script>
