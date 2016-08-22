/**
 * Created by hfq on 2016/8/19.
 */
var basicRoute = angular.module('basicRoute',['ui.router']);

basicRoute.config(function($stateProvider,$urlRouterProvider){
  $stateProvider.state('about',{
    url : '/basic/about.htm',
    templateUrl : 'modules/basic/views/about.html',
    controller : 'aboutCtrl'
  });
});
