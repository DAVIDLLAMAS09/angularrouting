var app = angular.module('routingDemo', ['ngRoute']);

        app.config(function ($routeProvider) {
             
            $routeProvider.when('/', {
                templateUrl: '/login.html'
                
            }).when('/student/:username', {
                templateUrl: '/student.html'
                
            }).otherwise({
                redirectTo: "/"
            });

        app.controller("logincontroller", function ($scope, $location) {
           
            $scope.authenticate = function (username) {
                // write authentication code here.. 

                $location.path('/student/' + username)
            };      

        });

        app.controller("studentcontroller", function ($scope, $routeParams) {
            $scope.username = $routeParams.username;
        });

    });
 