$(function() {
	$("#menu-toggle").click(function(event) {
		$("#sub-menu").fadeToggle("slow");
	});
	
	// Page navigation
	$("#toggle-page-1").click(function(event) {
		event.preventDefault();
		$("#page-0").removeClass("active-page");
		$("#page-0").addClass("inactive");
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
	$("#homebuyer-track").click(function(event) {
		event.preventDefault();
		$("#homebuyer-or-agent").val($("#homebuyer-track").val());
		$("#page-0").removeClass("active-page");
		$("#page-0").addClass("inactive");
		$("#page-1").removeClass("inactive");
		$("#page-1").addClass("active-page");
	});
	$("#go-back-0").click(function(event) {
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
});