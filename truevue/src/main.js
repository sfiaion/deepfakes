// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 导入Element UI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import store from '@/store'
import axios from 'axios'

//配置
Vue.use(ElementUI);
Vue.config.productionTip = false

// 配置axios
Vue.prototype.$http = axios;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router, // 挂载路由
  store, // 挂载状态管理
  components: { App },
  render: h => h(App),
  template: '<App/>'
}).$mount('#app');
