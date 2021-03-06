import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import routerConfig from './routers';
import store from './vuex/store';
import FastClick from 'fastclick';

window.addEventListener('load', ()=> {
  FastClick.attach(document.body);
})

Vue.use(VueRouter);
Vue.use(VueResource);

//router config
const router = new VueRouter({routes: routerConfig})

//api config
import './api';

/* eslint-disable no-new */
new Vue({
  router,
  el: '#app',
  template: '<App/>',
  store,
  render: h=>h(App)
})
