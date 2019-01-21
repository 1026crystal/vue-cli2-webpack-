/**
 * dev（开发）和prod（生产）环境的一些基本配置
 */
'use strict'
const path = require('path')

module.exports = {
  dev: {
    // Paths
    assetsSubDirectory: 'static',  //编译输出的二级目录
    assetsPublicPath: '/',         //编译发布的根目录，可配置为资源服务器域名或者cdn域名
    proxyTable: {},                //需要使用proxyTable代理的接口（可以跨域）
    host: 'localhost', // 开发时候的访问域名，通过环境变量自己设置，can be overwritten by process.env.HOST
    // 开发时候的端口。可以通过环境变量PORT设定。如果端口被占用了，会随机分配一个未被使用的端口
    port: 8080, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
    autoOpenBrowser: false,  //是否自动打开浏览器
    errorOverlay: true,   //在浏览器是否展开错误蒙层
    notifyOnErrors: true,  //是否展示错误的通知
    /**
     * 这个是webpack-dev-servr的watchOptions的一个选项，指定webpack检查文件的方式
     * 因为webpack使用文件系统去获取文件改变的通知。在有些情况下，这个可能不起作用。例如，当使用NFC的时候，
     * vagrant也会在这方面存在很多问题，在这些情况下，使用poll选项（以轮询的方式去检查文件是否改变）可以设定为true
     * 或者具体的数值，指定文件查询的具体周期.
     */
    poll: false,
    useEslint: true,  //// 是否使用eslint loader去检查代码
    showEslintErrorsInOverlay: false, //// 如果设置为true，在浏览器中，eslint的错误和警告会以蒙层的方式展现。

    /**
     * Source Maps
     */
    devtool: 'cheap-module-eval-source-map',
    cacheBusting: true,  //指定是否通过在文件名称后面添加一个查询字符串来创建source map的缓存

    cssSourceMap: true  // 关闭css的source map
  },

  build: {
    // Template for index.html
    index: path.resolve(__dirname, '../dist/index.html'),  //html文件的生成的地方

    // Paths  编译生成的文件的目录
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static', //编译生成的静态文件的目录
    assetsPublicPath: '/', //编译发布的根目录，可配置为资源服务器域名或者cdn域名

    /**
     * Source Maps
     */
    productionSourceMap: true,
    // https://webpack.js.org/configuration/devtool/#production
    devtool: '#source-map',

    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,  //是否开启生产环境的gzip压缩
    productionGzipExtensions: ['js', 'css'], //开启gzip压缩的文件的后缀名称

    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    //如果这个选项是true的话，那么则会在build后，会在浏览器中生成一份bundler报告
    bundleAnalyzerReport: process.env.npm_config_report
  }
}
