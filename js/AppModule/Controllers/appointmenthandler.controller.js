/**
 * Created by WangoeWoe on 06.12.15.
 */
(function () {

  angular
    .module('AppModule')
    .controller('AppointmentHandlerController', AppointmentHandler);

    /*
    *
    *
    *
    * */

    function AppointmentHandler (LeaveGroupService, NavigaterHelper, $stateParams) {
      var vm = this;
      vm.leaveGroup = leaveGroup;
      vm.group_id = $stateParams.group_id;
      function leaveGroup () {
        LeaveGroupService.leave($stateParams.group_id, function () {
          NavigaterHelper.goBack();
        });
      }
    }


})();
