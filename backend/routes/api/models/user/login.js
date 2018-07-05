const express = require('express');
const router = express.Router();
const passport = require('passport');

/** POST to login user */

router.post('/', passport.authenticate('local-login', {

        // Redirect to the main page
        successRedirect : process.env.CLIENT_HOST,

        // Redirect back to the login page when there is an error
        failureRedirect : process.env.CLIENT_HOST+'/login',

        // Allow flash messages
        failureFlash : true
})
);

module.exports = router;