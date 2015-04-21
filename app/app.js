(function() {

    'use strict';

    var yogaApp = angular.module('yogaApp', ['ui.router', 'mgcrea.ngStrap', 'ngResource']);

    yogaApp.constant('VERSION', "0.1");

    yogaApp.config(function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/home");
        $stateProvider
            .state('home', {
                url: "/home",
                templateUrl: "partials/home/home.html",
                controller: "homeCtrl"
            })
            .state('hatha', {
                url: "/hatha",
                templateUrl: "partials/yoga/hatha/hatha.html"
            })
            .state('ashtanga', {
                url: "/ashtanga",
                templateUrl: "partials/yoga/ashtanga/ashtanga.html"
            })
            .state('vinyasa', {
                url: "/vinyasa",
                templateUrl: "partials/yoga/vinyasa/vinyasa.html"
            })
            .state('workshops', {
                url: "/workshops",
                templateUrl: "partials/schedule/workshops/workshops.html",
                controller: "workshopCtrl"
            })
            .state('classes', {
                url: "/classes",
                templateUrl: "partials/schedule/classes/classes.html",
                controller: "classesCtrl"
            })
            .state('contact', {
                url: "/contact",
                templateUrl: "partials/user/contact/contact.html",
                controller: "contactCtrl"
            })
            .state('login', {
                url: "/login",
                templateUrl: "partials/user/login/login.html"
            })
            .state('logout', {
                url: "/logout",
                templateUrl: "partials/user/logout/logout.html"
            })
            .state('register', {
                url: "/register",
                templateUrl: "partials/user/register/register.html"
            })
    });

    yogaApp.service('ClassesDataService', function($resource) {
        this.classes = [{
            name: 'Ashtanga',
            description: 'Bacon ipsum dolor sit amet nulla ham qui sint exercitation eiusmod commodo, chuck duis velit. Aute in reprehenderit, dolore aliqua non',
            day: 'Monday, Tuesday',
            time: '18:00 pm',
            duration: 1,
            dropInPrice: 50,
            monthlyPrice: 200,
            location: {
                address: '58 Gordon Road',
                suburb: 'Morningside',
                city: 'Durban',
                province: 'Kwa-zulu Natal'
            }
        }, {
            name: 'Vinyasa',
            description: 'Bacon ipsum dolor sit amet nulla ham qui sint exercitation eiusmod commodo, chuck duis velit. Aute in reprehenderit, dolore aliqua non',
            day: 'Wednesday, Thursday',
            time: '18:00 pm',
            duration: 1,
            dropInPrice: 50,
            monthlyPrice: 200,
            location: {
                address: '58 Gordon Road',
                suburb: 'Morningside',
                city: 'Durban',
                province: 'Kwa-zulu Natal'
            }
        }, {
            name: 'Hatha',
            description: 'Bacon ipsum dolor sit amet nulla ham qui sint exercitation eiusmod commodo, chuck duis velit. Aute in reprehenderit, dolore aliqua non',
            day: 'Friday',
            time: '18:00 pm',
            duration: 1,
            dropInPrice: 50,
            monthlyPrice: 200,
            location: {
                address: '58 Gordon Road',
                suburb: 'Morningside',
                city: 'Durban',
                province: 'Kwa-zulu Natal'
            }
        }];
    });

    yogaApp.service('ClassesService', function(ClassesDataService) {
        this.getAllClasses = function() {
            return ClassesDataService.classes;
        };
    });

    yogaApp.service('WorkshopDataService', function($resource) {
        this.workshops = [{
            name: 'Ashtanga Arm Balances',
            description: 'Bacon ipsum dolor sit amet nulla ham qui sint exercitation eiusmod commodo, chuck duis velit. Aute in reprehenderit, dolore aliqua non',
            date: '1477323623006',
            time: '10:30 am',
            duration: 1,
            price: 250,
            location: {
                address: '58 Gordon Road',
                suburb: 'Morningside',
                city: 'Durban',
                province: 'Kwa-zulu Natal'
            }
        }, {
            name: 'Brilliant Back Bends',
            description: 'Aute in reprehenderit, dolore aliqua non est magna in labore pig pork biltong. Eiusmod swine spare ribs reprehenderit culpa.',
            date: '1476323623006',
            time: '08:30 am',
            duration: 2,
            price: 500,
            location: {
                address: '58 Gordon Road',
                suburb: 'Morningside',
                city: 'Durban',
                province: 'Kwa-zulu Natal'
            }
        }, {
            name: 'Restorative Stretching',
            description: 'Eiusmod swine spare ribs reprehenderit culpa.Eiusmod swine spare ribs reprehenderit culpa. Boudin aliqua adipisicing rump corned beef.',
            date: '1471323623006',
            time: '08:30 am',
            duration: 3,
            price: 1000,
            location: {
                address: '58 Gordon Road',
                suburb: 'Morningside',
                city: 'Durban',
                province: 'Kwa-zulu Natal'
            }
        }, {
            name: 'Breaking your Bandas',
            description: 'Boudin aliqua adipisicing rump corned beef. Eiusmod swine spare ribs reprehenderit culpa. Eiusmod swine spare ribs reprehenderit culpa.',
            date: '1471223623006',
            time: '08:30 am',
            duration: 4,
            price: 2000,
            location: {
                address: '58 Gordon Road',
                suburb: 'Morningside',
                city: 'Durban',
                province: 'Kwa-zulu Natal'
            }
        }, {
            name: 'Integral Kundalini Banda Work',
            description: 'Boudin aliqua adipisicing rump corned beef. Eiusmod swine spare ribs reprehenderit culpa. Eiusmod swine spare ribs reprehenderit culpa.',
            date: '1471323623006',
            time: '08:30 am',
            duration: 2,
            price: 800,
            location: {
                address: '58 Gordon Road',
                suburb: 'Morningside',
                city: 'Durban',
                province: 'Kwa-zulu Natal'
            }
        }];
    });

    yogaApp.service('WorkshopService', function(WorkshopDataService) {
        this.getAllWorkshops = function() {
            return WorkshopDataService.workshops;
        };
    });

    yogaApp.controller('appCtrl', function($scope) {
        $scope.showContactUs = function() {
            $scope.showContactUsBoolean = false;
            if (location.hash == '#/contact') {
                $scope.showContactUsBoolean = true;
            }
            return $scope.showContactUsBoolean;
        };
    });

    yogaApp.controller('homeCtrl', function($scope) {
        $scope.showContactUs = function() {

            $scope.myBoolean = false;

            if (location.path() == 'contact') {
                $scope.myBoolean = true;
            }
            return $scope.myBoolean;
        };

    });

    yogaApp.controller('contactCtrl', function($scope) {
        $scope.contactDetails = {};

        $scope.update = function(user) {
            $scope.contactDetails = angular.copy(user);
        };

        $scope.reset = function(form) {
            if (form) {
                form.$setPristine();
                form.$setUntouched();
            }
            $scope.user = angular.copy($scope.contactDetails);
        };

        $scope.reset();
    });

    yogaApp.controller('classesCtrl', ['$scope', 'ClassesService', function($scope, ClassesService) {
        $scope.classes = ClassesService.getAllClasses();
        $scope.orderByField = 'name';
        $scope.reverseSort = false;
    }]);

    yogaApp.controller('workshopCtrl', ['$scope', 'WorkshopService', function($scope, WorkshopService) {
        $scope.workshops = WorkshopService.getAllWorkshops();
        $scope.orderByField = 'name';
        $scope.reverseSort = false;
    }]);

    yogaApp.filter('durations', function() {
        return function(duration) {
            switch (duration) {
                case 1:
                    return "1 hour";
                case 2:
                    return "2 hours";
                case 3:
                    return "Half day";
                case 4:
                    return "Full day";
            }
        }
    });

}());
