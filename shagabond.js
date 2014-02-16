// JavaScript Document
$(document).ready(function () {
	
$("#into").hide();
	$("#btn1").hide();
	$("#click").click(function(){
			$("#into").show();
			$("#btn1").show();
	});
	$("#btn1").click(function(){
			$("#into").hide();
			$("#btn1").hide();
	});
});