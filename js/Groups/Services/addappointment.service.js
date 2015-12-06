/**
 * Created by WangoeWoe on 06.12.15.
 */
(function () {

  angular
    .module('GroupModule')
    .service('AddAppointmentService', addAppointment);

    /*
    *
    *
    * */

    function addAppointment (Server, $http) {
      this.addAppointment = function (appointment, callback) {
        console.log(appointment);
        $http.post(Server + '/appointments', {
          name:           appointment.name,
          description:    appointment.description,
          startdate:      appointment.startdate,
          enddate:        appointment.enddate,
          location:       appointment.location,
          dresscode:      appointment.dresscode,
          contact:        appointment.contact,
          group_id:       appointment.igpGroupId
        }).then(function (data) {
          // TODO: Wait for Server!
          callback(data);
        })
      }
    }
})();
