import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import axios from 'axios'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';


Vue.use(ElementUI);
Vue.config.productionTip = false;
//使用axios
Vue.prototype.$http=axios;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
