import Vue from 'vue';
import Antd from 'ant-design-vue';
import App from './App';
import 'ant-design-vue/dist/antd.css';
import router from './router'
import axios from 'axios'

axios.defaults.baseURL='http://localhost:8081';
axios.defaults.withCredentials=true;
Vue.prototype.axios = axios;
Vue.config.productionTip = false;
Vue.use(Antd);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
