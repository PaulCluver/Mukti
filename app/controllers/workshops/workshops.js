'use strict';

angular.module('yogaApp.workshops', ['ui.router'])
	
	.controller('workshopCtrl', ['$scope', 'WorkshopService', function($scope, WorkshopService) 
	{
		$scope.sortOrder = 'customSort';
		$scope.workshops = WorkshopService.getAllWorkshops();
		// $scope.getAllWorkshops = function()
		// {
		// 	$scope.workshops =  WorkshopService.getAllWorkshops();
		// }
	}]
);

