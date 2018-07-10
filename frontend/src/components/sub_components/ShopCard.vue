<template>
    <div class="card" style="width: 18rem;">
        <img class="card-img-top" :src="url" alt="No Image">
        <div class="card-body">
            <h5 class="card-title">{{ title }}</h5>
            <p v-if="photos" v-html="photos[0].html_attributions[0]"></p>
            <a href="#" class="btn btn-danger">Dislike</a>
            <a href="#" class="btn btn-success">Like</a>
        </div>
    </div>  
</template>

<script>
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
            icon: String
        },
        created() {
            if (this.photos){
                this.getPhoto(this.photos[0].photo_reference) 
            }
        },
        methods: {
            async getPhoto(reference) {
                const response = await Shops.fetchPhoto(reference)
                this.url = response.data
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