var createError = require('http-errors');
var express = require('express');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
var mongoose = require('mongoose');
var passport = require('passport');
var session = require('express-session');
const MongoStore = require('connect-mongo')(session);

/** Require and configure dotenv and specify relative path to .env */

require('dotenv').config({ path: '../.env' });

/** Load passport configuration */

require('./config/passport')(passport);

/** Connect to database using mongoose */

mongoose.connect(process.env.DATABASE);

const shopsRouter = require('./routes/api/models/shop/shops');
const signupRouter = require('./routes/api/models/user/signup');
const loginRouter = require('./routes/api/models/user/login');
const photoRouter = require('./routes/api/models/shop/photo');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors({ origin: process.env.CLIENT_HOST , credentials: true }));
app.use(cookieParser(process.env.SESSION_SECRET));
app.use(require('body-parser').urlencoded({ extended: true })); 
app.use(session({ secret: process.env.SESSION_SECRET , resave: false, saveUninitialized: false, store: new MongoStore({ mongooseConnection: mongoose.connection }) })); // Session options
app.use(passport.initialize());
app.use(passport.session()); // For persistent login sessions

app.use('/api/models/shop/shops', shopsRouter);
app.use('/api/models/user/signup', signupRouter);
app.use('/api/models/user/login', loginRouter);
app.use('/api/models/shop/photo', photoRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // set the response status to the error status
  res.status(err.status || 500);
});

module.exports = app;
