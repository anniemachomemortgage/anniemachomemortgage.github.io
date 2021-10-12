$(function() {
	$("button").click(function(){
		event.preventDefault();
	});
	$("#back-0").click(function(){
		$(".question-1").addClass("inactive");
		$("#initiate").removeClass("inactive");
	});
	$("#back-1").click(function(){
		
	});
	$("#back-2").click(function(){
		
	});
	$("#back-3").click(function(){
		
	});
	$("#back-4").click(function(){
		
	});
	$("#back-5").click(function(){
		
	});
	$("#next-1").click(function(){
		
	});
	$("#next-2").click(function(){
		
	});
	$("#next-3").click(function(){
		
	});
	$("#next-4").click(function(){
		
	});
	$("#next-5").click(function(){
		
	});
	$("#next-6").click(function(){
		
	});
	$("#a-option").click(function(){
		$(this).addClass("selected");
		$("#b-option").removeClass("selected");
		localStorage.setItem('formtype', 'purchase'); 
		if ((localStorage.formtype) == "purchase") {
			$("#initiate").addClass("inactive");
			$("#purchase-form").removeClass("inactive");
			$("#refinance-form").addClass("inactive");
		};
	});
	$("#b-option").click(function(){
		$(this).addClass("selected");
		$("#a-option").removeClass("selected");
		localStorage.setItem('formtype', 'refinance'); 
		if ((localStorage.formtype) == "refinance") {
			$("#initiate").addClass("inactive");
			$("#refinance-form").removeClass("inactive");
			$("#purchase-form").addClass("inactive");
		};
	});
});