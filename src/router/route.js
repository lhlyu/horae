import codes from '@/config/codes'

import Login from '@/views/login/index.vue'
// 懒加载
const Blank = () => import('@/layout/blank.vue')
const NotFound = () => import('@/views/404.vue')
const Demo = () => import('@/views/demo/index.vue')

const Index = () => import('@/views/index/index.vue')
const Article = () => import('@/views/article/list/index.vue')
const AddArticle = () => import('@/views/article/add/index.vue')
const Category = () => import('@/views/article/category/index.vue')
const UserPermission = () => import('@/views/permission/user/index.vue')
const RolePermission = () => import('@/views/permission/role/index.vue')

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
  code: codes.home,
  path: '/admin/board',
  name: '首页',
  icon: 'el-icon-house',
  component: Index
},{
  code: codes.demo,
  path: '/admin/demo',
  name: '示例页面',
  icon: 'el-icon-position',
  component: Demo
}, {
  code: codes.permission,
  path: '/admin/permission',
  name: '权限管理',
  icon: 'el-icon-s-operation',
  redirect: '/admin/permission/user',
  component: Blank,
  children: [{
    code: codes.user.view,
    path: '/admin/permission/user',
    name: '用户',
    component: UserPermission
  }, {
    code: codes.role.view,
    path: '/admin/permission/role',
    name: '角色',
    component: RolePermission
  }]
}, {
  code: codes.content,
  path: '/admin/article',
  name: '文章管理',
  icon: 'el-icon-document',
  redirect: '/admin/article/list',
  component: Blank,
  children: [{
    code: codes.article.view,
    path: '/admin/article/list',
    name: '文章列表',
    component: Article
  },{
    code: codes.article.add,
    path: '/admin/article/add',
    name: '添加文章',
    component: AddArticle
  },{
    code: codes.category.view,
    path: '/admin/article/category',
    name: '分类管理',
    component: Category
  }]
}]

export {
  routes,
  addRouters
}
