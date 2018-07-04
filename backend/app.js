const createError = require('http-errors');
const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');

/** Require and configure dotenv and specify relative path to .env */

require('dotenv').config({ path: '../.env' });

/** Connect to database using mongoose */

mongoose.connect(process.env.DATABASE);

const shopsRouter = require('./routes/api/models/shop/shops');
const signupRouter = require('./routes/api/models/user/signup');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors({
  origin: process.env.CLIENT_HOST
}));

app.use('/api/models/shop/shops', shopsRouter);
app.use('/api/models/user/signup', signupRouter);

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
