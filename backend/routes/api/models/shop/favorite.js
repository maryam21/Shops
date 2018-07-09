const express = require('express');
const router = express.Router();

/** POST to add shop to favorites. */

router.post('/:id', function(req, res) {
    console.log(req.params.id)
});

module.exports = router;
