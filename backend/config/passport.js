const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/user');

/** Expose this function to our app */

module.exports = function(passport) {
    
    /** Serialize the user for the session */

    passport.serializeUser(function(user, done) {

        done(null, user.id);
    });

    /** Deserialize the user */

    passport.deserializeUser(function(id, done) {

        User.findById(id, function(err, user) {

            done(err, user);
        });
});

/** Local signup strategy */

passport.use('local-signup', new LocalStrategy({

        // We will use email instead of username
        usernameField : 'email',
        passwordField : 'password',
        // Allows us to pass back the entire request to the callback
        passReqToCallback : true
    },
    function(req, email, password, done) {

        /** Check if the user trying to signup already exists */

        User.findOne({ 'email' :  email }, function(err, user) {

            // Return the error if there are any
            if (err)
                return done(err);

            // Check to see if there's a user with that email
            if (user)
                return done(null, false, req.flash('message', 'Email is already in use.'));

                // Create the user if there's no user with that email
            let newUser = new User();

            // Set the user's local credentials
            newUser.email    = email;
            newUser.password = newUser.generateHash(password);

            // Save user
            newUser.save(function(err) {
            if (err)
                throw err;

            return done(null, newUser);
            });
        });    
   }));
};
