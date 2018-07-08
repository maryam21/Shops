const express = require('express');
const router = express.Router();
const passport = require('passport');

/** POST request to login user */

router.post('/', passport.authenticate('local-login'), 

    // Executed passport login succeeds
    function(req, res) {
        res.send({message: 'Login successful'})
    }
);

module.exports = router;