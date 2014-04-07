// Ionic vrApp App, v0.9.20

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'vrApp' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'vrApp.services' is found in services.js
// 'vrApp.controllers' is found in controllers.js
angular.module('vrApp', ['ionic', 'vrApp.controllers', 'audioPlayer'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
      url: "/app",
      abstract: true,
      templateUrl: "templates/menu.html",
      controller: 'AppCtrl'
    })

    .state('app.prensa', {
      url: "/prensa",
      views: {
        'menuContent' :{
          templateUrl: "templates/prensa.html",
          controller: 'ColeccionesCtrl'
        }
      }
    })

    .state('app.prensapublicada', {
      url: "/prensa/:coleccionId",
      views: {
        'menuContent' :{
          templateUrl: "templates/publicada.html",
          controller: 'ColeccionCtrl'
        }
      }
    })

    .state('app.novedades', {
      url: "/novedades",
      views: {
        'menuContent' :{
          templateUrl: "templates/novedades.html",
          controller: 'ColeccionesCtrl'
        }
      }
    })

    .state('app.nota-1', {
      url: "/novedades/nota-1",
      views: {
        'menuContent' :{
          templateUrl: "templates/nota-1.html",
          controller: 'ColeccionesCtrl'
        }
      }
    })

    .state('app.nota-2', {
      url: "/novedades/nota-2",
      views: {
        'menuContent' :{
          templateUrl: "templates/nota-2.html",
          controller: 'ColeccionesCtrl'
        }
      }
    })

    .state('app.acerca', {
      url: "/acerca",
      views: {
        'menuContent' :{
          templateUrl: "templates/acerca.html",
          controller: 'ColeccionesCtrl'
        }
      }
    })

    .state('app.colecciones', {
      url: "/colecciones",
      views: {
        'menuContent' :{
          templateUrl: "templates/colecciones.html",
          controller: 'ColeccionesCtrl'
        }
      }
    })

    .state('app.single', {
      url: "/coleccion/:coleccionId",
      views: {
        'menuContent' :{
          templateUrl: "templates/coleccion.html",
          controller: 'ColeccionCtrl'
        }
      }
    });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/colecciones');
});

