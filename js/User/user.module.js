/**
 * Created by WangoeWoe on 20.11.15.
 */
angular.module('UserModule', ['ngResource'])
  .controller('InitialLoadController', ['UsergroupsFactory', '$rootScope', '$scope','LoginFactory', '$ionicHistory',
      function (UsergroupsFactory, $rootScope, $scope, LoginFactory, $ionicHistory) {
    $scope.mygroups = {};
    $rootScope.$on('LoginModule-LoginService-logginsuccesfull-closed-modal', function () {
      var NewUserGroup = new UsergroupsFactory;
      NewUserGroup.$get({user_id: LoginFactory.getUserId()}).then(function (data) {
        $scope.mygroups = data.igp_groups;
        $scope.$broadcast('UserModule-InitialLoadController-load-groups', data.igp_groups);
      })
    });
    $rootScope.$on('Done-Adding-A-GROUP', function () {
      var NewUserGroup = new UsergroupsFactory;
      NewUserGroup.$get({user_id: LoginFactory.getUserId()}).then(function (data) {
        $scope.mygroups = data.igp_groups;
        $scope.$broadcast('UserModule-InitialLoadController-load-groups', data.igp_groups);
      })
      $ionicHistory.goBack();
    });
  }])
  .controller('GroupCtrl', ['$scope', 'UsergroupsFactory', 'LoginFactory','$window',
    function ($scope, UsergroupsFactory, LoginFactory, $window) {
    $scope.groupName;
    $scope.mygroups = null;
    $scope.$on('UserModule-InitialLoadController-load-groups', function (event, groups) {
        $scope.mygroups = groups;
        $window.location.reload();
    });
    if(LoginFactory.getLoggedIn()) {
      var NewUserGroup = new UsergroupsFactory;
      NewUserGroup.$get({user_id: LoginFactory.getUserId()}).then(function (data) {
        $scope.mygroups = data.igp_groups;
      })
    }
  }]);
