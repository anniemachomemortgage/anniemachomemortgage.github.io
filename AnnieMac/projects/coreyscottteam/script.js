$(function() {
	$("#navigation-logo").click(function(event) {
		window.location.href = '.'
	});
	if (window.location.href.indexOf("/?learn-more") > -1) {
		$("#index_only").toggleClass('hidden');
		$("#learn_only").toggleClass('hidden');
	}
	$("#learn-more-toggle").click(function(event) {
		$("#index_only").toggleClass('hidden');
		$("#learn_only").toggleClass('hidden');
	});
	$("#go-back-home").click(function(event) {
		$("#index_only").removeClass('hidden');
		$("#learn_only").addClass('hidden');
	});
	if ($('body').hasClass('page-page-detail')) {
		$("#learn-more-toggle").click(function(event) {
			window.location.href = '/?learn-more';
		});
	};
	$(".zillow-icon").hover(function() {
		$(this).attr("src", function(index, attr) {
			return attr.replace(".png", "-hover.png");
		});
	}, function() {
		$(this).attr("src", function(index, attr) {
			return attr.replace("-hover.png", ".png");
		});
	});
	$("#submit-borrower").click(function(event) {
		event.preventDefault();
		$("html, body").animate({
			scrollTop: 0
		}, 600);
		$("#message-before").addClass('hidden');
		$("#send-csteam-message").addClass('hidden');
		$("#thank-you-message").removeClass('hidden');
	});
	// Products
	$("#conventional-trigger").click(function(event) {
		$(this).toggleClass('expanded');
		$("#va-trigger").removeClass('expanded');
		$("#va-loan-expanded").addClass("hidden");
		if ($("#conventional-trigger").hasClass("expanded")) {
			$("#expanded-row-1-container").removeClass("hidden");
			$("#expanded-row-1-container h4").removeClass("hidden");
			$("#toggled-learn-more-1-selected").text("Conventional Loans");
			$("#conventional-loan-expanded").removeClass("hidden");
			if (window.matchMedia('(max-width: 1046px)').matches) {
				$("#first-expanded-container").css('order', 2);
			}
		}
		if (!$("#conventional-trigger").hasClass("expanded")) {
			$("#expanded-row-1-container").addClass("hidden");
			$("#conventional-loan-expanded").addClass("hidden");
			if (window.matchMedia('(min-width: 1047px)').matches) {
				$("#first-expanded-container").css('order', 4);
			};
		}
	});
	$("#close-conventional").click(function(event) {
		$("#conventional-trigger").removeClass('expanded');
		$("#expanded-row-1-container").addClass("hidden");
		$("#conventional-loan-expanded").addClass("hidden");
		if (window.matchMedia('(min-width: 1047px)').matches) {
			$("html, body").animate({
				scrollTop: 800
			}, 600);
		}
		if (window.matchMedia('(max-width: 1046px)').matches) {
			$("html, body").animate({
				scrollTop: 560
			}, 600);
		}
	});
	$("#va-trigger").click(function(event) {
		$(this).toggleClass('expanded');
		$("#conventional-trigger").removeClass('expanded');
		$("#conventional-loan-expanded").addClass("hidden");
		if ($("#va-trigger").hasClass("expanded")) {
			$("#expanded-row-1-container").removeClass("hidden");
			$("#expanded-row-1-container h4").removeClass("hidden");
			$("#toggled-learn-more-1-selected").text("VA Loans");
			$("#va-loan-expanded").removeClass("hidden");
			if (window.matchMedia('(max-width: 1046px)').matches) {
				$("#first-expanded-container").css('order', 4);
			}
		}
		if (!$("#va-trigger").hasClass("expanded")) {
			$("#expanded-row-1-container").addClass("hidden");
			$("#va-loan-expanded").addClass("hidden");
			if (window.matchMedia('(min-width: 1047px)').matches) {
				$("#first-expanded-container").css('order', 4);
			};
		}
	});
	$("#close-va").click(function(event) {
		$("#va-trigger").removeClass('expanded');
		$("#expanded-row-1-container").addClass("hidden");
		$("#va-loan-expanded").addClass("hidden");
		if (window.matchMedia('(min-width: 1047px)').matches) {
			$("html, body").animate({
				scrollTop: 800
			}, 600);
		}
		if (window.matchMedia('(max-width: 1046px)').matches) {
			$("html, body").animate({
				scrollTop: 830
			}, 600);
		}
	});
	$("#fha-trigger").click(function(event) {
		$(this).toggleClass('expanded');
		$("#usda-trigger").removeClass('expanded');
		$("#usda-loan-expanded").addClass("hidden");
		if ($("#fha-trigger").hasClass("expanded")) {
			$("#expanded-row-2-container").removeClass("hidden");
			$("#expanded-row-2-container h4").removeClass("hidden");
			$("#toggled-learn-more-2-selected").text("FHA Loans");
			$("#fha-loan-expanded").removeClass("hidden");
			if (window.matchMedia('(max-width: 1046px)').matches) {
				$("#second-expanded-container").css('order', 2);
			}
		}
		if (!$("#fha-trigger").hasClass("expanded")) {
			$("#expanded-row-2-container").addClass("hidden");
			$("#fha-loan-expanded").addClass("hidden");
			if (window.matchMedia('(min-width: 1047px)').matches) {
				$("#second-expanded-container").css('order', 4);
			};
		}
	});
	$("#close-fha").click(function(event) {
		$("#fha-trigger").removeClass('expanded');
		$("#expanded-row-2-container").addClass("hidden");
		$("#fha-loan-expanded").addClass("hidden");
		if (window.matchMedia('(min-width: 1047px)').matches) {
			$("html, body").animate({
				scrollTop: 1100
			}, 600);
		}
		if (window.matchMedia('(max-width: 1046px)').matches) {
			$("html, body").animate({
				scrollTop: 1100
			}, 600);
		}
	});
	$("#usda-trigger").click(function(event) {
		$(this).toggleClass('expanded');
		$("#fha-trigger").removeClass('expanded');
		$("#fha-loan-expanded").addClass("hidden");
		if ($("#usda-trigger").hasClass("expanded")) {
			$("#expanded-row-2-container").removeClass("hidden");
			$("#expanded-row-2-container h4").removeClass("hidden");
			$("#toggled-learn-more-2-selected").text("USDA Loans");
			$("#usda-loan-expanded").removeClass("hidden");
			if (window.matchMedia('(min-width: 1047px)').matches) {
				$("#second-expanded-container").css('order', 4);
			};
		}
		if (!$("#usda-trigger").hasClass("expanded")) {
			$("#expanded-row-2-container").addClass("hidden");
			$("#usda-loan-expanded").addClass("hidden");
			if (window.matchMedia('(min-width: 1047px)').matches) {
				$("#second-expanded-container").css('order', 4);
			};
		}
	});
	$("#close-usda").click(function(event) {
		$("#usda-trigger").removeClass('expanded');
		$("#expanded-row-2-container").addClass("hidden");
		$("#usda-loan-expanded").addClass("hidden");
		if (window.matchMedia('(min-width: 1047px)').matches) {
			$("html, body").animate({
				scrollTop: 1100
			}, 600);
		}
		if (window.matchMedia('(max-width: 1046px)').matches) {
			$("html, body").animate({
				scrollTop: 1350
			}, 600);
		}
	});
	$("#construction-trigger").click(function(event) {
		$(this).toggleClass('expanded');
		$("#renovation-trigger").removeClass('expanded');
		$("#renovation-loan-expanded").addClass("hidden");
		if ($("#construction-trigger").hasClass("expanded")) {
			$("#expanded-row-3-container").removeClass("hidden");
			$("#expanded-row-3-container h4").removeClass("hidden");
			$("#toggled-learn-more-3-selected").text("Construction Loans");
			$("#construction-loan-expanded").removeClass("hidden");
			if (window.matchMedia('(min-width: 1047px)').matches) {
				$("#third-expanded-container").css('order', 4);
			};
		}
		if (!$("#construction-trigger").hasClass("expanded")) {
			$("#expanded-row-3-container").addClass("hidden");
			$("#construction-loan-expanded").addClass("hidden");
			if (window.matchMedia('(min-width: 1047px)').matches) {
				$("#third-expanded-container").css('order', 4);
			};
		}
	});
	$("#close-construction").click(function(event) {
		$("#construction-trigger").removeClass('expanded');
		$("#expanded-row-3-container").addClass("hidden");
		$("#construction-loan-expanded").addClass("hidden");
		if (window.matchMedia('(min-width: 1047px)').matches) {
			$("html, body").animate({
				scrollTop: 1350
			}, 600);
		}
		if (window.matchMedia('(max-width: 1046px)').matches) {
			$("html, body").animate({
				scrollTop: 1550
			}, 600);
		}
	});
	$("#renovation-trigger").click(function(event) {
		$(this).toggleClass('expanded');
		$("#construction-trigger").removeClass('expanded');
		$("#construction-loan-expanded").addClass("hidden");
		if ($("#renovation-trigger").hasClass("expanded")) {
			$("#expanded-row-3-container").removeClass("hidden");
			$("#expanded-row-3-container h4").removeClass("hidden");
			$("#toggled-learn-more-3-selected").text("Renovation Loans");
			$("#renovation-loan-expanded").removeClass("hidden");
			if (window.matchMedia('(min-width: 1047px)').matches) {
				$("#third-expanded-container").css('order', 4);
			};
		}
		if (!$("#renovation-trigger").hasClass("expanded")) {
			$("#expanded-row-3-container").addClass("hidden");
			$("#renovation-loan-expanded").addClass("hidden");
			if (window.matchMedia('(min-width: 1047px)').matches) {
				$("#third-expanded-container").css('order', 4);
			};
		}
	});
	$("#close-renovation").click(function(event) {
		$("#renovation-trigger").removeClass('expanded');
		$("#expanded-row-3-container").addClass("hidden");
		$("#renovation-loan-expanded").addClass("hidden");
		if (window.matchMedia('(min-width: 1047px)').matches) {
			$("html, body").animate({
				scrollTop: 1350
			}, 600);
		}
		if (window.matchMedia('(max-width: 1046px)').matches) {
			$("html, body").animate({
				scrollTop: 1550
			}, 600);
		}
	});
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
		$("#trigger-nicole").removeClass('focused');
		$("#trigger-rhonda").removeClass('focused');
		$("#triggered-team-member").removeClass('meet-the-team-header-nicole');
		$("#nicole-trigger").addClass('hidden');
		$("#triggered-team-member").removeClass('meet-the-team-header-rhonda');
		$("#rhonda-trigger").addClass('hidden');
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
		$("#trigger-nicole").removeClass('focused');
		$("#trigger-rhonda").removeClass('focused');
		$("#triggered-team-member").removeClass('meet-the-team-header-nicole');
		$("#nicole-trigger").addClass('hidden');
		$("#triggered-team-member").removeClass('meet-the-team-header-rhonda');
		$("#rhonda-trigger").addClass('hidden');
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
		$("#trigger-nicole").removeClass('focused');
		$("#trigger-rhonda").removeClass('focused');
		$("#triggered-team-member").removeClass('meet-the-team-header-nicole');
		$("#nicole-trigger").addClass('hidden');
		$("#triggered-team-member").removeClass('meet-the-team-header-rhonda');
		$("#rhonda-trigger").addClass('hidden');
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
		$("#trigger-nicole").removeClass('focused');
		$("#trigger-rhonda").removeClass('focused');
		$("#triggered-team-member").removeClass('meet-the-team-header-nicole');
		$("#nicole-trigger").addClass('hidden');
		$("#triggered-team-member").removeClass('meet-the-team-header-rhonda');
		$("#rhonda-trigger").addClass('hidden');
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
		$("#trigger-nicole").removeClass('focused');
		$("#trigger-rhonda").removeClass('focused');
		$("#triggered-team-member").removeClass('meet-the-team-header-nicole');
		$("#nicole-trigger").addClass('hidden');
		$("#triggered-team-member").removeClass('meet-the-team-header-rhonda');
		$("#rhonda-trigger").addClass('hidden');
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
	$("#trigger-nicole").click(function(event) {
		$('html, body').animate({
			scrollTop: $("#triggered-team-member-scroll").offset().top
		}, 800);
		$("#trigger-nicole").addClass('focused');
		$("#trigger-corey").removeClass('focused');
		$("#trigger-amanda").removeClass('focused');
		$("#trigger-megan").removeClass('focused');
		$("#trigger-jess").removeClass('focused');
		$("#trigger-mike").removeClass('focused');
		$("#trigger-billie").removeClass('focused');
		$("#trigger-rhonda").removeClass('focused');
		$("#triggered-team-member").addClass('meet-the-team-header-nicole');
		$("#nicole-trigger").removeClass('hidden');
		$("#triggered-team-member").removeClass('meet-the-team-header-rhonda');
		$("#rhonda-trigger").addClass('hidden');
		$("#triggered-team-member").removeClass('meet-the-team-header-billie');
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
		$("#trigger-nicole").click(function(event) {
			$("#trigger-nicole").toggleClass('focused');
			$("#triggered-team-member").toggleClass('meet-the-team-header-nicole');
			$("#nicole-trigger").toggleClass('hidden');
		});
	});
	$("#nicole-toggle-mobile-trigger").click(function(event) {
		$("#nicole-mobile-trigger").toggleClass('remain-hidden');
		$("#nicole-toggle-mobile-trigger").toggleClass('mobile-activated-toggle');
	});
	$("#trigger-rhonda").click(function(event) {
		$('html, body').animate({
			scrollTop: $("#triggered-team-member-scroll").offset().top
		}, 800);
		$("#trigger-nicole").removeClass('focused');
		$("#trigger-corey").removeClass('focused');
		$("#trigger-amanda").removeClass('focused');
		$("#trigger-megan").removeClass('focused');
		$("#trigger-jess").removeClass('focused');
		$("#trigger-mike").removeClass('focused');
		$("#trigger-billie").removeClass('focused');
		$("#trigger-rhonda").addClass('focused');
		$("#triggered-team-member").removeClass('meet-the-team-header-nicole');
		$("#nicole-trigger").addClass('hidden');
		$("#triggered-team-member").addClass('meet-the-team-header-rhonda');
		$("#rhonda-trigger").removeClass('hidden');
		$("#triggered-team-member").removeClass('meet-the-team-header-billie');
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
		$("#trigger-rhonda").click(function(event) {
			$("#trigger-rhonda").toggleClass('focused');
			$("#triggered-team-member").toggleClass('meet-the-team-header-rhonda');
			$("#rhonda-trigger").toggleClass('hidden');
		});
	});
	$("#rhonda-toggle-mobile-trigger").click(function(event) {
		$("#rhonda-mobile-trigger").toggleClass('remain-hidden');
		$("#rhonda-toggle-mobile-trigger").toggleClass('mobile-activated-toggle');
	});
});