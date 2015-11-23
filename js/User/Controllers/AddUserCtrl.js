/**
 * Created by WangoeWoe on 22.11.15.
 */
angular.module('UserModule')
  .controller('AddUserCtrl', ['$rootScope', 'UserHandler','UsergroupsFactory', '$scope' , 'LoginFactory',
    function ($rootScope, UserHandler,UsergroupsFactory, $scope, LoginFactory) {
    $rootScope.$on('UserCreateController-Create-New-User', function (event, credentials) {
      var User = new UserHandler.request();
      User.username = credentials.username;
      User.password = credentials.password;
      User.email    = credentials.email;
      User.forname  = credentials.forname;
      User.surname  = credentials.surname;
      User.mobile_phone = credentials.mobilephone;
      User.$save().then(function (data) {
        LoginFactory.setUserId(data.id);
        LoginFactory.setLoggedIn(true);
        $rootScope.$broadcast( 'UserModule-AddUserCtrl-signup-successful-close-Modal' );
          $scope.$emit('UserModule-HomeCtrl-Load-User-Groups', data);
      })
    });

  }]);
