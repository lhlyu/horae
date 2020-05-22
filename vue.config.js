const isProduction = process.env.NODE_ENV === 'production'

module.exports = {
    publicPath: isProduction ? 'https://cdn.jsdelivr.net/gh/lhlyu/horae@master/' : '/'
}
