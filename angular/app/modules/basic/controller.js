/**
 * Created by hfq on 2016/8/18.
 */
var basicController = angular.module('basicController',[]);

basicController.controller('homeCtrl',['$scope','$state',function($scope,$state){

}]);

basicController.controller('aboutCtrl',['$scope',function($scope){

}]);

//个人中心
basicController.controller('userCtrl',['$scope',function($scope){

}]);

//底部导航栏
basicController.controller('navCtrl',['$scope','$state',function($scope,$state){
  $scope.title = '首页';
  $scope.goUser = function(){
    $scope.title = '个人中心';
    $state.go('user-center');
  };
  $scope.goHome = function(){
    $scope.title = '首页';
    $state.go('web');
  };
  $scope.goSeries = function(){
    $state.go('series-page');
  };

}]);

//图片裁剪预览
basicController.controller('handcutCtrl',['$scope','$state',function($scope,$state){
  var canvas = document.getElementById('picture-box');
  canvas.width = window.screen.availWidth;
  canvas.height = window.screen.availHeight - 50;
  var context = canvas.getContext('2d');

  var image = new Image();
  image.src = localStorage.picture;
  //image.attr('src',localStorage.picture);
  var imgW = canvas.width;
  var imgH = canvas.width*image.height/image.width;
  context.drawImage(image,50,200,imgW,imgH);

  function changePosition(x,y){
    context.clearRect(0,0,canvas.width,canvas.height);
    context.drawImage(image,x,y,imgW,imgH);
  }


  $scope.goBack = function(){
    $state.go('user-center');
  }

}]);

basicController.controller('seriesCtrl',['$scope','$state',function($scope,$state){
  $scope.goSliding = function(){
    $state.go('sliding-item');
  };
  $scope.goMap = function(){
    $state.go('map-show');
  }
}]);
