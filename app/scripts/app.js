'use strict';

/**
 * @ngdoc overview
 * @name demoApp
 * @description
 * # demoApp
 *
 * Main module of the application.
 */
angular
  .module('demoApp', [
    'ngAnimate', 'ngCookies', 'ngResource', 'ngRoute', 'ngSanitize', 'ngTouch', 'pascalprecht.translate'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl',
        controllerAs: 'contact'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .config(['$translateProvider', function ($translateProvider) {
    // add translation table

    //var gui = require('nw.gui');

    $translateProvider.useStaticFilesLoader({
      prefix: 'i18/',
      suffix: '.json'
    })
      .preferredLanguage('en')
      .useSanitizeValueStrategy('escaped');
  }]);
