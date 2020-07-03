<!--
 * @Author: Q-H-N
 * @Date: 2020年07月03日11时23分17秒
 * @LastEditTime: 2020年07月03日16时14分48秒
 * @LastEditors: Q-H-N
 * @Description: 
 * @平凡的代码
--> 
<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    font-size: 500px;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
