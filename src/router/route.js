import Login from '@/views/login/index.vue'
// 懒加载
const Blank = () => import('@/layout/blank.vue')
const NotFound = () => import('@/views/404.vue')
const Index = () => import('@/views/index/index.vue')
const UserPermission = () => import('@/views/permission/user.vue')
const RolePermission = () => import('@/views/permission/role.vue')

// 静态路由
const routes = [{
  path: '/',
  name: '登录',
  component: Login
},
{
  path: '*',
  name: 'notfound',
  component: NotFound
}]

// 动态路由
const addRouters = [{
  code: 10,
  path: '/admin/board',
  name: '首页',
  icon: 'el-icon-house',
  component: Index
}, {
  code: 12,
  path: '/admin/permission',
  name: '权限',
  icon: 'el-icon-s-operation',
  redirect: '/admin/permission/user',
  component: Blank,
  children: [{
    code: 1201,
    path: '/admin/permission/user',
    name: '用户',
    component: UserPermission
  }, {
    code: 1202,
    path: '/admin/permission/role',
    name: '角色',
    component: RolePermission
  }]
}]

export {
  routes,
  addRouters
}
