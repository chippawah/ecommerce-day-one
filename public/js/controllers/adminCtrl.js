angular.module('ecommerce').controller('adminCtrl', function($scope, productService){
  var getProducts = function(){
    productService.getProducts().then(function(res){
      $scope.products = res.data
    })
  }
  getProducts()

  $scope.postProduct = function(product){
    productService.postProduct(product).then(function(res){
      console.log(res)
      $scope.newProduct = {}
      getProducts()
    })
  }

  $scope.updateProduct = function(id, product){
    var updateObj = {}
    //checking to see if they made edits so we dont update with an empty string
    //if there is an edit then we attach it to the object we want to send to our server for the update
    if(product.title){
      updateObj.title = product.title;
    }
    if(product.price){
      updateObj.price = product.price;
    }
    productService.updateProduct(id, updateObj).then(function(res){
      console.log(res);
      $scope.editedProduct = {};
      getProducts()
    })
  }

  $scope.deleteProduct = function(id) {
    productService.deleteProduct(id).then(function(res){
      console.log(res)
      getProducts()
    })
  }

})