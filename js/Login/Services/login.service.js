/**
 * Created by WangoeWoe on 03.12.15.
 */
(function () {
  "use strict";

  angular
    .module('LoginModule')
    .service('LoginServiceREF', LoginServiceREF);

    /*
    * This is where the Login magic happens and it is also redirecting if the login was right!
    * This must also set all necessary stuff for the user service
    *   id, name, login_token
    * */

    function LoginServiceREF (NavigaterHelper, UserServiceREF, $http, Server) {
      this.checkLogin = function (username, password) {
        $http.post(
          Server + '/login',
          {
            username: username,
            password: password
          }, {
            isArray: false
          }
        ).then(function (successCallback) {
            if(successCallback.data === null) {
              throw Error('This User is not present in our database!')
            } else {
              UserServiceREF.initialize(successCallback.data.id, successCallback.data.username);
              NavigaterHelper.setState('app.home');
            }
          }, function (errorCallback) {
            throw Error('No Connection to the Server! Check your connection!')
          })
      }
    }
})();
