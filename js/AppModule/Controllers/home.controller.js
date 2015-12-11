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

    function homeController (UserGroupService) {
      var vm = this;
      vm.igpGroups;

      UserGroupService.getUserGroups(function (data) {
          vm.igpGroups = data.igp_groups;
      });

      }

})();
