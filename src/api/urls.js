

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

// 文章API ------------------------------------------------------------------------------
const articleApis = {
  // 文章
  ArticlePageApi: S('/api/admin/article/page'),
  // 文章详情
  ArticleInfoApi: S('/api/admin/article/info'),
  // 编辑文章
  EditArticleApi: S('/api/admin/article','post'),
  // 删除文章
  DelArticleApi: S('/api/admin/article','delete'),
  // 删除多篇文章
  DelArticlesApi: S('/api/admin/articles','delete')
}

// 分类API ------------------------------------------------------------------------------
const categoryApis = {
  // 分类
  CategoryPageApi: S('/api/admin/category/page'),
  // 分类详情
  CategoryInfoApi: S('/api/admin/category/info'),
  // 编辑分类
  EditCategoryApi: S('/api/admin/category','post'),
  // 删除分类
  DelCategoryApi: S('/api/admin/category','delete'),
  // 删除多篇分类
  DelCategorysApi: S('/api/admin/category','delete')
}

// 枚举API ------------------------------------------------------------------------------
const enumApis = {
  // 角色列表
  RoleListApi: S('/api/admin/role/list'),
  // 用户状态
  UserStateListApi: S('/api/admin/user/state/list'),
  // 获取用户来源
  SourceListApi: S('/api/admin/source/list'),
  // 分类列表
  CategoryListApi: S('/api/admin/category/list'),
  // 文章状态列表
  ArticleStateListApi: S('/api/admin/article/state/list'),
  // 标签列表
  LabelListApi: S('/api/admin/label/list'),
  // 文章类型列表
  ArticleKindListApi: S('/api/admin/article/kind/list'),
  // 评论状态
  CommentStateListApi: S('/api/admin/comment/state/list'),

}

export default {
  ...loginApis,
  ...userApis,
  ...roleApis,
  ...enumApis
}
