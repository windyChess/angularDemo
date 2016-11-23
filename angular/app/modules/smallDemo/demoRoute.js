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
    url : '/smallDemo/map.htm',
    templateUrl : 'modules/smallDemo/views/map.html',
    controller : 'mapCtrl'
  }).state('load-more',{
    url : '/smallDemo/loadMore.htm',
    templateUrl : 'modules/smallDemo/views/loadMore.html',
    controller : 'loadmoreCtrl'
  }).state('use-we',{
    url : '/smallDemo/useWe.htm',
    templateUrl : 'modules/smallDemo/views/useWe.html',
    controller : 'weCtrl'
  }).state('svg-test',{
    url : '/smallDemo/svg.htm',
    templateUrl : 'modules/smallDemo/views/svg.html',
    controller : 'svgCtrl'
  });
});
