/**
 * Created by WangoeWoe on 22.11.15.
 */

angular.module('GroupModule')
  .factory('GroupsService', ['Server','$resource', '$http', 'LoginFactory',
    function (Server, $resource, $http, LoginFactory) {
      var url = Server + '/groups';
      var Group = $resource(url , null, {});
      // This is a workaround, as the service will give me a value.push is not a functioon otherwise
      Group.prototype.getAll = function (callback) {
      $http.get(url, {
        headers: {
          user_id: LoginFactory.getUserId()
        }
      })
        .success(function (data) {
        callback(data)
        })
    }
    return Group;
  }]);
