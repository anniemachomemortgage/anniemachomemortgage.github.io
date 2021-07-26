$(function() {
	$("#menu-toggle").click(function(event) {
		$("#sub-menu").fadeToggle("slow");
	});
	$("#toggle-page-1").click(function(event) {
		event.preventDefault();
		$("#page-0").removeClass("active-page");
		$("#page-0").addClass("inactive");
		$("#page-1").removeClass("inactive");
		$("#page-1").addClass("active-page");
	});
	$("#homebuyer-track").click(function(event) {
		event.preventDefault();
		$("#summary-field").val($("#homebuyer-track").val());
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
});