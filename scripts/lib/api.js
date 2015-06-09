angular.module("protonet.platform")
  .factory("API", function($http) {
    var apiHost = "";
    options = {};
    if (location.href.indexOf("http://localhost") !== -1) {
      apiHost = "http://localhost:3000";
      options.withCredentials = true;
    }
    return {
      post: function(path, params) {
        return $http.post(apiHost + path, params, options).then(function(response) {
          return response.data;
        });
      },
      get: function(path, params) {
        return $http.get(apiHost + path, options).then(function(response) {
          return response.data;
        });
      }
    }
  });