import Mock from 'mockjs'
import api from '../api/urls'

export default ({ mock }) => {
  if (!mock) return
  Mock.setup({
    timeout: '200-1000'
  })
  // 用户登录
  Mock.mock(RegExp(api.LoginApi.u + '.*'), api.LoginApi.m, {
    code: 0,
    message: 'success',
    data: {
      token: Mock.Random.string('power', 32),
      codes: [9999],
      profile: {
        id: 1,
        account: Mock.Random.string('lower', 5, 20),
        nickName: '鱼酱',
        avatar: `http://www.thiswaifudoesnotexist.net/example-${Mock.Random.natural(5000, 10000)}.jpg`,
        bio: Mock.Random.ctitle(),
        roleName: '管理员'
      },
      options: {
        lockMenu: true,
        pageSize: 6
      }
    }
  })

  // 用户注销
  Mock.mock(api.LogoutApi.u, api.LogoutApi.m, {
    code: 0,
    message: 'success',
    data: null
  })
}
