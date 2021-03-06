/**
 * Created by WangoeWoe on 06.12.15.
 */
(function () {

  angular
    .module('UserModule')
    .factory('JoinGroup', JoinGroup);

  /*
  * Handles that a user can join groups
  * and if a user creates a group he will
  * join it immediatley
  *
  * */

  function JoinGroup (Server, $http, UserServiceREF) {
    var service = {
      join: join
    }

    return service;

    function join (group_id) {
      $http.post(Server + '/usergroups', {
        user_id: UserServiceREF.getUserId(),
        group_id: group_id
      }).then(function (data) {
      console.log(data);
    })
    }
  }

})();
