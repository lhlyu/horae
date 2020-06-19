import Mock from 'mockjs'
import api from '../api/urls'

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
}
