/**
 * Created by WangoeWoe on 06.12.15.
 */
(function () {

  angular
    .module('GroupModule')
    .factory('AppointmentServiceES', AppointmentService);

  /*
  *
  *
  *
  * */

  function AppointmentService (Server, $http) {
    var service = {
      getAppointments: getAppointments
      }

    return service;

    function getAppointments (group_id, callback) {
      $http.get(Server + '/groupappointment/' + group_id,{
      }).success(function (data) {
        callback(data);
      }).error(function (error) {
        throw Error(error);
      })
    }
  }
})();

