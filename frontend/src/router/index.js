import Vue from 'vue';
import VueRouter from 'vue-router';

import App from '../components/App.vue'
import NearbyShops from '../components/NearbyShops.vue';
import SignUp from '../components/SignUp.vue';
import Login from '../components/Login.vue';
import Favorites from '../components/Favorites.vue';

Vue.use(VueRouter);

/** Define routes*/

const routes = [
  {
    component: NearbyShops,
    path: '/'
  },
  {
    component: SignUp,
    path: '/signup'
  },
  {
    component: Login,
    path: '/login'
  },
  {
    component: Favorites,
    path: '/favorites'
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
  el: '#app',
  router: router,
  template: '<App/>',
  components: { App }
}).$mount('#app');
