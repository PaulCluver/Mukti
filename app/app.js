(function() {

    'use strict';

    var yogaApp = angular.module('yogaApp', ['ui.router', 'mgcrea.ngStrap', 'ngResource', 'mm.foundation', 'ngCookies']);

    yogaApp.constant('VERSION', '0.1');

    yogaApp.config(function($stateProvider, $urlRouterProvider, $httpProvider, GreetingProvider) {
               

        $urlRouterProvider.otherwise('/home');
        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: 'partials/home/home.html',
                controller: 'homeCtrl',
                data: {
                    requireLogin: false
                }
            })
            .state('hatha', {
                url: '/hatha',
                templateUrl: 'partials/yoga/hatha/hatha.html',
                data: {
                    requireLogin: false
                }
            })
            .state('ashtanga', {
                url: '/ashtanga',
                templateUrl: 'partials/yoga/ashtanga/ashtanga.html',
                data: {
                    requireLogin: false
                }
            })
            .state('vinyasa', {
                url: '/vinyasa',
                templateUrl: 'partials/yoga/vinyasa/vinyasa.html',
                data: {
                    requireLogin: false
                }
            })
            .state('classes', {
                url: '/classes',
                templateUrl: 'partials/schedule/classes/classes.html',
                controller: 'classesCtrl',
                data: {
                    requireLogin: false
                }
            })
            .state('contact', {
                url: '/contact',
                templateUrl: 'partials/user/contact/contact.html',
                controller: 'contactCtrl',
                data: {
                    requireLogin: false
                }
            })
            .state('login', {
                url: '/login',
                templateUrl: 'partials/user/login/login.html',
                data: {
                    requireLogin: false
                }
            })
            .state('logout', {
                url: '/logout',
                templateUrl: 'partials/user/logout/logout.html',
                data: {
                    requireLogin: false
                }
            })
            .state('register', {
                url: '/register',
                templateUrl: 'partials/user/register/register.html',
                data: {
                    requireLogin: false
                }
            })
            .state('downloads', {
                url: '/downloads',
                templateUrl: 'partials/user/downloads/downloads.html',
                data: {
                    requireLogin: true
                }
            })
    });

    yogaApp.run(function($rootScope, $state, $modal, $cookieStore) {
        
        $rootScope.$on('$stateChangeStart', function(event, toState, toParams) {
            var requireLogin = toState.data.requireLogin;
            var userDetails = $cookieStore.get('userDetails');

            if (requireLogin && typeof userDetails === 'undefined') {
                $modal.open({
                    templateUrl: 'partials/user/login/login.html',
                    controller: 'loginCtrl',
                    controllerAs: 'loginCtrl'
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

    yogaApp.factory('LoginApi', function($q, $http) {        
       

        function _login(userName, password) {
            var d = $q.defer();
            setTimeout(function() {
                    
                var user = undefined;

                var query = { _name: 'SAHL.Services.Interfaces.UserProfile.Queries.GetUserDetailsForUserQuery,SAHL.Services.Interfaces.UserProfile', aDUsername: userName};
                $http.post('http://localhost/UserProfileService/api/QueryHttpHandler/PerformHttpQuery', query)
                .success(function (data, status, headers, config) {
                    if (data != undefined) 
                        
                        var user = {
                            authenticated: true,
                            email: data.ReturnData.Results.$values[0].EmailAddress,
                            password: password,                                
                            displayName: data.ReturnData.Results.$values[0].DisplayName
                        }
                        
                        d.resolve(user);
                })
                .error(function (data, status, headers, config) {
                    if (data != undefined) {
                        alert('Invalid Credentials: ');                       
                        d.reject('Invalid Credentials');
                    }
                });
                
            }, 100);
            return d.promise
        }
        return {
            login: _login
        };
        
    });    

    yogaApp.provider('Greeting', function() {
        
        this.$get = function($cookieStore) {
            var self = this;
            return {
                getGreeting: function() {
                    if (typeof $cookieStore.get('userDetails') != 'undefined') {
                        return $cookieStore.get('userDetails')['displayName'];
                    }
                }
            };
        };

    });

    yogaApp.controller('loginCtrl', function($scope, $cookieStore, LoginApi, $window) {
        this.cancel = $scope.$dismiss;

        this.submit = function(userName, password) { 
            LoginApi.login(userName, password).then(function(user) {
                $cookieStore.put('userDetails', user);
                $scope.$close(user);
                $window.location.reload();
            });
        };

    });

    yogaApp.controller('appCtrl', function($rootScope, $scope, $cookieStore, $location, Greeting, $window) {
        
        $scope.showContactUs = function() {
            $scope.showContactUsBoolean = false;
            if (location.hash == '#/contact') {
                $scope.showContactUsBoolean = true;
            }
            return $scope.showContactUsBoolean;
        };

        $scope.showLoginLink = function() {
            $scope.showLogin = false;
            var userDetails = $cookieStore.get('userDetails');            

            if (userDetails === false || typeof userDetails === 'undefined') {
                $scope.showLogin = true;
            }
            return $scope.showLogin;
        };

         $scope.showLogoutLink = function() {
            $scope.showLogout = false;
            var userDetails = $cookieStore.get('userDetails');
            
            if (typeof userDetails != 'undefined' && userDetails['authenticated'] === true) {
                $scope.showLogout = true;
            } 
            return $scope.showLogout;
        };

        $scope.logout = function() {
            $cookieStore.remove('userDetails');
            $window.location.reload();
            $location.path('home');
        };

        $scope.providerGreeting = Greeting.getGreeting();

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

    yogaApp.filter('durations', function() {
        
        return function(duration) {
            switch (duration) {
                case 1:
                    return '1 hour';
                case 2:
                    return '2 hours';
                case 3:
                    return 'Half day';
                case 4:
                    return 'Full day';
            }
        }

    });

    yogaApp.directive('contactbar', function() {

        var directive = {};
        directive.restrict = 'E';
        directive.templateUrl = '/partials/user/contact/contactBar.html';
        return directive;

    });

}());
