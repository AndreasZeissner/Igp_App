/**
 * Created by WangoeWoe on 07.12.15.
 */
(function () {

  angular
    .module('UserModule')
    .factory('DeleteGroupService', DeleteGroupService);

  /*
   *
   *
   * */

  function DeleteGroupService (Server, $http, UserServiceREF) {
    var service = {
      deleteGroupById: deleteGroupById
    }

    return service;

    function deleteGroupById (group_id, callback) {
      $http({
        url: Server + '/groups',
        method: 'DELETE',
        data: {
          group_id: group_id
        },
        headers:
        {
          "Content-Type": "application/json"
        }

      }).then(function (data) {
        callback(data);
      }, function (error) {
        throw Error("Server not reachable at the moments")
      })
    }
  }
})();
