/**
 * Created by WangoeWoe on 05.12.15.
 */
/**
 * Created by WangoeWoe on 03.12.15.
 */
(function () {
  "use strict";

  angular
    .module('AppModule')
    .controller('LoginControllerJP', login);

  function login (LoginServiceREF, AddUserService) {
    var vm = this;
    //
    vm.login = login;
    vm.signUp = signUp;
    vm.credentials = {
      username: null,
      password: null,
      email: null,
      forname: null,
      surname: null,
      mobilephone: null
    }

    function signUp () {
      /*
       * call api
       *   login -> POST Signup
       *   and validate input
       * */
      if(  vm.credentials.username === null ||  vm.credentials.password === null ) {
        console.log("no username or password");
      } else if (  vm.credentials.email === null ||  vm.credentials.mobilephone === null ) {
        console.log("Email or mobile Phone not set");
      } else if ( vm.credentials.forname === null ||  vm.credentials.surname === null ) {
        console.log("Forname or Surname not set");
      } else {
        AddUserService.signup(vm.credentials.username, vm.credentials.password, vm.credentials.email, vm.credentials.forname, vm.credentials.surname, vm.credentials.mobilephone);
        // TODO: Handle this in a callback. For now it is not checked, if the user is present already
        LoginServiceREF.checkLogin(vm.credentials.username, vm.credentials.password);
      }
    }
    function login () {
      /*
       * call api
       *   login
       *   and validate input
       * */
      if (vm.credentials.username === null || vm.credentials.password === null) {
        console.log("No Credentials")
      } else {
        LoginServiceREF.checkLogin(vm.credentials.username, vm.credentials.password);
      }
    }
  }
})();
