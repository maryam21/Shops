import Vue from 'vue';
import VueRouter from 'vue-router';

import App from '../components/App.vue';
import SignUp from '../components/SignUp.vue';

/** To make navbar available to all components  */

import NavBar from '../components/NavBar.vue';
Vue.component('nav-bar', NavBar);

Vue.use(VueRouter);

/** Define routes*/

const routes = [
  { path: '/', component: App },
  { path: '/signup', component: SignUp }
];

/** Create the router instance with the `routes` option */

const router = new VueRouter({
    mode: 'history',  // history mode removes hashs from paths
    routes
});

/** Create the root instance and then mount it */

const app = new Vue({
  router: router
}).$mount('#app');
