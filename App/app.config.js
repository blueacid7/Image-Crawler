'use strict';

app.config(function($routeProvider) {
  $routeProvider
      .when("/", {
        templateUrl : 'App/app.html',
        controller  : 'appController',
        controllerAs: 'vm'
      })
});