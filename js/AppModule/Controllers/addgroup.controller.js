/**
 * Created by WangoeWoe on 06.12.15.
 */
(function () {

  angular
    .module('AppModule')
    .controller('addgroupController', addGroupCtrl);

  /*
  * TODO: DOC
  *
  * */

  function addGroupCtrl (GroupService) {
    var vm = this;

    vm.createNewGroup = createNewGroup;
    vm.group = {
      name: null,
      description: null
    }

    function createNewGroup () {
      // TODO: User must join the group
      GroupService.createNewGroup(vm.group.name, vm.group.description);
    }
  }
})();
