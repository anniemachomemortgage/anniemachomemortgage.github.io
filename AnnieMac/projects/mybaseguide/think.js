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
	$("#blank-space").hover(function () {
		$("#home-navigation-bar ul").addClass("initial-hidden");
		$("#loans-navigation-bar ul").addClass("initial-hidden");
		$("#resources-navigation-bar ul").addClass("initial-hidden");
	});
	$(".header-content").hover(function () {
		$("#home-navigation-bar ul").addClass("initial-hidden");
		$("#loans-navigation-bar ul").addClass("initial-hidden");
		$("#resources-navigation-bar ul").addClass("initial-hidden");
	});
	$("main").hover(function () {
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