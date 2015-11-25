/**
 * Created by WangoeWoe on 22.11.15.
 */
angular.module('GroupModule', ['ngResource', 'UsergroupsModule'])
  .controller('InitGroupCtrl', ['$scope', '$rootScope' , function ($scope, $rootScope) {
    $rootScope.$on('UserModule-GroupCtrl-new-group-modal-requested');


  }]);
