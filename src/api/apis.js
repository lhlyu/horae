import axios from './axios'
import api from './urls'

const baseUrl = ''

const fetch = (url, method = 'get', data = null) => {
  if (method.toLowerCase() === 'get') {
    return axios.request({
      url: url,
      method: method,
      baseURL: baseUrl,
      params: data
    })
  }
  return axios.request({
    url: url,
    method: method,
    baseURL: baseUrl,
    data: data
  })
}

const fetchMap = m => {
  const mp = {}
  for (const item in m) {
    const key = `fetch${item.slice(0, -3)}`
    const value = m[item]
    mp[key] = data => fetch(value.u, value.m, data)
  }
  return mp
}

// 上面的写法类似于下面注释这种，上面简化了
// const fetchs = {
//   fetchLogin: data => fetch(api.LoginApi.u, api.LoginApi.m, data),
//   fetchRoles: data => fetch(api.RolesApi.u, api.RolesApi.m, data),
//   fetchEditRole: data => fetch(api.EditRoleApi.u, api.EditRoleApi.m, data),
//   fetchDelRole: data => fetch(api.DelRoleApi.u, api.DelRoleApi.m, data),
//   fetchDelRoles: data => fetch(api.DelRolesApi.u, api.DelRolesApi.m, data),
//   fetchPowers: data => fetch(api.PowerApi.u, api.PowerApi.m, data),
//   fetchPowerTree: data => fetch(api.PowerTreeApi.u, api.PowerTreeApi.m, data),
// }

export default fetchMap(api)
