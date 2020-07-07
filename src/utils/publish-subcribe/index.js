/*
 * @Author: Q-H-N
 * @Date: 2020年07月07日11时30分58秒
 * @LastEditTime: 2020年07月07日14时09分20秒
 * @LastEditors: Q-H-N
 * @Description:
 * @平凡的代码
 */

// 发布订阅模式 原型
class pubSub {
    constructor() {
        // 事件缓存对象
        this.eventList = {}
    }
    // 监听事件
    on(key, fn) {
        if(typeof fn  !== 'function'){
            console.error('缺少执行事件的回调函数')
            return
        }
        if (!this.eventList[key]) {
            this.eventList[key] = []
        }
        this.eventList[key].push(fn)
    }
    // 广播事件
    emit(key, ...arg) {
        if(!this.eventList[key] || this.eventList.length == 0){
            return false
        }
        let keyList = this.eventList[key]
        // 循环所有 缓存事件
        keyList.forEach(fn => {
            // 调用回调函数
            fn.apply(this,arg)
            // debugger
        })
    }
    // 移除监听事件
    remove(key){
        this.eventList[key] = [] 
    }
}
export default pubSub