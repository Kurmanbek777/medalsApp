'use strict';

//var pgp = require('pg-promise')();
//var db = pgp('postgres://postgres:Jankam21@10.51.2.186:5432/Admin');

// Declare app level module which depends on views, and components
var app = angular.module('myApp', [
  'ngRoute',
  'myApp.main',
  'myApp.newaward',
  'myApp.login',
  'myApp.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/main'});
}]);

//var users = db.one('SELECT * FROM "Users"');

