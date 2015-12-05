/**
 * Created by WangoeWoe on 30.11.15.
 */
(function() {
  'use strict';

  angular
    .module('HelperModule')
    .factory('NavigaterHelper', NavigaterHelper);
  /*
  * This is just here to navigate between the states whenever necessary
  *
  *
  *
  * */

  function NavigaterHelper ($state) {
    var NavigaterHelper;

    NavigaterHelper = function () {

    };
    NavigaterHelper.prototype.setState = function (state){
        $state.go(state, {},  {reload: true}).then(function ($state) {
        })
    }
    return new NavigaterHelper();


  }
})();

