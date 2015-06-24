var urljoin = require('url-join');

var SKVS_API_URL = "http://skvs";
var APPS_API_URL = "http://app-manager";
var MONITORING_API_URL = "http://monitoring"

if (process.env.NODE_ENV == 'development') {
  SKVS_API_URL = "http://127.0.0.1:8080";
  APPS_API_URL = "http://127.0.0.1:8081/apps";
  MONITORING_API_URL = "http://127.0.0.1:8081/monitoring";
}

module.exports = {
  skvsApiUrl: function(path) {
    return urljoin(SKVS_API_URL, path);
  },

  appsApiUrl: function(path) {
    return urljoin(APPS_API_URL, path)
  },

  monitoringApiUrl: function(path) {
    return urljoin(MONITORING_API_URL, path)
  }
};
