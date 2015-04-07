'use strict';

angular.module('yogaApp.home', ['ui.router'])

.controller('homeCtrl', ['$scope', '$q', function($scope, $q) {

 	$scope.showContactUs = function() {
 		
 		 $scope.myBoolean = false;

 		 if (location.path() == 'contact') {
 		 	$scope.myBoolean = true; 
 		 }
 		 return $scope.myBoolean;
 	};
}]);