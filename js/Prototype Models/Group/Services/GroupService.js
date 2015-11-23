/**
 * Created by WangoeWoe on 19.11.15.
 */
angular.module('GroupModule')
  .service('GroupFactory', ['$resource', 'Services', function ($resource, LoginService) {
    var UsersGroups = null;
    var Group = $resource('http://192.168.56.140:3000/api/v1/groups/:group_id', {group_id: '@id'}, {

    });
    var UserGroups = $resource('http://192.168.56.140:3000/api/v1/group/:userId', {userId: '@id'},
      {
        getAll: {
          isArray: true
        },
        get: {
          isArray: false
        }
      }
    );
    var GroupAdd = $resource('http://192.168.56.140:3000/api/v1/group/add', {}, {
      addGroup: {
        method: 'POST',
        params: {
          name: null,
          description: null,
          admin_token: null,
          user_token: null,
        }
      }
    });

    return {
      addGroup: function (group_name, group_description, user_id, callback) {
        var groupToAdd = new GroupAdd();
        console.log();
        user_id = LoginService.getUserId();

        groupToAdd.name = group_name;
        groupToAdd.description = group_description;

        groupToAdd.$addGroup({}, function (success, error) {

          UserGroups.get({userId: user_id} , function (data) {
            console.log(data);
            callback(data);
          });
        });

      },
      getGroupById: function (id, callback) {
        var singleGroup = new Group();

        singleGroup.$get({group_id: id}, function (data) {
          callback(data);
        })
      },
      getUserGroups: function (id, callback) {
        UserGroups.getAll({userId: LoginService.getUserId}, function (data) {
          UsersGroups = data;
        })
      },
      returnUsersGroups: function () {
        return UsersGroups;
      }

    }
  }]);



// TODO: REMEMBER ME THIS IS HOW TO DLETE A GROUP
//var Gruppe = new Group();
//Gruppe.$get({group_id: 23}, function (data) {
//  Gruppe = data;
//  Gruppe.$delete();
//});
