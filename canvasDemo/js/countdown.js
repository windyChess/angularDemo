/**
 * Created by hfq on 2016/10/31.
 */
'use strict';
var WINDOW_WIDTH = 1024;
var WINDOW_HEIGHT = 800;
var MARGIN_LEFT = 30;
var MARGIN_TOP = 50;
var RADIUS = 8;

const endTime = new Date(2016,10,2,0,0,0);
var curSecondTime = 0;

window.onload = function(){
    var canvas = document.getElementById('canvas');
    canvas.width = WINDOW_WIDTH;
    canvas.height = WINDOW_HEIGHT;

    var context = canvas.getContext('2d');

    curSecondTime = getDValue();
    setInterval(function(){
        render(context);
        update();
    },50)
}

//获取当前时间和截止时间的差值
function getDValue(){
    var curTime = new Date();
    var dValue = endTime.getTime() - curTime.getTime();
    dValue = Math.round(dValue/1000);
    return dValue > 0 ? dValue : 0;
}

function update(){
    var nextShowTime = getDValue();
    var nextHour = parseInt(nextShowTime/3600);
    var nextMinute = parseInt((nextShowTime - nextHour*3600)/60);
    var nextSecond = parseInt(nextShowTime%60);

    var hour = parseInt(curSecondTime/3600);
    var minute = parseInt((curSecondTime - hour*3600)/60);
    var second = parseInt(curSecondTime%60);

    if(nextSecond != second){
        curSecondTime = nextShowTime;
        
    }
}

function render(cxt){
    //清除指定的矩形空间中绘制的内容；
    cxt.clearRect(0,0,WINDOW_WIDTH,WINDOW_HEIGHT);
    var hour = parseInt(curSecondTime/3600);
    var minute = parseInt((curSecondTime - hour*3600)/60);
    var second = parseInt(curSecondTime%60);
    renderDigit(MARGIN_LEFT,MARGIN_TOP,parseInt(hour/12),cxt);
    renderDigit(MARGIN_LEFT+15*(RADIUS+1),MARGIN_TOP,parseInt(hour%10),cxt);
    renderDigit(MARGIN_LEFT+30*(RADIUS+1),MARGIN_TOP,10,cxt);
    renderDigit(MARGIN_LEFT+38*(RADIUS+1),MARGIN_TOP,parseInt(minute/10),cxt);
    renderDigit(MARGIN_LEFT+53*(RADIUS+1),MARGIN_TOP,parseInt(minute%10),cxt);
    renderDigit(MARGIN_LEFT+68*(RADIUS+1),MARGIN_TOP,10,cxt);
    renderDigit(MARGIN_LEFT+77*(RADIUS+1),MARGIN_TOP,parseInt(second/10),cxt);
    renderDigit(MARGIN_LEFT+93*(RADIUS+1),MARGIN_TOP,parseInt(second%10),cxt);
}

function renderDigit(startX,startY,num,cxt){
    cxt.fillStyle = '#66BDCF';
    for(var i = 0; i < digit[num].length; i++){
        for(var j = 0; j < digit[num][i].length; j++){
            if(digit[num][i][j] == 1){
                cxt.beginPath();
                cxt.arc(startX+j*2*(RADIUS+1)+RADIUS+1,startY+i*2*(RADIUS+1)+RADIUS+1,RADIUS,0,2*Math.PI);
                cxt.closePath();
                cxt.fill();
            }
        }
    }
}