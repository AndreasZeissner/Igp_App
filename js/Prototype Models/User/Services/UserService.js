/**
 * Created by WangoeWoe on 19.11.15.
 */
angular.module('UserModule')
  .factory('UserService', ['$resource', function($resource) {
    var User = $resource('http://192.168.56.140:3000/api/v1/user/:user_id', {user_id: '@id'});
    return User;
  }]);
