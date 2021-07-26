$(function() {
	$("#menu-toggle").click(function(event) {
		$("#sub-menu").fadeToggle("slow");
	});
	function leadCaptureProcess(selector, name) {
		const $selector = $('#' + selector);
		$('#toggle-' + selector).on('click', function() {
			if(!$(".sectional-team-members").hasClass("isolated-biography")) {
				$(".sectional-team-members").addClass("isolated-biography");
			};
			$(".detached-editity").remove();
			$('.toggled-text-header').text(name);
			$('.team-member').hide();
			$selector.show();
			$selector.find('div.team-member-portrait > div').addClass('detached-editity');
			$selector.find('div.team-member-portrait > div').detach().appendTo( $selector.parent() );
		});
	}
	leadCaptureProcess('1', '');
	leadCaptureProcess('2', '');
	leadCaptureProcess('3', '');
	leadCaptureProcess('4', '');	
});