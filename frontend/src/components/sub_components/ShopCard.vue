<template>
    <div class="card" style="width: 18rem;">
        <img class="card-img-top" :src="url" alt="No Image">
        <div class="card-body">
            <h5 class="card-title">{{ title }}</h5>
            <a href="#" class="btn btn-danger">Dislike</a>
            <button v-on:click="" class="btn btn-success">Like</button>
        </div>
    </div>  
</template>

<script>
    export default {
        props: {
            title: String,
            photos: Array,
        },
        computed: {
         url() {
           if (this.photos)
              return "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference="+this.photos[0].photo_reference+"&sensor=false&key="+process.env.API_KEY ;
           return "";
         }
        }
    }
</script>

<style scoped>
    img {
        height: 150px;
    }
</style>