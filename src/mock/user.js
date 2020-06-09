import Mock from 'mockjs'
import api from '../api/urls'
import {getQueryString} from "../utils";

const sources = ["本站","github","gitee","coding","gitlab","qq"]
const states = ["正常","黑名单","已删除"]

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

  // 获取用户列表
  Mock.mock(RegExp(api.UsersApi.u + "\?.*"), api.UsersApi.m, data => {
    const req = {
      value: getQueryString('value',data.url),
      id: getQueryString('id',data.url),
      roleId: getQueryString('roleId',data.url),
      start: getQueryString('start',data.url),
      end: getQueryString('end',data.url),
      source: getQueryString('source',data.url),
      pageNum: parseInt(getQueryString('pageNum',data.url)),
      pageSize: parseInt(getQueryString('pageSize',data.url)),
      total: parseInt(getQueryString('total',data.url))
    }
    const items = []
    for (let i = 0; i < req.pageSize; i++) {
      const item = {
        id: Mock.Random.natural(1,10000),
        thirdId: Mock.Random.natural(100000,200000),
        account: Mock.Random.string("lower", 5, 20),
        nickName: Mock.Random.cname(),
        role: {
          id: Mock.Random.natural(0,9),
          name: '管理者' + i,
        },
        avatar: `http://www.thiswaifudoesnotexist.net/example-${Mock.Random.natural(5000,10000)}.jpg`,
        source: sources[Mock.Random.natural(0,sources.length - 1)],
        url: Mock.Random.url('http'),
        bio: Mock.Random.ctitle(),
        state: states[Mock.Random.natural(0,states.length - 1)],
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
  Mock.mock(RegExp(api.UserApi.u + "\?.*"), api.UserApi.m, data => {
    const req = {
      id: getQueryString('id',data.url)
    }
    const item = {
      id: req.id,
      thirdId: Mock.Random.natural(100000,200000),
      account: Mock.Random.string("lower", 5, 20),
      nickName: Mock.Random.cname(),
      role: {
        id: Mock.Random.natural(0,9),
        name: '管理者' + i,
      },
      avatar: `http://www.thiswaifudoesnotexist.net/example-${Mock.Random.natural(5000,10000)}.jpg`,
      source: sources[Mock.Random.natural(0,sources.length - 1)],
      url: Mock.Random.url('http'),
      bio: Mock.Random.ctitle(),
      state: states[Mock.Random.natural(0,states.length - 1)],
      lastIp: Mock.Random.ip(),
      lastAt: Mock.Random.natural(1589017294016, 1591609294016),
      createdAt: Mock.Random.natural(1582969294016, 1589017294016),
      updatedAt: Mock.Random.natural(1589017294016, 1591609294016),
    }
    let number = Mock.Random.natural(2,5)
    let events = []
    for(let i = 0;i < number;i ++){
      let event = {
        event: Mock.Random.ctitle(),
        at: Mock.Random.natural(1589017294016, 1591609294016)
      }
      events.push(event)
    }
    items.events = events
    return {
      code: 0,
      message: 'success',
      data: item
    }
  })

  // 编辑用户
  Mock.mock(api.EditUser.u, api.EditUser.m, {
    code: 0,
    message: 'success',
    data: null
  })

  // 删除用户
  Mock.mock(api.DelUser.u, api.DelUser.m, {
    code: 0,
    message: 'success',
    data: null
  })
}



