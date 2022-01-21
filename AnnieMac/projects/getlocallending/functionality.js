$(document).ready(function() {
	$("#navigation-logo").click(function(event) {
		window.location.href = '.'
	});
	if (window.location.href.indexOf("/?learn-more") > -1) {
		$("#index_only").addClass('hidden');
		$("#loan-products-section-display").removeClass('hidden');
	}
	$("#product-type-toggle").click(function(event) {
		$("#index_only").addClass('hidden');
		$("#loan-products-section-display").removeClass('hidden');
		$("#team-member-section-display").addClass('hidden');
		$("#learn-more-toggle").click(function(event) {
			window.location.href = '/?learn-more';
		});
	});
	$("#go-back-home-button").click(function(event) {
		$("#index_only").removeClass('hidden');
		$("#loan-products-section-display").addClass('hidden');
		$("#team-member-section-display").removeClass('hidden');
	});
	$("#products-display").click(function(event) {
		$("#index_only").addClass('hidden');
		$("#loan-products-section-display").removeClass('hidden');
		$("#team-member-section-display").addClass('hidden');
		$("html, body").animate({
			scrollTop: 510
		}, 600);
	});
	$("#homebuyer-display").click(function(event) {
		$("#index_only").addClass('hidden');
		$("#loan-products-section-display").removeClass('hidden');
		$("#team-member-section-display").addClass('hidden');
		$("#homebuyer-toggled").removeClass('hidden');
		$("#business-toggled").addClass('hidden');
		if (window.matchMedia('(min-width: 1047px)').matches) {
			$("html, body").animate({
				scrollTop: 3000
			}, 600);
		}
		if (window.matchMedia('(max-width: 1046px)').matches) {
			$("html, body").animate({
				scrollTop: 3560
			}, 600);
		}
	});
	$("#business-display").click(function(event) {
		$("#index_only").addClass('hidden');
		$("#loan-products-section-display").removeClass('hidden');
		$("#team-member-section-display").addClass('hidden');
		$("#homebuyer-toggled").addClass('hidden');
		$("#business-toggled").removeClass('hidden');
		if (window.matchMedia('(min-width: 1047px)').matches) {
			$("html, body").animate({
				scrollTop: 3000
			}, 600);
		}
		if (window.matchMedia('(max-width: 1046px)').matches) {
			$("html, body").animate({
				scrollTop: 3560
			}, 600);
		}
	});
	$("#buyer-guide").click(function(event) {
		$("#homebuyer-toggled").toggleClass('hidden');
		$("#business-toggled").addClass('hidden');
		if (window.matchMedia('(min-width: 1047px)').matches) {
			$("html, body").animate({
				scrollTop: 3300
			}, 600);
		}
		if (window.matchMedia('(max-width: 1046px)').matches) {
			$("html, body").animate({
				scrollTop: 3560
			}, 600);
		}
	});
	$("#business-guide").click(function(event) {
		$("#homebuyer-toggled").addClass('hidden');
		$("#business-toggled").toggleClass('hidden');
		if (window.matchMedia('(min-width: 1047px)').matches) {
			$("html, body").animate({
				scrollTop: 3300
			}, 600);
		}
		if (window.matchMedia('(max-width: 1046px)').matches) {
			$("html, body").animate({
				scrollTop: 3560
			}, 600);
		}
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
	$("#button-to-conventional").click(function(event) {
		$('#conventional-toggled').show();
		$('#fha-toggled').hide();
		$('#va-toggled').hide();
		$('#usda-toggled').hide();
		$('#refinance-toggled').hide();
	});
	$("#button-to-fha").click(function(event) {
		$('#conventional-toggled').hide();
		$('#fha-toggled').show();
		$('#va-toggled').hide();
		$('#usda-toggled').hide();
		$('#refinance-toggled').hide();
	});
	$("#button-to-va").click(function(event) {
		$('#conventional-toggled').hide();
		$('#fha-toggled').hide();
		$('#va-toggled').show();
		$('#usda-toggled').hide();
		$('#refinance-toggled').hide();
	});
	$("#button-to-usda").click(function(event) {
		$('#conventional-toggled').hide();
		$('#fha-toggled').hide();
		$('#va-toggled').hide();
		$('#usda-toggled').show();
		$('#refinance-toggled').hide();
	});
	$("#button-to-refinance").click(function(event) {
		$('#conventional-toggled').hide();
		$('#fha-toggled').hide();
		$('#va-toggled').hide();
		$('#usda-toggled').hide();
		$('#refinance-toggled').show();
	});
	$("#footer-toggle-conventional").click(function(event) {
		$("#index_only").addClass('hidden');
		$("#loan-products-section-display").removeClass('hidden');
		$('#conventional-toggled').show();
		$('#fha-toggled').hide();
		$('#va-toggled').hide();
		$('#usda-toggled').hide();
		$('#refinance-toggled').hide();
		if (window.matchMedia('(min-width: 1047px)').matches) {
			$("html, body").animate({
				scrollTop: 840
			}, 600);
		}
		if (window.matchMedia('(max-width: 1046px)').matches) {
			$("html, body").animate({
				scrollTop: 1620
			}, 600);
		}
	});
	$("#footer-toggle-va").click(function(event) {
		$("#index_only").addClass('hidden');
		$("#loan-products-section-display").removeClass('hidden');
		$('#conventional-toggled').hide();
		$('#fha-toggled').hide();
		$('#va-toggled').show();
		$('#usda-toggled').hide();
		$('#refinance-toggled').hide();
		if (window.matchMedia('(min-width: 1047px)').matches) {
			$("html, body").animate({
				scrollTop: 840
			}, 600);
		}
		if (window.matchMedia('(max-width: 1046px)').matches) {
			$("html, body").animate({
				scrollTop: 1620
			}, 600);
		}
	});
	$("#footer-toggle-usda").click(function(event) {
		$("#index_only").addClass('hidden');
		$("#loan-products-section-display").removeClass('hidden');
		$('#conventional-toggled').hide();
		$('#fha-toggled').hide();
		$('#va-toggled').hide();
		$('#usda-toggled').show();
		$('#refinance-toggled').hide();
		if (window.matchMedia('(min-width: 1047px)').matches) {
			$("html, body").animate({
				scrollTop: 840
			}, 600);
		}
		if (window.matchMedia('(max-width: 1046px)').matches) {
			$("html, body").animate({
				scrollTop: 1620
			}, 600);
		}
	});
	$("#footer-toggle-fha").click(function(event) {
		$("#index_only").addClass('hidden');
		$("#loan-products-section-display").removeClass('hidden');
		$('#conventional-toggled').hide();
		$('#fha-toggled').show();
		$('#va-toggled').hide();
		$('#usda-toggled').hide();
		$('#refinance-toggled').hide();
		if (window.matchMedia('(min-width: 1047px)').matches) {
			$("html, body").animate({
				scrollTop: 840
			}, 600);
		}
		if (window.matchMedia('(max-width: 1046px)').matches) {
			$("html, body").animate({
				scrollTop: 1620
			}, 600);
		}
	});
	$("#footer-toggle-refinance").click(function(event) {
		$("#index_only").addClass('hidden');
		$("#loan-products-section-display").removeClass('hidden');
		$('#conventional-toggled').hide();
		$('#fha-toggled').hide();
		$('#va-toggled').hide();
		$('#usda-toggled').hide();
		$('#refinance-toggled').show();
		if (window.matchMedia('(min-width: 1047px)').matches) {
			$("html, body").animate({
				scrollTop: 840
			}, 600);
		}
		if (window.matchMedia('(max-width: 1046px)').matches) {
			$("html, body").animate({
				scrollTop: 1620
			}, 600);
		}
	});
	$("#footer-toggle-business").click(function(event) {
		$("#index_only").addClass('hidden');
		$("#loan-products-section-display").removeClass('hidden');
		$("#team-member-section-display").addClass('hidden');
		$("#homebuyer-toggled").addClass('hidden');
		$("#business-toggled").removeClass('hidden');
		if (window.matchMedia('(min-width: 1047px)').matches) {
			$("html, body").animate({
				scrollTop: 3370
			}, 600);
		}
		if (window.matchMedia('(max-width: 1046px)').matches) {
			$("html, body").animate({
				scrollTop: 3560
			}, 600);
		}
	});
	$("#footer-toggle-homebuyer").click(function(event) {
		$("#index_only").addClass('hidden');
		$("#loan-products-section-display").removeClass('hidden');
		$("#team-member-section-display").addClass('hidden');
		$("#homebuyer-toggled").removeClass('hidden');
		$("#business-toggled").addClass('hidden');
		if (window.matchMedia('(min-width: 1047px)').matches) {
			$("html, body").animate({
				scrollTop: 3370
			}, 600);
		}
		if (window.matchMedia('(max-width: 1046px)').matches) {
			$("html, body").animate({
				scrollTop: 3560
			}, 600);
		}
	});
});