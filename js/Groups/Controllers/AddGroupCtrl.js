/**
 * Created by WangoeWoe on 22.11.15.
 */
angular.module('GroupModule')
  .controller('AddGroupCtrl', ['$rootScope', '$scope', 'GroupsService', 'LoginFactory',
    function ($rootScope, $scope, GroupsService, LoginFactory) {
    $scope.group = {
      user_id:      LoginFactory.getUserId(),
      name:         null,
      description:  null
    }
      console.log($scope.group);
    $scope.addNewGroup = function () {
      console.log(LoginFactory.getUserId());
      var newGroup = new GroupsService();
      newGroup.name = $scope.group.name;
      newGroup.description = $scope.group.description;
      newGroup.user_id     = $scope.group.user_id;
        newGroup.$save().then(function (data) {
         //User Has Group must be added!
        //$ionicHistory.goBack();
       //This should be sent to our init ctrl! not to rootScope
        $rootScope.$emit('Done-Adding-A-GROUP');
      })


    }

  }]);
