/*
 * @Author: Q-H-N
 * @Date: 2020年07月03日11时23分17秒
 * @LastEditTime: 2020年07月03日16时54分27秒
 * @LastEditors: Q-H-N
 * @Description: 
 * @平凡的代码
 */ 
import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "login",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/login/index.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
