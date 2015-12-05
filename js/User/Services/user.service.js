/**
 * Created by WangoeWoe on 03.12.15.
 */
(function () {
  "use strict";

  angular
    .module('UserModule')
    .service('UserServiceREF', UserService);

  /*
  * This represents our user and all data needed to go around the login
  * id, username, img, ...
  *
  * */

  function UserService (LocalStorageES) {
    // probably a bit a problem, should it be exposed when there are getters and setters?
    this.User = {
      name: null,
      id: null,
      login_token: false
    }
    this.initialize = function (id, name) {
      this.setUserId(id);
      this.setUserName(name);
      this.login();
    }
    this.getUserName = function () {
      return this.User.name;
    }
    this.setUserName = function (name) {
      this.User.name = name;
    }
    this.getUserId = function () {
      return LocalStorageES.readFromLocalStorage('id');
    }
    this.setUserId = function (id) {
      LocalStorageES.writeToLocalStorage('id', id);
    }
    this.getLogin = function () {
      return LocalStorageES.readFromLocalStorage('login_token');
    }
    this.login = function () {
      // TODO: Write all the stuff to the local storage
      LocalStorageES.writeToLocalStorage('login_token', true);
      this.User.login_token = true;
    }
    this.logout = function () {
      // release the kraken!
      /*
      * All user data needs to be flushed!
      * */
      this.User.login_token = false;
    }

  }
})();
