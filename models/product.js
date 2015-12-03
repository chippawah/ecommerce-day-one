var mongoose = require('mongoose');

var Product = mongoose.model('Product', new mongoose.Schema({
  title: {
    type: String,
    unique: true,
    required: true,
    index: true,
  },
  price: {
    type: Number,
    required: true,
    min: 0
  }
}))

module.exports = Product