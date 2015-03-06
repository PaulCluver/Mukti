'use strict';

// Declare app level module which depends on views, and components
angular.module('muktiApp', [
  'ngRoute',
  'muktiApp.view1'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);
