/**
 * Created by hfq on 2016/11/11.
 */

var smallController = angular.module('smallController',[]);

smallController.controller('backCtrl',['$scope','$state',function($scope,$state){
  $scope.goBack = function(){
    $state.go('series-page');
  }
}]);

smallController.controller('slidingCtrl',['$scope','$state',function($scope,$state){

}]);

smallController.controller('loadmoreCtrl',['$scope','service',function($scope,service){
  $scope.list = [];
  $scope.getMoreData = function(){
    service.getList('../json/list.json').success(function(response){
      $scope.list = $scope.list.concat(response);
    });
  }

  $scope.getMoreData();
}]);

smallController.controller('weCtrl',['$scope',function($scope){

}]);


smallController.controller('mapCtrl',['$scope','$state',function($scope,$state){
  /**************百度地图*******************/
  var map = new BMap.Map("container"); //创建地图实例
  var point = new BMap.Point(116.404,39.915);  //创建点坐标
  map.centerAndZoom(point,15); //初始化地图，设置中心点坐标和地图级别

  map.enableScrollWheelZoom(); //开启鼠标滚轮缩放

  //添加控件
  map.addControl(new BMap.NavigationControl()); //添加平移缩放控件
  map.addControl(new BMap.ScaleControl()); //比例尺控件
  //map.addControl(new BMap.OverviewMapControl()); //缩略图控件
  map.addControl(new BMap.MapTypeControl()); //地图类型控件

  //添加标注
  var marker = new BMap.Marker(point);  //创建标注
  map.addOverlay(marker);  //将标注添加到地图中

  //监听标注事件
  marker.addEventListener('click',function(){
    //信息窗口
    //【注】：同一时刻只能有一个信息窗口在地图上打开
    var opts = {
      width : 250,
      height : 100,
      title : 'Hello tiananmen'
    };
    var elem = '<a>World</a>';
    var infoWindow = new BMap.InfoWindow(elem,opts);  //创建信息窗口对象
    map.openInfoWindow(infoWindow,map.getCenter()); //打开信息窗口
  });

  //自定义覆盖物(一)
  //定义自定义覆盖物的构造函数
  function SquareOverlay(point,text){
    this._point = point;
    this._text = text;
  }
  //继承API的BMap.Overlay
  SquareOverlay.prototype = new BMap.Overlay();
  //实现初始化方法
  SquareOverlay.prototype.initialize = function(map){
    //保存map对象实例
    this._map = map;
    //创建div元素，作为自定义覆盖物的容器
    var div = document.createElement('div');
    this._div = div;
    div.style.position = "absolute";
    div.style.zIndex = BMap.Overlay.getZIndex(this._point.lat);
    div.style.background = "url(images/blue.gif) repeat-x 0 -33px";

    div.style.color = "white";
    div.style.height = "21px";
    div.style.padding = "2px 5px";
    div.style.fontSize = "12px";
    div.style.lineHeight = "18px";
    div.style.whiteSpace = "nowrap";
    div.style.MozUserSelect = "none";

    var span = document.createElement("span");
    this._span = span;
    div.appendChild(span);
    span.appendChild(document.createTextNode(this._text));

    var that = this;

    var arrow = document.createElement("div");
    this._arrow = arrow;
    arrow.style.background = "url(images/blue.gif) no-repeat -20px -100px";
    arrow.style.position = "absolute";
    arrow.style.width = "30px";
    arrow.style.height = "12px";
    arrow.style.top = "19px";
    arrow.style.left = "10px";
    arrow.style.overflow = "hidden";
    div.appendChild(arrow);

    var leftBar = document.createElement("div");
    this._leftBar = leftBar;
    leftBar.style.background = "url(images/blue.gif) no-repeat -12px -2px";
    leftBar.style.position = "absolute";
    leftBar.style.width = "11px";
    leftBar.style.height  = "24px";
    leftBar.style.top = "0px";
    leftBar.style.left = "-10px";
    leftBar.style.overflow = "hidden";
    div.appendChild(leftBar);

    var rightBar = document.createElement("div");
    this._rightBar = rightBar;
    rightBar.style.background = "url(images/blue.gif) no-repeat -22px -2px";
    rightBar.style.position = "absolute";
    rightBar.style.width = "11px";
    rightBar.style.height = "24px";
    rightBar.style.top = "0px";
    rightBar.style.right = "-10px";
    rightBar.style.overflow = "hidden";
    div.appendChild(rightBar);

    //将div添加到覆盖物容器中
    map.getPanes().labelPane.appendChild(div);

    //需要将div作为方法的返回值，当调用该覆盖物的show/hide方法，
    // 或者对覆盖物进行移除时，API都讲操作此元素。
    return div;
  };
  //实现绘制方法
  SquareOverlay.prototype.draw = function(){
    var map = this._map;
    var position = this._map.pointToOverlayPixel(this._point);
    this._div.style.left = position.x - parseInt(this._arrow.style.left) + 'px';
    this._div.style.top = position.y - 30 + 'px';
  };
  //添加监听事件
  SquareOverlay.prototype.addEventListener = function(event,fn){
    this._div['on'+event] = fn;
  };

  //添加自定义覆盖物 116.413252,39.910895
  var txt = "this is test!";
  var myPoint = new BMap.Point(116.413252,39.910895);
  var mySquare = new SquareOverlay(myPoint,txt);
  map.addOverlay(mySquare);

  mySquare.addEventListener('touchstart',function(){
    /*var opts = {
     width : 250,
     height : 100,
     title : 'Hello tiananmen'
     };
     var elem = '<a href="#/basic/about.htm">World</a>';
     var infoWindow = new BMap.InfoWindow(elem,opts);  //创建信息窗口对象
     map.openInfoWindow(infoWindow,myPoint); //打开信息窗口*/
    var detailTxt = '这里是详情信息';
    //detailTxt += '<a href="#/basic/about.htm">go to about.html</a>';
    var detailW = new DetailWindow(myPoint,detailTxt);
    map.addOverlay(detailW);

  });

  mySquare.addEventListener('click',function(){
    /*var opts = {
     width : 250,
     height : 100,
     title : 'Hello tiananmen',
     enableMessage:true
     };
     var elem = '<a href="#/basic/about.htm">World</a>';
     var infoWindow = new BMap.InfoWindow(elem,opts);  //创建信息窗口对象
     map.openInfoWindow(infoWindow,myPoint); //打开信息窗口*/
    var detailTxt = '这里是详情信息';
    var detailW = new DetailWindow(myPoint,detailTxt);
    map.addOverlay(detailW);

  });

  //自定义覆盖物(二)
  function DetailWindow(point,text){
    this._point = point;
    this._text = text;
  }
  DetailWindow.prototype = new BMap.Overlay();
  DetailWindow.prototype.initialize = function(map){
    this._map = map;
    var div = document.createElement("div");
    this._div = div;
    div.style.position = "absolute";
    div.style.width = "200px";
    div.style.height = "200px";
    div.style.border = "1px solid blue";
    div.style.background = "white";
    var a = document.createElement('a');
    a.href = '#/basic/about.htm';
    a.appendChild(document.createTextNode(this._text));
    /*移动端使用*/
    a.addEventListener('touchstart',function(){
      alert('initialize');
      $state.go('about');
    });

    div.appendChild(a);

    map.getPanes().floatPane.appendChild(div);
    return div;
  };
  DetailWindow.prototype.draw = function(){
    var map = this._map;
    var position = this._map.pointToOverlayPixel(this._point);
    this._div.style.left = position.x + 'px';
    this._div.style.top = position.y - 200 + 'px';
  };
  DetailWindow.prototype.addEventListener = function(event,fn){
    this._div['on'+event] = fn;
  };
}]);
