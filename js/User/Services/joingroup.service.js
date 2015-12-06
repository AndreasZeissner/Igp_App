/**
 * Created by WangoeWoe on 06.12.15.
 */
(function () {

  angular
    .module('UserModule')
    .service('JoinGroup', JoinGroup);

  /*
  *
  *
  * */

  function JoinGroup (Server, $http, UserServiceREF) {
    this.join = function (group_id) {
      $http.post(Server + '/usergroups', {
        user_id: UserServiceREF.getUserId(),
        group_id: group_id
      }).then(function (data) {
      console.log(data);
    })
    }
  }

})();
