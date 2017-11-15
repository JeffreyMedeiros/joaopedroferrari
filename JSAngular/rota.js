(function() {
    'use strict';

    var app = angular.module('Todo List', ['ngRoute']);

    app.config(function ($routeProvider) {
        $routeProvider
        .when('/soma', {
            templateUrl: 'somController.html'
        })
        .when('/subtracao', {
            templateUrl: 'subController.html'
        })
        .when('/divisao', {
            templateUrl: 'divController.html'
        })
        .when('/multiplicacao', {
            templateUrl: 'multController.html'
        })
        .otherwise({redirectTo: '/ERRO MEU PATRAO'});
    })
  })();