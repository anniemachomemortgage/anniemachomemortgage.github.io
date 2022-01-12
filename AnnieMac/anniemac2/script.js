$(function() {
	$("logo img").click(function(event) {
		window.location.href = '/';
	});
	$("#pin-toggle").click(function(event) {
		$('#navigation').addClass('fixed-menu');
		$('#pin-toggle').addClass('pinned-menu');
	});
});