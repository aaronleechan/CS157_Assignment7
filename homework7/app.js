var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');
var index = require('./app_server/routes/index');
var app = express();

// MongoDB setup
var mongo = require('mongodb');
var monk = require('monk');
var db = monk('localhost:27017/sharenotes');

//View engine setup
app.set('views', path.join(__dirname, 'app_server', 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

//Make the database accessible to the router.
app.use(function(req, res, next)
{
    req.db = db;
    next();
});

app.use('/', index);

module.exports = app;
app.listen(3000);
