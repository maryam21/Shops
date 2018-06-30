var express = require('express');
var router = express.Router();

/* POST nearby shops using user current position. */
router.post('/', function(req, res, next) {
    res.send(
    [{
      title: "shops",
      description: "all",
      body: req.body
    }]
    )
    console.log(req.body);
});

module.exports = router;
