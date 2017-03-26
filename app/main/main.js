'use strict';



angular.module('myApp.main', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/main', {
    templateUrl: 'main/main.html',
    controller: 'MainCtrl'
  });
}])
.controller('MainCtrl', [function() {

  var pgp = require('pg-promise')(/*options*/);
  var db = pgp('postgres://postgres:Jankam21@10.51.2.186:5432/Admin');


  var users = db.one("SELECT $1 AS value", 123)
      .then(function (data) {
        console.log("DATA:", data.value);
      })
      .catch(function (error) {
        console.log("ERROR:", error);
      });
}]);


