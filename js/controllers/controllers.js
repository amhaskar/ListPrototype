angular.module('test', []).
    config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
        
        $routeProvider
        .when('/',
            {
                templateUrl: 'templates/default.html',
                controller: BodyController
            })
        .when('/search',
            {
                templateUrl: 'templates/search.html',
                controller: BodyController
            })
        .when('/listings',
            {
                templateUrl: 'templates/listings.html',
                controller: BodyController
            })
        .when('/team',
            {
                templateUrl: 'templates/team.html',
                controller: BodyController
            })
        .when('/contact',
            {
                templateUrl: 'templates/contact.html',
                controller: BodyController
            })
        .otherwise({ redirectTo: '/' });

        $locationProvider.html5Mode(true);
    }]);

var BodyController = function($scope) {
    var self = this;

};