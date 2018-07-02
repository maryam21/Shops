<template>
  <div id="app">
    <nav-bar></nav-bar>
    <div class="row">
      <div class="col-sm-3" v-for="shop in shops">
        <shop-card></shop-card>
      </div>
    </div>
  </div>
</template>

<script>
import ShopsService from './services/ShopsService';
export default {
  name: 'app',
  data () {
    return {
      shops: []
    }
  },
  created () {
    navigator.geolocation.getCurrentPosition(
      async position => {
        const response = await ShopsService.fetchShops(position.coords.latitude, position.coords.longitude)
        this.shops = response.data.results;
      },
      error => console.warn(`ERROR(${error.code}): ${error.message}`)
    );
  },
}
</script>

<style lang="scss">
  div {
    padding: 10px;
  }
</style>
