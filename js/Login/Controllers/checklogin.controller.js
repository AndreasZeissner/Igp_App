/**
 * Created by WangoeWoe on 02.12.15.
 */
/**
 * Created by WangoeWoe on 30.11.15.
 */
(function() {
  'use strict';

  angular
    .module('LoginModule')
    .controller('CheckLogin', CheckLogin);

    /*
    * This is maybe some Kind of workaround
    * it just checks if the user is logged in
    *   -> He is: HOME
    *   -> He isnt: Login Screen
    *
    * */

  function CheckLogin (NavigaterHelper, UserServiceREF) {
    var amILoggedIn = false;
    // that is the spirit i wanted, now we decide within this controller what should happen, and if we are logged in, the modal is usless now
    if (UserServiceREF.getLogin()) {
      NavigaterHelper.setState('app.home');
    } else {
      NavigaterHelper.setState('login')
    }
  }
})();

