'use strict';

angular.module('myApp.newaward', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/newaward', {
    templateUrl: 'newaward/newaward.html',
    controller: 'NewAwardCtrl'
  });
}])

.controller('NewAwardCtrl', [function() {

}]);