var express = require('express');
var app = express();
var routeapi = require('./app/routes/index');
app.use('/api', routeapi);
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    res.status(404);
    res.json(err.message);
});
module.exports = app;
