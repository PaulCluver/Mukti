'use strict';

angular.module('yogaApp.classes', ['ui.router'])
	
	.controller('classesCtrl', ['$scope', 'ClassesService', function($scope, ClassesService) 
	{
		$scope.classes = ClassesService.getAllClasses();
		$scope.orderByField = 'name';
  		$scope.reverseSort = false;
	}]
);

