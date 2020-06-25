const isProduction = process.env.NODE_ENV === 'production'

module.exports = {
  title: 'Horae',
  description: '管理系统',
  dest: './public/docs',
  base: isProduction ? '/horae/docs/' : '/',
  head:[
    ['link', {rel:'icon', href:'/image/favicon.ico'}]
  ],
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '文档', link: '/guide/' },
      { text: 'GitHub', link: 'https://github.com' }
    ],
    sidebar: {
      sidebarDepth: 2,
      '/guide/' :[
        '/guide/tables',
        '/guide/dict',
        '/guide/power'
      ]
    }
  }
}
