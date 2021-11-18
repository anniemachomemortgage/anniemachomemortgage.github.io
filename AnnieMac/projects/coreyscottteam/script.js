$(function() {
	$("#trigger-corey").click(function(event) {
		$("#triggered-team-member").addClass('meet-the-team-header-corey');
		$("#triggered-team-member").removeClass('meet-the-team-header-megan');
		$("#corey-scott-trigger").removeClass('hidden');
		$("#megan-scott-trigger").addClass('hidden');
		$("#trigger-corey").addClass('focused');
	});
	$("#trigger-megan").click(function(event) {
		$("#triggered-team-member").removeClass('meet-the-team-header-corey');
		$("#triggered-team-member").addClass('meet-the-team-header-megan');
		$("#corey-scott-trigger").addClass('hidden');
		$("#megan-scott-trigger").removeClass('hidden');
	});
});