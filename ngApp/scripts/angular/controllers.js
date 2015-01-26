'use strict';

var myCtrlr = angular.module('myCtrlr', []);

myCtrlr.controller('WelcomeCtrl', ['$scope',
    function ($scope){
        $scope.username = 'KfreeZ';
    }]);
