/**
 * Created by WangoeWoe on 06.12.15.
 */
(function () {

  angular
    .module('UserModule')
    .service('GroupService', GroupService);

  /*
   *  This Service is in the User Module, bc
   *  A user ceates a group and joins it
   *
   * */

  function GroupService (Server, $resource, $http, UserServiceREF) {
    this.createNewGroup = function (name, description, callback) {
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
