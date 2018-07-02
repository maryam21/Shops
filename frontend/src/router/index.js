import Vue from 'vue';
import VueRouter from 'vue-router';

import App from '../components/App.vue';
import Login from '../components/Login.vue';
import NavBar from '../components/NavBar.vue';
import ShopCard from '../components/ShopCard.vue';

Vue.component('nav-bar', NavBar);
Vue.component('shop-card', ShopCard);

Vue.use(VueRouter);

const routes = [
  { path: '/', component: App },
  { path: '/login', component: Login }
];

const router = new VueRouter({
    mode: 'history',
    routes
});

const app = new Vue({
  router: router
}).$mount('#app');
