$(function() {
	$("button").click(function(){
		event.preventDefault();
	});
	$(".back-0").click(function(){
		$(".question-1").addClass("inactive");
		$("#initiate").removeClass("inactive");
	});
	$(".back-1").click(function(){
		$(".question-1").removeClass("inactive");
		$(".question-2").addClass("inactive");
	});
	$(".back-2").click(function(){
		$(".question-2").removeClass("inactive");
		$(".question-3").addClass("inactive");
	});
	$(".back-3").click(function(){
		$(".question-3").removeClass("inactive");
		$(".question-4").addClass("inactive");
	});
	$(".back-4").click(function(){
		$(".question-4").removeClass("inactive");
		$(".question-5").addClass("inactive");
	});
	$(".back-5").click(function(){
		$(".question-5").removeClass("inactive");
		$(".question-6").addClass("inactive");
	});
	$(".next-1").click(function(){
		$(".question-1").addClass("inactive");
		$(".question-2").removeClass("inactive");
	});
	$(".next-2").click(function(){
		$(".question-2").addClass("inactive");
		$(".question-3").removeClass("inactive");
	});
	$(".next-3").click(function(){
		$(".question-3").addClass("inactive");
		$(".question-4").removeClass("inactive");
	});
	$(".next-4").click(function(){
		$(".question-4").addClass("inactive");
		$(".question-5").removeClass("inactive");
	});
	$(".next-5").click(function(){
		$(".question-5").addClass("inactive");
		$(".question-6").removeClass("inactive");
	});
	$(".next-6").click(function(){
		$(".question-6").addClass("inactive");
		$(".submit").removeClass("inactive");
	});
	$("#a-option").click(function(){
		$(this).addClass("selected");
		$("#b-option").removeClass("selected");
		localStorage.setItem('formtype', 'purchase'); 
		if ((localStorage.formtype) == "purchase") {
			$("#initiate").addClass("inactive");
			$("#purchase-form").removeClass("inactive");
			$("#refinance-form").addClass("inactive");
			$("#purchase-form > .question-1").removeClass("inactive");
			$("#purchase-zip").attr('data-xml-node', 'PropertyZipCode');
			$("#purchase-price").attr('data-xml-node', 'PurchasePrice');
			$("#purchase-downpayment").attr('data-xml-node', 'DownPayment');
			$("#purchase-credit").attr('data-xml-node', 'CreditScore');
			$("#purchase-first-name").attr('data-xml-node', 'FirstName');
			$("#purchase-last-name").attr('data-xml-node', 'LastName');
			$("#purchase-phone").attr('data-xml-node', 'MobilePhone');
			$("#purchase-email").attr('data-xml-node', 'Email');
			$("#refinance-zip").removeAttr('data-xml-node');
			$("#refinance-remaining").removeAttr('data-xml-node');
			$("#refinance-credit").removeAttr('data-xml-node');
			$("#refinance-first-name").removeAttr('data-xml-node');
			$("#refinance-last-name").removeAttr('data-xml-node');
			$("#refinance-phone").removeAttr('data-xml-node');
			$("#refinance-email").removeAttr('data-xml-node');
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
			$("#refinance-form > .question-1").removeClass("inactive");
			$("#refinance-zip").attr('data-xml-node', 'PropertyZipCode');
			// NEED
			$("#refinance-remaining").attr('data-xml-node', '');
			
			$("#refinance-credit").attr('data-xml-node', 'CreditScore');
			$("#refinance-first-name").attr('data-xml-node', 'FirstName');
			$("#refinance-last-name").attr('data-xml-node', 'LastName');
			$("#refinance-phone").attr('data-xml-node', 'MobilePhone');
			$("#refinance-email").attr('data-xml-node', 'Email');
			$("#purchase-zip").removeAttr('data-xml-node');
			$("#purchase-price").removeAttr('data-xml-node');
			$("#purchase-downpayment").removeAttr('data-xml-node');
			$("#purchase-credit").removeAttr('data-xml-node');
			$("#purchase-first-name").removeAttr('data-xml-node');
			$("#purchase-last-name").removeAttr('data-xml-node');
			$("#purchase-phone").removeAttr('data-xml-node');
			$("#purchase-email").removeAttr('data-xml-node');
		};
	});
});