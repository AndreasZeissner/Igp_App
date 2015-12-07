/**
 * Created by WangoeWoe on 07.12.15.
 */
(function () {

  angular
    .module('GroupModule')
    .service('GetSingleGroup', GetSingleGroup);

    /*
    *
    *
    * */

    function GetSingleGroup (Server, $http) {
      this.getGroupById = function (group_id, callback) {
        $http.get(Server + '/group/' + group_id)
          .success(function (data) {
            callback(data);
          }).error(function (error, code) {
            console.log(error);
          })
      }
    }

})();
