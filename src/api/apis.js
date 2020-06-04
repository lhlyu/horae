import axios from "./axios"
import api from "./urls"

const baseUrl = ""

const fetch = (url,method = "get",data = null) => {
  return axios.request({
    url: url,
    method: method,
    baseURL: baseUrl,
    data: data
  })
}

export default {
  fetchLogin(){
    return fetch(api.LoginApi.u,api.LoginApi.m)
  },
  fetchRoles(data){
    return fetch(api.RoleApi.u,api.RoleApi.m,data)
  },
  fetchEditRole(data){
    return fetch(api.EditRoleApi.u,api.EditRoleApi.m,data)
  },
  fetchDelRole(data){
    return fetch(api.DelRoleApi.u,api.DelRoleApi.m,data)
  },
  fetchPowers(){
    return fetch(api.PowerApi.u,api.PowerApi.m)
  },
}
