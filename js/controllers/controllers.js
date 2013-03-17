var app = angular.module('', []).
    config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
        $locationProvider.html5Mode(true);
        $routeProvider
        .when('/search',
            {
                templateUrl: "templates/search.html",
                controller: BodyController
            })
        .otherwise({ redirectTo: '/' });
    }]);


var BodyController = function($scope) {
    var self = this;

};