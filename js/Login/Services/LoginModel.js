/**
 * Created by WangoeWoe on 20.11.15.
 */
angular.module('LoginModule')
  .factory('LoginFactory', ['$http', 'Server', '$window','$timeout', '$rootScope',function ($http, Server, $window, $timeout, $rootScope) {
    $window.localStorage['password'] = JSON.stringify('Hase123');
    var setUserId     = function (value) {
      $window.localStorage['user_id'] = JSON.stringify(value);
      console.log("Done Writing into Local Storage");
    }
    var setLoggedIn   = function (value) {
      $window.localStorage['login_token'] = JSON.stringify(value);
    }
    var getLoggedIn = function () {
      return JSON.parse($window.localStorage['login_token'] || false);
    }
    var getUserId = function () {
        return JSON.parse($window.localStorage['user_id'] || '{}');
    }
    var request = function (username, password) {
      $http.post(
         Server + '/login'
        ,
        {
          username: username,
          password: password
        }
        ,
        {
          // config
          isArray: false
        }

      ).then(function (successCallback) {
          console.log(successCallback.data);
          if(typeof successCallback.data[0] == "undefined") {

            console.log(successCallback.data);
          } else {
            setLoggedIn(true);
            setUserId(successCallback.data[0].id);
            $timeout(function () {
              $rootScope.$broadcast('LoginModule-LoginService-logginsuccesfull-closed-modal');

            }, 200)

            $timeout(function () {
                $rootScope.$broadcast('LoginService-login-successful-close-Modal');
              }
              , 1000);
          }
        }, function (errorCallback) {

        })
    }
    var login = {
      login: request,
      loggedIn: false,
      setLoggedIn: setLoggedIn,
      getLoggedIn: getLoggedIn,
      setUserId:   setUserId,
      getUserId:   getUserId,
      userId: null
    }
    return login;
  }]);
