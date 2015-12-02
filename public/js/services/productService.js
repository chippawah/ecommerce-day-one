angular.module('ecommerce').service('productService', function($http){
  this.getProducts = function(){
    return $http({
      method: 'GET',
      url: '/products'
    })
  }
  this.updateProduct = function(id, product){
    return $http({
      method: 'PUT',
      url: '/products/' + id,
      data: product
    })
  }
  this.deleteProduct = function(id) {
    return $http({
      method: 'DELETE',
      url: '/products/' + id
    })
  }
  this.postProduct = function(product){
    return $http({
      method: 'POST',
      url: '/products',
      data: product
    })
  }
})