// The Mortgage Company Template Replacements
$("head > link:nth-child(11)").remove();
$("#am-css").remove();
$("#am-styles").remove();
$("#am-responsive").remove();
$("#am-custom").remove();
$("#am-custom-tmc").remove();
$("#stylesheet-git").remove();
if ($('body').hasClass('page-testimonial')) {
	var testinomialspage = $("#review-social-section").html();
	$('#footer-branchlo-name, #footer-branchlo-address, #footer-phone-number, #footer-email, #footer-nmls').wrapAll('<div class="footer-directory-listing" />');
	var footertestinominalpage = $(".footer-directory-listing").html();
	$('.page-testimonial').load("https://anniemachomemortgage.github.io/themortgagecompany/template.html", function() {
		$(testinomialspage).appendTo($( "#insertion-point" ));
		$("#insertion-point > h3").text("Testimonials for The Mortgage Company");
		$(footertestinominalpage).appendTo($( ".loan-officer-summary-section" ));
		$(footertestinominalpage).appendTo($( ".loan-officer-information" ));
	});
}
else if ($('body').hasClass('page-page-detail')) {
	var pagecontentdrop = $(".content-detail").html();
	$('#footer-branchlo-name, #footer-branchlo-address, #footer-phone-number, #footer-email, #footer-nmls').wrapAll('<div class="footer-directory-listing" />');
	var pagefooterinformation = $(".footer-directory-listing").html();
	$('.page-page-detail').load("https://anniemachomemortgage.github.io/themortgagecompany/template.html", function() {
		$(pagecontentdrop).appendTo($( "#page-insertion-point" ));
		$(pagefooterinformation).appendTo($( ".loan-officer-summary-section" ));
		$(pagefooterinformation).appendTo($( ".loan-officer-information" ));
	});
}
else if ($('body').hasClass('front')) {
	if ($('body').hasClass('site-type-loan_officer')) {
		var tmcloanofficerdrops = $("#tmc-loan-officer").html();
		var frontfooterinformation = $(".footer-directory-listing").html();
		$('.front').load("https://anniemachomemortgage.github.io/themortgagecompany/template.html", function() {
			$(tmcloanofficerdrops).appendTo($( "#insertion-point" ));
			$(frontfooterinformation).appendTo($( ".loan-officer-summary-section" ));
			$(frontfooterinformation).appendTo($( ".loan-officer-information" ));
		});
	};
	if ($('body').hasClass('site-type-corporate')) {
		var appendedContentteamDisplay = $("#team-display").html();
		$('.front').load("https://anniemachomemortgage.github.io/themortgagecompany/template.html", function() {
			$(appendedContentteamDisplay).appendTo($( "#insertion-point" ));
		});			
	};
};
if (window.location.href.indexOf("steve") != -1) {
	$(".main-site-apply").text("Book Time");
};