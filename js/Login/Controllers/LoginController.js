/**
 * Created by WangoeWoe on 22.11.15.
 */
angular.module('LoginModule')
  .controller('LoginController', ['$scope', 'LoginFactory', '$rootScope', function ($scope, LoginFactory, $rootScope) {
    $scope.$on('LoginController-Make-Login', function (event, credentials) {
      if (checkFields(credentials)) {
        LoginFactory.login(credentials.username, credentials.password);
      } else {
        console.log("No Username, or Password");
      }
    });
    var checkFields = function (credentials) {
      if (typeof credentials.username === "undefined" || typeof credentials.password === "undefined") {
        return false;
      } else {
        return true;
      }
    }
  }]);
