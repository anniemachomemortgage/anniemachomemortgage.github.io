$(function() {
	// Page navigation
	$("#toggle-page-1").click(function(event) {
		event.preventDefault();
		$("#page-0").removeClass("active-page");
		$("#page-0").addClass("inactive");
		$("#page-1").removeClass("inactive");
		$("#page-1").addClass("active-page");
	});
	$("#toggle-page-1b").click(function(event) {
		event.preventDefault();
		$("#page-0b").removeClass("active-page");
		$("#page-0b").addClass("inactive");
		$("#page-1").removeClass("inactive");
		$("#page-1").addClass("active-page");
	});
	$("#toggle-page-2").click(function(event) {
		event.preventDefault();
		$("#page-1").removeClass("active-page");
		$("#page-1").addClass("inactive");
		$("#page-2").removeClass("inactive");
		$("#page-2").addClass("active-page");
	});
	$("#toggle-page-3").click(function(event) {
		event.preventDefault();
		$("#page-2").removeClass("active-page");
		$("#page-2").addClass("inactive");
		$("#page-3").removeClass("inactive");
		$("#page-3").addClass("active-page");
	});
	$("#toggle-page-4").click(function(event) {
		event.preventDefault();
		$("#page-3").removeClass("active-page");
		$("#page-3").addClass("inactive");
		$("#page-4").removeClass("inactive");
		$("#page-4").addClass("active-page");
	});
	$("#toggle-page-5").click(function(event) {
		event.preventDefault();
		$("#page-4").removeClass("active-page");
		$("#page-4").addClass("inactive");
		$("#page-5").removeClass("inactive");
		$("#page-5").addClass("active-page");
	});
	$("#toggle-page-6").click(function(event) {
		event.preventDefault();
		$("#summary").removeClass("inactive");
		$("#summary").addClass("active-page");
		$("#page-5").addClass("inactive");
		$("#page-5").removeClass("active-page");
	});
	$("#toggle-back-page-0").click(function(event) {
		event.preventDefault();
		$("#page-1").addClass("inactive");
		$("#page-1").removeClass("active-page");
		$("#page-0").addClass("active-page");
		$("#page-0").removeClass("inactive");
	});
	$("#toggle-back-page-1").click(function(event) {
		event.preventDefault();
		$("#page-2").addClass("inactive");
		$("#page-2").removeClass("active-page");
		$("#page-1").addClass("active-page");
		$("#page-1").removeClass("inactive");
	});
	$("#toggle-back-page-2").click(function(event) {
		event.preventDefault();
		$("#page-3").addClass("inactive");
		$("#page-3").removeClass("active-page");
		$("#page-2").addClass("active-page");
		$("#page-2").removeClass("inactive");
	});
	$("#toggle-back-page-3").click(function(event) {
		event.preventDefault();
		$("#page-4").addClass("inactive");
		$("#page-4").removeClass("active-page");
		$("#page-3").addClass("active-page");
		$("#page-3").removeClass("inactive");
	});
	$("#toggle-back-page-4").click(function(event) {
		event.preventDefault();
		$("#page-5").addClass("inactive");
		$("#page-5").removeClass("active-page");
		$("#page-4").addClass("active-page");
		$("#page-4").removeClass("inactive");
	});
	$("#toggle-back-page-0b").click(function(event) {
		$("#page-0b").removeClass("active-page");
		$("#page-0b").addClass("inactive");
		$("#page-0").addClass("active-page");
		$("#page-0").removeClass("inactive");
	});
	$(".go-back-0").click(function(event) {
		$("#page-0").addClass("active-page");
		$("#summary").removeClass("active-page");
		$("#summary").addClass("inactive");
		$("#page-0").removeClass("inactive");
	});
	$("#go-back-1").click(function(event) {
		$("#page-1").addClass("active-page");
		$("#summary").removeClass("active-page");
		$("#summary").addClass("inactive");
		$("#page-1").removeClass("inactive");
	});
	$("#go-back-2").click(function(event) {
		$("#page-2").addClass("active-page");
		$("#summary").removeClass("active-page");
		$("#summary").addClass("inactive");
		$("#page-2").removeClass("inactive");
	});
	$("#go-back-3").click(function(event) {
		$("#page-3").addClass("active-page");
		$("#summary").removeClass("active-page");
		$("#summary").addClass("inactive");
		$("#page-3").removeClass("inactive");
	});
	$("#go-back-4").click(function(event) {
		$("#page-4").addClass("active-page");
		$("#summary").removeClass("active-page");
		$("#summary").addClass("inactive");
		$("#page-4").removeClass("inactive");
	});
	$(".go-back-5").click(function(event) {
		$("#page-5").addClass("active-page");
		$("#summary").removeClass("active-page");
		$("#summary").addClass("inactive");
		$("#page-5").removeClass("inactive");
	});
	
	// Button selection for each button on pages.
	$("#researching-selected").click(function(event) {
		event.preventDefault();
		$("#process-step").val($("#researching-selected").val());
		$("#page-2 > h3").text("What is the zip code of the area you are researching?");
		$("#page-2 > form > label").text("Zip Code");
		$("#page-1").removeClass("active-page");
		$("#page-1").addClass("inactive");
		$("#page-2").removeClass("inactive");
		$("#page-2").addClass("active-page");
	});
	$("#viewing-selected").click(function(event) {
		event.preventDefault();
		$("#process-step").val($("#viewing-selected").val());
		$("#page-2 > h3").text("What is the zip code of the area you are viewing?");
		$("#page-2 > form > label").text("Zip Code");
		$("#page-1").removeClass("active-page");
		$("#page-1").addClass("inactive");
		$("#page-2").removeClass("inactive");
		$("#page-2").addClass("active-page");
	});
	$("#offer-selected").click(function(event) {
		event.preventDefault();
		$("#process-step").val($("#offer-selected").val());
		$("#page-2 > h3").text("What address are you making an offer on?");
		$("#page-1").removeClass("active-page");
		$("#page-1").addClass("inactive");
		$("#page-2").removeClass("inactive");
		$("#page-2").addClass("active-page");
	});
	$("#contract-selected").click(function(event) {
		event.preventDefault();
		$("#process-step").val($("#contract-selected").val());
		$("#page-2 > h3").text("What address are you in contract with?");
		$("#page-1").removeClass("active-page");
		$("#page-1").addClass("inactive");
		$("#page-2").removeClass("inactive");
		$("#page-2").addClass("active-page");
	});
	$("#not-selling").click(function(event) {
		event.preventDefault();
		$("#address-current").val($("#not-selling").val());
		$("#page-3").removeClass("active-page");
		$("#page-3").addClass("inactive");
		$("#page-4").removeClass("inactive");
		$("#page-4").addClass("active-page");
	});
	$("#homebuyer-track").click(function(event) {
		event.preventDefault();
		$("#page-0").removeClass("active-page");
		$("#page-0").addClass("inactive");
		$("#page-1").removeClass("inactive");
		$("#page-1").addClass("active-page");
		$("#homebuyer-or-agent").val($("#homebuyer-track").val());
		$("#page-1 > h3 > span").text("are you");
		$("#page-2 > h3 > span").text("you are");
		$("#page-3 > h3 > span").text("you are");
		$("#page-4 > h3 > span").text("are you");
		$("#page-5 > h3 > span").text("yourself");
		$("#researching-selected").click(function(event) {
			$("#page-2 > h3").text("What is the zip code of the area you are researching?");
		});
		$("#viewing-selected").click(function(event) {
			$("#page-2 > h3").text("What is the zip code of the area you are viewing?");
		});
		$("#offer-selected").click(function(event) {
			$("#page-2 > h3").text("What address are you making an offer on?");
		});
		$("#contract-selected").click(function(event) {
			$("#page-2 > h3").text("What address are you in contract with?");
		});
		$("#researching-selected").text("I'm researching");
		$("#researching-selected").val("I'm researching");
		$("#viewing-selected").text("I'm viewing listings");
		$("#viewing-selected").val("I'm viewing listings");
		$("#offer-selected").text("I'm making an offer");
		$("#offer-selected").val("I'm making an offer");
		$("#contract-selected").text("I'm in a contract");
		$("#contract-selected").val("I'm in a contract");
		$("#not-selling").text("I'm not selling");
		$("#not-selling").val("I'm not selling");
		$("#broker-information").hide();
	});
	$("#estate-track").click(function(event) {
		event.preventDefault();
		$("#page-0").removeClass("active-page");
		$("#page-0").addClass("inactive");
		$("#page-0b").removeClass("inactive");
		$("#page-0b").addClass("active-page");
		$("#homebuyer-or-agent").val($("#estate-track").val());
		$("#page-1 > h3 > span").text("is your client");
		$("#page-2 > h3 > span").text("your client is");
		$("#page-3 > h3 > span").text("your client is");
		$("#page-4 > h3 > span").text("is your client");
		$("#page-5 > h3 > span").text("your client");
		$("#researching-selected").click(function(event) {
			$("#page-2 > h3").text("What is the zip code of the area your client is researching?");
		});
		$("#viewing-selected").click(function(event) {
			$("#page-2 > h3").text("What is the zip code of the area your client is viewing?");
		});
		$("#offer-selected").click(function(event) {
			$("#page-2 > h3").text("What address is your client making an offer on?");
		});
		$("#contract-selected").click(function(event) {
			$("#page-2 > h3").text("What address is your client in contract with?");
		});
		$("#researching-selected").text("My client is researching");
		$("#researching-selected").val("My client is researching");
		$("#viewing-selected").text("My client is viewing listings");
		$("#viewing-selected").val("My client is viewing listings");
		$("#offer-selected").text("My client is making an offer");
		$("#offer-selected").val("My client is making an offer");
		$("#contract-selected").text("My client is in a contract");
		$("#contract-selected").val("My client is in a contract");
		$("#not-selling").text("My client is not selling");
		$("#not-selling").val("My client is not selling");
		$("#broker-information").show();
	});
	// Value updates
	$("#page-2 > form > input").on("keyup change", function(e) {
		$("#address-seeking").val($("#page-2 > form > input").val());
	});
	$("#page-3 > form > input").on("keyup change", function(e) {
		$("#address-current").val($("#page-3 > form > input").val());
	});
	$("#price-min").on("keyup change", function(e) {
		$("#price-range-minimum").val($("#price-min").val());
	});
	$("#price-max").on("keyup change", function(e) {
		$("#price-range-maximum").val($("#price-max").val());
	});
	$("#first-name").on("keyup change", function(e) {
		$("#first-name-lead").val($("#first-name").val());
	});
	$("#last-name").on("keyup change", function(e) {
		$("#last-name-lead").val($("#last-name").val());
	});
	$("#phone-number").on("keyup change", function(e) {
		$("#phone-number-lead").val($("#phone-number").val());
	});
	$("#email-address").on("keyup change", function(e) {
		$("#email-address-lead").val($("#email-address").val());
	});
	$("#broker-first-name").on("keyup change", function(e) {
		$("#broker-first-name-lead").val($("#broker-first-name").val());
	});
	$("#broker-last-name").on("keyup change", function(e) {
		$("#broker-last-name-lead").val($("#broker-last-name").val());
	});
	$("#broker-phone-number").on("keyup change", function(e) {
		$("#broker-phone-number-lead").val($("#broker-phone-number").val());
	});
	$("#broker-email-address").on("keyup change", function(e) {
		$("#broker-email-address-lead").val($("#broker-email-address").val());
	});
	$("#broker-brokerage").on("keyup change", function(e) {
		$("#broker-brokerage-lead").val($("#broker-brokerage").val());
	});
	$("#menu-toggle").click(function(event) {
		$("#sub-menu").toggleClass("inactive");
	});
});