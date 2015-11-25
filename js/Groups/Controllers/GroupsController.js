/**
 * Created by WangoeWoe on 24.11.15.
 */
angular.module('GroupModule')
  .controller('GroupsCtrl', ['Server', '$scope', '$http', 'UsergroupsFactory', 'GroupsService',
      function (Server, $scope, $http, UsergroupsFactory, GroupsService) {
      // Shitty Controller -.-
      var newGroups = new GroupsService();
        newGroups.getAll(function (groups) {
          $scope.groups = groups;
        });
      $scope.joinGroup = function (id) {
        var relation = new UsergroupsFactory();
        relation.joinGroup(id);
      }
  }]);
