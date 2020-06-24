// 动态路由组件设置
const dynamicRouterComponents = {
  404: () => import('@/views/errors/404.vue'),
  board: () => import('@/views/board/index.vue'),
  profile: () => import('@/layout/blank.vue'),
  'profile-info': () => import('@/views/profile/info/index.vue'),
  'profile-setting': () => import('@/views/profile/setting/index.vue'),
  user: () => import('@/views/demo/index.vue'),
  article: () => import('@/layout/blank.vue'),
  'article-list': () => import('@/views/article/list/index.vue'),
  'article-edit': () => import('@/views/article/edit/index.vue'),
  category: () => import('@/views/article/category/index.vue'),
  power: () => import('@/layout/blank.vue'),
  role: () => import('@/views/demo/index.vue'),
  log: () => import('@/views/demo/index.vue')
}

export default dynamicRouterComponents
