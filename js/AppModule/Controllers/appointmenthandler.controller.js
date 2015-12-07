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

    function AppointmentHandler (LeaveGroupService, NavigaterHelper, $stateParams, GetSingleGroup, UserServiceREF, DeleteGroupService) {
      var vm = this;
      vm.leaveGroup = leaveGroup;
      vm.group_id = $stateParams.group_id;
      vm.deleteGroup = deleteGroup;

      GetSingleGroup.getGroupById($stateParams.group_id, function (data) {
        if(UserServiceREF.getUserId() == data.admin_token) {
          vm.isAdmin = true;
        } else {
          vm.isAdmin = false;
        }
      });
      function deleteGroup () {
        DeleteGroupService.delete($stateParams.group_id, function () {
          NavigaterHelper.goBack();
        });
      }
      function leaveGroup () {
        LeaveGroupService.leave($stateParams.group_id, function () {
          NavigaterHelper.goBack();
        });
      }
    }


})();
