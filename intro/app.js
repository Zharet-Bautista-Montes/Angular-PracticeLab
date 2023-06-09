(function()
{
//    'use strict';
    angular.module('angularPractice', [])
    .controller('controllerPractice', function($scope)
    {
        $scope.name = "Zharet";
        $scope.sayHello = function()
        { return "Hallo Coursera!"; };
    });
})
();