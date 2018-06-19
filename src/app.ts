var express = require('express');
var app = express();

var routeapi = require('./app/routes/index')


app.use('/api', routeapi);


module.exports = app;