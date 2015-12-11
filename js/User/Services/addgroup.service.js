/**
 * Created by WangoeWoe on 06.12.15.
 */
(function () {

  angular
    .module('UserModule')
    .factory('GroupService', GroupService);

  /*
   *  This Service is in the User Module, bc
   *  A user ceates a group and joins it
   *
   * */

  function GroupService (Server, $resource, $http, UserServiceREF) {
    var service = {
      createNewGroup: createNewGroup
    }

    return service;

    function createNewGroup (name, description, callback) {
      $http.post(Server + '/groups', {
        name: name,
        description: description,
        user_id: UserServiceREF.getUserId()
      }).then(function (data) {
        callback(data);
      })
    }
  }
})();
