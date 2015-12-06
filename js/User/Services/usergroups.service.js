/**
 * Created by WangoeWoe on 05.12.15.
 */
(function () {

  angular
    .module('UserModule')
    .service('UserGroupService', UserGroups)

  /*
  * Service is quiet ugly.
  *   A factory would return itself and it would be more clear how to use it
  *   This one is used like this:
  *   UserGroupService.Ressource.get()
  *                             .query()
  *                             ...
  *
  * */

    function UserGroups (Server, $resource, UserServiceREF) {
      this.Ressource = $resource(Server + '/usergroups', {user_id: '@id'} ,{
        get: {
          // WORKAROUND LOOK AT CONSOLE LOG!
          isArray: false,
          headers: {
            user_id: UserServiceREF.getUserId()
          }
        }
      });
    }
})();
