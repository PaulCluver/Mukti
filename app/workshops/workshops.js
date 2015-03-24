'use strict';

angular.module('yogaApp.workshops', ['ui.router'])
	
	.controller('workshopCtrl', ['$scope', function($scope) 
	{
		$scope.workshops = [
			{
				name: 'Ashtanga Arm Balances',
				date: '01/05/2015',
				time: '10:30 am',
				location: 
				{
					address: '58 Gordon Road',
					suburb: 'Morningside',
					city: 'Durban',
					province: 'Kwa-zulu Natal'
				}
			},
			{
				name: 'Brilliant Back Bends',
				date: '01/06/2015',
				time: '08:30 am',
				location: 
				{
					address: '58 Gordon Road',
					suburb: 'Morningside',
					city: 'Durban',
					province: 'Kwa-zulu Natal'
				}
			}
		];
	}]
);