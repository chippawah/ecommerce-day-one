var mongoose = require('mongoose');
var product = require('./product.js')

var schema = new Mongoose.Schema({
  createdAt: {type: Date, required: true},
  user: {type: String, ref: 'User'},
  products: [{product.Schema}]
})

module.exports = mongoose.model('Order', schema);