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
      this.getAll = function (callback) {
        $http.get(Server + '/groups')
          .then(function (data) {
            callback(data.data);
        })
      }
    }
})();
