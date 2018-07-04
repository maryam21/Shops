const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

/** Define the schema for our user model */

const UserSchema = new Schema({
 email: {
    required: true,
    type: String,
    unique: true
  },
  password: {
    required: true,
    type: String
  }
});

/** Generating a password hash */

UserSchema.methods.generateHash = function(password) {

    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

/** Check if password is valid */

UserSchema.methods.verifyPassword = function(password) {

    return bcrypt.compareSync(password, this.password);
};

/** Create the model for users and expose it to our app */

const User = mongoose.model('User', UserSchema);

module.exports = User;
