/**
 * Created by hfq on 2016/8/18.
 */
var basicController = angular.module('basicController',[]);

basicController.controller('basicCtrl',['$scope',function($scope){
  /**************百度地图*******************/
  var map = new BMap.Map("container"); //创建地图实例
  var point = new BMap.Point(116.404,39.915);  //创建点坐标
  map.centerAndZoom(point,15); //初始化地图，设置中心点坐标和地图级别

  //添加控件
  map.addControl(new BMap.NavigationControl()); //添加平移缩放控件
  map.addControl(new BMap.ScaleControl()); //比例尺控件
  map.addControl(new BMap.OverviewMapControl()); //缩略图控件
  map.addControl(new BMap.MapTypeControl()); //地图类型控件

  //添加标注
  var marker = new BMap.Marker(point);  //创建标注
  map.addOverlay(marker);  //将标注添加到地图中

  //监听标注事件
  marker.addEventListener('click',function(){
    //信息窗口
    //【注】：同一时刻只能有一个信息窗口子啊地图上打开
    var opts = {
      width : 250,
      height : 100,
      title : 'Hello tiananmen'
    };
    var elem = '<a>World</a>';
    var infoWindow = new BMap.InfoWindow(elem,opts);  //创建信息窗口对象
    map.openInfoWindow(infoWindow,map.getCenter()); //打开信息窗口
  });

  //自定义覆盖物
  //定义自定义覆盖物的构造函数
  function SquareOverlay(center,length,color){
    this._center = center;
    this._length = length;
    this._color = color;
  }
  //继承API的BMap.Overlay
  SquareOverlay.prototype = new BMap.Overlay();
  //实现初始化方法
  SquareOverlay.prototype.initialize = function(map){
    //保存map对象实例
    this._map = map;
    //创建div元素，作为自定义覆盖物的容器
    var div = document.createElement('div');
    div.style.position = "absolute";
    div.style.width = this._length + 'px';
    div.style.height = this._length + 'px';
    div.style.background = this._color;
    //将div添加到覆盖物容器中
    map.getPanes().labelPane.appendChild(div);
    this._div = div;
    //需要将div作为方法的返回值，当调用该覆盖物的show/hide方法，
    // 或者对覆盖物进行移除时，API都讲操作此元素。
    return div;
  };
  //实现绘制方法
  SquareOverlay.prototype.draw = function(){
    var position = this._map.pointToOverlayPixel(this._center);
    this._div.style.left = position.x - this._length / 2 + 'px';
    this._div.style.top = position.y - this._length / 2 + 'px';
  };
  console.log(map.getCenter());
  //添加自定义覆盖物 116.413252,39.910895
  var mySquare = new SquareOverlay({lng:116.413252, lat: 39.910895},10,'red');
  map.addOverlay(mySquare);

}]);
