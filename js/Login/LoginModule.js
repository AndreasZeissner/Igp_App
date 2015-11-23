/**
 * Created by WangoeWoe on 20.11.15.
 */
angular.module('LoginModule', [])
  .controller('MainLoginCtrl', ['$rootScope', '$scope', 'LoginFactory', function ($rootScope, $scope, LoginFactory) {
    $scope.credentials = {
      //username: null,
      //password: null,
      //email: null,
      //forname: null,
      //surname: null,
      //mobilephone: null
    }

    $scope.login = function () {
      $scope.$broadcast('LoginController-Make-Login', $scope.credentials);
    }

    $scope.signUp = function () {
      $scope.$broadcast('SigninController-Make-SignUp', $scope.credentials);
    }
  }]);
