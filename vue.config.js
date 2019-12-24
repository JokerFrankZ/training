module.exports = {
  configureWebpack: {
    resolve: {
      // resolve属性中的extensions数组中用于配置程序可以自行补全哪些文件后缀
      extensions: [' ', '.js', '.json', '.css', '.scss', '.styl', '.less'] // 添加在此的后缀所对应的文件可省略后缀,
    }
  }
}
