/**
 * Created by WangoeWoe on 09.12.15.
 */
(function () {

  angular
    .module('UserModule')
    .factory('GetUserFactory', GetUserFactory);

  /*
   *
   *
   *
   * */

  function GetUserFactory (Server, $http) {
    var service = {
      getUserById: getUserById
    }

    return service;

    function getUserById(user_id, callback) {
      $http({
        method: 'GET',
        url: Server + '/user',
        headers: {
          user_id: user_id
        }
      }).then(function success(data) {
        callback(data.data) ;
      }, function error(error) {

      });
    }

  }

})();
