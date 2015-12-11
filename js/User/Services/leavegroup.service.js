/**
 * Created by WangoeWoe on 06.12.15.
 */
(function () {

  angular
    .module('UserModule')
    .factory('LeaveGroupService', LeaveGroupService);

  /*
  *
  *
  * */

  function LeaveGroupService (Server, $http, UserServiceREF) {
    var service = {
      leave: leave
    }

    return service;

    function leave (group_id, callback) {
      $http({
        url: Server + '/usergroups',
        method: 'DELETE',
        data: {
          user_id: UserServiceREF.getUserId(),
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
