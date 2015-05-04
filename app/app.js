(function() {

    'use strict';

    var yogaApp = angular.module('yogaApp', ['ui.router', 'mgcrea.ngStrap', 'ngResource', 'mm.foundation', 'ngCookies']);

    yogaApp.constant('VERSION', "0.1");

    yogaApp.config(function($stateProvider, $urlRouterProvider, $httpProvider) {
        
        $urlRouterProvider.otherwise("/home");
        $stateProvider
            .state('home', {
                url: "/home",
                templateUrl: "partials/home/home.html",
                controller: "homeCtrl",
                data: {
                    requireLogin: false
                }
            })
            .state('hatha', {
                url: "/hatha",
                templateUrl: "partials/yoga/hatha/hatha.html",
                data: {
                    requireLogin: true
                }
            })
            .state('ashtanga', {
                url: "/ashtanga",
                templateUrl: "partials/yoga/ashtanga/ashtanga.html",
                data: {
                    requireLogin: true
                }
            })
            .state('vinyasa', {
                url: "/vinyasa",
                templateUrl: "partials/yoga/vinyasa/vinyasa.html",
                data: {
                    requireLogin: true
                }
            })
            .state('workshops', {
                url: "/workshops",
                templateUrl: "partials/schedule/workshops/workshops.html",
                controller: "workshopCtrl",
                data: {
                    requireLogin: true
                }
            })
            .state('classes', {
                url: "/classes",
                templateUrl: "partials/schedule/classes/classes.html",
                controller: "classesCtrl",
                data: {
                    requireLogin: true
                }
            })
            .state('contact', {
                url: "/contact",
                templateUrl: "partials/user/contact/contact.html",
                controller: "contactCtrl",
                data: {
                    requireLogin: true
                }
            })
            .state('login', {
                url: "/login",
                templateUrl: "partials/user/login/login.html",
                data: {
                    requireLogin: false
                }
            })
            .state('logout', {
                url: "/logout",
                templateUrl: "partials/user/logout/logout.html",
                data: {
                    requireLogin: true
                }
            })
            .state('register', {
                url: "/register",
                templateUrl: "partials/user/register/register.html",
                data: {
                    requireLogin: false
                }
            })

        $httpProvider.interceptors.push(function($timeout, $q, $injector) {
            var loginService, $http, $state;

            $timeout(function() {
                loginService = $injector.get('loginService');
                $http = $injector.get('$http');
                $state = $injector.get('$state');
            });

            return {
                responseError: function(rejection) {
                    if (rejection.status !== 401) {
                        return rejection;
                    }

                    var deferred = $q.defer();

                    loginService()
                        .then(function() {
                            deferred.resolve($http(rejection.config));
                        })
                        .catch(function() {
                            $state.go('home');
                            deferred.reject(rejection);
                        });

                    return deferred.promise;
                }
            };
        });



    });

    yogaApp.run(function($rootScope, $state, loginService) {
        
        $rootScope.$on('$stateChangeStart', function(event, toState, toParams) {
            var requireLogin = toState.data.requireLogin;

            if (requireLogin && typeof $rootScope.currentUser === 'undefined') {
                event.preventDefault();
                loginService()
                    .then(function() {
                        return $state.go(toState.name, toParams);
                    })
                    .catch(function() {
                        return $state.go('home');
                    });
            }
        });
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

    yogaApp.service('loginService', function($rootScope, $modal) {

        function assignCurrentUser(user) {
            $rootScope.currentUser = user;
            return user;
        }
        
        return function() {
                                
            var instance = $modal.open({
                templateUrl: 'partials/user/login/login.html',
                controller: 'loginCtrl',
                controllerAs: 'loginCtrl'
            });

            if (typeof $rootScope.validatingUser != 'undefined') {
                var user = {
                    email: $rootScope.validatingUser.email,
                    password: rootScope.validatingUser.password,
                    firstName: 'Paul',
                    lastName: 'Cluver'
                }
            }
            else {
                var user = {
                    email: '',
                    password: ''
                }
            }
            return instance.result.then(assignCurrentUser(user));
        };

    });

    yogaApp.factory("UsersApi", function($q) {
        
        function _login(email, password) {
            var d = $q.defer();
            setTimeout(function() {
                if (email === 'test@test.com' && password === 'secret') {
                    d.resolve();
                }
                else {
                    alert('Invalid Credentials');
                    d.reject('Invalid Credentials');
                }
            }, 100);
            return d.promise
        }
        return {
            login: _login
        };

    });

    yogaApp.controller('appCtrl', function($rootScope, $scope, $cookieStore, $location) {
        
        $scope.showContactUs = function() {
            $scope.showContactUsBoolean = false;
            if (location.hash == '#/contact') {
                $scope.showContactUsBoolean = true;
            }
            return $scope.showContactUsBoolean;
        };

        $scope.showLoginLink = function() {
            $scope.showLogin = false;
            var userAuthenticated = $cookieStore.get('userAuthenticated');

            if (userAuthenticated === false || typeof userAuthenticated === 'undefined') {
                $scope.showLogin = true;
            }
            return $scope.showLogin;
        };

         $scope.showLogoutLink = function() {
            $scope.showLogout = false;
            var userAuthenticated = $cookieStore.get('userAuthenticated');

            if (userAuthenticated === true) {
                $scope.showLogout = true;
            }
            return $scope.showLogout;
        };

        $scope.logout = function() {
            $cookieStore.remove('userAuthenticated');
            delete $rootScope.currentUser;
            delete $rootScope.validatingUser;
            $location.path('home');
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

    yogaApp.controller('loginCtrl', function($scope, $rootScope, $cookieStore, UsersApi) {
        this.cancel = $scope.$dismiss;

        this.submit = function(email, password) {
            
            $rootScope.validatingUser = {
                userEmail : email,
                userPassword: password
            };

            UsersApi.login(email, password).then(function(user) {
                $cookieStore.put('userAuthenticated', true);
                $scope.$close(user);
            });
        };

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

    yogaApp.directive('contactbar', function() {

        var directive = {};
        directive.restrict = 'E';
        directive.templateUrl = "/partials/user/contact/contactBar.html";
        return directive;

    });

}());
