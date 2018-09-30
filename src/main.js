// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/css/main.css'
//加载js
import "./assets/js/jquery.min.js";
import "./assets/js/jquery.scrolly.min.js";
import "./assets/js/jquery.scrollex.min.js";
import "./assets/js/skel.min.js";
//import "./assets/js/util.js";
import "./assets/js/main.js";
//vue使用axios
import axios from 'axios';
Vue.prototype.axios = axios;

Vue.config.productionTip = false

import * as filters from './assets/js/filters.js'
Object.keys(filters).forEach(key => {
    Vue.filter(key, filters[key])
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
