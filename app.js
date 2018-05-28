var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose')
var sessions = require('client-sessions')
var cons = require('consolidate');
var cors = require('cors')

require('dotenv').config()

var indexRouter = require('./routes/index');

var auth = require('./routes/auth')
var api = require('./routes/api')

var app = express();

var dbURL = process.env.dbURL

mongoose.connect(dbURL, (err, res) => {
    if(err){
      console.log('Cannot Connect to DB')
      return
    }
    console.log('Connected to DB Successfully')
})

// view engine setup
app.engine('html', cons.mustache)
app.set('view engine', 'html');
app.set('views', path.join(__dirname, 'views'));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(sessions ({
    cookieName: 'session',
    secret: process.env.secret,
    duration: 24*60*60*1000,
    activeDuration: 30*60*1000  
}))

app.use('/', indexRouter);
app.use('/auth', auth)
app.use('/api', api)

// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
})

app.use((err, req, res, next) => {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
})

app.use(cors({origin:true,credentials: true}))

module.exports = app;
