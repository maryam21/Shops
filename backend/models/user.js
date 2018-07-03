const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/** Define the schema for our user model */

const UserSchema = new Schema({
 email: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true,
  },
});

/** Create the model for users and expose it to our app */

const User = mongoose.model('User', UserSchema);
module.exports = User;
