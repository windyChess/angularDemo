/**
 * Created by hfq on 2016/8/19.
 */
var basicRoute = angular.module('basicRoute',['ui.router']);

basicRoute.config(function($stateProvider){
  $stateProvider.state('about',{
    url : '/basic/about.htm',
    templateUrl : 'modules/basic/views/about.html',
    controller : 'aboutCtrl'
  }).state('user-center',{
    url : '/basic/user.htm',
    templateUrl : 'modules/basic/views/userCenter.html',
    controller : 'userCtrl'
  }).state('hand-cut',{
    url : '/basic/handcut.htm',
    templateUrl : 'modules/basic/views/handCut.html',
    controller : 'handcutCtrl'
  }).state('series-page',{
    url : '/basic/series.htm',
    templateUrl : 'modules/basic/views/series.html',
    controller : 'seriesCtrl'
  });
});
