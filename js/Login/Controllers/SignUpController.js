/**
 * Created by WangoeWoe on 22.11.15.
 */
angular.module('LoginModule')
  .controller('SigninController', ['$scope', 'LoginFactory', '$rootScope' ,function ($scope, LoginFactory, $rootScope) {
    // as we call our User Module, we need to go through the rootScope
    $scope.$on('SigninController-Make-SignUp', function (event, credentials) {
      if (checkSignUpFields(credentials)) {
        $rootScope.$emit('UserCreateController-Create-New-User', credentials);
      } else {
        console.log('Not Ready for Signup');
      }
    });

    var checkSignUpFields = function (credentials) {
        if( typeof credentials.username === "undefined" || typeof credentials.password === "undefined" ) {
          console.log("no username or password");
          return false;
        } else if ( typeof credentials.email === "undefined" || typeof credentials.mobilephone === "undefined" ) {
          console.log("Email or mobile Phone not set");
          return false;
        } else if (typeof credentials.forname === "undefined" || typeof credentials.surname === "undefined" ) {
          console.log("Forname or Surname not set");
          return false;
        } else {
          return true;
        }
      }
  }]);
