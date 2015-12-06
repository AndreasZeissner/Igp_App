/**
 * Created by WangoeWoe on 06.12.15.
 */
(function () {

  angular
    .module('AppModule')
    .controller('addAppointmentController', addAppointment);

  /*
  *
  *
  * */

  function addAppointment ($stateParams, AddAppointmentService, NavigaterHelper) {
    var vm = this;
    vm.addAppointment = addAppointment;
    vm.appointment = {
      name: null,
      description: null,
      startdate: null,
      enddate: null,
      location: null,
      dresscode: null,
      contact: null,
      igpGroupId: $stateParams.group_id
    }

    function addAppointment () {
      AddAppointmentService.addAppointment(vm.appointment, function () {
        NavigaterHelper.goBack();
      })
    }
  }
})();


