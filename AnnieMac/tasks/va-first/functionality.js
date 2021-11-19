$(function() {
	$("#am-css").remove();
	$("#am-styles").remove();
	$("#am-responsive").remove();
	$("#am-custom").remove();
	$("#stylesheet-git").remove();
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
	$('.question-1 > input').on('keyup',function() {
		var inputLength = $(".question-1 > input").val();
		var minLength = $(".question-1 > input").attr( 'minlength' );
		if(inputLength != '' && inputLength.length >= minLength) {
			$(".question-1 > div > .next-1").prop('disabled', false);
		} else {
			$(".question-1 > div > .next-1").prop('disabled', true);
		}
	});
	$('.ref-question-1 > input').on('keyup',function() {
		var inputLength = $(".ref-question-1 > input").val();
		var minLength = $(".ref-question-1 > input").attr( 'minlength' );
		if(inputLength != '' && inputLength.length >= minLength) {
			$(".ref-question-1 > div > .next-1").prop('disabled', false);
		} else {
			$(".ref-question-1 > div > .next-1").prop('disabled', true);
		}
	});
	$(".next-1").click(function(){
		$(".question-1").addClass("inactive");
		$(".question-2").removeClass("inactive");
	});
	$('.question-2 > input').on('keyup',function() {
		var inputLength = $(".question-2 > input").val();
		var minLength = $(".question-2 > input").attr( 'minlength' );
		if(inputLength != '' && inputLength.length >= minLength) {
			$(".question-2 > div > .next-2").prop('disabled', false);
		} else {
			$(".question-2 > div > .next-2").prop('disabled', true);
		}
	});
	$('.ref-question-2 > input').on('keyup',function() {
			var inputLength = $(".ref-question-2 > input").val();
			var minLength = $(".ref-question-2 > input").attr( 'minlength' );
			if(inputLength != '' && inputLength.length >= minLength) {
				$(".ref-question-2 > div > .next-2").prop('disabled', false);
			} else {
				$(".ref-question-2 > div > .next-2").prop('disabled', true);
			}
		});
	$(".next-2").click(function(){
		$(".question-2").addClass("inactive");
		$(".question-3").removeClass("inactive");
	});
	$(".next-3").click(function(){
		$(".question-3").addClass("inactive");
		$(".question-4").removeClass("inactive");
	});
	$('.question-4 > input').on('keyup',function() {
		var inputLengthFirst = $(".question-4 > input:first-of-type").val();
		var inputLengthLast = $(".question-4 > input:last-of-type").val();
		var minLengthFirst = $(".question-4 > input:first-of-type").attr( 'minlength' );
		var minLengthLast = $(".question-4 > input:last-of-type").attr( 'minlength' );
		if((inputLengthFirst != '' && inputLengthFirst.length >= minLengthFirst) && (inputLengthLast != '' && inputLengthLast.length >= minLengthLast)) {
			$(".question-4 > div > .next-4").prop('disabled', false);
		} else {
			$(".question-4 > div > .next-4").prop('disabled', true);
		}
	});
	$('.ref-question-4 > input').on('keyup',function() {
			var inputLengthFirst = $(".ref-question-4 > input:first-of-type").val();
			var inputLengthLast = $(".ref-question-4 > input:last-of-type").val();
			var minLengthFirst = $(".ref-question-4 > input:first-of-type").attr( 'minlength' );
			var minLengthLast = $(".ref-question-4 > input:last-of-type").attr( 'minlength' );
			if((inputLengthFirst != '' && inputLengthFirst.length >= minLengthFirst) && (inputLengthLast != '' && inputLengthLast.length >= minLengthLast)) {
				$(".ref-question-4 > div > .next-4").prop('disabled', false);
			} else {
				$(".ref-question-4 > div > .next-4").prop('disabled', true);
			}
		});
	$(".next-4").click(function(){
		$(".question-4").addClass("inactive");
		$(".question-5").removeClass("inactive");
	});
	$('.question-5 > input').on('keyup',function() {
		var inputLength = $(".question-5 > input").val();
		var minLength = $(".question-5 > input").attr( 'minlength' );
		if(inputLength != '' && inputLength.length >= minLength) {
			$(".question-5 > div > .next-5").prop('disabled', false);
		} else {
			$(".question-5 > div > .next-5").prop('disabled', true);
		}
	});
	$('.ref-question-5 > input').on('keyup',function() {
			var inputLength = $(".ref-question-5 > input").val();
			var minLength = $(".ref-question-5 > input").attr( 'minlength' );
			if(inputLength != '' && inputLength.length >= minLength) {
				$(".ref-question-5 > div > .next-5").prop('disabled', false);
			} else {
				$(".ref-question-5 > div > .next-5").prop('disabled', true);
			}
		});
	$(".next-5").click(function(){
		$(".question-5").addClass("inactive");
		$(".question-6").removeClass("inactive");
	});
	$('.question-6 > input').on('keyup',function() {
		var inputLength = $(".question-6 > input").val();
		var minLength = $(".question-6 > input").attr( 'minlength' );
		if(inputLength != '' && inputLength.length >= minLength) {
			$(".question-6 > input.submit-form").prop('disabled', false);
		} else {
			$(".question-6 > input.submit-form").prop('disabled', true);
		}
	});
	$('.ref-question-6 > input').on('keyup',function() {
			var inputLength = $(".ref-question-6 > input").val();
			var minLength = $(".ref-question-6 > input").attr( 'minlength' );
			if(inputLength != '' && inputLength.length >= minLength) {
				$(".ref-question-6 > input.submit-form").prop('disabled', false);
			} else {
				$(".ref-question-6 > input.submit-form").prop('disabled', true);
			}
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
			$("select#purchase-credit-dropdown").change(function () {
				var selectedCredit = $("#purchase-credit-dropdown").val();
				$('input[id=purchase-credit]').val(selectedCredit);
			});
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
			$("#refinance-remaining").attr('data-xml-node', 'LoanAmount');
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
			$("select#refinance-credit-dropdown").change(function () {
				var selectedCredit = $("#refinance-credit-dropdown").val();
				$('input[id=refinance-credit]').val(selectedCredit);
			});
		};
	});
});