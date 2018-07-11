<template>
    <div class="row">
      <div class="col-sm-3" v-for="shop in shops">
        <shop-card :title="shop.name" :photos="shop.photos" :id="shop.place_id" :icon="shop.icon"></shop-card>
      </div>
    </div>
</template>

<script>
import Vue from 'vue';
import ShopCard from './ShopCard.vue';
Vue.component('shop-card', ShopCard);

export default {
  props: {
    shops: Array,
  }
}
</script>
