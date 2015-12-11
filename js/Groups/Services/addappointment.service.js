/**
 * Created by WangoeWoe on 06.12.15.
 */
(function () {

  angular
    .module('GroupModule')
    .factory('AddAppointmentService', addAppointment);

    /*
    *
    *
    * */

    function addAppointment (Server, $http, $timeout) {
      var service = {
        addAppointment: addAppointment
      }

      return service;

      function addAppointment (appointment, callback) {
        $http.post(Server + '/appointments', {
          name:           appointment.name,
          description:    appointment.description,
          startdate:      appointment.startdate,
          enddate:        appointment.enddate,
          location:       appointment.location,
          dresscode:      appointment.dresscode,
          contact:        appointment.contact,
          group_id:       appointment.igpGroupId
        }).success(function (data) {
              callback(data);
        }).error(function (error, code) {
          console.log(error)
          console.log(code)
        });
      }
    }
})();
