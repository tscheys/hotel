var express = require('express');
var routes = require('./routes');

var bodyParser = require('body-parser');

var Quotes = require('./db');
var app = express();

// serve static files
app.use(express.static('client'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.post('/quote', function(req, res) {
  console.log(req.body);
  Quotes.create(req.body, function (err, small) {
    if (err) {
      console.log(err); 
    } else {
      console.log('saved');
      console.log(small);
    }
  })
});

app.get('/quotes', function(req, res) {
  Quotes.find({}, function (err, result) {
    if(err) {
      console.log(err);
    } else {
      res.json(result);
    }
  });
});

app.listen(8080);


module.exports = app;
