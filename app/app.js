'use strict';

// Declare app level module which depends on views, and components
var yogaApp =  angular.module('yogaApp', [
  'ui.router',
  'yogaApp.home',
  'yogaApp.workshops',
  'yogaApp.contact'
])
.controller('appCtrl', ['$scope', function($scope) {

 	$scope.showContactUs = function() {
 		$scope.showContactUsBoolean = false;
 		if (location.hash == '#/contact')
 		{
 			$scope.showContactUsBoolean = true;
 		}
 		return $scope.showContactUsBoolean;
 	};
 	
}])
.config(function($stateProvider, $urlRouterProvider) {
  	$urlRouterProvider.otherwise("/home");

	$stateProvider
		.state('home', {
			url: "/home",
			templateUrl: "app/home/home.html",
			controller: "homeCtrl"
		})

		.state('hatha', {
			url: "/hatha",
			templateUrl: "app/hatha/hatha.html"
		})
		
		.state('ashtanga', {
			url: "/ashtanga",
			templateUrl: "app/ashtanga/ashtanga.html"
		})
		
		.state('vinyasa', {
			url: "/vinyasa",
			templateUrl: "app/vinyasa/vinyasa.html"
		})

		.state('workshops', {
			url: "/workshops",
			templateUrl: "app/workshops/workshops.html"
		})
		
		.state('contact', {
			url: "/contact",
			templateUrl: "app/contact/contact.html"
		})
});
