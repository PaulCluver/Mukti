'use strict';

// Declare app level module which depends on views, and components
var yogaApp =  angular.module('yogaApp', [
  'ui.router',
  'yogaApp.home',
  'yogaApp.workshops',
  'yogaApp.classes',
  'yogaApp.login',
  'yogaApp.logout',
  'yogaApp.register',
  'yogaApp.contact',
  'yogaApp.workshopService',
  'yogaApp.classesService'
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
			templateUrl: "controllers/home/home.html",
			controller: "homeCtrl"
		})

		.state('hatha', {
			url: "/hatha",
			templateUrl: "controllers/yoga/hatha/hatha.html"
		})
		
		.state('ashtanga', {
			url: "/ashtanga",
			templateUrl: "controllers/yoga/ashtanga/ashtanga.html"
		})
		
		.state('vinyasa', {
			url: "/vinyasa",
			templateUrl: "controllers/yoga/vinyasa/vinyasa.html"
		})

		.state('workshops', {
			url: "/workshops",
			templateUrl: "controllers/schedule/workshops/workshops.html"
		})

		.state('classes', {
			url: "/classes",
			templateUrl: "controllers/schedule/classes/classes.html"
		})
		
		.state('contact', {
			url: "/contact",
			templateUrl: "controllers/user/contact/contact.html"
		})

		.state('login', {
			url: "/login",
			templateUrl: "controllers/user/login/login.html"
		})

		.state('logout', {
			url: "/logout",
			templateUrl: "controllers/user/logout/logout.html"
		})

		.state('register', {
			url: "/register",
			templateUrl: "controllers/user/register/register.html"
		})
});
