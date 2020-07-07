<!--
 * @Author: Q-H-N
 * @Date: 2020年07月03日16时53分42秒
 * @LastEditTime: 2020年07月07日14时08分29秒
 * @LastEditors: Q-H-N
 * @Description: 
 * @平凡的代码
-->
<template>
    <div>
         <vue-particles color="#dedede"></vue-particles>
    </div>
</template>

<script>
import pubSub from '../../utils/publish-subcribe';
let ps  = new pubSub(); 
ps.on('ceshi',(key)=>{
    console.log(key)
})
ps.emit('ceshi',3213321312)
ps.emit('ceshi','dsa')
export default {
    data() {
        return {}
    },
    components: {
        
    },
    methods: {},
    computed: {},
    watch: {},
    created() {},
    mounted() {},
    destoryed() {}
}
</script>
<style lang="less" scoped></style>
