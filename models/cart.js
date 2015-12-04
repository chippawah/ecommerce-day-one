var mongoose = require('mongoose');

var schema = new mongoose.Schema({
  products: [{
    product:{type: String, ref: 'Product'},
    qty: {type: Number}
  }],
  total: {type: Number}
})

module.exports = mongoose.model('Cart', schema)