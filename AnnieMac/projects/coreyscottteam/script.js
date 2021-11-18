$(function() {
	// Corey
	$("#trigger-corey").click(function(event) {
		//  indication that person is triggered
		$("#trigger-corey").addClass('focused');
		$("#trigger-megan").removeClass('focused');
		
		// Show intended person
		$("#triggered-team-member").addClass('meet-the-team-header-corey');
		$("#corey-scott-trigger").removeClass('hidden');
		
		// Remove other people
		$("#triggered-team-member").removeClass('meet-the-team-header-megan');
		$("#megan-scott-trigger").addClass('hidden');
	});
	// Megan
	$("#trigger-megan").click(function(event) {
		//  indication that person is triggered
		$("#trigger-megan").addClass('focused');
		$("#trigger-megan").removeClass('focused');
		
		// Show intended person
		$("#triggered-team-member").addClass('meet-the-team-header-corey');
		$("#corey-scott-trigger").removeClass('hidden');
		
		// Remove other people
		$("#triggered-team-member").removeClass('meet-the-team-header-corey');
		$("#corey-scott-trigger").addClass('hidden');
	});
});