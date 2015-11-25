var express = require('express');
var routes = require('./routes');
var app = express();

// serve static files
app.use(express.static('client'));

app.listen(8080);

module.exports = app;
