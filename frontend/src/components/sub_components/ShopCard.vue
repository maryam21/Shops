<template>
    <div class="card" style="width: 18rem;">
        <img class="card-img-top" :src="url" alt="No Image">
        <div class="card-body">
            <h5 class="card-title">{{ title }}</h5>
            <p v-if="photos" v-html="photos[0].html_attributions[0]"></p>
            <a href="#" class="btn btn-danger">Dislike</a>
            <button v-on:click="addToFavorites" class="btn btn-success">Like</button>
        </div>
    </div>  
</template>

<script>
import Favorites from '../../services/shop/Favorites';

import Shops from '../../services/shop/Shops'
    export default {
        data() {
            return {
                url: this.icon
            }
        },
        props: {
            title: String,
            photos: Array,
            id: String,
            icon: String
        },
        methods: {
            async addToFavorites() {
                /** Call the addShop method that will do the api call and return the result */
                const response = await Favorites.addShop(this.id)
            },
             async getPhoto(reference) {
                const response = await Shops.fetchPhoto(reference)
                this.url = response.data
            }
        },
        created() {
            if (this.photos){
                this.getPhoto(this.photos[0].photo_reference) 
            }
        }
    }
</script>

<style scoped>
    img {
        height: 150px;
    }
    .card {
        margin: 10px;
    }
</style>