import Vue from 'vue'
import VueRouter from 'vue-router'

import { routes } from './route'
import store from '@/store/index.js'
import { getRoutes, getDynamicRoutes } from '@/router/dynamic.js'

Vue.use(VueRouter)

const router = new VueRouter({
  // base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (!store.state.token) {
    const token = window.sessionStorage.getItem('token')
    if (token) {
      const items = getRoutes(store.state.user.codes)
      const routers = getDynamicRoutes(items)
      store.commit('SET_TOKEN', token)
      store.commit('SET_MENULIST', items)
      store.commit('SET_ROUTERS', routers)
      router.addRoutes(routers)
      next(to.path)
    }
  }
  next()
})

export default router
