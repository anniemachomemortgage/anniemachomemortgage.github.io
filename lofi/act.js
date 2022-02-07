$(function() {
	$("logo img").click(function(event) {
		window.location.href = '/';
	});
	$("#home-navigation-bar").hover(function () {
		$("#home-navigation-bar ul").removeClass("initial-hidden");
		$("#loans-navigation-bar ul").addClass("initial-hidden");
		$("#resources-navigation-bar ul").addClass("initial-hidden");
	});
	$("#loans-navigation-bar").hover(function () {
		$("#home-navigation-bar ul").addClass("initial-hidden");
		$("#loans-navigation-bar ul").removeClass("initial-hidden");
		$("#resources-navigation-bar ul").addClass("initial-hidden");
	});
	$("#resources-navigation-bar").hover(function () {
		$("#home-navigation-bar ul").addClass("initial-hidden");
		$("#loans-navigation-bar ul").addClass("initial-hidden");
		$("#resources-navigation-bar ul").removeClass("initial-hidden");
	});
	$("#pin-toggle").hover(function () {
		$("#home-navigation-bar ul").addClass("initial-hidden");
		$("#loans-navigation-bar ul").addClass("initial-hidden");
		$("#resources-navigation-bar ul").addClass("initial-hidden");
	});
	$("#apply-navigation-bar").hover(function () {
		$("#home-navigation-bar ul").addClass("initial-hidden");
		$("#loans-navigation-bar ul").addClass("initial-hidden");
		$("#resources-navigation-bar ul").addClass("initial-hidden");
	});
});