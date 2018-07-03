var express = require('express');
var router = express.Router();
const axios = require('axios');

/** Require and configure dotenv and specify relative path to .env */

require('dotenv').config({path: '../.env'});

/* GET nearby shops using user current position. */
router.get('/', function(req, res, next) {

    axios.get(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${req.query.latitude},${req.query.longitude}&rankby=distance&type=shop&keyword=shop&key=${process.env.API_KEY}`)
    .then(response => {

        res.send(response.data)
    })
    .catch(error => {
        console.log(error);
    });
});

module.exports = router;
