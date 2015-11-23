/**
 * Created by WangoeWoe on 20.11.15.
 */
angular.module('UserModule')
  .factory('UserHandler', ['$resource', 'Server', function ($resource, Server) {
    var User = {
      request: $resource(Server + '/users'),
    }
    return User;
  }]);
