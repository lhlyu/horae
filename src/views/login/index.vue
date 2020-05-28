<template>
  <div>
    <el-button @click="login">默认按钮</el-button>
  </div>
</template>

<script>
  import {mapState,mapMutations} from "vuex"
  import {getRoutes,getDynamicRoutes} from "@/router/dynamic.js"

  export default {
    name: "index",
    methods:{
      ...mapMutations({
        login(commit) {
          let items = getRoutes(this.codes)
          let routers = getDynamicRoutes(items)
          commit("SET_MENULIST", items)
          commit("SET_TOKEN", +new Date())
          commit("SET_ROUTERS", routers)
          commit("SET_ACTIVEMENU")
          this.$router.addRoutes(routers)
          this.$router.push({path:"/admin"})
        }
      })
    },
    computed:{
      ...mapState({
        codes: state => state.user.codes
      })
    }
  }
</script>
