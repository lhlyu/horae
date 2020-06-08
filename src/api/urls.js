const S = (url, method = 'get') => {
  return {
    u: url,
    m: method
  }
}

export default {
  LoginApi: S('/api/login'),

  // 角色
  RoleApi: S('/api/admin/roles'),
  // 编辑角色
  EditRoleApi: S('/api/admin/role', 'post'),
  // 删除单个角色
  DelRoleApi: S('/api/admin/role', 'delete'),
  // 删除多个角色
  DelRolesApi: S('/api/admin/roles', 'delete'),
  PowerApi: S('/api/admin/powers', 'get'),
  // 获取权限树
  PowerTreeApi: S('/api/admin/power-tree', 'get')
}
