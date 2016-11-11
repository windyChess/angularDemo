/**
 * Created by hfq on 2016/11/11.
 */
var demoRoute = angular.module('demoRoute',['ui.router']);

demoRoute.config(function($stateProvider){
  $stateProvider.state('sliding-item',{
    url : '/smallDemo/sliding.htm',
    templateUrl : 'modules/smallDemo/views/sliding.html',
    controller : 'slidingCtrl'
  }).state('map-show',{
    url : '/smallDemo/map.html',
    templateUrl : 'modules/smallDemo/views/map.html',
    controller : 'mapCtrl'
  });
});
