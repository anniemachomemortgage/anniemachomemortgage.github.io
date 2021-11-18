$(function() {
	// Corey
	$("#trigger-corey").click(function(event) {
		//  indication that person is triggered
		$("#trigger-corey").addClass('focused');
		$("#trigger-megan").removeClass('focused');
		
		// Show intended person
		$("#triggered-team-member").addClass('meet-the-team-header-corey');
		$("#corey-trigger").removeClass('hidden');
		
		// Remove other people
		$("#triggered-team-member").removeClass('meet-the-team-header-megan');
		$("#megan-trigger").addClass('hidden');
	});
	// Megan
	$("#trigger-megan").click(function(event) {
		//  indication that person is triggered
		$("#trigger-megan").addClass('focused');
		$("#trigger-corey").removeClass('focused');
		
		// Show intended person
		$("#triggered-team-member").addClass('meet-the-team-header-megan');
		$("#megan-trigger").removeClass('hidden');
		
		// Remove other people
		$("#triggered-team-member").removeClass('meet-the-team-header-corey');
		$("#corey-trigger").addClass('hidden');
	});
});