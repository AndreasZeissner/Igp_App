/**
 * Created by WangoeWoe on 06.12.15.
 */
(function () {

  angular
    .module('UserModule')
    .service('LeaveGroupService', LeaveGroupService);

  /*
  *
  *
  * */

  function LeaveGroupService (Server, $http, UserServiceREF) {
    this.leave = function (group_id, callback) {
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
