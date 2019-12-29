module.exports = {
  configureWebpack: {
    resolve: {
      // resolve属性中的extensions数组中用于配置程序可以自行补全哪些文件后缀
      extensions: [' ', '.js', '.json', '.css', '.scss', '.styl', '.less'] // 添加在此的后缀所对应的文件可省略后缀,
    }
  },
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  devServer: {
    proxy: {
      '/api': {
        target: process.env.VUE_APP_BASE_API, // 设置你调用的接口域名和端口号
        changeOrigin: true, // 跨域
        ws: true,
        pathRewrite: {
          '^/api': '/'
        }
      }
    }
  }
}
