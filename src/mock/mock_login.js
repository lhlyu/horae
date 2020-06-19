import Mock from 'mockjs'
import api from '../api/urls'

export default ({ mock }) => {
  if (!mock) return
  Mock.setup({
    timeout: '200-1000'
  })
  // 用户登录
  Mock.mock(api.LoginApi.u, api.LoginApi.m, {
    code: 0,
    message: 'success',
    data: {
      codes: [9,10,11,12,1101,1102,1201,1202,110101,110102,110103,110201,110202,110203,120101,120102,120103,120201,120202,120203],
      name: 'lhlyu'
    }
  })

  // 用户注销
  Mock.mock(api.LogoutApi.u, api.LogoutApi.m, {
    code: 0,
    message: 'success',
    data: null
  })
}
