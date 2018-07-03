<template>
  <div id="app">
    <nav-bar></nav-bar>
    <div class="row">
      <div class="col-sm-3" v-for="shop in shops">
        <shop-card :title="shop.name" :photos="shop.photos"></shop-card>
      </div>
    </div>
  </div>
</template>

<script>
import ShopsService from '../services/ShopsService';
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
      const response = await ShopsService.fetchShops(latitude, longitude)
      this.shops = response.data.results;
    }
  }
}
</script>

<style lang="scss">
  div {
    padding: 10px;
  }
</style>
