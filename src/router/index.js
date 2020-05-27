import Vue from "vue"
import VueRouter from "vue-router"

import Login from "@/views/login/index.vue"
import NotFound from "@/views/404.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name:"login",
    component: Login
  },
  {
    path: "*",
    name: "notfound",
    component: NotFound
  }
]

const router = new VueRouter({
    mode: "history",
    // base: process.env.BASE_URL,
    routes
})

export default router
