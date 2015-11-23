/**
 * Created by WangoeWoe on 23.11.15.
 */
angular.module('AppointmentModule')
  .controller('GroupAppointmentCtrl', ['Server','$http', '$scope', 'AppointmentService', '$stateParams',
    function (Server, $http, $scope, AppointmentService,  $stateParams) {
    AppointmentService($stateParams.appointment_id, function (data) {
      $scope.viewData = data;
    });
  }]);
