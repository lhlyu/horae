const S = (url, method = 'get') => {
  return {
    u: url,
    m: method
  }
}

export default {
  LoginApi: S('/api/login'),

  // 用户
  UsersApi: S('/api/admin/users'),
  // 用户详情
  UserApi: S('/api/admin/user'),
  // 编辑用户
  EditUser: S('/api/admin/user', 'post'),
  // 删除用户
  DelUser: S('/api/admin/user', 'delete'),

  // 角色
  RolesApi: S('/api/admin/roles'),
  // 编辑角色
  EditRoleApi: S('/api/admin/role', 'post'),
  // 删除单个角色
  DelRoleApi: S('/api/admin/role', 'delete'),
  // 删除多个角色
  DelRolesApi: S('/api/admin/roles', 'delete'),
  // 获取权限树
  PowerTreeApi: S('/api/admin/power-tree')
}
