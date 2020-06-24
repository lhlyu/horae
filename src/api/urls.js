// eslint-disable-next-line no-unused-vars
const G = 'get'
// eslint-disable-next-line no-unused-vars
const P = 'post'
// eslint-disable-next-line no-unused-vars
const D = 'delete'
// eslint-disable-next-line no-unused-vars
const U = 'put'

const S = (url, method = 'get') => {
  return {
    u: url,
    m: method
  }
}

export default {
  LoginApi: S('/api/login', G), // 登陆
  LogoutApi: S('/api/logout', G) // 注销
}
