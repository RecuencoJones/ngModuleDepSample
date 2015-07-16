var app = angular.module('app', ['module1', 'module2']);

app.controller('MainCtrl', ['$scope', 'Mod1Service', 'Mod2Service', function($scope, mod1svc, mod2svc){

  $scope.input = "";

  $scope.update = function() {
    $scope.greeting1 = mod1svc.getGreeting($scope.input);
    $scope.greeting2 = mod2svc.getGreeting($scope.input);
  };
}]);