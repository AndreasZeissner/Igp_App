// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic',
  'AppModule',
  'UserModule',
  'AppointmentModule'
  ])
  // TODO: Constants to uppercase
.constant('Server', 'http://192.168.56.140:3000/api/v1')
.run(function($ionicPlatform, NavigaterHelper) {
  $ionicPlatform.ready(function($state) {
    // always go to the login state, call its controller and decide what to do there!
    NavigaterHelper.setState('login');


    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });

})

.config(function($stateProvider, $urlRouterProvider, $httpProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
  })
  // searching for specific group
  .state('app.search', {
    url: '/search',
    views: {
      'menuContent': {
        templateUrl: 'templates/search.html'
      }
    }
  })
    /*
    * Login state
    *
    * app.login
    *
    * is called whenever no user is set in local storage
    * see app.js run
    * */
  .state('login', {
      url: '/login',
      templateUrl: 'js/Login/templates/login.view.html'
  })
  // maybe what is brand new atm?
  .state('app.browse', {
      url: '/browse',
      views: {
        'menuContent': {
          templateUrl: 'templates/browse.html'
        }
      }
    })

    .state('app.home', {
      cache: false,
      url: '/home',
      views: {
        'menuContent': {
          templateUrl: 'js/AppModule/Templates/home.view.html',
        },
      }
    })
    .state('app.group', {
      url: '/home/groupappointment/:appointment_id',
      views: {
        'menuContent': {
          templateUrl: 'templates/singleGroup.html',
        }
      }
    })
    .state('app.addgroup', {
      url: '/home/addgroup',
      views: {
        'menuContent': {
          templateUrl: 'js/AppModule/Templates/addGroup.view.html',
        }
      }
    })
    .state('app.groups', {
      url: '/groups',
      views: {
        'menuContent': {
          templateUrl: 'templates/groups.html'
        }
      }
    })
  ;

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/login');



    $httpProvider.defaults.headers.post["Content-Type"] = "application/json";
    $httpProvider.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
});
