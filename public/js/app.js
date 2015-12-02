angular.module('ecommerce', ['ui.router'])
.config(function($urlRouterProvider, $stateProvider){
  $urlRouterProvider.otherwise('/home');
  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: 'templates/home.html',
      controller: 'homeCtrl'
    })
    .state('admin', {
      url: '/admin',
      templateUrl: '/templates/admin.html',
      controller: 'adminCtrl'
    })
})