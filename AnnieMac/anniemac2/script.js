$(function() {
	$("logo img").click(function(event) {
		window.location.href = '/';
	});
	$("#pin-toggle").click(function(event) {
		$('#navigation').toggleClass('fixed-menu');
		$('#pin-toggle').toggleClass('pinned-menu');
	});
});