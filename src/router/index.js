import Vue from 'vue'
import VueRouter from 'vue-router'
// import store from '@/store'
import routes from './basic_routers'
import { getMenus, getDynamicRoutes } from '@/router/add_routers'

Vue.use(VueRouter)

const router = new VueRouter({
  routes
})

// const whiteList = ['login', '404']
const loginRoutePath = '/'
const defaultRoutePath = '/admin'

router.$addRoutes = () => {
  const codes = window.sessionStorage.getItem('codes')
  if (codes) {
    const addRoutes = getDynamicRoutes(getMenus(JSON.parse(codes)))
    router.matcher = new VueRouter({ mode: 'hash' }).matcher
    router.addRoutes(addRoutes)
  }
}

router.$addRoutes()

router.beforeEach((to, from, next) => {
  const token = sessionStorage.getItem('token')
  if (to.path === '/') {
    if (token && token.length) {
      next(defaultRoutePath)
      return
    }
    next()
    return
  }
  if (!token || !token.length) {
    next(loginRoutePath)
    return
  }
  next()
})

export default router
