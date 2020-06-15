

const S = (url, method = 'get') => {
  return {
    u: url,
    m: method
  }
}

// 登陆注销API --------------------------------------------------------------------------
const loginApis = {
  LoginApi: S('/api/login'),
  LogoutApi: S('/api/logout')
}

// 用户API -----------------------------------------------------------------------------
const userApis = {
  // 用户
  UserPageApi: S('/api/admin/user/page'),
  // 用户详情
  UserInfoApi: S('/api/admin/user/info'),
  // 编辑用户
  EditUserApi: S('/api/admin/user', 'post'),
  // 删除用户
  DelUserApi: S('/api/admin/user', 'delete'),
  // 删除多个用户
  DelUsersApi: S('/api/admin/users', 'delete')
}

// 角色API ------------------------------------------------------------------------------
const roleApis = {
  // 角色
  RolePageApi: S('/api/admin/role/page'),
  // 角色
  RoleInfoApi: S('/api/admin/role/info'),
  // 编辑角色
  EditRoleApi: S('/api/admin/role', 'post'),
  // 删除单个角色
  DelRoleApi: S('/api/admin/role', 'delete'),
  // 删除多个角色
  DelRolesApi: S('/api/admin/roles', 'delete'),
  // 获取权限树
  PowerTreeApi: S('/api/admin/power/tree')
}

// 枚举API ------------------------------------------------------------------------------
const enumApis = {
  // 角色列表
  RoleListApi: S('/api/admin/role/list'),
  // 用户状态
  UserStateListApi: S('/api/admin/user/state/list'),
  // 获取用户来源
  SourceListApi: S('/api/admin/source/list')

}

export default {
  ...loginApis,
  ...userApis,
  ...roleApis,
  ...enumApis
}
