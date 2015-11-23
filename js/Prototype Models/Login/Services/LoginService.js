/**
 * Created by WangoeWoe on 19.11.15.
 */
angular.module('LoginModule')
  .service('Services', ['$http', function ($http) {
    var loggedIn  = false;
    var userId    = null;
    return {
      setLoggedIn: function (login) {
        loggedIn = login;
      },
      getLogStatus: function () {
        return loggedIn;
      },
      checkLogin: function (username, password , callback) {
        $http.post('http://192.168.56.140:3000/api/v1/login', {username, password}).then(function(success) {
          callback(success);
        }, function(error) {
          console.log(error);
        });
      },
      setUserId: function (id) {
        userId = id;
      },
      getUserId: function () {
        return userId;
      }
    };
  }]);
