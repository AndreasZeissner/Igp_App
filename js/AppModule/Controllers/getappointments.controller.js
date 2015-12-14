/**
 * Created by WangoeWoe on 06.12.15.
 */
(function () {

  angular
    .module('AppModule')
    .controller('getAppointmentsController', getAppointmentsController);

    /*
    * Controller for getting the Appointments
    *
    *
    * */

    function getAppointmentsController (AppointmentServiceES, $stateParams) {
      var vm = this;
      vm.appointments;

      AppointmentServiceES.getAppointments($stateParams.group_id, function (data) {
        vm.appointments = data;
      })


    }
})();
