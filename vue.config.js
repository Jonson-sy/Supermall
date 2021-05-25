module.exports = {
  configureWebpack: {    //webpack配置
    resolve: {
      alias: {           //别名
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views',
      }
    }
  }
}