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

  function GetAllGroupsController (GetGroupsService, JoinGroup, $scope) {
    var vm = this;
    vm.offset = 0;
    vm.joinGroup = joinGroup;
    vm.load = load;
    vm.groups = [];
    vm.dataAvailable = true;

    function joinGroup (group_id) {
      JoinGroup.join(group_id);
    }
    function load (offset) {
      GetGroupsService.getAll(offset, function (data) {
        data.forEach(function (entry) {
        vm.groups.push(entry);
        })
        vm.offset += 5;
        $scope.$broadcast('scroll.infiniteScrollComplete');
        if (data.length === 0) {
          vm.dataAvailable = false;
        }
      })
    }
    GetGroupsService.getAll(vm.offset, function (data) {
      console.log(data);
      vm.groups = data;
      vm.offset += 5;
    })
  }
})();
