/**
 * Created by hfq on 2016/8/18.
 */
var webDir = angular.module('webDir',[]);

webDir.directive('customChange',function($state){
  return{
    restrict : 'A',
    link: function($scope,elem,attr){
      elem.on('change',function(event){
        var files = event.target.files;
        var reader = new FileReader;
        reader.readAsDataURL(files[0]);
        reader.onload = function(e){
          //$('.preview').attr("src", this.result);
          //跳转到裁剪页面
          localStorage.picture = this.result;
          $state.go('hand-cut');
        }





       /* var objUrl = getObjectURL(this.files[0]) ;
        if (objUrl) {
          $('.preview').attr("src", objUrl);
        }*/


      });

      function getObjectURL(file) {
        var url = null;
        if (window.createObjectURL != undefined) { // basic
          url = window.createObjectURL(file);
        } else if (window.URL != undefined) { // mozilla(firefox)
          url = window.URL.createObjectURL(file);
        } else if (window.webkitURL != undefined) { // webkit or chrome
          url = window.webkitURL.createObjectURL(file);
        }
        return url;
      }

    }
  }
});
