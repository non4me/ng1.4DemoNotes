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
    'ngCookies', 'ngResource', 'ngRoute', 'ngSanitize', 'pascalprecht.translate'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
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
