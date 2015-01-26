'use strict'

var app0 = angular.module('app0', ['ngRoute',
    'myCtrlr']);

app0.config(['$routeProvider',
     function($routeProvider) {
        $routeProvider.
        when('/1', {
            templateUrl: 'views/tpl/welcome.html',
            controller: 'WelcomeCtrl'}).
        otherwise({
            redirectTo: '/1'
        });
}]);
