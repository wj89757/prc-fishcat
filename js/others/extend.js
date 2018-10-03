/*
 * @Author: Administrator
 * @Date:   2016-07-19 16:34:22
 * @Last Modified by:   Administrator
 * @Last Modified time: 2016-07-19 16:34:59
 */

'use strict';
/*
 * @Author: Administrator
 * @Date:   2016-07-15 07:35:02
 * @Last Modified by:   Administrator
 * @Last Modified time: 2016-07-19 16:30:54
 */

'use strict';
$(function() {
	$('#search_button').button({
		// disabled : true,//不能使用
		// label : '按钮上的文字',
		icons :  {
			primary : 'ui-icon-search',//api文档找图标
			// secondary : 'ui-icon-search',
		},
		// text: false//不显示文字
	});

	// $('#login_a').click(function(){
	// 	$('#login').dialog();
	// });
	$('#reg').dialog({
		title: '知问注册',
		buttons: {
			'提交': function() {
				alert('正在ajax提交中...');
			},
			'取消': function() {
				$(this).dialog('close');
			}
		},
		// show : 'blind',//顶部显示或者消失
		// show : 'slide',//左边显示或消失
		// show : 'highlight',//伴随透明度或者背景色
		// show : 'drop',//对话框从左边显示或消失，有透明度变化
		show: true,
		hide: true, //淡出
		// position:'left top',
		// width:500,
		// minWidth:150,
		// minHeight:150,
		// maxWidth:600,
		// maxHeight:600,
		autoOpen: false,
		// draggable : false,//不可移动
		// resizable: false,//不可以调整大小
		// 对话框无法操作
		// modal : true,遮罩
		closeText: '关闭',
		// focus : function(event,ui){
		// 	alert('得到焦点实现');
		// },
		// create : function(event,ui){
		// 	alert('创建的时候调用')
		// },
		// open : function(event,ui){
		// 	alert('打开的时候执行');
		// },
		// close : function(event,ui){
		// 	alert('关闭的时候执行');
		// }
		// beforeClose : function(event,ui){
		// 	alert('将要关闭的时候执行');
		// 	return false;// 这个时间可以做一些关闭确认的工作
		// }
		// drag : function(){
		// 	alert('每次移动都执行');
		// }
	});
	$('#reg_a').click(function() {
		$('#reg').dialog('open');
	});

	// $('#reg input[type=radio]').button();
	// $('#reg').buttonset();
	// $('#reg input[type=checkbox]').button();
});