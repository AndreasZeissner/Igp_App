/**
 * Created by WangoeWoe on 03.12.15.
 */
(function () {
  "use strict";

  angular
    .module('LoginModule')
    .controller('LoginControllerJP', login);

    function login (LoginServiceREF) {
      var vm = this;

      vm.login = login;
      vm.signup = signup;
      vm.credentials = {
        username: null,
        password: null,
        email: null,
        forname: null,
        surname: null,
        mobilephone: null
      }

      function signup () {
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
          // call for signup api !
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
