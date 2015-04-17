'use strict';

// Declare app level module which depends on views, and components
var yogaApp =  angular.module('yogaApp', [
  'ui.router',
  'yogaApp.home',
  'yogaApp.workshops',
  'yogaApp.contact',
  'yogaApp.workshopService'
 ])
.directive('userinfo', function() {
	var directive = {};
	directive.restrict = 'E'; /* restrict this directive to elements */
	directive.template = "User: {{user.firstName}} {{user.lastName}}";
	return directive;
})
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
			templateUrl: "app/controllers/home/home.html",
			controller: "homeCtrl"
		})

		.state('hatha', {
			url: "/hatha",
			templateUrl: "app/controllers/hatha/hatha.html"
		})
		
		.state('ashtanga', {
			url: "/ashtanga",
			templateUrl: "app/controllers/ashtanga/ashtanga.html"
		})
		
		.state('vinyasa', {
			url: "/vinyasa",
			templateUrl: "app/controllers/vinyasa/vinyasa.html"
		})

		.state('workshops', {
			url: "/workshops",
			templateUrl: "app/controllers/workshops/workshops.html"
		})
		
		.state('contact', {
			url: "/contact",
			templateUrl: "app/controllers/contact/contact.html"
		})
});
