'use strict';

angular
  .module('angprojApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about_us.html',
        controller: 'MainCtrl'
      })
      .when('/contact', {
        templateUrl: 'views/contact_us.html',
        controller: 'MainCtrl'
      })
      .when('/task', {
        templateUrl: 'views/task.html',
        controller: 'TaskCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
//$scope.constant('defaultStatus', 'ACTIVE');
  
