<template>
  <div id="app">
    <nav-bar></nav-bar>
    <router-view></router-view>
  </div>
</template>

<script>
import Vue from 'vue';
import NavBar from './sub_components/NavBar.vue';
Vue.component('nav-bar', NavBar);
export default {
  name: 'app'
};
</script>

<style lang="scss">
  #app {
    padding: 10px;
  }
</style>
