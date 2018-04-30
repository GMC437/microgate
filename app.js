var express = require('express');
var app = express();
var db = require('./mongodb');

var UserRoute = require('./app/routes/UserRoute');
app.use('/users', UserRoute);

app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'})
});

module.exports = app;