import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
    path: '/',
    name: 'login',
    component: () => import( './views/login.vue'),
    meta:{
      title: 'Horae - 登陆'
    }
  },{
    path: '/admin',
    name: 'admin',
    component: () => import( './views/admin.vue'),
    meta:{
      title: 'Horae - 管理'
    }
  }]
})


// 路由器跳转的方式
//
// <router-link to=' '></router-link>
// this.$router.push({path:' '})