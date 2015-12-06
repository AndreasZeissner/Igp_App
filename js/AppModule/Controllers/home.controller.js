/**
 * Created by WangoeWoe on 05.12.15.
 */
(function () {

  angular
    .module('AppModule')
    .controller('homeController', homeController);

    /*
    *
    *
    * */

    function homeController (UserGroupService, LeaveGroupService) {
      var vm = this;
      vm.igpGroups;
      vm.leaveGroup = leaveGroup;

      UserGroupService.Ressource.get(function (data) {
          vm.igpGroups = data.igp_groups;
      });
      function leaveGroup (group_id) {
        LeaveGroupService.leave(group_id);
        }
      }

})();
