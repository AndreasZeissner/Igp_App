/**
 * Created by WangoeWoe on 20.11.15.
 */
angular.module('LoginModule')
  .service('LoginService', ['$window', '$ionicModal', '$rootScope','LoginFactory', '$state',
    function ($window, $ionicModal, $rootScope, LoginFactory, $state) {
      if(!LoginFactory.getLoggedIn()) {
        $ionicModal.fromTemplateUrl('js/Login/templates/loginModal.html', {
          scope: $rootScope,
          animation: 'slide-in-up'
        }).then(function(modal) {
          $rootScope.modal = modal;
          $rootScope.modal.show();
        });
      }
        $rootScope.$on('LoginService-login-successful-close-Modal', function () {
          $rootScope.modal.remove().then(function (){

          });
        });
      $rootScope.$on('UserModule-AddUserCtrl-signup-successful-close-Modal', function () {
        $rootScope.modal.remove();
      })
  }]);

