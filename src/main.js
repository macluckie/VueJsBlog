import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
window.$ = window.jQuery = require('jquery');
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './../public/css/clean-blog.css'
import './../public/vendor/fontawesome-free/css/all.min.css'

Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
