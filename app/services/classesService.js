'use strict';

angular.module('yogaApp.classesService', ['ngResource'])
.service('ClassesDataService', function($resource) {
	this.classes =  [
			{
				name: 'Ashtanga',
				description: 'Bacon ipsum dolor sit amet nulla ham qui sint exercitation eiusmod commodo, chuck duis velit. Aute in reprehenderit, dolore aliqua non',
				day: 'Monday, Tuesday',
				time: '18:00 pm',
				duration: 1,
				dropInPrice: 50,
				monthlyPrice: 200,
				location: 
				{
					address: '58 Gordon Road',
					suburb: 'Morningside',
					city: 'Durban',
					province: 'Kwa-zulu Natal'
				}
			},
			{
				name: 'Vinyasa',
				description: 'Bacon ipsum dolor sit amet nulla ham qui sint exercitation eiusmod commodo, chuck duis velit. Aute in reprehenderit, dolore aliqua non',
				day: 'Wednesday, Thursday',
				time: '18:00 pm',
				duration: 1,
				dropInPrice: 50,
				monthlyPrice: 200,
				location: 
				{
					address: '58 Gordon Road',
					suburb: 'Morningside',
					city: 'Durban',
					province: 'Kwa-zulu Natal'
				}
			},
			{
				name: 'Hatha',
				description: 'Bacon ipsum dolor sit amet nulla ham qui sint exercitation eiusmod commodo, chuck duis velit. Aute in reprehenderit, dolore aliqua non',
				day: 'Friday',
				time: '18:00 pm',
				duration: 1,
				dropInPrice: 50,
				monthlyPrice: 200,
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
.service('ClassesService', function(ClassesDataService) {
	this.getAllClasses = function() { 
		return ClassesDataService.classes;
	};
});