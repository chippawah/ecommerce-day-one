var Cart = require('../models/cart');
var Product = require('../models/product');
var updateUser = require('./userCtrl').updateUser;
var q = require('q')

module.exports = {
  addCart: function(){
    var dfd = q.defer()
    var cart = new Cart({products: [], total: 0})
    cart
      .save()
      .then(function(results){
        console.log('Cart save results:', results)
        dfd.resolve(results);
      })
    return dfd.promise
  },
}