/* global $ */
/*
 * Carbon-Forum
 * https://github.com/lincanbin/Carbon-Forum
 *
 * Copyright 2006-2015 Canbin Lin (lincanbin@hotmail.com)
 * http://www.94cb.com/
 *
 * Licensed under the Apache License, Version 2.0:
 * http://www.apache.org/licenses/LICENSE-2.0
 * 
 * A high performance open-source forum software written in PHP. 
 */

// 上传一个新图标
function UploadTagIcon() {
	$.upload({
		// 上传地址
		url: WebsitePath + "/manage", 
		// 文件域名字
		fileName: 'TagIcon', 
		// 其他表单数据
		params: {
			ID: TagID,
			Type: 5,
			Action: 'UploadIcon'
		},
		// 上传完成后, 返回json, text
		dataType: 'json',
		// 上传之前回调,return true表示可继续上传
		onSend: function() {
			return true;
		},
		// 上传之后回调
		onComplate: function(data) {
			alert(data.Message);
		}
	});
}

//编辑标签
function EditTagDescription() {
	$("#TagDescription").hide();
	$("#EditTagDescription").show();
}

//完成标签编辑
function CompletedEditingTagDescription() {
	$("#EditTagDescription").hide();
	$("#TagDescription").show();
}


//提交编辑修改
function SubmitTagDescription() {
	var EditCallbackObj = new EditPostCallback();
	$.ajax({
		url: WebsitePath + "/manage",
		data: {
			ID: TagID,
			Type: 5,
			Action: 'EditDescription',
			Content: $("#TagDescriptionInput").val()
		},
		cache: false,
		dataType: "json",
		type: "POST",
		success: function() {

		}
	});

}