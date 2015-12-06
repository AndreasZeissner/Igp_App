/**
 * Created by WangoeWoe on 05.12.15.
 */
(function () {

  angular
    .module('HelperModule')
    .service('LocalStorageES', LocalStorage);

  /*
   * This is the local storag helper
   * Writes or reads from $window
   *  key value pairs
   * */

  function LocalStorage ($window) {
    this.writeToLocalStorage = function (key, value) {
      $window.localStorage[key] = JSON.stringify(value);
    }
    this.readFromLocalStorage = function (key) {
      return JSON.parse($window.localStorage[key] || false);
    }
  }

})();
