angular.module('', []).
    config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
        
        $routeProvider
        .when('/main',
            {
                templateUrl: 'templates/default.html',
                controller: BodyController
            })
        .when('/search',
            {
                templateUrl: 'templates/search.html',
                controller: BodyController
            })
        .otherwise({ redirectTo: '/main' });

        $locationProvider.html5Mode(true);
    }]);

var BodyController = function($scope) {
    var self = this;

};