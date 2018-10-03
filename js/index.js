/*
 * @Author: Administrator
 * @Date:   2016-07-15 07:35:02
 * @Last Modified by:   Administrator
 * @Last Modified time: 2016-07-26 11:04:28
 */

'use strict';
$(function() {
	// 获取菜单栏数目
	var listHeight = $('#list-group').children('.list-group-item').length;
	var list = listHeight;
	// 获取菜单栏高度
	var times = $('.list-group-item ').outerHeight();
	// 获取菜单栏宽度，方便二级菜单位置
	var secondProHeight = $('.list-group-item ').outerWidth();
	//定义循环数组
	var proArray = {};
	listHeight = times*listHeight - 4;
	// 设置滚动图片宽度
	$('.carousel-inner img').css('height',listHeight-2);
	window.onload = function(){
		$('.pox img').each(function(i){
			// 获取产品高度和宽度
			var imgWidth = $(this).width();
			var imgHeight = $(this).height();
			var poxWidth = $('.pox').width();
			var poxHeight = $('.pox').height();
			var imgPaddingLeft = (poxWidth-imgWidth)/2; 
			var imgPaddingTop = (poxHeight-imgHeight)/2;
			// alert(imgPaddingTop);
			$(this).css({
				'padding-left' : imgPaddingLeft,
				'padding-top': imgPaddingTop,
			});
		});
	};
	// 设置循环点击显示二级菜单事件
	for (var i = list; i >= 1; i--) {
		proArray[i] = i;
	}
	for(var index in proArray){
		var bg_pro = "url(../catFish/img/pro_bg"+index+".png)";
		// alert(bg_pro);
		$('#secondPro'+index).css({
			'background-image' : bg_pro,
			'background-size' :'70px 70px',
			'background-position': 'bottom right',
			'background-repeat': 'no-repeat'
		});
		$('#pro'+index).mousemove(function(){
			var pHeight = $(this).index();
			var pTimes = $(this).index();
			//为二级导航菜单赋css的left值
			$('.secondPro').css({
				'left' : secondProHeight,
				// 'width': listHeight,
				'top' : function(){
					return pHeight*(-40)+pTimes-1;
				},
				'height' :listHeight-2,
			});
		});
		$('#pro'+index).mousemove(function(){
			$(this).find('ul').show();
		});
		$('#pro'+index).mouseout(function(){
			if($(this).find('ul').css('display') == 'block'){
				$(this).find('ul').mouseout(function(){
					$(this).hide();
				});
			}
			else{
				$(this).find('ul').hide();
			}
			$(this).find('ul').hide();
		});
	}
});