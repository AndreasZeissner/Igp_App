/**
 * Created by WangoeWoe on 21.11.15.
 */
angular.module('UsergroupsModule')
  .factory('UsergroupsFactory', ['Server','$resource', 'LoginFactory', function (Server, $resource, LoginFactory) {

    var Usergroup = $resource(Server + '/usergroups', {user_id: '@id'} ,{
      get: {
        // WORKAROUND LOOK AT CONSOLE LOG!
        isArray: false,
        headers: {
          user_id: LoginFactory.getUserId()
        }

      }
    });
    return Usergroup;
  }]);
