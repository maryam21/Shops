const express = require('express');
const router = express.Router();
const passport = require('passport');

/** POST to sign up user */

router.post('/', passport.authenticate('local-signup'),
    // Executed passport signup succeeds
     function(req, res) {
        res.send({message: 'Sign up successful'})
    }
);

module.exports = router;
