var app = angular.module('', []).
    config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
        $locationProvider.html5Mode(true);
        $routeProvider
        .when('/',
            {
                templateUrl: '/templates/default.html',
                controller: BodyController
            })
        .when('/search',
            {
                templateUrl: '/templates/search.html',
                controller: BodyController
            })
        .otherwise({ redirectTo: '/' });
    }]);

app.run(function ($route) { });

var BodyController = function($scope) {
    var self = this;

};