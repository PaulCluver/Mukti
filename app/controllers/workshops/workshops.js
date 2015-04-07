'use strict';

angular.module('yogaApp.workshops', ['ui.router'])
	
	.controller('workshopCtrl', ['$scope', 'WorkshopService', function($scope, WorkshopService) 
	{
		$scope.workshops = WorkshopService.getAllWorkshops();
		$scope.orderByField = 'name';
  		$scope.reverseSort = false;

		// $scope.getAllWorkshops = function()
		// {
		// 	$scope.workshops =  WorkshopService.getAllWorkshops();
		// }
	}]
);

