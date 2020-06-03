const S = (url,method = "get") => {
  return {
    u: url,
    m: method
  }
}


export default {
  LoginApi : S("/api/login"),

  // 角色
  RoleApi: S("/api/admin/roles"),
  EditRoleApi: S("/api/admin/role","post"),
  DelRoleApi: S("/api/admin/role","delete"),
}
