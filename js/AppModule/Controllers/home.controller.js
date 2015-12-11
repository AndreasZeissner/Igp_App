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

    function homeController (UserGroupService, UserServiceREF) {
      var vm = this;
      vm.igpGroups;

      UserGroupService.getUserGroups(UserServiceREF.getUserId(), function (data) {
          vm.igpGroups = data.igp_groups;
      });

      }

})();
