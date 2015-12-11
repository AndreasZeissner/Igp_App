/**
 * Created by WangoeWoe on 07.12.15.
 */
(function () {

  angular
    .module('GroupModule')
    .service('GetGroupsService', GetAllGroups);

    /*
    *
    *
    * */

    function GetAllGroups (Server, $http) {
      this.getAll = function (offset, callback) {
        $http({
          method: 'GET',
          url: Server + '/groups',
          headers: {
            offset: offset
          }
        }).then(function (data) {
          callback(data.data);
        })
      }
    }
})();
