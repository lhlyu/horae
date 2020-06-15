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
      codes: [10, 12, 1201, 120101, 120102, 120103, 1202, 120201, 120202, 120203],
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
