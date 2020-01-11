var app = angular.module('routingDemo', ['ngRoute']);

        app.config(function ($routeProvider) {
             
            $routeProvider.when('/login', {
                templateUrl: 'login.html',
                controller:'logincontroller'
            }).when('/student', {
                templateUrl: 'student.html',
                controller:'studentcontroller'
            }).otherwise({
                redirectTo: "/"
            });

       

    });

    app.controller("logincontroller", function ($scope, $location) {
           
        $scope.authenticate = function (username) {
            // write authentication code here.. 

            $scope.data = username;
            console.log($scope.data)
        };

    }).controller("studentcontroller", function ($scope) {
        $scope.nombre ="david llamas";
    });
 