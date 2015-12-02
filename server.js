var express = require('express');
var mongojs = require('mongojs');
var bodyParser = require('body-parser');

var app = express();
var db = mongojs('ecommerce', ['products']);
var port = 8080

app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'))
app.listen(port, function(){
  console.log('Listening on port:' + port)
})

app.get('/products', function(req, res){
  db.products.find({}, function(err, results){
    if(!err){
      res
        .status(200)
        .send(results)
    } else {
      res
        .status(500)
        .send(err)
    }
  })
})

app.get('/products/:id', function(req, res){
  db.products.find({_id: mongojs.ObjectId(req.params.id)}, function(err, results){
    if(!err){
      res
        .status(200)
        .send(results)
    } else {
      res
        .status(500)
        .send(err)
    }
  })
})

app.post('/products', function(req, res){
  db.products.insert(req.body, function(err, results){
    if(!err){
      res
        .status(200)
        .send(results)
    } else {
      res
        .status(500)
        .send(err)
    }
  })
})

app.put('/products/:id', function(req, res){
  db.products.update({_id: mongojs.ObjectId(req.params.id)}, {$set: req.body}, function(err, results){
    if(!err){
      res
        .status(200)
        .send(results)
    } else {
      res
        .status(500)
        .send(err)
    }
  })
})

app.delete('/products/:id', function(req, res){
  db.products.remove({_id: mongojs.ObjectId(req.params.id)}, function(err, results){
    if(!err){
      res
        .status(200)
        .send(results)
    } else {
      res
        .status(500)
        .send(err)
    }
  })
})