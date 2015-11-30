var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;
// create quote schema
var quoteSchema = new mongoose.Schema({ 
  name: String,
  nights: String,
  babybed: Boolean,
  adultCouple: Number,
  adultFamily: Number,
  kids12: Number,
  kids6: Number,
  babies: Number
  });

var Quotes = mongoose.model('Quotes', quoteSchema);

module.exports = Quotes;

