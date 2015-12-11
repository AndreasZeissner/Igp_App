/**
 * Created by WangoeWoe on 07.12.15.
 */
(function () {

  angular
    .module('GroupModule')
    .factory('GetSingleGroup', GetSingleGroup);

    /*
    *
    *
    * */

    function GetSingleGroup (Server, $http) {
      var service = {
        getGroupById: getGroupById
      }

      return service;

      function getGroupById (group_id, callback) {
        $http.get(Server + '/group/' + group_id)
          .success(function (data) {
            callback(data);
          }).error(function (error, code) {
            console.log(error);
          })
      }
    }

})();
