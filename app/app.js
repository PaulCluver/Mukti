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
.directive('myDomDirective', function() {
	return {
        link: function ($scope, element, attrs) {
            element.bind('click', function () {
                element.html('<li><a ui-sref="logout"><i class="fa fa-sign-out"></i>&nbsp;&nbsp;Logout</a></li>');
            });
        }
    };
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

 	$scope.jakob = {};
    $scope.jakob.firstName = "Jakob";
    $scope.jakob.lastName  = "Jenkov";

    $scope.john = {};
    $scope.john.firstName = "John";
    $scope.john.lastName  = "Doe";
 	
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
			templateUrl: "app/controllers/yoga/hatha/hatha.html"
		})
		
		.state('ashtanga', {
			url: "/ashtanga",
			templateUrl: "app/controllers/yoga/ashtanga/ashtanga.html"
		})
		
		.state('vinyasa', {
			url: "/vinyasa",
			templateUrl: "app/controllers/yoga/vinyasa/vinyasa.html"
		})

		.state('workshops', {
			url: "/workshops",
			templateUrl: "app/controllers/schedule/workshops/workshops.html"
		})

		.state('classes', {
			url: "/classes",
			templateUrl: "app/controllers/schedule/classes/classes.html"
		})
		
		.state('contact', {
			url: "/contact",
			templateUrl: "app/controllers/user/contact/contact.html"
		})

		.state('login', {
			url: "/login",
			templateUrl: "app/controllers/user/login/login.html"
		})

		.state('logout', {
			url: "/logout",
			templateUrl: "app/controllers/user/logout/logout.html"
		})

		.state('register', {
			url: "/register",
			templateUrl: "app/controllers/user/register/register.html"
		})
});
