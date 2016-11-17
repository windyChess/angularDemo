'use strict';
/**
 * Created by hfq on 2016/11/14.
 */
var service = angular.module('service',[]);

service.factory('service',function($http){
  var data = {
    getList: function(params){
      return $http.get(params);
    }
  };
  return data;
});
