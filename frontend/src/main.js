import Vue from 'vue'
import App from './components/App.vue'
import NavBar from './components/NavBar.vue';
import ShopCard from './components/ShopCard.vue';

Vue.component('nav-bar', NavBar);
Vue.component('shop-card', ShopCard);

new Vue({
  el: '#app',
  render: h => h(App)
})
