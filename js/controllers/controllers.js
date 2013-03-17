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
        .otherwise({ redirectTo: '/' });

        $locationProvider.html5Mode(true);
    }]);

var BodyController = function($scope) {
    var self = this;

};