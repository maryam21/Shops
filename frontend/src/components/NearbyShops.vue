<template>
  <div id="app">
    <card-grid :shops="shops"></card-grid>
  </div>
</template>

<script>
import Vue from 'vue';
import Shops from '../services/shop/Shops';
import CardGrid from '../components/CardGrid.vue';
Vue.component('card-grid', CardGrid);

export default {
  name: 'app',
  data () {
    return {
      shops: []
    }
  },
  created () {
    navigator.geolocation.getCurrentPosition(
      position => {

        /** Pass user current position to getShops method to fetch nearby shops */
        this.getShops(position.coords.latitude, position.coords.longitude);
      },
      error => console.warn(`ERROR(${error.code}): ${error.message}`)
    );
  },
  methods: {
    async getShops(latitude, longitude){

      /** Call the fetchShops method that will do the api call and return the result */
      const response = await Shops.fetchShops(latitude, longitude)
      this.shops = response.data.results;
    }
  }
}
</script>
