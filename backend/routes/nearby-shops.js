var express = require('express');
var router = express.Router();
const axios = require('axios');

/** Require and configure dotenv and specify relative path to .env */

require('dotenv').config({path: '../.env'});

/* POST nearby shops using user current position. */
router.post('/', function(req, res, next) {
    axios.get(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${req.body[0]},${req.body[1]}&radius=1500&type=shop&keyword=shop&key=${process.env.API_KEY}`)
    .then(response => {
        console.log(response.data);
        res.send(response.data)
    })
    .catch(error => {
        console.log(error);
    });
    console.log(req.body);
});

module.exports = router;
