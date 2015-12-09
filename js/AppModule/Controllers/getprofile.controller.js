/**
 * Created by WangoeWoe on 09.12.15.
 */
(function () {

  angular
    .module('AppModule')
    .controller('GetProfileController', GetProfileController);

    /*
    *
    *
    * */

    function GetProfileController (UserServiceREF) {
      var vm = this;

      UserServiceREF.getUserInformation(function (data) {
        vm.userInformation = data;
      });

    }

})();
