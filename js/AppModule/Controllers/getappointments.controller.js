/**
 * Created by WangoeWoe on 06.12.15.
 */
(function () {

  angular
    .module('AppModule')
    .controller('getAppointmentsController', getAppointmentsController);

    /*
    *
    *
    *
    * */

    function getAppointmentsController (AppointmentServiceES, $stateParams) {
      var vm = this;
      console.log($stateParams);
      // TODO: TEST!
      vm.appointments;
      AppointmentServiceES.getAppointments($stateParams.group_id, function (data) {
        console.log(data);
        vm.appointments = data;
      })


    }
})();
