var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var productCtrl = require('./controllers/productCtrl.js');
var userCtrl = require('./controllers/userCtrl')
var cartCtrl = require('./controllers/cartCtrl')

var app = express();
var port = 8080

mongoose.connect('mongodb://localhost/ecommerce')
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'))
app.listen(port, function(){
  console.log('Listening on port:' + port)
})

app.get('/products', productCtrl.getProducts);
app.post('/products', productCtrl.addProduct);
app.put('/products/:id', productCtrl.updateProduct);
app.delete('/products/:id', productCtrl.deleteProduct);

app.post('/cart/:id', cartCtrl.addCart)


app.get('/users/:username', userCtrl.getUser);
app.post('/users', userCtrl.addUser);
app.put('/users/:id', userCtrl.updateUser)
