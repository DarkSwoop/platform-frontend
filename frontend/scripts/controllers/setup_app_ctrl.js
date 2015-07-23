angular.module("protonet.platform").controller("SetupAppCtrl", function($scope, $stateParams, AppTutorial) {
  $scope.appType = $stateParams.type;

  $scope.docs = AppTutorial.get($scope.appType).setup;

  $scope.interpolate = function(str) {
    return str.replace("{{host}}", $scope.nodename + ".local");
  };
});