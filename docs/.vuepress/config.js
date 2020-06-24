const isProduction = process.env.NODE_ENV === 'production'

module.exports = {
  title: 'Horae',
  description: '管理系统',
  dest: './public/docs',
  publicPath: isProduction ? 'https://cdn.jsdelivr.net/gh/lhlyu/horae@gh-pages/docs/' : '/'
}