/**
 * Created by WangoeWoe on 22.11.15.
 */
angular.module('GroupModule')
  .factory('GroupsService', ['Server','$resource', function (Server, $resource) {
    var Group = $resource(Server + '/groups');

    return Group;
  }]);
