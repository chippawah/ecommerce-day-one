var Product = require('../models/product');

module.exports = {
  addProduct: function(req, res){
    var product = new Product(req.body)
    product
      .save()
      .then(function(results){
        console.log(results);
        res.status(201).end();
    })
  },

  getProducts: function(req, res){
    Product
      .find()
      .exec()
      .then(function(results){
        console.log(results);
        res
          .status(200)
          .send(results);
      })
  },
  updateProduct: function(req, res){
    Product
      .update({_id: req.params.id}, req.body, function(results){
        console.log(results);
        res.status(200).end();
      })
  },
  deleteProduct: function(req, res){
    Product
      .remove({_id: req.params.id}, function(results){
        console.log('results from delete:', results);
        res.status(204).end();
      })
  }
}