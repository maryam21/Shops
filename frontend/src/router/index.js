import Vue from 'vue';
import VueRouter from 'vue-router';

import App from '../components/App.vue';
import SignUp from '../components/SignUp.vue';
import Login from '../components/Login.vue';

/** To make navbar available to all components  */

import NavBar from '../components/NavBar.vue';
Vue.component('nav-bar', NavBar);

Vue.use(VueRouter);

/** Define routes*/

const routes = [
  {
    component: App,
    path: '/'
  },
  {
    component: SignUp,
    path: '/signup'
  },
  {
    component: Login,
    path: '/login'
  }
];

/** Create the router instance with the `routes` option */

const router = new VueRouter({
    // History mode removes hashs from paths
    mode: 'history',
    routes
});

/** Create the root instance and then mount it */

new Vue({
  router: router
}).$mount('#app');
