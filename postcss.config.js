/*
 * @Author: Q-H-N
 * @Date: 2020年06月01日14时18分32秒
 * @LastEditTime: 2020年07月03日16时12分39秒
 * @LastEditors: Q-H-N
 * @Description: 
 * @平凡的代码
 */ 
module.exports = {
    plugins: {
      autoprefixer: {
        browsers: [
          'Android >= 4.0',
          'iOS >= 8'
        ]
      },
      'postcss-pxtorem': {
        rootValue: 100,
        propList: ['*'],
      },
      // 'postcss-px2rem':{
      //   remUnit: 37.5
      // }
    }
  }
