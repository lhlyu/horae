import Login from "@/views/login/index.vue"
// 懒加载
const NotFound = () => import("@/views/404.vue")
const Index = () => import("@/views/index/index.vue")

// 静态路由
const routes = [{
  path: "/",
  name:"登录",
  component: Login
},
{
  path: "*",
  name: "notfound",
  component: NotFound
}]

// 动态路由
const addRouters = [{
  code: 10,
  path: "/admin/board",
  name: "首页",
  icon: "el-icon-house",
  component: Index
},{
  code: 11,
  path: "/admin/test",
  redirect: "/admin/test/index1",
  name: "AA",
  icon: "el-icon-house",
  component: Index,
  children: [{
    code: 1101,
    path: "/admin/test/index1",
    name: "AA1",
    component: Index
  },{
    code: 1102,
    path: "/admin/test/index2",
    name: "AA2",
    component: Index
  },{
    code: 1103,
    path: "/admin/test/index3",
    name: "AA3",
    component: Index
  }]
},{
  code: 12,
  path: "/admin/ceshi/asda/32r23",
  name: "测试",
  icon: "el-icon-house",
  component: Index
}]

export {
  routes,
  addRouters
}
