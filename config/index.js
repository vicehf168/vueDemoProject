// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path')

module.exports = {
  build: {
    env: require('./prod.env'),
    index: path.resolve(__dirname, '../manage/index.html'),
    assetsRoot: path.resolve(__dirname, '../manage'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/manage/',
    productionSourceMap: false,
    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],
    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report
  },
  dev: {
    env: require('./dev.env'),
    port: 8002,
    autoOpenBrowser: true,
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    // proxyTable: {
      //     //     '/demoapp': {
      //     //         // target: 'https://passport.baidu.com/v2/',
      //     //         target: 'http://127.0.0.1:8899/', // 真是服务器的接口地址 // http://localhost:54321/json.data.json,
      //     //         secure: true, // 如果是 https ,需要开启这个选项
      //     //         changeOrigin: true, // 是否是跨域请求?肯定是啊,不跨域就没有必要配置这个proxyTable了.
      //     //         pathRewirte: {
      //     //             // 这里是追加链接,比如真是接口里包含了 /api,就需要这样配置.
      //     //
      //     //             '/^demoapp': '/demoapp'
      //     //         }
      //     //     }
      //     // },
    context: [ //代理路径
        '/shopping',
        '/ugc',
        '/v1',
        '/v2',
        '/v3',
        '/v4',
        '/bos',
        '/member',
        '/promotion',
        '/eus',
        '/payapi',
        '/admin',
        '/statis',
        '/img'
    ],
    // CSS Sourcemaps off by default because relative paths are "buggy"
    // with this option, according to the CSS-Loader README
    // (https://github.com/webpack/css-loader#sourcemaps)
    // In our experience, they generally work as expected,
    // just be aware of this issue when enabling this option.
    cssSourceMap: false
  }
}
