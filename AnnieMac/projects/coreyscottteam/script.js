$(function() {
		// Corey
		$("#trigger-corey").click(function(event) {
			$('html, body').animate({
				scrollTop: $("#triggered-team-member-scroll").offset().top
			}, 800);
			$("#trigger-corey").addClass('focused');
			$("#trigger-megan").removeClass('focused');
			$("#trigger-amanda").removeClass('focused');
			$("#trigger-billie").removeClass('focused');
			$("#trigger-jess").removeClass('focused');
			$("#trigger-mike").removeClass('focused');
			$("#triggered-team-member").addClass('meet-the-team-header-corey');
			$("#corey-trigger").removeClass('hidden');
			$("#triggered-team-member").removeClass('meet-the-team-header-megan');
			$("#megan-trigger").addClass('hidden');
			$("#triggered-team-member").removeClass('meet-the-team-header-amanda');
			$("#amanda-trigger").addClass('hidden');
			$("#triggered-team-member").removeClass('meet-the-team-header-billie');
			$("#billie-trigger").addClass('hidden');
			$("#triggered-team-member").removeClass('meet-the-team-header-jess');
			$("#jess-trigger").addClass('hidden');
			$("#triggered-team-member").removeClass('meet-the-team-header-mike');
			$("#mike-trigger").addClass('hidden');
			$("#trigger-corey").click(function(event) {
				$("#trigger-corey").toggleClass('focused');
				$("#triggered-team-member").toggleClass('meet-the-team-header-corey');
				$("#corey-trigger").toggleClass('hidden');
			});
		});
		$("#corey-toggle-mobile-trigger").click(function(event) {
			$("#corey-mobile-trigger").toggleClass('remain-hidden');
			$("#corey-toggle-mobile-trigger").toggleClass('mobile-activated-toggle');
		});
		// Megan
		$("#trigger-megan").click(function(event) {
			$('html, body').animate({
				scrollTop: $("#triggered-team-member-scroll").offset().top
			}, 800);
			$("#trigger-megan").addClass('focused');
			$("#trigger-corey").removeClass('focused');
			$("#trigger-amanda").removeClass('focused');
			$("#trigger-billie").removeClass('focused');
			$("#trigger-jess").removeClass('focused');
			$("#trigger-mike").removeClass('focused');
			$("#triggered-team-member").addClass('meet-the-team-header-megan');
			$("#megan-trigger").removeClass('hidden');		
			$("#triggered-team-member").removeClass('meet-the-team-header-corey');
			$("#corey-trigger").addClass('hidden');
			$("#triggered-team-member").removeClass('meet-the-team-header-amanda');
			$("#amanda-trigger").addClass('hidden');
			$("#triggered-team-member").removeClass('meet-the-team-header-billie');
			$("#billie-trigger").addClass('hidden');
			$("#triggered-team-member").removeClass('meet-the-team-header-jess');
			$("#jess-trigger").addClass('hidden');
			$("#triggered-team-member").removeClass('meet-the-team-header-mike');
			$("#mike-trigger").addClass('hidden');
			$("#trigger-megan").click(function(event) {
					$("#trigger-megan").toggleClass('focused');
					$("#triggered-team-member").toggleClass('meet-the-team-header-megan');
					$("#megan-trigger").toggleClass('hidden');
				});
		});
		$("#megan-toggle-mobile-trigger").click(function(event) {
				$("#megan-mobile-trigger").toggleClass('remain-hidden');
				$("#megan-toggle-mobile-trigger").toggleClass('mobile-activated-toggle');
			});
		$("#trigger-amanda").click(function(event) {
			$('html, body').animate({
				scrollTop: $("#triggered-team-member-scroll").offset().top
			}, 800);
			$("#trigger-amanda").addClass('focused');
			$("#trigger-corey").removeClass('focused');
			$("#trigger-megan").removeClass('focused');
			$("#trigger-billie").removeClass('focused');
			$("#trigger-jess").removeClass('focused');
			$("#trigger-mike").removeClass('focused');
			$("#triggered-team-member").addClass('meet-the-team-header-amanda');
			$("#amanda-trigger").removeClass('hidden');
			$("#triggered-team-member").removeClass('meet-the-team-header-corey');
			$("#corey-trigger").addClass('hidden');
			$("#triggered-team-member").removeClass('meet-the-team-header-megan');
			$("#megan-trigger").addClass('hidden');
			$("#triggered-team-member").removeClass('meet-the-team-header-billie');
			$("#billie-trigger").addClass('hidden');
			$("#triggered-team-member").removeClass('meet-the-team-header-jess');
			$("#jess-trigger").addClass('hidden');
			$("#triggered-team-member").removeClass('meet-the-team-header-mike');
			$("#mike-trigger").addClass('hidden');
			$("#trigger-amanda").click(function(event) {
					$("#trigger-amanda").toggleClass('focused');
					$("#triggered-team-member").toggleClass('meet-the-team-header-amanda');
					$("#amanda-trigger").toggleClass('hidden');
				});
		});
		$("#amanda-toggle-mobile-trigger").click(function(event) {
				$("#amanda-mobile-trigger").toggleClass('remain-hidden');
				$("#amanda-toggle-mobile-trigger").toggleClass('mobile-activated-toggle');
			});
		$("#trigger-billie").click(function(event) {
			$('html, body').animate({
				scrollTop: $("#triggered-team-member-scroll").offset().top
			}, 800);
			$("#trigger-billie").addClass('focused');
			$("#trigger-corey").removeClass('focused');
			$("#trigger-amanda").removeClass('focused');
			$("#trigger-megan").removeClass('focused');
			$("#trigger-jess").removeClass('focused');
			$("#trigger-mike").removeClass('focused');
			$("#triggered-team-member").addClass('meet-the-team-header-billie');
			$("#billie-trigger").removeClass('hidden');
			$("#triggered-team-member").removeClass('meet-the-team-header-corey');
			$("#corey-trigger").addClass('hidden');
			$("#triggered-team-member").removeClass('meet-the-team-header-amanda');
			$("#amanda-trigger").addClass('hidden');
			$("#triggered-team-member").removeClass('meet-the-team-header-megan');
			$("#megan-trigger").addClass('hidden');
			$("#triggered-team-member").removeClass('meet-the-team-header-jess');
			$("#jess-trigger").addClass('hidden');
			$("#triggered-team-member").removeClass('meet-the-team-header-mike');
			$("#mike-trigger").addClass('hidden');
			$("#trigger-billie").click(function(event) {
					$("#trigger-billie").toggleClass('focused');
					$("#triggered-team-member").toggleClass('meet-the-team-header-billie');
					$("#billie-trigger").toggleClass('hidden');
				});
		});
		$("#billie-toggle-mobile-trigger").click(function(event) {
				$("#billie-mobile-trigger").toggleClass('remain-hidden');
				$("#billie-toggle-mobile-trigger").toggleClass('mobile-activated-toggle');
			});
		$("#trigger-jess").click(function(event) {
			$('html, body').animate({
				scrollTop: $("#triggered-team-member-scroll").offset().top
			}, 800);
			$("#trigger-jess").addClass('focused');
			$("#trigger-corey").removeClass('focused');
			$("#trigger-amanda").removeClass('focused');
			$("#trigger-billie").removeClass('focused');
			$("#trigger-megan").removeClass('focused');
			$("#trigger-mike").removeClass('focused');
			$("#triggered-team-member").addClass('meet-the-team-header-jess');
			$("#jess-trigger").removeClass('hidden');
			$("#triggered-team-member").removeClass('meet-the-team-header-corey');
			$("#corey-trigger").addClass('hidden');
			$("#triggered-team-member").removeClass('meet-the-team-header-amanda');
			$("#amanda-trigger").addClass('hidden');
			$("#triggered-team-member").removeClass('meet-the-team-header-billie');
			$("#billie-trigger").addClass('hidden');
			$("#triggered-team-member").removeClass('meet-the-team-header-megan');
			$("#megan-trigger").addClass('hidden');
			$("#triggered-team-member").removeClass('meet-the-team-header-mike');
			$("#mike-trigger").addClass('hidden');
			$("#trigger-jess").click(function(event) {
					$("#trigger-jess").toggleClass('focused');
					$("#triggered-team-member").toggleClass('meet-the-team-header-jess');
					$("#jess-trigger").toggleClass('hidden');
				});
		});
		$("#jess-toggle-mobile-trigger").click(function(event) {
				$("#jess-mobile-trigger").toggleClass('remain-hidden');
				$("#jess-toggle-mobile-trigger").toggleClass('mobile-activated-toggle');
			});
		$("#trigger-mike").click(function(event) {
			$('html, body').animate({
				scrollTop: $("#triggered-team-member-scroll").offset().top
			}, 800);
			$("#trigger-mike").addClass('focused');
			$("#trigger-corey").removeClass('focused');
			$("#trigger-amanda").removeClass('focused');
			$("#trigger-billie").removeClass('focused');
			$("#trigger-jess").removeClass('focused');
			$("#trigger-megan").removeClass('focused');
			$("#triggered-team-member").addClass('meet-the-team-header-mike');
			$("#mike-trigger").removeClass('hidden');
			$("#triggered-team-member").removeClass('meet-the-team-header-corey');
			$("#corey-trigger").addClass('hidden');
			$("#triggered-team-member").removeClass('meet-the-team-header-amanda');
			$("#amanda-trigger").addClass('hidden');
			$("#triggered-team-member").removeClass('meet-the-team-header-billie');
			$("#billie-trigger").addClass('hidden');
			$("#triggered-team-member").removeClass('meet-the-team-header-jess');
			$("#jess-trigger").addClass('hidden');
			$("#triggered-team-member").removeClass('meet-the-team-header-megan');
			$("#megan-trigger").addClass('hidden');
			$("#trigger-mike").click(function(event) {
					$("#trigger-mike").toggleClass('focused');
					$("#triggered-team-member").toggleClass('meet-the-team-header-mike');
					$("#mike-trigger").toggleClass('hidden');
				});
		});
		$("#mike-toggle-mobile-trigger").click(function(event) {
				$("#mike-mobile-trigger").toggleClass('remain-hidden');
				$("#mike-toggle-mobile-trigger").toggleClass('mobile-activated-toggle');
			});
	});