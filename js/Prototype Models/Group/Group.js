/**
 * Created by WangoeWoe on 17.11.15.
 */
angular.module('GroupModule', ['ngResource', 'LoginModule'])
  .controller('GroupCtrl', ['$scope', '$resource', '$ionicModal','GroupFactory', 'UserService', 'Services',
    function ($scope, $resource, $ionicModal, GroupFactory, UserService, LoginService) {

    $scope.group = {
      name: null,
      description: null,
      admin_token: null,
      user_token: null
    }
    $scope.user = {
      userInfos: null,
      groups: null,
      name: null
    }
    var myUser = new UserService();
    var UserGroups = $resource('http://192.168.56.140:3000/api/v1/usergroups/:userId', {userId: '@id'},
      {
        get: {
          isArray: true
        }
      }
    );
  if(LoginService.getLogStatus() == true) {
    $scope.user.groups = GroupService.returnUsersGroups();

  }

    $scope.sendNewGroupToServer = function () {
      GroupFactory.addGroup($scope.group.name, $scope.group.description, LoginService.getUserId, function(data){
        console.log(data);
        UserGroups.get({userId:LoginService.getUserId()}, function (data) {
          $scope.user.groups = data;
        });
        $scope.closeModal();
      });

    }


    $ionicModal.fromTemplateUrl('templates/add-group-modal.html', {
      scope: $scope,
      animation: 'slide-in-up'
    }).then(function(modal) {
      $scope.addGroupModal = modal;
    });
    $scope.openAddGroupModal = function() {
      $scope.addGroupModal.show();

    };
    $scope.closeModal = function() {
      $scope.addGroupModal.hide();
    };
    //Cleanup the modal when we're done with it!
    $scope.$on('$destroy', function() {
      $scope.addGroupModal.remove();
    });
    // Execute action on hide modal
    $scope.$on('modal.hidden', function() {
      // Execute action
    });
    // Execute action on remove modal
    $scope.$on('modal.removed', function() {
      // Execute action
    });
    var User = $resource('http://192.168.56.140:3000/api/v1/users/:userId', {userId:'@id'},
      {
        get: {
          isArray: false
        }
      }

    );
    User.get({userId:1}, function(data) {
      $scope.user.userInfos = data;
    });
  }])

  .controller('SingleGroupCtrl', ['$scope', '$resource', '$stateParams', 'GroupFactory', '$ionicHistory', '$ionicModal', 'AppointmentFactory', '$window',
    function ($scope, $resource, $stateParams, GroupFactory, $ionicHistory, $ionicModal, AppointmentFactory, $window) {

      $scope.deleteGroup = function () {
        GroupFactory.getGroupById($stateParams.groupId, function(group) {
          group.$delete();
          $ionicHistory.goBack();
        });
      }

      GroupFactory.getGroupById($stateParams.groupId, function(group) {
        $scope.group = group;
      });

      $scope.appointment = {
        name: null,
        description: null,
        startdate: null,
        enddate: null,
        location: null,
        dresscode: null,
        contact: null,
        group_id: $stateParams.groupId
      }
      $scope.addNewAppointment = function () {
        AppointmentFactory.addAppointment($scope.appointment, function(data) {
          console.log(data);
          // TODO: Set appointments values back to Zero!
          // this is a lazy solution
          $scope.appointment = {
            name: null,
            description: null,
            startdate: null,
            enddate: null,
            location: null,
            dresscode: null,
            contact: null,
            group_id: $stateParams.groupId
          }
          $scope.addAppointmentModal.hide();
        });
      }

      $ionicModal.fromTemplateUrl('templates/add-appointment-modal.html', {
        scope: $scope,
        animation: 'slide-in-up'
      }).then(function(modal) {
        $scope.addAppointmentModal = modal;
      });
      $scope.openAddAppointmentModal = function() {
        $scope.addAppointmentModal.show();
      };
      $scope.closeModal = function() {
        $scope.addAppointmentModal.hide();
      };
      //Cleanup the modal when we're done with it!
      $scope.$on('$destroy', function() {
        $scope.addAppointmentModal.remove();
      });
      // Execute action on hide modal
      $scope.$on('modal.hidden', function() {

        Appointments.get({groupid: $stateParams.groupId}, function (data) {
          $scope.appointments = data;

        });
      });
      // Execute action on remove modal
      $scope.$on('modal.removed', function() {
        // Execute action
      });

      $scope.deleteAppointment = function (appointment_id) {
        AppointmentFactory.getAppointmentById(appointment_id, function(data) {
          data.$delete();
          Appointments.get({groupid: $stateParams.groupId}, function (data) {
            $scope.appointments = data;
            // not nice, but working for the moment
            // It makes as well a bug. It kills the state history and makes it impossible, to go back to the main view!
            $window.location.reload(true)
          });
        })

      }

    var Appointments = $resource('http://192.168.56.140:3000/api/v1/groups/appointments/:groupid', { groupid: '@id'},
      {
        get: {
          isArray: true
        }
      }
    );

    Appointments.get({groupid: $stateParams.groupId}, function (data) {
      $scope.appointments = data;

    });

  }]);
