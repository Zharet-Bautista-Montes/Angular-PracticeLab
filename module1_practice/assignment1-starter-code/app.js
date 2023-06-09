(function () {
'use strict';

angular.module("LunchChecker", [])
.controller("LunchCheckerController", function ($scope) 
{
    $scope.msg = "";
    $scope.dishlist = "";
    $scope.checkLunch = function ()
    {   $scope.msg = checkLunchList($scope.dishlist); };
})

function checkLunchList(listToCheck)
{
    var numItems = 0;
    var listItems = listToCheck.split(",");
    for(var i = 0; i < listItems.length; i++)
    {
        if(!listItems[i].trim() == "") numItems++;
    }

    if(numItems == 0)
    { return "Please enter data first"; }
    else if(numItems > 3)
    { return "Too much!"; }
    else
    { return "Enjoy!"; }
}

})();