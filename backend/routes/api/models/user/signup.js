const express = require('express');
const router = express.Router();
const passport = require('passport');

/** POST to sign up user */

router.post('/', passport.authenticate('local-signup', {

        // Redirect to the main page
        successRedirect : process.env.CLIENT_HOST,

        // Redirect back to the signup page when there is an error
        failureRedirect : process.env.CLIENT_HOST+'/signup',

        // Allow flash messages
        failureFlash : true
})
);

module.exports = router;
