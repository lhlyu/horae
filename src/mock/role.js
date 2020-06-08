import Mock from 'mockjs'
import api from '../api/urls'

export default ({ mock }) => {
  if (!mock) return
  Mock.setup({
    timeout: '200-1000' // 模拟延迟
  })
  // 获取角色列表
  Mock.mock(api.RoleApi.u, api.RoleApi.m, data => {
    let req = JSON.parse(data.body)
    console.log('req:',req)
    let items = []
    for (let i = 0;i < req.pageSize; i ++) {
      let item = {
        'id|+1': 1,
        name: '管理者' + i,
        remark: Mock.Random.cname(),
        enable: 0,
        powers: [10, 12, 1201, 1202, 120201, 120202],
        createdAt: Mock.Random.natural(1582969294016, 1589017294016),
        updatedAt: Mock.Random.natural(1589017294016, 1591609294016)
      }
      if (req.value.length){
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


  // 获取权限
  Mock.mock(api.PowerApi.u, api.PowerApi.m, {
    code: 0,
    message: 'success',
    data: [{
      id: 10,
      name: '首页'
    }, {
      id: 12,
      name: '权限'
    }, {
      id: 1201,
      name: '用户'
    }, {
      id: 1202,
      name: '角色'
    }, {
      id: 120201,
      name: '角色添加'
    }, {
      id: 120202,
      name: '角色删除'
    }, {
      id: 120203,
      name: '角色更改'
    }]
  })

  // 获取权限树
  Mock.mock(api.PowerTreeApi.u, api.PowerTreeApi.m, {
    code: 0,
    message: 'success',
    data: [{
      id: 10,
      name: '首页'
    },{
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
