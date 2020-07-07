/*
 * @Author: Q-H-N
 * @Date: 2020年07月03日11时35分35秒
 * @LastEditTime: 2020年07月07日14时10分44秒
 * @LastEditors: Q-H-N
 * @Description:
 * @平凡的代码
 */

const port = process.env.port || 10099
const path = require('path')

function resolve(dir) {
    // __dirname:总是指向被执行 js 文件的绝对路径
    return path.join(__dirname, dir)
}
logs()
module.exports = {
    // 出口文件夹 命名
    outputDir: 'dist',
    // outputDir: process.env.NODE_ENV === 'production' ?  'dist': 'ych5',
    // publicPath: process.env.NODE_ENV == 'production' ? './': '/',
    //
    publicPath: './',
    productionSourceMap: false, // 生产环境是否 生成SourceMap
    filenameHashing: true,
    // title 设置等
    devServer: {
        port,
        // 启动之后 自动打开浏览器
        open: true,
        // 报错的时候全屏显示错误
        overlay: {
            warnings: false,
            errors: true
        },
        // host:'0.0.0.0',
        // hot: true,
        // hotOnly: false,
        // https: false,
        //代理
        proxy: {
            '/dryb': {
                target: '',
                ws: false,
                changeOrigin: true
            }
        }
    },
    css: {},
    configureWebpack: {
        // 设置文件别名
        resolve: {
            alias: {
                '@': resolve('src'),
                assets: resolve('src/assets'),
                store: resolve('src/store'),
                views: resolve('src/views'),
                api: resolve('src/api'),
                components: resolve('src/components'),
                utils: resolve('src/utils'),
                styles: resolve('src/styles')
            }
        }
    }
}
function logs(){
    console.log(process.env.VUE_APP_NODE_ENV + '环境启动')
    console.log(process.env.VUE_APP_PORT + '端口启动')
}