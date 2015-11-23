/**
 * Created by WangoeWoe on 23.11.15.
 */
angular.module('AppointmentModule')
  .service('AppointmentService', ['$http', 'Server', function ($http, Server) {
    var getAllAppointments = function (id, callback) {
      $http.get( Server + '/groupappointment/' + id )
        .success(function (data) {
          callback(data);
        })
    }
    return getAllAppointments;
  }]);
