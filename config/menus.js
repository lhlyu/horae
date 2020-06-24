// 页面及其权限设定

const menus = {
  board: { title: '仪表板', name: 'board', icon: 'fa fa-dashboard', path: '/admin/board', upper: 'admin', code: 1000, add: 1001, del: 1002, upd: 1003 },
  // ----------------------------------------------------------------------------------------------
  profile: { title: '个人中心', name: 'profile', icon: 'fa fa-snowflake-o', path: '/admin/profile', upper: 'admin', code: 1100, add: 1101, del: 1102, upd: 1103 },
  profileInfo: { title: '个人信息', name: 'profile-info', icon: 'fa fa-user-o', path: '/admin/profile/info', upper: 'profile', code: 1110, add: 1111, del: 1112, upd: 1113 },
  profileSetting: { title: '个人设置', name: 'profile-setting', icon: 'fa fa-gears', path: '/admin/profile/setting', upper: 'profile', code: 1120, add: 1121, del: 1122, upd: 1123 },
  // ----------------------------------------------------------------------------------------------
  user: { title: '用户管理', name: 'user', icon: 'fa fa-users', path: '/admin/user', upper: 'admin', code: 1200, add: 1201, del: 1202, upd: 1203 },
  // ----------------------------------------------------------------------------------------------
  article: { title: '文章管理', name: 'article', icon: 'fa fa-file-text-o', path: '/admin/article', upper: 'admin', code: 1300, add: 1301, del: 1302, upd: 1303 },
  articleList: { title: '文章列表', name: 'article-list', icon: 'fa fa-files-o', path: '/admin/article/list', upper: 'article', code: 1310, add: 1311, del: 1312, upd: 1313 },
  articleEdit: { title: '新增文章', name: 'article-edit', icon: 'fa fa-plus', path: '/admin/article/edit', upper: 'article', code: 1320, add: 1321, del: 1322, upd: 1323 },
  category: { title: '文章分类', name: 'category', icon: 'fa fa-bookmark-o', path: '/admin/article/category', upper: 'article', code: 1330, add: 1331, del: 1332, upd: 1333 },
  // ----------------------------------------------------------------------------------------------
  power: { title: '权限管理', name: 'power', icon: 'fa fa-superpowers', path: '/admin/power', upper: 'admin', code: 1400, add: 1401, del: 1402, upd: 1403 },
  role: { title: '角色管理', name: 'role', icon: 'fa fa-sliders', path: '/admin/power/role', upper: 'power', code: 1400, add: 1401, del: 1402, upd: 1403 },
  // ----------------------------------------------------------------------------------------------
  log: { title: '日志管理', name: 'log', icon: 'fa fa-list-alt', path: '/admin/log', upper: 'admin', code: 1500, add: 1501, del: 1502, upd: 1503 }
}

export default menus
