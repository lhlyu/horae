<template>
  <div>
    <el-button @click="login">默认按钮</el-button>
  </div>
</template>

<script>
  import {mapMutations} from "vuex"
  import {getRoutes,getDynamicRoutes} from "@/router/dynamic.js"

  export default {
    name: "index",
    methods:{
      ...mapMutations({
        login(commit) {
          let that = this
          const resp =  this.$request.fetchLogin()
          resp.then(v => {
            if(!!v.code){
              return
            }
            commit("SET_CODES", v.data.codes)
            let items = getRoutes(v.data.codes)
            if(!items.length){
              return
            }
            let routers = getDynamicRoutes(items)
            commit("SET_MENULIST", items)
            commit("SET_TOKEN", +new Date())
            commit("SET_ROUTERS", routers)
            commit("SET_ACTIVEMENU")
            that.$router.addRoutes(routers)
            that.$router.push({path:"/admin"})
          })
        }
      })
    },
    computed:{
    }
  }
</script>
