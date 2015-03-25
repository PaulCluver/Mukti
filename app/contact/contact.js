'use strict';

angular.module('yogaApp.contact', ['ui.router'])

.controller('contactCtrl', ['$scope', function($scope) {	

	$scope.master = {};

	$scope.update = function(user) {
		$scope.master = angular.copy(user);
	};

	$scope.reset = function(form) {
		console.log(1);
		if (form) {
			form.$setPristine();
			form.$setUntouched();
		}
		$scope.user = angular.copy($scope.master);
	};

	$scope.reset();

}]);

