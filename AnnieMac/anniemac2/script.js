$(function() {
	$("logo img").click(function(event) {
		window.location.href = '/';
	});
	$("#pin-toggle").click(function(event) {
		$('#navigation').toggleClass('fixed-menu');
		$('#pin-toggle').toggleClass('pinned-menu');
	});
	$("#triggering-note").hover(function () {
		$(this).addClass("initial-hidden");
		localStorage.setItem('hidenote', 'true');
	  }
	);
	if (localStorage.getItem("hidenote") === null) {
		localStorage.setItem('hidenote', 'initial');
	}
	if ((localStorage.hidenote) == "initial") {
		$("#triggering-note").removeClass('initial-hidden');
	};
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
});