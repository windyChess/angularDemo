/**
 * Created by hfq on 2016/8/18.
 */
var webRoute = angular.module('webRoute',['ui.router','basicRoute']);

webRoute.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){
  $stateProvider.state('web',{
    url: '/',
    templateUrl: 'modules/basic/views/home.html',
    controller: 'homeCtrl'
  });

  $urlRouterProvider.otherwise('/');
}]);
