import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import elementUI from 'element-ui';
import './common/scss/base.scss';
import 'element-ui/lib/theme-chalk/index.css';
import globalApi from './common/commonHttp/api'
Vue.use(elementUI)
Vue.use(globalApi)
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
