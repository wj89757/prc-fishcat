/*
 * @Author: Administrator
 * @Date:   2016-07-15 07:35:02
 * @Last Modified by:   Administrator
 * @Last Modified time: 2016-07-23 09:38:59
 */

'use strict';
$(function() {
	$('#search_button').button({
		icons :  {
			primary : 'ui-icon-search',//api文档找图标
		},
	});
	$('#reg').dialog({
		autoOpen: false,
		modal:true,
		title: '猫鱼网用户注册',
		width : 320,
		height:340,
		resizable: false,//不可以调整大小
		buttons: {
			'提交': function() {

			},
			'取消': function() {
				$(this).dialog('close');
			}
		},
		show: true,
		hide: true, //淡出
		closeText: '关闭',
	});
	// $('#reg').buttonset();
	$('#reg_a').click(function() {
		$('#reg').dialog('open');
	});
	$('#date').datepicker();
	$('#reg input[title]').tooltip({
		show : false,
		hide : false,
		position:{
			my : 'left center',
			at : 'right+8 center',
		},
		// track : false,文本框跟谁
		// open : function(){
		// 	alert('打开时触发');
		// }
	});
	var host = ['aaa@163.com','bbb@qq.com','ccc@foxmail.com'];

	$('#email').autocomplete({
		source : host,
	});
});