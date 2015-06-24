angular.module("protonet.platform").controller("LayoutCtrl", function($scope, $state, API) {

  $scope.$on("$stateChangeSuccess", function() {
    $scope.state = $state.current.name;
  });

  function setPTW(data) {
    $scope.nodename = data.nodename;
    $scope.ptwEnabled = data.enabled;
  }

  function updatePTW() {
    API.get("/admin/api/ptw").then(setPTW);
  }

  updatePTW();

  $scope.logout = function() {
    API.post("/admin/api/logout").then(function() {
      $state.go("login");
    });
  };

  $scope.$on("ptw.change", updatePTW);
});