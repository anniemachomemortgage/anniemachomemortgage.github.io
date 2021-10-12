$(function() {
	$("button").click(function(){
		event.preventDefault();
	});
	$("#a-option").click(function(){
		$(this).addClass("selected");
		$("#b-option").removeClass("selected");
		localStorage.setItem('formtype', 'purchase'); 
		if ((localStorage.formtype) == "purchase") {
			// $("#initiate").addClass("inactive");
			$("#purchase-form").removeClass("inactive");
			$("#refinance-form").addClass("inactive");
		};
	});
	$("#b-option").click(function(){
		$(this).addClass("selected");
		$("#a-option").removeClass("selected");
		localStorage.setItem('formtype', 'refinance'); 
		if ((localStorage.formtype) == "refinance") {
			// $("#initiate").addClass("inactive");
			$("#refinance-form").removeClass("inactive");
			$("#purchase-form").addClass("inactive");
		};
	});
});