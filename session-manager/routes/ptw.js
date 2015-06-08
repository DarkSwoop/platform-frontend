var request = require('request').defaults({ json: true });
var HttpStatus = require('http-status-codes');
var async = require('async');
var auth = require('../helper/auth');
var api = require('../helper/api').skvsApiUrl;
var error_helper = require('../helper/error').errorHelper;
var request_handler = require('../helper/error').requestHandler;

module.exports = function(router) {
  router.get('/ptw', auth, function(req, res, next) {
    async.parallel({
      enabled: function(callback) {
        request(api('/ptw/enabled'), request_handler(function(response, result) {
          if (response.statusCode == HttpStatus.OK) {
            callback(null, true)
          } else if (response.statusCode == HttpStatus.NOT_FOUND) {
            callback(null, false)
          } else {
            next(error_helper(HttpStatus.INTERNAL_SERVER_ERROR));
          }
        }, next));
      },
      nodename: function(callback) {
        request(api('/ptw/nodename'), request_handler(function(response, result) {
          if (response.statusCode == HttpStatus.OK) {
            callback(null, result.value)
          } else if (response.statusCode == HttpStatus.NOT_FOUND) {
            callback(null, null)
          } else {
            next(error_helper(HttpStatus.INTERNAL_SERVER_ERROR));
          }
        }, next));
      }
    }, function(err, results) {
      if (err) {
        next(error_helper(HttpStatus.INTERNAL_SERVER_ERROR));
      } else {
        res.json(results);
      }
    });
  });

  router.post('/ptw/nodename', auth, function(req, res, next) {
    var nodename = req.body['nodename'];
    if (nodename != undefined && nodename != "") {
      // make more checks and if name is really avaible! We need some kind of own service to do this..
      var options = {
        url: api('/ptw/nodename'),
        method: 'PUT',
        form: {
          value: nodename
        }
      };

      request(options, request_handler(function(response, result) {
        if (response.statusCode == HttpStatus.OK) {
          res.json({
            nodename: result.value,
            success: true
          })
        } else {
          next(error_helper(HttpStatus.INTERNAL_SERVER_ERROR))
        }
      }, next));
    } else {
      next(error_helper(HttpStatus.BAD_REQUEST));
    }
  });

  router.post('/ptw/enabled', auth, function(req, res, next) {
    var enabled = req.body['enabled'] == 'true';
    var options = {
      url: api('/ptw/enabled')
    };
    if (enabled) {
      options.method = 'PUT';
    } else {
      options.method = 'DELETE';
    }
    request(options, request_handler(function(response, result) {
      if (response.statusCode == HttpStatus.OK) {
        res.json({ success: true })
      } else {
        next(error_helper(HttpStatus.INTERNAL_SERVER_ERROR))
      }
    }, next));
  });
};
