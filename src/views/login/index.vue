<template>
  <div>
    <el-button @click="login">默认按钮</el-button>
  </div>
</template>

<script>
  import {mapMutations} from "vuex"
  import {getMenus,getDynamicRoutes} from "@/router/dynamic.js"

  export default {
    name: "index",
    methods:{
      ...mapMutations({
        login(commit) {
          let items = getMenus([101,102,103,20101,20102,20103])
          commit("SET_MENULIST", items)
          let menus = getDynamicRoutes(items)
          this.$router.addRoutes(menus)
          this.$router.push({path:"/admin"})
        }
      })
    }
  }
</script>
