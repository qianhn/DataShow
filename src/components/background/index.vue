<!--
 * @Author: Q-H-N
 * @Date: 2020年07月03日17时02分32秒
 * @LastEditTime: 2020年07月07日09时03分32秒
 * @LastEditors: Q-H-N
 * @Description: 背景图组件 制作
 * @平凡的代码
-->
<template>
    <div :style="renderStyle" class = "warrper-container">
        <div class ="container"> 
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        // 背景宽度
        width: {
            type: String,
            default: '100%'
        },
        // 背景高度 支持所有正常的 css 写法
        height: {
            type: String,
            default: '300px'
        },
        // 如果没有图片时该属性生效
        color: {
            type: String,
            default: '#EFEFEF'
        },
        // 背景图片
        backUrl: {
            type: String,
            default: ''
        }
    },
    data() {
        return {}
    },
    components: {},
    methods: {
        // renderStyle() {
        //     return {}
        // }
    },
    computed: {
        renderStyle: {
            get() {
                return {
                    width: this.width,
                    height: this.height,
                    ['background-color']: this.backUrl ? 'unset' : this.color,
                    ['background-image']: this.backUrl ? 'unset' : this.backUrl,
                    ['background-repeat']:'no-repeat',
                    ['background-size']:'100%', 
                    ['background-position']:'center center'
                }
            }
        }
    },
    watch: {},
    created() {},
    mounted() {},
    destoryed() {}
}
</script>
<style lang="less" scoped>
.warrper-container {
    position: relative;
    &::after,::before{
        position: absolute;
        width: 10px;
        height: 10px;
        border:solid 1px #000
    }
    .container{
        position: relative;
    }
}
</style>
