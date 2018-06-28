import Vue from 'vue'
import App from './App.vue'
import NavBar from './components/NavBar.vue';

Vue.component('nav-bar', NavBar);

new Vue({
  el: '#app',
  render: h => h(App)
})
