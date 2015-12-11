/**
 * Created by WangoeWoe on 05.12.15.
 */
(function () {

  angular
    .module('UserModule')
    .factory('UserGroupService', UserGroups)

  /*
  * Service is quiet ugly.
  *   A factory would return itself and it would be more clear how to use it
  *   This one is used like this:
  *   UserGroupService.Ressource.get()
  *                             .query()
  *                             ...
  *
  * */

    function UserGroups (Server, $http, UserServiceREF) {
      var service = {
        getUserGroups: getUserGroups
      }

      return service;

      function getUserGroups (callback) {
        $http({
          method: 'GET',
          url: Server + '/usergroups',
          headers: {
            user_id: UserServiceREF.getUserId()
          }
        }).then(function (data) {
          callback(data.data);
        })
      }
    }
})();
