import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
window.$ = window.jQuery = require('jquery');
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/css/clean-blog.css'
import './assets/vendor/fontawesome-free/css/all.min.css'


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
