/**
 * Created by WangoeWoe on 07.12.15.
 */
(function () {

  angular
    .module('AppModule')
    .controller('GetAllGroupsController', GetAllGroupsController);


  /*
  *
  *
  *
  * */

  function GetAllGroupsController (GetGroupsService, JoinGroup) {
    var vm = this;
    vm.joinGroup = joinGroup;

    function joinGroup (group_id) {
      JoinGroup.join(group_id);
    }

    GetGroupsService.getAll(function (data) {
      vm.groups = data;
      console.log(data);
    })
  }
})();
