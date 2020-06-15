import Mock from 'mockjs'
import api from '../api/urls'

const sources = ['本站', 'github', 'gitee', 'coding', 'gitlab', 'qq']

export default ({ mock }) => {
  if (!mock) return
  Mock.setup({
    timeout: '200-1000' // 模拟延迟
  })

  // 查询角色列表
  Mock.mock(api.RoleListApi.u, api.RoleListApi.m, data => {
    const items = []
    for (let i = 0; i < 10; i++) {
      const item = {
        key: i + 1,
        value: '管理者' + i
      }
      items.push(item)
    }
    return {
      code: 0,
      message: 'success',
      data: items
    }
  })

  // 获取用户状态
  Mock.mock(api.UserStateListApi.u, api.UserStateListApi.m, data => {
    const items = [{
      key: 'normal',
      value: '正常'
    },{
      key: 'black',
      value: '黑名单'
    },{
      key: 'deleted',
      value: '已删除'
    }]
    return {
      code: 0,
      message: 'success',
      data: items
    }
  })

  // 获取用户来源
  Mock.mock(api.SourceListApi.u, api.SourceListApi.m, data => {
    const items = []
    for (let i = 0; i < sources.length; i++) {
      const item = {
        key: sources[i],
        value: sources[i]
      }
      items.push(item)
    }
    return {
      code: 0,
      message: 'success',
      data: items
    }
  })
}
