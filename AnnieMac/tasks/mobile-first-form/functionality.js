$(function() {
	$("#a-option").click(function(){
		$(this).addClass("selected");
		$("#b-option").removeClass("selected");
	});
	$("#b-option").click(function(){
		$(this).addClass("selected");
		$("#a-option").removeClass("selected");
	});
});