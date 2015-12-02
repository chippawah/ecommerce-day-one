angular.module('ecommerce').controller('homeCtrl', function($scope, productService){
  var getProducts = function(){
    productService.getProducts().then(function(res){
      $scope.products = res.data
    })
  }()
})