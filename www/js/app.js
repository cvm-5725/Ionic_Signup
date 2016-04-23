// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'ngOpenFB'])

  .run(function ($ionicPlatform, ngFB) {
    ngFB.init({appId: '820245091440153'});


  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
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

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.Home', {
    url: '/Home',
    views: {
      'menuContent': {
        templateUrl: 'templates/Home.html'
      }
    }
  })

  .state('app.jsp', {
    url: '/jsp',
    views: {
      'menuContent': {
        templateUrl: 'templates/jsp.html'
      }
    }
  })
  .state('app.profile', {
    url: "/profileview",
    views: {
        'menuContent': {
            templateUrl: "templates/profileview.html",
            controller: "ProfileCtrl"
        }
    }
})

  .state('app.AnoutMe', {
      url: '/AboutMe',
      views: {
        'menuContent': {
          templateUrl: 'templates/AboutMe.html'
        }
      }
    })
    .state('app.procedure', {
      url: '/procedure',
      views: {
        'menuContent': {
          templateUrl: 'templates/procedure.html',
        }
      }
    })

 
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/Home');
});
