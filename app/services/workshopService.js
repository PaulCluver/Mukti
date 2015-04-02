'use strict';

angular.module('yogaApp.workshopService', ['ngResource'])
.service('WorkshopDataService', function($resource) {
	this.workshops =  [
			{
				name: 'Ashtanga Arm Balances',
				description: 'Bacon ipsum dolor sit amet nulla ham qui sint exercitation eiusmod commodo, chuck duis velit. Aute in reprehenderit, dolore aliqua non',
				date: '1477323623006',
				time: '10:30 am',
				duration: 1,
				price: 250,
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
				description: 'Aute in reprehenderit, dolore aliqua non est magna in labore pig pork biltong. Eiusmod swine spare ribs reprehenderit culpa.',
				date: '1476323623006',
				time: '08:30 am',
				duration: 2,
				price: 500,
				location: 
				{
					address: '58 Gordon Road',
					suburb: 'Morningside',
					city: 'Durban',
					province: 'Kwa-zulu Natal'
				}
			},
			{
				name: 'Restorative Stretching',
				description: 'Eiusmod swine spare ribs reprehenderit culpa.Eiusmod swine spare ribs reprehenderit culpa. Boudin aliqua adipisicing rump corned beef.',
				date: '1471323623006',
				time: '08:30 am',
				duration: 3,
				price: 1000,
				location: 
				{
					address: '58 Gordon Road',
					suburb: 'Morningside',
					city: 'Durban',
					province: 'Kwa-zulu Natal'
				}
			},
			{
				name: 'Breaking your Bandas',
				description: 'Boudin aliqua adipisicing rump corned beef. Eiusmod swine spare ribs reprehenderit culpa. Eiusmod swine spare ribs reprehenderit culpa.',
				date: '1471223623006',
				time: '08:30 am',
				duration: 4,
				price: 2000,
				location: 
				{
					address: '58 Gordon Road',
					suburb: 'Morningside',
					city: 'Durban',
					province: 'Kwa-zulu Natal'
				}
			}
		]; 
})
.service('WorkshopService', function(WorkshopDataService) {
	this.getAllWorkshops = function() { 
		return WorkshopDataService.workshops;
	};
});