/*
 * @Author: Q-H-N
 * @Date: 2020年07月03日11时23分17秒
 * @LastEditTime: 2020年07月03日16时59分33秒
 * @LastEditors: Q-H-N
 * @Description: 
 * @平凡的代码
 */ 
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueParticles from 'vue-particles';
import elementUi from  'element-ui'
import './styles/minReset.less'
// Vue.use(VueParticles)
Vue.config.productionTip = false;
Vue.use(VueParticles)
Vue.use(elementUi);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
