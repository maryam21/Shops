<template>
    <div class="card" style="width: 18rem;">
        <img class="card-img-top" :src="url" alt="No Image">
        <div class="card-body">
            <h5 class="card-title">{{ title }}</h5>
            <a href="#" class="btn btn-danger">Dislike</a>
            <button v-on:click="addToFavorites" class="btn btn-success">Like</button>
        </div>
    </div>  
</template>

<script>
import Favorites from '../../services/shop/Favorites';

    export default {
        props: {
            title: String,
            photos: Array,
            id: String
        },
        computed: {
         url() {
           if (this.photos)
              return "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference="+this.photos[0].photo_reference+"&sensor=false&key="+process.env.API_KEY ;
           return "";
         }
        },
        methods: {
            async addToFavorites() {
                /** Call the addShop method that will do the api call and return the result */
                const response = await Favorites.addShop(this.id)
            }
        }
    }
</script>

<style scoped>
    img {
        height: 150px;
    }
</style>