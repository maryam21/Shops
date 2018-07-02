<template>
    <div class="card" style="width: 18rem;">
        <img v-if="photos" class="card-img-top" :src="url" alt="Card image cap">
        <div class="card-body">
            <h5 class="card-title">{{ title }}</h5>
            <a href="#" class="btn btn-danger">Dislike</a>
            <a href="#" class="btn btn-success">Like</a>
        </div>
    </div>  
</template>

<script>
    export default {
        data () {
            return {
                url: "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference="+this.photos[0].photo_reference+"&sensor=false&key="+process.env.API_KEY
            };
        },
        props: {
            title: String,
            photos: Array
        }
    }
</script>