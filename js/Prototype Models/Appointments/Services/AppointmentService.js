/**
 * Created by WangoeWoe on 19.11.15.
 */
angular.module('AppointmentModule')
  .factory('AppointmentFactory', ['$resource', function ($resource) {
    var Appointments = $resource('http://192.168.56.140:3000/api/v1/appointments/:appointment_id', { appointment_id: '@id'},
      {
        getOneAppointment: {
          method: 'GET',
          params: {
            appointment_id: null
          }
        }
      }
    );




    return {
      addAppointment: function (appointment_object, callback) {
        var appointment = new Appointments();

            appointment.name        = appointment_object.name;
            appointment.description = appointment_object.description;
            appointment.startdate   = appointment_object.startdate;
            appointment.enddate     = appointment_object.enddate;
            appointment.location    = appointment_object.location;
            appointment.dresscode   = appointment_object.dresscode;
            appointment.contact     = appointment_object.contact;
            appointment.group_id    = appointment_object.group_id;

        appointment.$save({}, function (data) {
          callback(data);
        });
      },
      getAppointmentById: function (id, callback) {

        var singleAppointment = new Appointments();
        singleAppointment.$getOneAppointment({appointment_id: id}, function (singleAppointment){
          callback(singleAppointment);
        });
      },
    }
  }]);


