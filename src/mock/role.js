import Mock from 'mockjs'
import api from '../api/urls'

import { getQueryString } from '../utils'

export default ({ mock }) => {
  if (!mock) return
  Mock.setup({
    timeout: '200-1000' // 模拟延迟
  })
  // 获取角色列表
  Mock.mock(RegExp(api.RolesApi.u + '.*'), api.RolesApi.m, data => {
    const req = {
      value: getQueryString('value', data.url),
      pageNum: parseInt(getQueryString('pageNum', data.url)),
      pageSize: parseInt(getQueryString('pageSize', data.url)),
      total: parseInt(getQueryString('total', data.url))
    }
    const items = []
    for (let i = 0; i < req.pageSize; i++) {
      const item = {
        id: Mock.Random.natural(1, 1000),
        name: '管理者' + i,
        remark: Mock.Random.cname(),
        enable: Mock.Random.natural(0, 1),
        powers: [10, 12, 1201, 1202, 120201, 120202],
        createdAt: Mock.Random.natural(1582969294016, 1589017294016),
        updatedAt: Mock.Random.natural(1589017294016, 1591609294016)
      }
      if (req.value.length) {
        item.name = req.value
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

  // 编辑角色
  Mock.mock(api.EditRoleApi.u, api.EditRoleApi.m, {
    code: 0,
    message: 'success',
    data: null
  })

  // 删除角色
  Mock.mock(api.DelRoleApi.u, api.DelRoleApi.m, {
    code: 0,
    message: 'success',
    data: null
  })
  // 批量删除
  Mock.mock(api.DelRolesApi.u, api.DelRolesApi.m, {
    code: 0,
    message: 'success',
    data: null
  })

  // 获取权限树
  Mock.mock(api.PowerTreeApi.u, api.PowerTreeApi.m, {
    code: 0,
    message: 'success',
    data: [{
      id: 10,
      name: '首页'
    }, {
      id: 12,
      name: '权限',
      children: [{
        id: 1201,
        name: '用户'
      }, {
        id: 1202,
        name: '角色',
        children: [{
          id: 120201,
          name: '角色添加'
        }, {
          id: 120202,
          name: '角色删除'
        }, {
          id: 120203,
          name: '角色更改'
        }]
      }]
    }]
  })
}
