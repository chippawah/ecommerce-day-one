var User = require('../models/user');
var cartCtrl = require('./cartCtrl')

module.exports = {
  addUser: function(req, res){
    cartCtrl.addCart()
      .then(function(cart){
        req.body.cart = cart._id
        req.body.orders = []
        var user = new User(req.body)
        user
          .save()
          .then(function(results){
            console.log('User saved with result:', results);
            res.status(201)
          })
      })
  },
  getUser: function(req, res){
    User
      .findOne({username: req.params.username}, function(err, user){
        if(err){
          res.status(500).send(err)
        } else{
          console.log(user);
          res.status(200).send(user)
        }
      })
  },
  updateUser: function(req, res){
    User.update({_id: req.params.id}, req.body, function(err, results){
      console.log('User update results', results);
      res.status(200).end()
    })
  }
}