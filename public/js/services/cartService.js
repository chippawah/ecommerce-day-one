angular.module('ecommerce').service('cartService', function($http, userService){
  this.addItem = function(itemId){
    return $http({
      method: 'PUT',
      url: '/cart/' + itemId + '/' + userService.getUserId(),
    })
  }
  this.removeItem = function(itemId){
    return $http({
      method: 'DELETE',
      url: '/cart/' + itemId + '/' + userService.getUserId()
    })
  }
})