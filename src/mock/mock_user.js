import Mock from 'mockjs'
import api from '../api/urls'
import { getQueryString } from '../utils'

const sources = ['本站', 'github', 'gitee', 'coding', 'gitlab', 'qq']
const states = ['正常', '黑名单', '已删除']

export default ({ mock }) => {
  if (!mock) return
  Mock.setup({
    timeout: '200-1000'
  })

  // 获取用户列表
  Mock.mock(RegExp(api.UserPageApi.u + '.*'), api.UserPageApi.m, data => {
    const req = {
      value: getQueryString('value', data.url),
      id: parseInt(getQueryString('id', data.url)),
      roleId: parseInt(getQueryString('roleId', data.url)),
      start: getQueryString('start', data.url),
      end: getQueryString('end', data.url),
      source: getQueryString('source', data.url),
      pageNum: parseInt(getQueryString('pageNum', data.url)),
      pageSize: parseInt(getQueryString('pageSize', data.url)),
      total: parseInt(getQueryString('total', data.url))
    }
    const items = []
    for (let i = 0; i < req.pageSize; i++) {
      const item = {
        id: Mock.Random.natural(1, 10000),
        thirdId: Mock.Random.natural(100000, 200000),
        account: Mock.Random.string('lower', 5, 20),
        nickName: Mock.Random.cname(),
        role: {
          id: Mock.Random.natural(0, 9),
          name: '管理者' + i
        },
        avatar: `http://www.thiswaifudoesnotexist.net/example-${Mock.Random.natural(5000, 10000)}.jpg`,
        source: sources[Mock.Random.natural(0, sources.length - 1)],
        url: Mock.Random.url('http'),
        bio: Mock.Random.ctitle(),
        state: states[Mock.Random.natural(0, states.length - 1)],
        lastIp: Mock.Random.ip(),
        lastAt: Mock.Random.natural(1589017294016, 1591609294016),
        createdAt: Mock.Random.natural(1582969294016, 1589017294016),
        updatedAt: Mock.Random.natural(1589017294016, 1591609294016)
      }
      items.push(item)
    }
    return {
      code: 0,
      message: 'success',
      data: {
        page: {
          pageNum: req.pageNum,
          pageSize: req.pageSize,
          total: 1000
        },
        list: items
      }
    }
  })

  // 获取单个用户
  Mock.mock(RegExp(api.UserInfoApi.u + '.*'), api.UserInfoApi.m, data => {
    const req = {
      id: getQueryString('id', data.url)
    }
    const item = {
      id: req.id,
      thirdId: Mock.Random.natural(100000, 200000),
      account: Mock.Random.string('lower', 5, 20),
      nickName: Mock.Random.cname(),
      role: {
        id: Mock.Random.natural(0, 9),
        name: '管理者'
      },
      avatar: `http://www.thiswaifudoesnotexist.net/example-${Mock.Random.natural(5000, 10000)}.jpg`,
      source: sources[Mock.Random.natural(0, sources.length - 1)],
      url: Mock.Random.url('http'),
      bio: Mock.Random.ctitle(),
      state: states[Mock.Random.natural(0, states.length - 1)],
      lastIp: Mock.Random.ip(),
      lastAt: Mock.Random.natural(1589017294016, 1591609294016),
      createdAt: Mock.Random.natural(1582969294016, 1589017294016),
      updatedAt: Mock.Random.natural(1589017294016, 1591609294016)
    }
    return {
      code: 0,
      message: 'success',
      data: item
    }
  })

  // 编辑用户
  Mock.mock(api.EditUserApi.u, api.EditUserApi.m, {
    code: 0,
    message: 'success',
    data: null
  })

  // 删除用户
  Mock.mock(api.DelUserApi.u, api.DelUserApi.m, {
    code: 0,
    message: 'success',
    data: null
  })

  // 删除多个用户
  Mock.mock(api.DelUsersApi.u, api.DelUsersApi.m, {
    code: 0,
    message: 'success',
    data: null
  })
}
