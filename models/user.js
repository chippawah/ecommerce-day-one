var mongoose = require('mongoose');
var bcrypt = require('bcrypt');

var schema = new mongoose.Schema({
  username: {type: String, required: true, index: true},
  password: {type: String, required: true},
  cart: {type: String, ref: 'Cart'},
  orders: [{type: String, ref: 'Order'}]
})

schema.pre('save', function(next){
  user = this
  bcrypt.genSalt(12, function(err, salt){
    bcrypt.hash(user.password, salt, function(err, hash){
      user.password = hash;
      next();
    })
  })
});

module.exports = mongoose.model('User', schema)