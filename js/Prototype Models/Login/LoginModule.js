/**
 * Created by WangoeWoe on 19.11.15.
 */
angular.module('LoginModule', ['ngResource', 'GroupModule'])
.controller('AppCtrl', function($scope, $ionicModal, $timeout, LoginService, GroupFactory ) {

    $scope.userCredentials = {
        username: null,
        password: null
    }


  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
    if(LoginService.getLogStatus() == false) {
      $scope.modal.show();
    }
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    LoginService.checkLogin($scope.loginData.username, $scope.loginData.password, function (data) {
      console.log(data.data[0]);
      if (typeof data.data[0] === "undefined") {
        LoginService.setLoggedIn(false);
      } else {
        console.log(data.data[0].id);
        LoginService.setUserId(data.data[0].id);
        LoginService.setLoggedIn(true);
        GroupFactory.getUserGroups(1, function (){

        });
        $scope.closeLogin();
      }
    });
  };
})
