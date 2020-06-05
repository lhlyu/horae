import { routes, addRouters } from './route'

import Layout from '@/layout/index.vue'
// 懒加载
const NotFound = () => import('@/views/404.vue')

const getDynamicRoutes = items => {
  const r = [{
    path: '/admin',
    name: 'layout',
    component: Layout,
    redirect: '/admin/board',
    children: items
  }, {
    path: '*',
    name: '404',
    component: NotFound
  }]
  return routes.concat(r)
}

const getRoutes = codes => {
  if (!codes.length) {
    return []
  }
  function eachSelect (routers, codes) {
    for (let j = 0; j < routers.length; j++) {
      if (codes.indexOf(routers[j].code) === -1) {
        routers.splice(j, 1)
        j = j !== 0 ? j - 1 : j
      }
      if (routers[j].children && routers[j].children.length) {
        eachSelect(routers[j].children, codes)
      }
    }
  }
  const newRouters = [...addRouters]
  eachSelect(newRouters, codes)
  return newRouters
}

export {
  getRoutes,
  getDynamicRoutes
}
