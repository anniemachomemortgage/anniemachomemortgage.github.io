$(document).ready(function() {
	$("#product-type-toggle").click(function(event) {
		$("#index_only").addClass('hidden');
		$("#loan-products-section-display").removeClass('hidden');
		$("#team-member-section-display").addClass('hidden');
	});
	$("#expand-sam").click(function(event) {
		$("#sam").addClass('active-biography');
		$(this).addClass('expanded-selected');
		$("#close-button-sam").removeClass("hidden-button");
		$("#expand-sam").addClass("hidden-button");
		$('html, body').animate({
			scrollTop: $("#team-toggle").offset().top
		}, 200);
		$("#biography-triggered-sam").removeClass('hidden');
	});
	$(".close-sam").click(function(event) {
		$("#sam").removeClass('active-biography');
		$("#close-button-sam").addClass("hidden-button");
		$("#expand-sam").removeClass("hidden-button");
		$('html, body').animate({
			scrollTop: $("#team-toggle").offset().top
		}, 200);
		$("#biography-triggered-sam").addClass('hidden');
	});
	$("#expand-earnest").click(function(event) {
		$("#earnest").addClass('active-biography');
		$(this).addClass('expanded-selected');
		$("#close-button-earnest").removeClass("hidden-button");
		$("#expand-earnest").addClass("hidden-button");
		$('html, body').animate({
			scrollTop: $("#team-toggle").offset().top
		}, 200);
		$("#biography-triggered-earnest").removeClass('hidden');
	});
	$(".close-earnest").click(function(event) {
		$("#earnest").removeClass('active-biography');
		$("#close-button-earnest").addClass("hidden-button");
		$("#expand-earnest").removeClass("hidden-button");
		$('html, body').animate({
			scrollTop: $("#team-toggle").offset().top
		}, 200);
		$("#biography-triggered-earnest").addClass('hidden');
	});
	$("#expand-jeff").click(function(event) {
		$("#jeff").addClass('active-biography');
		$(this).addClass('expanded-selected');
		$("#close-button-jeff").removeClass("hidden-button");
		$("#expand-jeff").addClass("hidden-button");
		$('html, body').animate({
			scrollTop: $("#team-toggle").offset().top
		}, 200);
		$("#biography-triggered-jeff").removeClass('hidden');
	});
	$(".close-jeff").click(function(event) {
		$("#jeff").removeClass('active-biography');
		$("#close-button-jeff").addClass("hidden-button");
		$("#expand-jeff").removeClass("hidden-button");
		$('html, body').animate({
			scrollTop: $("#team-toggle").offset().top
		}, 200);
		$("#biography-triggered-jeff").addClass('hidden');
	});
	$("#expand-dylan").click(function(event) {
		$("#dylan").addClass('active-biography');
		$(this).addClass('expanded-selected');
		$("#close-button-dylan").removeClass("hidden-button");
		$("#expand-dylan").addClass("hidden-button");
		$('html, body').animate({
			scrollTop: $("#team-toggle").offset().top
		}, 200);
		$("#biography-triggered-dylan").removeClass('hidden');
	});
	$(".close-dylan").click(function(event) {
		$("#dylan").removeClass('active-biography');
		$("#close-button-dylan").addClass("hidden-button");
		$("#expand-dylan").removeClass("hidden-button");
		$('html, body').animate({
			scrollTop: $("#team-toggle").offset().top
		}, 200);
		$("#biography-triggered-dylan").addClass('hidden');
	});
	$("#expand-duane").click(function(event) {
		$("#duane").addClass('active-biography');
		$(this).addClass('expanded-selected');
		$("#close-button-duane").removeClass("hidden-button");
		$("#expand-duane").addClass("hidden-button");
		$('html, body').animate({
			scrollTop: $("#team-toggle").offset().top
		}, 200);
		$("#biography-triggered-duane").removeClass('hidden');
	});
	$(".close-duane").click(function(event) {
		$("#duane").removeClass('active-biography');
		$("#close-button-duane").addClass("hidden-button");
		$("#expand-duane").removeClass("hidden-button");
		$('html, body').animate({
			scrollTop: $("#team-toggle").offset().top
		}, 200);
		$("#biography-triggered-duane").addClass('hidden');
	});
});