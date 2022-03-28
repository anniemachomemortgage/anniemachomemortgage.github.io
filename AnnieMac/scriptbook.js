$(function() {
	console.log("Scriptbook Loaded");
	$('#navigation-menu ul li ul').addClass('sub-menu-links');
	$("#side-bar-navigation-toggle").click(function () {
		$('#navigation-sidebar').toggleClass('hide');
	});
	$("#close-navigation-side").click(function () {
		$('#navigation-sidebar').toggleClass('hide');
	});
	$(".navigation-sectional ul li ul").addClass("sub-site-navigation");
	$(".navigation-sectional ul > li.has-children:nth-child(1) > ul").children().wrapAll("<div class='sub-site-navigation-listing'></div>");
	$(".navigation-sectional ul > li.has-children:nth-child(2) > ul").children().wrapAll("<div class='sub-site-navigation-listing'></div>");
	$(".navigation-sectional ul > li.has-children:nth-child(3) > ul").children().wrapAll("<div class='sub-site-navigation-listing'></div>");
	$(".navigation-sectional ul > li.has-children:nth-child(4) > ul").children().wrapAll("<div class='sub-site-navigation-listing'></div>");
	$('.navigation-sidebar-sectional ul li.has-children:nth-child(1) ul').wrapAll("<div class='option-listing'></div>");
	$('.navigation-sidebar-sectional ul li.has-children:nth-child(2) ul').wrapAll("<div class='option-listing'></div>");
	$('.navigation-sidebar-sectional ul li.has-children:nth-child(3) ul').wrapAll("<div class='option-listing'></div>");
	$('.navigation-sidebar-sectional ul li.has-children:nth-child(4) ul').wrapAll("<div class='option-listing'></div>");
	$('.navigation-sidebar-sectional ul li ul li').addClass("option-listing-description");
	$(".navigation-sidebar-sectional ul.menu.nav>li>a").wrap("<h4></h4>");
	$('.navigation-sidebar-sectional ul li ul li a').unwrap();
	$(".navigation-sidebar-sectional .option-listing a").wrap("<strong></strong>");
	$( ".navigation-sidebar-sectional .option-listing a" ).append( "<div class='option-listing-go'><i class='fas fa-arrow-circle-right'></i></div>" );
	$(function() {
		var childrenItem = $('.navigation-sidebar-sectional ul li.has-children');
		var childrenSecondList = $('.navigation-sidebar-sectional ul li ul');
		var childrenLink = $('.navigation-sidebar-sectional ul');
		$(childrenItem).click(function(e) {
			$(this).children('div').toggleClass('open-sub');
			$(this).toggleClass('change');
			// e.preventDefault();
		});
		$(childrenLink).find('li:has(ul)').children('a').removeAttr('href');	
	});
	$('link[href="/dev/themes/annie_mac/core.css"]').remove();
	if ((window.location.href.indexOf("themtgco.com/testimonial") > -1)) {
		var useNewTestimonalTemplate = true;
	};
	if ((window.location.href.indexOf("themtgco.com/page") > -1)) {
		var usePageTemplate = true;
	};
	if (useNewTestimonalTemplate == true) {
		$("head > link:nth-child(11)").remove();
		$("#am-css").remove();
		$("#am-styles").remove();
		$("#am-responsive").remove();
		$("#am-custom").remove();
		$("#am-custom-tmc").remove();
		$("#stylesheet-git").remove();
		var testinomialspage = $("#review-social-section").html();
		$('#footer-branchlo-name, #footer-branchlo-address, #footer-phone-number, #footer-email, #footer-nmls').wrapAll('<div class="footer-directory-listing" />');
		var footertestinominalpage = $(".footer-directory-listing").html();
		$('.page-testimonial').load("https://anniemachomemortgage.github.io/themortgagecompany/template.html", function() {
			$(testinomialspage).appendTo($( "#insertion-point" ));
			$("#insertion-point > h3").text("Testimonials for The Mortgage Company");
			$(footertestinominalpage).appendTo($( ".loan-officer-summary-section" ));
			$(footertestinominalpage).appendTo($( ".loan-officer-information" ));
		});
		console.log(useNewTestimonalTemplate);
	}
	if (usePageTemplate == true) {
		$("head > link:nth-child(11)").remove();
		$("#am-css").remove();
		$("#am-styles").remove();
		$("#am-responsive").remove();
		$("#am-custom").remove();
		$("#am-custom-tmc").remove();
		$("#stylesheet-git").remove();
		var pagecontentdrop = $(".content-detail").html();
		$('#footer-branchlo-name, #footer-branchlo-address, #footer-phone-number, #footer-email, #footer-nmls').wrapAll('<div class="footer-directory-listing" />');
		var pagefooterinformation = $(".footer-directory-listing").html();
		$('.page-page-detail').load("https://anniemachomemortgage.github.io/themortgagecompany/template.html", function() {
			$(pagecontentdrop).appendTo($( "#page-insertion-point" ));
			$(pagefooterinformation).appendTo($( ".loan-officer-summary-section" ));
			$(pagefooterinformation).appendTo($( ".loan-officer-information" ));
		});
		console.log(usePageTemplate);
	}
	$( ".inner-layout:contains('the page you requested could not be found')" ).css( "min-height", "90vh" );
	$('*').contents().each(function() {
		if(this.nodeType === Node.COMMENT_NODE) {
			$(this).remove();
		}
	});
	$('.submitted').each(function() {
		$(this).remove();
	});
	$("#copyrights > img").attr('src', 'https://annie-mac.com/dev/themes/annie_mac/img/equalhousingwhite.png');
	$(".navigation-sidebar-sectional .menu .option-listing").addClass("open-sub");
	$(".navigation-sidebar-sectional .nav h4 a").click(function(event) {
		event.preventDefault();
	});
	function readCookie(name) {
		var nameEQ = name + "=";
		var ca = document.cookie.split(';');
		for(var i=0;i < ca.length;i++) {
			var c = ca[i];
			while (c.charAt(0)==' ') c = c.substring(1,c.length);
			if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
		}
		return null;
	};
	$("#navigation-sidebar #list_12564").click(function(event) {
		window.location.href = '/page/perks';
	});
	console.log("Last Originator");
	$("#navigation-sidebar > div:nth-child(2) > a:nth-child(4)").remove();
	if (document.cookie.indexOf("visitedloanoriginator=") >= 0) {
		if (document.cookie.indexOf("visitedloanoriginatorname=") < 0) {
			document.cookie = "noshowlastoriginator=true; path=/; max-age=1; domain=.annie-mac.com";
			document.cookie = "visitedloanoriginator=false; path=/; max-age=-1; domain=.annie-mac.com";
			document.cookie = "visitedloanoriginatorname=false; path=/; max-age=-1; domain=.annie-mac.com";
			document.cookie = "visitedloanoriginatorimage=false; path=/; max-age=-1; domain=.annie-mac.com";
		};
		if (document.cookie.indexOf("noshowlastoriginator=") < 0) {
			var loanofficerlastvisited = "https://" + readCookie('visitedloanoriginator') + ".annie-mac.com";
			var loanofficerlastvisitednamedisplay = readCookie('visitedloanoriginatorname');
			var loanofficerlastvisitedimage = readCookie('visitedloanoriginatorimage');
			if (window.location.href.indexOf(loanofficerlastvisited) < 0) {
				console.log(loanofficerlastvisitednamedisplay + " was the loan officer page you visited.");
				console.log(loanofficerlastvisited + " is the loan officer page you visited.");
				if (document.cookie.indexOf("visitedloanoriginatorimage=") > 0) {
					$(document.body).append("<div id='lastvisitedoriginatornotice'><img src='" + loanofficerlastvisitedimage + "'><p>Hi! You visited <span style='font-weight: 800;'>" + loanofficerlastvisitednamedisplay + "</span> before. Do you want to revisit their page? <a id='gotherenowtid' href='" + loanofficerlastvisited  + "'>Go Back Now</a><a id='dismisslastvisitor'>Dismiss this message</a></p></div>");
				};
				if (document.cookie.indexOf("visitedloanoriginatorimage=") < 0) {
					$(document.body).append("<div id='lastvisitedoriginatornotice'><p>Hi! You visited <span style='font-weight: 800;'>" + loanofficerlastvisitednamedisplay + "</span> before. Do you want to revisit their page? <a id='gotherenowtid' href='" + loanofficerlastvisited  + "'>Go Back Now</a><a id='dismisslastvisitor'>Dismiss this message</a></p></div>");
				};
				$("#dismisslastvisitor").click(function() {
				  document.cookie = "noshowlastoriginator=true; path=/; max-age=2592000; domain=.annie-mac.com";
				  document.cookie = "visitedloanoriginator=false; path=/; max-age=-2592000; domain=.annie-mac.com";
				  document.cookie = "visitedloanoriginatorname=false; path=/; max-age=-2592000; domain=.annie-mac.com";
				  document.cookie = "visitedloanoriginatorimage=false; path=/; max-age=-2592000; domain=.annie-mac.com";
				  $('#lastvisitedoriginatornotice').remove();
				});
			};
		};
	};
	if ($('body').hasClass('page-blog-detail')) {
		var imageCover = $('.blog-image-detail').attr('src');
		$('#product-banner').css('background', 'linear-gradient(14deg, rgb(0 0 0 / 62%) 30%, rgb(98 90 75 / 28%) 80%), url(' + imageCover + ') center no-repeat');
		$('#product-banner').css('background-size', 'cover !important');
		$('.facebook a img').remove();
		$('.twitter a img').remove();
		$('.twitter a').text("Twitter");
		$('.facebook a').text("Facebook");
	};
	$( "article > header > h3:contains('test')" ).closest('article').remove();
	if ($('body').hasClass('site-type-loan_officer')) {
		var subdomain =  window.location.host.split('.')[1] ? window.location.host.split('.')[0] : false;
		$('body').addClass(subdomain);
		$("#list_11537").remove();
		if (document.cookie.indexOf("noshowlastoriginator=") < 0) {
			if (document.cookie.indexOf("visitedloanoriginator=") < 0) {
			  const value = window.location.host.split('.')[0];
			  document.cookie = "visitedloanoriginator=" + value + "; path=/; max-age=2592000; domain=.annie-mac.com";
			  var visitedloanoriginatorname = $("#footer-branchlo-name").text().trim();
			  document.cookie = "visitedloanoriginatorname=" + visitedloanoriginatorname + "; path=/; max-age=2592000; domain=.annie-mac.com";
			  var visitedloanoriginatorimage = document.querySelector("#originator-core-details-portrait > img").src;
			  if (visitedloanoriginatorimage.indexOf("unnamed") < 0 ) {
				  document.cookie = "visitedloanoriginatorimage=" + visitedloanoriginatorimage + "; path=/; max-age=2592000; domain=.annie-mac.com";
				  };
			  var loanofficerlastvisited = "https://" + readCookie('visitedloanoriginator') + ".annie-mac.com";
			  console.log("A cookie has been created for " + visitedloanoriginatorname);
			  console.log("A cookie has been created for " + loanofficerlastvisited);
			  console.log("A cookie has been created for " + visitedloanoriginatorimage);
			};
		};
	};
	var headeradditional = '<h1 class="header-additional">AnnieMac Home Mortgage</hi>';
	$(headeradditional).prependTo( $( "#site-navigation" ) );
	$('#hide-popover').click(function() {
		$('#beginner-guide-to-mortgages').hide();
		localStorage.setItem('podcastpopuphidden', 'true');
	});
	if ((localStorage.podcastpopuphidden) == "true") {
		$('#beginner-guide-to-mortgages').hide();
		console.log('popup hidden for podcast');
	};
	if ($('body').hasClass('site-type-branch')) {	
		var subdomain =  window.location.host.split('.')[1] ? window.location.host.split('.')[0] : false;
		$('body').addClass(subdomain);
		$("#list_11537").remove();
		$("#team-display > h3:nth-child(1)").text("Branch Management");
	};
	// if (window.location.href.indexOf("annie-mac.com") > -1) {
	// 	if ($('body').hasClass('front')) {
	// 		$('#home-deserve').remove();
	// 		var dropbanner2 = '<div id="inserted-banner"><div class="container-section"><h3>AnnieMac Home Mortgage <span>NMLS: 338923</span></h3><div id="button-container-home" class="container-section"><a href="/testimonial">Testimonials</a><div id="mobile-apply"><a href="/loan/apply" id="loan-officer-header-apply">Apply Now</a></div><div id="mobile-call"><a href="tel:866-312-6682" id="loan-officer-header-call">Call Now</a></div></div></div></div>';
	// 		$(dropbanner2).insertBefore( $( "header" ) );
			// var dropnumber2 = '<a href="tel:866-312-6682" target="_self" rel="noreferrer noopener" style="margin-right: 5px; background: #8c8c8c;">Call Us</a>';
			// $( dropnumber2 ).prependTo( $( "#list_12148" ) );
	// 	};
	// };
	if ($('body').hasClass('site-type-loan_officer')) {
		$("#we-provide-more-2").hide();
		$('.manager-biography p').each(function() {
			var $this = $(this);
			if($this.html().replace(/\s|&nbsp;/g, '').length == 0)
				$this.remove();
		});
		let applyLinkinBanner = "<div id='applyheaderlo'><button id='loapplylink'><a href='/loan/apply'>Apply Now</a></button><button id='testimonials'><a href='/testimonials'>Testimonials</a></button></div>";
		$( applyLinkinBanner ).appendTo( $( "#originator-core-details" ) );
		var fullwidthsidebarlinks = '<div id="links-sidebar-full-width"><div id="sidebar-apply-now"><a href="/loan/apply" id="loan-officer-sidebar-apply">Apply Now</a></div><h4>Important Links</h4><ul><a href="/page/buyer-guide"><li>First Time Home Buyer</li></a><a href="/page/faq"><li>Frequent Questions</li></a><a href="/mortgage/calculator/affordability"><li>Mortgage Affordability Calculator</li></a><a href="/mortgage/calculator/refinance"><li>Should I Refinance?</li></a><a href="/contact"><li>Contact Me</li></a></ul></div>';
		$(fullwidthsidebarlinks).appendTo( $( "#loan-originator-backdrop" ) );
		var loanoriginatornumber = document.querySelector("#footer-phone-number").innerText;
		loanoriginatornumber = loanoriginatornumber.replaceAll("[()\\s-]+", "");
		$('#list_11409').addClass('hide');
		var loanoriginatorname = document.querySelector("#footer-branchlo-name").innerText;
		var loanoriginatornmls = document.querySelector("#footer-nmls").innerText;
		loanoriginatornmls = loanoriginatornmls.replace(/[NMLS # ]/g, '');		
		if (window.location.href.indexOf("annie-mac.com") > -1) {
			$(dropbanner).insertBefore( $( "#annie_mac-loan-officer" ) );
			var dropnumber = '<a href="tel:' + loanoriginatornumber + '" target="_self" rel="noreferrer noopener" style="margin-right: 5px;background: #016fa8;border: 3px solid #016fa8;">Call Me</a>'
			$( dropnumber ).prependTo( $( "#list_12148" ) );
		}
		if (window.location.href.indexOf("lofidirect.com") > -1) {
			var dropbanner = '<div id="inserted-banner"><div class="container-section"><h3>' + loanoriginatorname + '<span>' + loanoriginatornmls + '</span></h3><div id="button-container-home" class="container-section"><a href="/testimonial">Testimonials</a><div id="mobile-apply"><a href="/loan/apply" id="loan-officer-header-apply">Apply Now</a></div><div id="mobile-call"><a href="tel:' + loanoriginatornumber + '" id="loan-officer-header-call">Call Now</a></div></div></div></div>';
			$(dropbanner).insertBefore( $( "#lofidirect-loan-officer" ) );
			var dropnumber = '<a href="tel:' + loanoriginatornumber + '" target="_self" rel="noreferrer noopener" style="margin-right: 5px; background: #8c8c8c;">Call Me</a>'
			$( dropnumber ).prependTo( $( "#list_12170" ) );
		}
		if (window.location.href.indexOf("themtgco.com") > -1) {
			$(dropbanner).insertBefore( $( "#tmc-loan-officer" ) );
			var dropnumber = '<a href="tel:' + loanoriginatornumber + '" target="_self" rel="noreferrer noopener" style="margin-right: 5px; background: #8c8c8c;">Call Me</a>'
			$( dropnumber ).prependTo( $( "#list_12171" ) );
		}
		var firstname = loanoriginatorname.split(" ");
		$("#we-provide-more-master > h3").text(firstname[0] + ' Provides...');
		$("#biography > div.manager-biography > h2").text('About ' + firstname[0]);
	};
	if ($('body').hasClass('site-type-team')) {	
		const branchmanager = $(".manager-information");
		$( branchmanager ).each(function() {
			var domain = $(this).find( "button > a" ).attr('href');
			var subdomain = domain.replace('.annie-mac.com', '').replace('https://', '').replace('/loan/apply', '').replace('http://', '');
			(this).id = subdomain;
		});
		const loanoriginatorstaff = $(".team-member");
		$( loanoriginatorstaff ).each(function() {
			var domain = $(this).find( "button > a" ).attr('href');
			var subdomain = domain.replace('mailto: ', '').replace('@Annie-Mac.com', '');
			(this).id = subdomain;
		});
	};
	if ($('body').hasClass('site-type-branch')) {	
		const branchmanager = $(".manager-information");
		$( branchmanager ).each(function() {
			var domain = $(this).find( "button > a" ).attr('href');
			var subdomain = domain.replace('.annie-mac.com', '').replace('/loan/apply', '').replace('https://', '').replace('http://', '');
			(this).id = subdomain;
		});
		const teamMember = $(".team-member");
		$( teamMember ).each(function() {
			var domain = $(this).find( "button > a" ).attr('href');
			var subdomain = domain.replace('.annie-mac.com', '').replace('/loan/apply', '').replace('https://', '').replace('/loan/apply', '').replace('http://', '');
			(this).id = subdomain;
		});
		var dropapplynowbranch = '<a href="/loan/apply"><button id="apply-now-branch">Apply Now</button></a>';
		$( dropapplynowbranch ).prependTo( $( "#branch-content > a" ) );
		$('#perks-home').remove();
		$('#text-based-branch').remove();
		var teammeet = '<h3 style="color: #006fa9; text-align: center; font-size: 46px;">Our Team</h3>';
		$( teammeet ).prependTo( $( "#team-display" ) );
		$('#branch-steps').remove();
		$( "#team-display" ).appendTo( $( "#annie_mac-branch" ) );
	};
	// if ($('body').hasClass('front site-type-branch')) {	
	// 	var metadrop = "<meta name='author' content='https://annie-mac.com'><meta property='og:locale' content='en_US'><meta property='og:type' content='business'><meta name='keywords' content='AnnieMac, AnnieMac Home Mortgage, AnnieMac Home Mortgage NJ, home loan mortgage calculator, va home loan mortgage calculator, FHA loan, VA loan, mortgage refinance, mortgage application'><meta property='og:url' content='https://annie-mac.com/'><meta name='twitter:url' content='https://annie-mac.com/'><meta property='og:image' content='https://www.annie-mac.com/uploads/sites/10713/public/annie-mac.jpeg'><meta name='twitter:image' content='https://www.annie-mac.com/uploads/sites/10713/public/annie-mac.jpeg'><meta name='twitter:card' content='summary_large_image'><meta property='og:site_name' content='AnnieMac Home Mortgage'><meta property='og:title' content='AnnieMac Home Mortgage'><meta name='twitter:title' content='AnnieMac Home Mortgage'><meta name='description' content=' At AnnieMac, we believe you deserve more from the mortgage industry, so we provide more. Our customers are more than credit scores and income documents. They are the individuals and families who live in and strengthen our communities. Their story is our story. And that story begins in a home.'><meta property='og:description' content=' At AnnieMac, we believe you deserve more from the mortgage industry, so we provide more. Our customers are more than credit scores and income documents. They are the individuals and families who live in and strengthen our communities. Their story is our story. And that story begins in a home.'><meta name='twitter:description' content='At AnnieMac, we believe you deserve more from the mortgage industry, so we provide more. Our customers are more than credit scores and income documents. They are the individuals and families who live in and strengthen our communities. Their story is our story. And that story begins in a home.'>";
	// 	$(metadrop).insertAfter( $( "title" ) );
	// };
	// if ($('body').hasClass('front site-type-loan_officer')) {	
	// 	var metadrop = "<meta name='author' content='https://annie-mac.com'><meta property='og:locale' content='en_US'><meta property='og:type' content='business'><meta name='keywords' content='AnnieMac, AnnieMac Home Mortgage, AnnieMac Home Mortgage NJ, home loan mortgage calculator, va home loan mortgage calculator, FHA loan, VA loan, mortgage refinance, mortgage application'><meta property='og:url' content='https://annie-mac.com/'><meta name='twitter:url' content='https://annie-mac.com/'><meta property='og:image' content='https://www.annie-mac.com/uploads/sites/10713/public/annie-mac.jpeg'><meta name='twitter:image' content='https://www.annie-mac.com/uploads/sites/10713/public/annie-mac.jpeg'><meta name='twitter:card' content='summary_large_image'><meta property='og:site_name' content='AnnieMac Home Mortgage'><meta property='og:title' content='AnnieMac Home Mortgage'><meta name='twitter:title' content='AnnieMac Home Mortgage'><meta name='description' content=' At AnnieMac, we believe you deserve more from the mortgage industry, so we provide more. Our customers are more than credit scores and income documents. They are the individuals and families who live in and strengthen our communities. Their story is our story. And that story begins in a home.'><meta property='og:description' content=' At AnnieMac, we believe you deserve more from the mortgage industry, so we provide more. Our customers are more than credit scores and income documents. They are the individuals and families who live in and strengthen our communities. Their story is our story. And that story begins in a home.'><meta name='twitter:description' content='At AnnieMac, we believe you deserve more from the mortgage industry, so we provide more. Our customers are more than credit scores and income documents. They are the individuals and families who live in and strengthen our communities. Their story is our story. And that story begins in a home.'>";
	// 	$(metadrop).insertAfter( $( "title" ) );
	// };
	console.log("Appending IDs to Footer Links");
	$('#footer-branchlo-name, #footer-branchlo-address, #footer-phone-number, #footer-email, #footer-nmls').wrapAll('<div class="footer-directory-listing" />');
	if ((window.location.href.indexOf("thecartmelteam") != -1) || (window.location.href.indexOf("indianapolis") != -1)) {
		var businessdevelopment = "<div id='' class='team-member-section'><div class='team-member' id='pamelacherry'><div id='' class='team-member-information'><h4>Pamela Cherry</h4><h5>Business Development Manager</h5><h5>&nbsp;</h5><div id='' class='team-member-portrait' style='background: url(https://annie-mac.com/uploads/sites/10713/public/Pamela.jpeg); background-size: cover; background-position: center center; background-repeat: no-repeat;'></div><button class='flex space-between align-center'>(317) 324-1086<i class='fas fa-mobile-alt'></i></button><button class='flex space-between align-center'><a href='mailto: pcherry@annie-mac.com'>Email Me</a><i class='fas fa-envelope'></i></button></div></div><div class='team-member' id='karenblack'><div id='' class='team-member-information'><h4>Karen Black</h4><h5>Business Development Manager</h5><h5>&nbsp;</h5><div id='' class='team-member-portrait' style='background: url(https://annie-mac.com/uploads/sites/10713/public/karenblack.jpeg); background-size: cover; background-position: center center; background-repeat: no-repeat;'></div><button class='flex space-between align-center'>(317) 578-7611<i class='fas fa-mobile-alt'></i></button><button class='flex space-between align-center'><a href='mailto: kblack@annie-mac.com'>Email Me</a><i class='fas fa-envelope'></i></button></div></div>";
		$(businessdevelopment).appendTo($( "#team-display" ));
	};
	if ((window.location.href.indexOf("teamfillyaw") != -1)) {
		$("#team-display > h3").text("Our Team");
	};
	if ((window.location.href.indexOf("wyomissing") != -1)) {
		var teamMemberReassignedBranchManager = ['#nickchristy'];
		for (i = 0; i < teamMemberReassignedBranchManager.length; i++) {
			$(teamMemberReassignedBranchManager[i]).addClass("manager-information");
			$(teamMemberReassignedBranchManager[i]).removeClass("team-member");
			$(teamMemberReassignedBranchManager[i]).prependTo(".branch-manager-section");
		}
		$('#jonathanciervo').hide();
		$('#ryanlenner').hide();
		$('#nicholasdejesus').hide();
		$('#mike').css('order', '-1');
	};
	console.log("Page Specific Code");
	if ((window.location.href.indexOf("edenprairie") != -1)) {
		$( '<h3 class="text-center">Operations Team</h3><div id="" class="team-member-section"><div class="team-member" id="melanieburke"><div id="" class="team-member-information"><h4>Melanie Burke</h4><h5>Processor</h5><h5></h5><div id="" class="team-member-portrait" style="background: url(https://annie-mac.com/uploads/sites/10713/public/no-photo-available.png); background-size: cover; background-position: center center; background-repeat: no-repeat;"></div><button class="flex space-between align-center">952-746-0956 <i class="fas fa-mobile-alt"></i></button><button class="flex space-between align-center"><a href="mailto: mburke@annie-mac.com">Email Me</a><i class="fas fa-envelope"></i></button></div></div><div class="team-member" id="sarahvanderpoel"><div id="" class="team-member-information"><h4>Sarah Vander Poel</h4><h5>Processor</h5><h5></h5><div id="" class="team-member-portrait" style="background: url(https://annie-mac.com/uploads/sites/10713/public/Sarah_V__Loan_Partner_II.jpg); background-size: cover; background-position: center center; background-repeat: no-repeat;"></div><button class="flex space-between align-center">952-746-0963 <i class="fas fa-mobile-alt"></i></button><button class="flex space-between align-center"><a href="mailto: svanderpoel@annie-mac.com">Email Me</a><i class="fas fa-envelope"></i></button></div></div><div class="team-member" id="reneedathe"><div id="" class="team-member-information"><h4>Renee Dathe</h4><h5>Processor</h5><h5></h5><div id="" class="team-member-portrait" style="background: url(https://annie-mac.com/uploads/sites/10713/public/no-photo-available.png); background-size: cover; background-position: center center; background-repeat: no-repeat;"></div><button class="flex space-between align-center">952-456-0423 <i class="fas fa-mobile-alt"></i></button><button class="flex space-between align-center"><a href="mailto: rdathe@annie-mac.com">Email Me</a><i class="fas fa-envelope"></i></button></div></div><div class="team-member" id="bhumijoshi"><div id="" class="team-member-information"><h4>Bhumi Joshi</h4><h5>Processor</h5><h5></h5><div id="" class="team-member-portrait" style="background: url(https://annie-mac.com/uploads/sites/10713/public/Bhumi_Joshi__Processor.jpg); background-size: cover; background-position: center center; background-repeat: no-repeat; background-position-y: 16% !important;"></div><button class="flex space-between align-center">952-942-5791 <i class="fas fa-mobile-alt"></i></button><button class="flex space-between align-center"><a href="mailto: bjoshi@annie-mac.com">Email Me</a><i class="fas fa-envelope"></i></button></div></div></div><h3 class="text-center">Loan Partners</h3><div id="" class="team-member-section"><div class="team-member" id="cjhoffman"><div id="" class="team-member-information"><h4>CJ Hoffman</h4><h5>Licensed Loan Partner</h5><h5>NMLS: 2104154</h5><div id="" class="team-member-portrait" style="background: url(https://annie-mac.com/uploads/sites/10713/public/CJ_Hoffman__Licensed_Loan_Partner.jpg); background-size: cover; background-position: center center; background-repeat: no-repeat;"></div><button class="flex space-between align-center">952-294-6662 <i class="fas fa-mobile-alt"></i></button><button class="flex space-between align-center"><a href="mailto: cjhoffman@annie-mac.com">Email Me</a><i class="fas fa-envelope"></i></button></div></div><div class="team-member" id="loriknutson"><div id="" class="team-member-information"><h4>Lori Knutson</h4><h5>Loan Partner II</h5><h5>NMLS: 338923</h5><div id="" class="team-member-portrait" style="background: url(https://annie-mac.com/uploads/sites/10713/public/Lori_Knutson__Loan_Partner_II.jpg); background-size: cover; background-position: center center; background-repeat: no-repeat; background-position-y: 98% !important;"></div><button class="flex space-between align-center">952-405-2329 <i class="fas fa-mobile-alt"></i></button><button class="flex space-between align-center"><a href="mailto: lknutson@annie-mac.com">Email Me</a><i class="fas fa-envelope"></i></button></div></div><div class="team-member" id="brendaferm"><div id="" class="team-member-information"><h4>Brenda Ferm</h4><h5>Loan Partner II</h5><h5><br></h5><div id="" class="team-member-portrait" style="background: url(https://annie-mac.com/uploads/sites/10713/public/Brenda_Ferm__Loan_Partner_II.jpg); background-size: cover; background-position: center center; background-repeat: no-repeat; background-position-y: 80% !important;"></div><button class="flex space-between align-center">952-405-2331 <i class="fas fa-mobile-alt"></i></button><button class="flex space-between align-center"><a href="mailto: bferm@annie-mac.com">Email Me</a><i class="fas fa-envelope"></i></button></div></div><div class="team-member" id="leahsandbo"><div id="" class="team-member-information"><h4>Leah Sandbo</h4><h5>Loan Partner II</h5><h5><br></h5><div id="" class="team-member-portrait" style="background: url(https://annie-mac.com/uploads/sites/10713/public/Leah_Sandbo__Loan_Partner_II_UDPATED.png); background-size: cover; background-position: center center; background-repeat: no-repeat;"></div><button class="flex space-between align-center">952-746-0961 <i class="fas fa-mobile-alt"></i></button><button class="flex space-between align-center"><a href="mailto: lsandbo@annie-mac.com">Email Me</a><i class="fas fa-envelope"></i></button></div></div><div class="team-member" id="loriwhitmore"><div id="" class="team-member-information"><h4>Lori Whitmore</h4><h5>Loan Partner II</h5><h5><br></h5><div id="" class="team-member-portrait" style="background: url(https://annie-mac.com/uploads/sites/10713/public/Lori_Whitmore__Loan_Partner_II.jpg); background-size: cover; background-position: center center; background-repeat: no-repeat; background-position-y: 42% !important;"></div><button class="flex space-between align-center">952-746-0970 <i class="fas fa-mobile-alt"></i></button><button class="flex space-between align-center"><a href="mailto: lwhitmore@annie-mac.com">Email Me</a><i class="fas fa-envelope"></i></button></div></div><div class="team-member" id="susanzecco"><div id="" class="team-member-information"><h4>Susan Zecco</h4><h5>Loan Partner II</h5><h5><br></h5><div id="" class="team-member-portrait" style="background: url(https://annie-mac.com/uploads/sites/10713/public/Susan_Zecco__Loan_Partner_II.jpg); background-size: cover; background-position: center center; background-repeat: no-repeat; background-position-y: 30% !important;"></div><button class="flex space-between align-center">952-746-0962 <i class="fas fa-mobile-alt"></i></button><button class="flex space-between align-center"><a href="mailto: szecco@annie-mac.com">Email Me</a><i class="fas fa-envelope"></i></button></div></div><div class="team-member" id="rachelrobole"><div id="" class="team-member-information"><h4>Rachel Robole</h4><h5>Loan Partner II</h5><h5><br></h5><div id="" class="team-member-portrait" style="background: url(https://annie-mac.com/uploads/sites/10713/public/Rachel_Robole__Loan_Partner_II.jpg); background-size: cover; background-position: center center; background-repeat: no-repeat;"></div><button class="flex space-between align-center">952-353-9485 <i class="fas fa-mobile-alt"></i></button><button class="flex space-between align-center"><a href="mailto: rrobole@annie-mac.com">Email Me</a><i class="fas fa-envelope"></i></button></div></div></div>' ).appendTo( $( "#team-display" ) );
	};
	if ((window.location.href.indexOf("sparta") != -1)) {
		$( '<h3 class="text-center">Operations Team</h3><div id="" class="team-member-section"><div class="team-member" id="nicolesexton"><div id="" class="team-member-information"><h4>Nicole Sexton</h4><h5>Senior Processor</h5><h5></h5><div id="" class="team-member-portrait" style="background: url(https://www.annie-mac.com/uploads/sites/10713/public/Nicole_Sexton.png); background-size: cover; background-position: center center; background-repeat: no-repeat;"></div><button class="flex space-between align-center">856-437-8817 <i class="fas fa-mobile-alt"></i></button><button class="flex space-between align-center"><a href="mailto: NSexton@annie-mac.com">Email Me</a><i class="fas fa-envelope"></i></button></div></div><div class="team-member" id="jessicakatarski"><div id="" class="team-member-information"><h4>Jessica Katarski</h4><h5>Junior Processor</h5><h5></h5><div id="" class="team-member-portrait" style="background: url(https://www.annie-mac.com/uploads/sites/10713/public/Jessica_Katarski.jpg); background-size: cover; background-position: center center; background-repeat: no-repeat;"></div><button class="flex space-between align-center">973-242-2656 <i class="fas fa-mobile-alt"></i></button><button class="flex space-between align-center"><a href="mailto: JKatarski@annie-mac.com">Email Me</a><i class="fas fa-envelope"></i></button></div></div><div class="team-member" id="jennifergesek"><div id="" class="team-member-information"><h4>Jennifer Gesek</h4><h5>Loan Partner</h5><h5></h5><div id="" class="team-member-portrait" style="background: url(https://www.annie-mac.com/uploads/sites/10713/public/Jennifer_Gesek.png); background-size: cover; background-position: center center; background-repeat: no-repeat;"></div><button class="flex space-between align-center">973-826-5035 <i class="fas fa-mobile-alt"></i></button><button class="flex space-between align-center"><a href="mailto: JGesek@annie-mac.com">Email Me</a><i class="fas fa-envelope"></i></button></div></div></div><h3 class="text-center">Loan Partners</h3><div id="" class="team-member-section"><div class="team-member" id="daniellahurley"><div id="" class="team-member-information"><h4>Daniella Hurley</h4><h5>Loan Partner</h5><h5></h5><div id="" class="team-member-portrait" style="background: url(https://www.annie-mac.com/uploads/sites/10713/public/Daniella_Hurley.png); background-size: cover; background-position: center center; background-repeat: no-repeat;"></div><button class="flex space-between align-center">973-315-5779 <i class="fas fa-mobile-alt"></i></button><button class="flex space-between align-center"><a href="mailto: DHurley@annie-mac.com">Email Me</a><i class="fas fa-envelope"></i></button></div></div><div class="team-member" id="kristinajohnson"><div id="" class="team-member-information"><h4>Kristina Johnson</h4><h5>Licensed Loan Partner</h5><h5></h5><div id="" class="team-member-portrait" style="background: url(https://www.annie-mac.com/uploads/sites/10713/public/KristinaNeaguCustom.jpeg); background-size: cover; background-position: center center; background-repeat: no-repeat;"></div><button class="flex space-between align-center">(973) 265-1610 <i class="fas fa-mobile-alt"></i></button><button class="flex space-between align-center"><a href="mailto: kneagu@annie-mac.com">Email Me</a><i class="fas fa-envelope"></i></button></div></div></div>' ).appendTo( $( "#team-display" ) );
	};
	if (window.location.href.indexOf("davidjones") != -1) {
		$('<span style="width: 85%; margin: -20px auto -10px; display: block;">AnnieMac Home Mortgage is not endorsed or sponsored by the United State Department of Veterans Affairs or any government agency.</span>').insertBefore( $( "#sitemap" ) );
		$('<div style="font-weight: 600;">AnnieMac Home Mortgage is not endorsed or sponsored by the United State Department of Veterans Affairs or any government agency.</span>').appendTo( $( "#biography .manager-biography" ) );
	}
	if (window.location.href.indexOf("nmg") != -1) {
		$("#branch-content").html('<h2>Netcong, NJ</h2><h3>NMLS #: 977076</h3><h5><a target="_blank" href="https://www.google.com/maps/search/?api=1&amp;query=17 Main Street, Netcong, NJ, 07857">17 Main Street, Unit 1 <br> Netcong, NJ 07857<br></a><a class="tel" href="tel:(888) 783-9562"> (888) 783-9562 </a></h5>');
		$("#copyrights").html('<img src="https://annie-mac.com/dev/themes/annie_mac/img/equalhousingwhite.png" alt="Equal Housing Lender"><div class="footer-directory-listing"><p id="footer-branchlo-name">Netcong, NJ</p><p id="footer-branchlo-address">17 Main Street Netcong, NJ 07857</p><p id="footer-phone-number"><a href="tel:888-783-9562">888-783-9562</a></p><p id="footer-email"><a href="mailto:lgarcia@annie-mac.com">lgarcia@annie-mac.com</a></p><p id="footer-nmls">NMLS# 977076</p></div><ul class="flex"><li><a href="/page/licensed-states">Licensing</a></li><li><a href="/page/privacy-policy">Privacy Policy</a></li><li><a href="https://nmlsconsumeraccess.org/EntityDetails.aspx/COMPANY/338923">NMLS Consumer Access</a></li></ul><p>&nbsp;</p>');
		$( '<div id="equal-viewing-branches"><h3 class="text-center">Branch Management</h3><div id="" class="team-member-section branches-other-team"><div class="team-member" id="kevindolan"><div id="" class="team-member-information"><a class="loan-officer-h4-link" href="https://kevindolan.annie-mac.com"><h4>Kevin Dolan</h4></a><h5>Area Manager - NMLS: 281162</h5><a href="https://kevindolan.annie-mac.com"><div id="" class="team-member-portrait" style="background: url(/uploads/sites/10713/public/KevinDolan20171.jpeg); background-size: cover; background-position: center center; background-repeat: no-repeat;"></div></a><button class="flex space-between align-center loan-officer-phone">(201) 486-3177</button><button class="flex space-between align-center loan-officer-email"><a href="mailto: kdolan@annie-mac.com">Email Me</a></button></div></div><div class="team-member" id="landygarcia"><div id="" class="team-member-information"><a class="loan-officer-h4-link" href="https://landygarcia.annie-mac.com"><h4>Landy Garcia</h4></a><h5>Area Manager - NMLS: 288241</h5><a href="https://landygarcia.annie-mac.com"><div id="" class="team-member-portrait" style="background: url(/uploads/sites/10713/public/LandyGarcia1.jpeg); background-size: cover; background-position: center center; background-repeat: no-repeat;"></div></a><button class="flex space-between align-center loan-officer-phone">(908) 553-5404</button><button class="flex space-between align-center loan-officer-email"><a href="mailto: lgarcia@annie-mac.com">Email Me</a></button></div></div><div class="team-member" id="youssefabdelhalim"><div id="" class="team-member-information"><a class="loan-officer-h4-link" href="https://youssefabdelhalim.annie-mac.com"><h4>Youssef Abdelhalim</h4></a><h5>Branch Manager - NMLS: 1033013</h5><a href="https://youssefabdelhalim.annie-mac.com"><div id="" class="team-member-portrait" style="background: url(/uploads/sites/10713/public/YoussefAbdelhalim1.jpeg); background-size: cover; background-position: center center; background-repeat: no-repeat;"></div></a><button class="flex space-between align-center loan-officer-phone">(973) 826-5035</button><button class="flex space-between align-center loan-officer-email"><a href="mailto: yabdelhalim@annie-mac.com">Email Me</a></button></div></div></div></div><h3 class="text-center">Branches With Our Team</h3><div id="" class="team-member-section branches-other-team"><div class="team-member" id=""><div id="" class="team-member-information"><h4>Netcong</h4><button class="go flex space-between align-center loan-officer-apply-link"><a href="https://netcong.annie-mac.com/" class="btn button-main ">Visit Now</a></button></div></div><div class="team-member" id=""><div id="" class="team-member-information"><h4>Cranford</h4><button class="go flex space-between align-center loan-officer-apply-link"><a href="https://cranford.annie-mac.com/" class="btn button-main ">Visit Now</a></button></div></div><div class="team-member" id=""><div id="" class="team-member-information"><h4>Sparta</h4><button class="go flex space-between align-center loan-officer-apply-link"><a href="https://sparta.annie-mac.com/" class="btn button-main ">Visit Now</a></button></div></div></div><h3 class="text-center">Other Locations With Our Team</h3><div id="" class="team-member-section branches-other-team"><div class="team-member" id=""><div id="" class="team-member-information"><h4>Miami</h4><button class="go flex space-between align-center loan-officer-apply-link"><a href="https://miamilakes.annie-mac.com/" class="btn button-main ">Visit Now</a></button></div></div><div class="team-member" id=""><div id="" class="team-member-information"><h4>Brooklyn</h4><button class="go flex space-between align-center loan-officer-apply-link"><a href="https://brooklyn.annie-mac.com/" class="btn button-main ">Visit Now</a></button></div></div><div class="team-member" id=""></div></div><h3 class="text-center">Operations Team</h3><div id="" class="team-member-section branches-other-team"><div class="team-member" id="terryplant"><div id="" class="team-member-information"><h4>Terry Plant</h4><h5>Operations Team Lead</h5><div id="" class="team-member-portrait" style="background: url(https://annie-mac.com/uploads/sites/10713/public/Terry_Plant.jpg); background-size: cover; background-position: center center; background-repeat: no-repeat;"></div><button class="flex space-between align-center">973-265-1520 <i class="fas fa-mobile-alt"></i></button><button class="flex space-between align-center"><a href="mailto: TPlant@annie-mac.com">Email Me</a><i class="fas fa-envelope"></i></button></div></div><div class="team-member" id="hanifahsanders"><div id="" class="team-member-information"><h4>Hanifah Sanders</h4><h5>Branch Operations Manager</h5><div id="" class="team-member-portrait" style="background: url(https://www.annie-mac.com/uploads/sites/10713/public/Hanifah.png); background-size: cover; background-position: center center; background-repeat: no-repeat;"></div><button class="flex space-between align-center">856-505-6709 <i class="fas fa-mobile-alt"></i></button><button class="flex space-between align-center"><a href="mailto: HSanders@annie-mac.com">Email Me</a><i class="fas fa-envelope"></i></button></div></div><div class="team-member" id="arianapoore"><div id="" class="team-member-information"><h4>Ariana Poore</h4><h5>Branch Operations Manager</h5><div id="" class="team-member-portrait" style="background: url(https://www.annie-mac.com/uploads/sites/10713/public/Ariana_Update.jpg); background-size: cover; background-position: center center; background-repeat: no-repeat;"></div><button class="flex space-between align-center">973-988-2466 <i class="fas fa-mobile-alt"></i></button><button class="flex space-between align-center"><a href="mailto: APoore@annie-mac.com">Email Me</a><i class="fas fa-envelope"></i></button></div></div></div>' ).appendTo( $( "#nmg-insertion-point" ) );
	};
	if ((window.location.href.indexOf("netcong") != -1) || (window.location.href.indexOf("flanders") != -1)) {
		var teamMemberReassignedBranchManager = ['#kevindolan'];
		for (i = 0; i < teamMemberReassignedBranchManager.length; i++) {
			$(teamMemberReassignedBranchManager[i]).addClass("manager-information");
			$(teamMemberReassignedBranchManager[i]).removeClass("team-member");
			$(teamMemberReassignedBranchManager[i]).prependTo(".branch-manager-section");
		}
		$( '<h3 class="text-center">Loan Partners</h3><div id="" class="team-member-section"><div class="team-member" id="amandagabriele"><div id="" class="team-member-information"><h4>Amanda Gabriele</h4><h5>Loan Partner</h5><h5></h5><div id="" class="team-member-portrait"></div><button class="flex space-between align-center">973-265-1525 <i class="fas fa-mobile-alt"></i></button><button class="flex space-between align-center"><a href="mailto: AGabriele@annie-mac.com">Email Me</a><i class="fas fa-envelope"></i></button></div></div><div class="team-member" id="darianypena"><div id="" class="team-member-information"><h4>Dariany Peña</h4><h5>Loan Partner</h5><h5></h5><div id="" class="team-member-portrait" style="background: url(https://www.annie-mac.com/uploads/sites/10713/public/Dariany_Pena.jpg); background-size: cover; background-position: center center; background-repeat: no-repeat;"></div><button class="flex space-between align-center">973-370-2071 <i class="fas fa-mobile-alt"></i></button><button class="flex space-between align-center"><a href="mailto: DPena@annie-mac.com">Email Me</a><i class="fas fa-envelope"></i></button></div></div><div class="team-member" id="shannonpansini"><div id="" class="team-member-information"><h4>Shannon Pansini</h4><h5>Loan Partner</h5><h5></h5><div id="" class="team-member-portrait" style="background: url(https://www.annie-mac.com/uploads/sites/10713/public/Shannon_Update.jpg); background-size: cover; background-position: center center; background-repeat: no-repeat;"></div><button class="flex space-between align-center">973-265-1522 <i class="fas fa-mobile-alt"></i></button><button class="flex space-between align-center"><a href="mailto: SPansini@annie-mac.com">Email Me</a><i class="fas fa-envelope"></i></button></div></div><div class="team-member" id="valentinaarias"><div id="" class="team-member-information"><h4>Valentina Arias</h4><h5>Loan Partner</h5><h5></h5><div id="" class="team-member-portrait" style="background: url(https://www.annie-mac.com/uploads/sites/10713/public/Valentina_Arias.jpg); background-size: cover; background-position: center center; background-repeat: no-repeat;"></div><button class="flex space-between align-center">973-265-1614 <i class="fas fa-mobile-alt"></i></button><button class="flex space-between align-center"><a href="mailto: VArias@annie-mac.com">Email Me</a><i class="fas fa-envelope"></i></button></div></div><div class="team-member" id="shaquellajones"><div id="" class="team-member-information"><h4>Shaquella Jones</h4><h5>Loan Partner</h5><h5></h5><div id="" class="team-member-portrait" style="background: url(https://annie-mac.com/uploads/sites/10713/public/Shaq_Jones_Web.jpg); background-size: cover; background-position-y: 28%; background-repeat: no-repeat;"></div><button class="flex space-between align-center">973-933-6482 <i class="fas fa-mobile-alt"></i></button><button class="flex space-between align-center"><a href="mailto: smjones@annie-mac.com">Email Me</a><i class="fas fa-envelope"></i></button></div></div></div>' ).appendTo( $( "#team-display" ) );
	};
	if (window.location.href.indexOf("miamilakes") != -1) {
		// var teamMemberReassignedBranchManager = ['#julianabotero'];
		// for (i = 0; i < teamMemberReassignedBranchManager.length; i++) {
		// 	$(teamMemberReassignedBranchManager[i]).removeClass("manager-information");
		// 	$(teamMemberReassignedBranchManager[i]).addClass("team-member");
		// 	$(teamMemberReassignedBranchManager[i]).prependTo("#team-display > div:nth-child(5)");
		// }
		$("#team-display > h3:nth-child(2)").remove();
		$("#branch-managers").remove();
		$("#angelaxavier").hide();
		$("#aaronhassinger").hide();
		$("#paulpykosh").hide();
		$( '<div class="team-member" id="nicolasduque"><div id="" class="team-member-information"><a class="loan-officer-h4-link" href="https://nicolasduque.annie-mac.com"><h4>Nicolas Duque</h4></a><h5>Mortgage Loan Originator</h5><h5>NMLS: 839110</h5><a href="https://nicolasduque.annie-mac.com"><div id="" class="team-member-portrait" style="background: url(/uploads/sites/10713/public/NicolasDuque.jpeg); background-size: cover; background-position: center center; background-repeat: no-repeat;"></div></a><button class="go flex space-between align-center loan-officer-apply-link"><a href="https://nicolasduque.annie-mac.com/loan/apply" class="btn button-main ">Apply Now</a><button class="flex space-between align-center loan-officer-phone">(786) 651-2144 <i class="fas fa-mobile-alt"></i></button><button class="flex space-between align-center"><a href="mailto: nduque@annie-mac.com">Email Me</a><i class="fas fa-envelope"></i></button></div></div>').appendTo( $( "#team-display > div:nth-child(3)" ) );
	}
	
	if (window.location.href.indexOf("brooklyn") != -1) {
		$("#team-display > h3:nth-child(2)").text("Our Sales Team");
		$("#team-display > h3:nth-child(4)").remove();
		$("#team-display > div:nth-child(4)").remove();
		$( '<h3 class="text-center">Loan Partners</h3><div id="" class="team-member-section"><div class="team-member" id="javierkato"><div id="" class="team-member-information"><h4>Javier Kato</h4><h5>Loan Partner</h5><h5></h5><div id="" class="team-member-portrait" style="background: url(https://www.annie-mac.com/uploads/sites/10713/public/Javier.jpg); background-size: cover; background-position-y: 17%; background-repeat: no-repeat;"></div><button class="flex space-between align-center">973-321-7664 <i class="fas fa-mobile-alt"></i></button><button class="flex space-between align-center"><a href="mailto: JKato@Annie-Mac.com">Email Me</a><i class="fas fa-envelope"></i></button></div></div><div class="team-member" id="alexemam"><div id="" class="team-member-information"><h4>Alexander Emam</h4><h5>Loan Partner</h5><h5></h5><div id="" class="team-member-portrait" style="background: url(https://annie-mac.com/uploads/sites/10713/public/f77f980f-7eb3-46e2-bf5d-4af23c18b55e.jpeg); background-size: cover; background-repeat: no-repeat;"></div><button class="flex space-between align-center">973-409-6396 <i class="fas fa-mobile-alt"></i></button><button class="flex space-between align-center"><a href="mailto: AEmam@Annie-Mac.com">Email Me</a><i class="fas fa-envelope"></i></button></div></div></div>' ).appendTo( $( "#team-display" ) );
	}
	if (window.location.href.indexOf("doral") != -1) {
		$("#team-display > h3:nth-child(2)").text("Our Sales Team");
		$("#team-display > h3:nth-child(4)").remove();
		$("#team-display > div.team-member-section").remove();
	};
	if (window.location.href.indexOf("cranford") != -1) {
		$("#team-display > h3:nth-child(2)").text("Our Sales Team");
		$("#team-display > h3:nth-child(4)").remove();
		$("#team-display > div.team-member-section").remove();
	};
	if (window.location.href.indexOf("https://louisville") != -1) {
		$("#branch-content h2").text("Chosen Mortgage Team");
		$("#team-display > div.team-member-section").append("<div id='' class='team-member'><div id='' class='team-member-information'><a href='http://chrissypierson.annie-mac.com/'><h4>Chrissy Pierson</h4></a><h5>Mortgage Loan Originator</h5><h5>NMLS: 1412881</h5><a href='http://chrissypierson.annie-mac.com/'><div id='' class='team-member-portrait' style='background: url(https://annie-mac.com/uploads/sites/10713/public/ChristinaPierson_Selects_0123.jpeg); background-size: cover; background-position: center center; background-repeat: no-repeat;'></div></a><button class='go flex space-between align-center'><a href='http://chrissypierson.annie-mac.com/loan/apply' class='btn button-main'>Apply Now</button></a><button class='flex space-between align-center'>(513) 769-2038<i class='fas fa-mobile-alt'></i></button><button class='flex space-between align-center'><a href='mailto: cpierson@annie-mac.com'>Email Me</a><i class='fas fa-envelope'></i></button></div></div>");
		var teamMemberReassignedBranchManager = ['#mikeprestigiacomo', '#brianlykins', '#kevinhulsey'];
		for (i = 0; i < teamMemberReassignedBranchManager.length; i++) {
			$(teamMemberReassignedBranchManager[i]).addClass("manager-information");
			$(teamMemberReassignedBranchManager[i]).removeClass("team-member");
			$(teamMemberReassignedBranchManager[i]).prependTo(".branch-manager-section");
		}
	};
	if (window.location.href.indexOf("/page/broker") != -1) {
		$("#screen-1 > div > div > div.form-wrapper > div.text > p").text("Interested in partnering with AnnieMac Wholesale?  Fill out the form below and we will get the process started!");
		$("#product-banner > h2").wrap("href", "https://www.anniemacb2b.com/");
		$("#product-banner > h4").text("Become an AnnieMac Wholesale Broker Partner!");
	}
	if (window.location.href.indexOf("scottsynovic") != -1) {
		$("#list_12148 > a:nth-child(1)").attr("href", "tel:303-668-3350");
		$("#biography > div.manager-biography > h2").text("Scott Synovic - Mortgage Loan Originator");
	};
	if (window.location.href.indexOf("kevinhulsey") != -1) {
		$("#loan-officer-header-call").attr("href", "tel:502-773-1236");
	};
	if (window.location.href.indexOf("derekmcgowan") != -1) {
		$('<a href="https://loanofficers.lendingtree.com/derek-mcgowan/1478470" target="_blank"><li><i class="fas fa-leaf"></i>Lending Tree</li></a>').appendTo("#originator-social-details > ul");
	}
	if (window.location.href.indexOf("newsmyrna.annie-mac.com") != -1) {
		$("#susiebruner > div > button.go.flex.space-between.align-center").hide();
		$("#susiebruner > div > h5:nth-child(3)").text("Non-Originating");
	};
	if (window.location.href.indexOf("winterpark.annie-mac.com") != -1) {
		$("#robertkube").hide();
		var teamMemberReassignedBranchManager = ['#susiebruner1'];
		for (i = 0; i < teamMemberReassignedBranchManager.length; i++) {
			$(teamMemberReassignedBranchManager[i]).addClass("manager-information");
			$(teamMemberReassignedBranchManager[i]).removeClass("team-member");
			$(teamMemberReassignedBranchManager[i]).prependTo(".branch-manager-section");
			$("#susiebruner1 > div > button.go.flex.space-between.align-center").hide();
			$("#susiebruner1 > div > h5:nth-child(3)").text("Non-Originating");
		}
	};
	if (window.location.href.indexOf("edenprairie.annie-mac.com") != -1) {
		var teamMemberReassignedBranchManager = ['#titusmhiripiri', '#scottmiller'];
		for (i = 0; i < teamMemberReassignedBranchManager.length; i++) {
			$(teamMemberReassignedBranchManager[i]).addClass("manager-information");
			$(teamMemberReassignedBranchManager[i]).removeClass("team-member");
			$(teamMemberReassignedBranchManager[i]).prependTo(".branch-manager-section");
		}
	};
	if (window.location.href.indexOf("annapolis.annie-mac.com") != -1) {
		$( '<h3 class="text-center">Additional Staff</h3><div id="" class="team-member-section"><div class="team-member" id="marissakalliongis"><div id="" class="team-member-information"><h4>Marissa Kalliongis</h4><h5>Business Development Representative</h5><h5></h5><div id="" class="team-member-portrait" style="background-image: url(https://annie-mac.com/uploads/sites/10713/public/Marissa_Headshot.jpg); background-size: 125%; background-position: center -7px; background-repeat: no-repeat;"></div><button class="flex space-between align-center">(667) 206-4352 x1503<i class="fas fa-mobile-alt"></i></button><button class="flex space-between align-center"><a href="mailto: MKalliongis@Annie-Mac.com">Email Me</a><i class="fas fa-envelope"></i></button></div></div><div class="team-member" id="adambaker"><div id="" class="team-member-information"><h4>Adam Baker</h4><h5>Loan Partner</h5><h5></h5><div id="" class="team-member-portrait" style="background-image: url(https://annie-mac.com/uploads/sites/10713/public/Adam_Headshot.jpeg); background-size: 104%; background-position: center -7px; background-repeat: no-repeat;"></div><button class="flex space-between align-center">(667) 309-5202 x1506<i class="fas fa-mobile-alt"></i></button><button class="flex space-between align-center"><a href="mailto: ABaker@Annie-Mac.com">Email Me</a><i class="fas fa-envelope"></i></button></div></div><div class="team-member" id="nelsacollins"><div id="" class="team-member-information"><h4>Nelsa Collins</h4><h5>Loan Partner</h5><h5></h5><div id="" class="team-member-portrait" style="background-image: url(https://annie-mac.com/uploads/sites/10713/public/Nelsa_Collins.png); background-size: 100%; background-position-y: 40% !important; background-repeat: no-repeat;"></div><button class="flex space-between align-center">(667) 309-8268<i class="fas fa-mobile-alt"></i></button><button class="flex space-between align-center"><a href="mailto: NCollins@annie-mac.com">Email Me</a><i class="fas fa-envelope"></i></button></div></div><div class="team-member" id="kelliesmith"><div id="" class="team-member-information"><h4>Kellie Smith</h4><h5>Loan Partner</h5><h5></h5><div id="" class="team-member-portrait" style="background-image: url(https://annie-mac.com/uploads/sites/10713/public/Kellie_Headshot.jpeg); background-size: 104%; background-position: center -7px; background-repeat: no-repeat;"></div><button class="flex space-between align-center">(667) 239-1943 x1507<i class="fas fa-mobile-alt"></i></button><button class="flex space-between align-center"><a href="mailto: kmsmith@annie-mac.com">Email Me</a><i class="fas fa-envelope"></i></button></div></div><div class="team-member" id="jeffbradford"><div id="" class="team-member-information"><h4>Jeff Bradford</h4><h5>Processor</h5><h5></h5><div id="" class="team-member-portrait" style="background-image: url(https://annie-mac.com/uploads/sites/10713/public/Jeff_Headshot.jpeg); background-size: 104%; background-position: center -7px; background-repeat: no-repeat;"></div><button class="flex space-between align-center">(856) 272-4749 x4816<i class="fas fa-mobile-alt"></i></button><button class="flex space-between align-center"><a href="mailto: JBradford@Annie-Mac.com">Email Me</a><i class="fas fa-envelope"></i></button></div></div><div class="team-member" id="brittanibunyea"><div id="" class="team-member-information"><h4>Brittani Bunyea</h4><h5>Processor</h5><h5></h5><div id="" class="team-member-portrait" style="background-image: url(https://annie-mac.com/uploads/sites/10713/public/Brittany_Headshot.jpg); background-size: 111%; background-position: center -7px; background-position-y: 25% !important; background-repeat: no-repeat;"></div><button class="flex space-between align-center">(667) 309-8248 x1505<i class="fas fa-mobile-alt"></i></button><button class="flex space-between align-center"><a href="mailto: BBunyea@Annie-Mac.com">Email Me</a><i class="fas fa-envelope"></i></button></div></div></div>' ).appendTo( $( "#team-display" ) );
	};
	if (window.location.href.indexOf("lynnwood.annie-mac.com") != -1) {
		$( '<h3 class="text-center">Additional Staff</h3><div id="" class="team-member-section"><div class="team-member" id="susanmonette"><div id="" class="team-member-information"><h4>Susan Monette</h4><h5>Branch Operations Manager</h5><h5></h5><div id="" class="team-member-portrait" style="background-image: url(https://annie-mac.com/uploads/sites/10713/public/susan.png); background-size: 104%; background-position: center -7px; background-repeat: no-repeat;"></div><button class="flex space-between align-center">425-458-2869 ex 5404<i class="fas fa-mobile-alt"></i></button><button class="flex space-between align-center"><a href="mailto: smonette@Annie-Mac.com">Email Me</a><i class="fas fa-envelope"></i></button></div></div><div class="team-member" id="tracycoe"><div id="" class="team-member-information"><h4>Tracy Coe</h4><h5>Processor</h5><h5></h5><div id="" class="team-member-portrait" style="background-image: url(https://annie-mac.com/uploads/sites/10713/public/tracy.jpeg); background-size: 110%; background-position: center -7px; background-position-y: 45%; background-repeat: no-repeat;"></div><button class="flex space-between align-center">425-458-2841 ex 5403<i class="fas fa-mobile-alt"></i></button><button class="flex space-between align-center"><a href="mailto: tcoe@annie-mac.com">Email Me</a><i class="fas fa-envelope"></i></button></div></div><div class="team-member" id="tinasemprevio"><div id="" class="team-member-information"><h4>Tina Semprevio</h4><h5>Processor</h5><h5></h5><div id="" class="team-member-portrait" style="background-image: url(https://annie-mac.com/uploads/sites/10713/public/tina.jpeg); background-size: cover; background-position: center -7px; background-repeat: no-repeat;"></div><button class="flex space-between align-center">425-458-2841 ex 5406<i class="fas fa-mobile-alt"></i></button><button class="flex space-between align-center"><a href="mailto: tsemprevio@annie-mac.com">Email Me</a><i class="fas fa-envelope"></i></button></div></div></div>' ).appendTo( $( "#team-display" ) );
	};
	if (window.location.href.indexOf("nicolepoole.annie-mac.com/page/perks") > -1) {
		$("#perkplans > iframe").attr('src', 'https://perkplans.com/frames/nicolepoole.html');
	};
	if (window.location.href.indexOf("chesapeake.annie-mac.com") != -1) {
		var teamMemberReassignedBranchManager = ['#bobmohrhusen'];
		for (i = 0; i < teamMemberReassignedBranchManager.length; i++) {
			$(teamMemberReassignedBranchManager[i]).addClass("manager-information");
			$(teamMemberReassignedBranchManager[i]).removeClass("team-member");
			$(teamMemberReassignedBranchManager[i]).prependTo(".branch-manager-section");
			$("#susiebruner1 > div > button.go.flex.space-between.align-center").hide();
			$("#susiebruner1 > div > h5:nth-child(3)").text("Non-Originating");
		}
	};
	if (window.location.href.indexOf("katiesundberg.annie-mac.com") != -1) {
		$("#originator-social-details > ul > a:nth-child(7)").remove();
		$("#originator-social-details > ul > a:nth-child(6)").remove();
		$("#originator-social-details > ul > a:nth-child(5)").remove();
		$("#originator-social-details > ul > a:nth-child(4)").remove();
		$("#originator-social-details > ul > a:nth-child(1)").remove();
	};
	if (window.location.href.indexOf("joshvantil.annie-mac.com") != -1) {
		$( "<h3 style='margin-top: -20px'>Josh's Certificates:</h3><img src='https://annie-mac.com/uploads/sites/10713/public/CMA_Badge_of_Honor_2021.png' style='width: 137px; height: auto; margin-bottom: 50px; margin-top: 25px;'>").prependTo( $( "#we-provide-more-master" ) );
	};
	if (window.location.href.indexOf("hopeprince.annie-mac.com") != -1) {
		$( "<h3 style='margin-top: -20px'>Hope's Certificates:</h3><img src='https://annie-mac.com/uploads/sites/10713/public/CMA_Badge_of_Honor_2021.png' style='width: 137px; height: auto; margin-bottom: 50px; margin-top: 25px;'>").prependTo( $( "#we-provide-more-master" ) );
	};
	if (window.location.href.indexOf("chucktegano.annie-mac.com") != -1) {
		$( "<h3 style='margin-top: -20px'>Charles's Certificates:</h3><img src='https://annie-are.com/uploads/sites/10713/public/CMA_Badge_of_Honor_2021.png' style='width: 137px; height: auto; margin-bottom: 50px; margin-top: 25px;'>").prependTo( $( "#we-provide-more-master" ) );
	};
	if (window.location.href.indexOf("emmettmunson.annie-mac") != -1) {
		$( "<h3 style='margin-top: -20px'>Emmett's Certificates:</h3><img src='https://annie-mre.com/uploads/sites/10713/public/CMA_Badge_of_Honor_2021.png' style='width: 137px; height: auto; margin-bottom: 50px; margin-top: 25px;'>").prependTo( $( "#we-provide-more-master" ) );
	};
	// Hide branch management if no branch management are present.
	if ($('.branch-manager-section > .manager-information').length < 1) {
		$("#team-display > h3:nth-child(1)").hide();
	};
	// Hide team members if no team members are present.
	if ($('.team-member-section > .team-member').length < 1) {
		$("#team-display > h3:nth-child(3)").hide();
	};
	// Hide team members if no team members are present on team page.
	if ($('body').hasClass('site-type-team')) {
		$("#list_11537").remove();
		if ($('.team-member-section > .team-member').length < 1) {
			$("body > div.main-content > h3").remove();
			$('.team-member-section').remove();
		};
	};
	if (window.location.href.indexOf("/branch") != -1) {
		const locationBranch = $(".location-listing");
		$( locationBranch ).each(function() {
			var domain = $(this).find( "h4 > a" ).attr('href');
			var subdomain = domain.replace('.annie-mac.com', '').replace('.themtgco.com', '').replace('https://', '').replace('/loan/apply', '').replace('http://', '') + "-branch-listing";
			(this).id = subdomain;
		});
		$("h3:contains('Wisconsin')").hide();
		$('#coloradosprings-branch-listing').hide();
		$('#towson-branch-listing').hide();
		$("#wausau-branch-listing").hide();
		$("#hannahstaging\\.wmmortgageware\\.com-branch-listing").remove();
	};
	if (window.location.href.indexOf("/forms/lead/b2b-broker") != -1) {
		$('#product-banner').hide();
	};
	
	
	// Blog AnnieMac Redesign BETA - REMOVE EVENTUALLY
	// if ((window.location.href.indexOf("annie-mac.com/blog") != -1)) {
	// 	$('head').append('<link rel="stylesheet" id="new-stylesheet" href="https://anniemachomemortgage.github.io/Development/anniemac2021corporate.css" type="text/css" />');
	// 	if ($('body').hasClass('site-type-loan_officer')) {
	// 		$("#am-css").remove();
	// 		$("#am-styles").remove();
	// 		$("#am-responsive").remove();
	// 		$("#am-custom").remove();
	// 		$("#stylesheet-git").remove();
	// 	};  
	// 	if ($('body').hasClass('site-type-branch')){
	// 		$("#am-css").remove();
	// 		$("#am-styles").remove();
	// 		$("#am-responsive").remove();
	// 		$("#am-custom").remove();
	// 		$("#stylesheet-git").remove();
	// 	};
	// 	if ($('body').hasClass('site-type-corporate')) {
	// 		$("#am-css").remove();
	// 		$("#am-styles").remove();
	// 		$("#am-responsive").remove();
	// 		$("#am-custom").remove();
	// 		$("#stylesheet-git").remove();
	// 	};
	// };	
	
	
	if($('body').hasClass('page-blog-list') || $('body').hasClass('page-blog-detail')) {
		$('img').each(function() {
			if(! $(this).attr('alt')) {
				$(this).attr('alt', 'Blog image');
				}
		});
	};
	
	
	
	if (window.location.href.indexOf("/page/broker") > -1) {
		$("#site-navigation").remove();
	};
	// BEGIN BDM PAGES
	// ALL BDM PAGES
	if ((window.location.href.indexOf("get-elevated") != -1) || (window.location.href.indexOf("elevate-career") != -1) || (window.location.href.indexOf("elevate-branch-2") != -1) || (window.location.href.indexOf("page/kelsey") != -1)) {
		$("input[type='tel']").on("keyup", function() {
			var valid = /^(?:(?:\+?1\s*(?:[.-]\s*)?)?(?:\(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\s*\)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)?([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})(?:\s*(?:#|x\.?|ext\.?|extension)\s*(\d+))?$/.test(this.value),
			val = this.value;
			if (valid) {
				$('#submit-overlayment').hide();
			}
		});
	};
	
	// Jennifer Lombardo
	if (window.location.href.indexOf("/get-elevated?r=jennifer") != -1) {
		// $("#bdm-avatar").css('background', 'url("https://annie-mac.com/uploads/sites/10713/public/jessicahelwig.jpeg")');
		// $("#bdm-avatar").css('background-size', 'cover');
		$("#bdm-title-name").text("Jennifer Lombardo");
		$("#bdm-title-email").text("JAdkins@Annie-Mac.com");
		$("#bdm-title-email").attr("href", "mailto:JAdkins@Annie-Mac.com");
		$("#bdm-title-phone").text("(856) 454-3144");
		$("#bdm-title-phone").attr("href", "tel:856-454-3144");
		$("#number-id").attr("href", "tel:856-454-3144");
		$("#number-id").text("(856) 454-3144");
		$("#UserId").attr('value', "U6UJ9A0004L0");
		$("#toggle-captcha").click(function(){
			$("#form-content").fadeOut(2500);
			setTimeout(function(){
			   window.location.href='./get-more-thanks?r=jennifer';
			  } ,2750);
		});
		$("#download-id-1").attr("href", "https://annie-mac.com/getmore-jennifer");
		$("#download-id-2").attr("href", "https://annie-mac.com/getmore-jennifer");
		$("#booking-id").attr("href", "https://anmac.me/3ibfmjb");
	};
	if (window.location.href.indexOf("/get-more-thanks?r=jennifer") != -1) {
		// $("#bdm-avatar").css('background', 'url("https://annie-mac.com/uploads/sites/10713/public/jessicahelwig.jpeg")');
		// $("#bdm-avatar").css('background-size', 'cover');
		$("#bdm-title-name").text("Jennifer Lombardo");
		$("#bdm-title-email").text("JAdkins@Annie-Mac.com");
		$("#bdm-title-email").attr("href", "mailto:JAdkins@Annie-Mac.com");
		$("#bdm-title-phone").text("(856) 454-3144");
		$("#bdm-title-phone").attr("href", "tel:856-454-3144");
		$("#number-id").attr("href", "tel:856-454-3144");
		$("#number-id").text("(856) 454-3144");
		$("#download-id-1").attr("href", "https://annie-mac.com/getmore-jennifer");
		$("#download-id-2").attr("href", "https://annie-mac.com/getmore-jennifer");
		$("#booking-id").attr("href", "https://anmac.me/3ibfmjb");
	};
	
	
	// Rose Vu
	if (window.location.href.indexOf("/get-elevated?r=rose") != -1) {
		// $("#bdm-avatar").css('background', 'url("https://annie-mac.com/uploads/sites/10713/public/jessicahelwig.jpeg")');
		// $("#bdm-avatar").css('background-size', 'cover');
		$("#bdm-title-name").text("Rose Vu");
		$("#bdm-title-email").text("rvu@Annie-Mac.com");
		$("#bdm-title-email").attr("href", "mailto:rvu@Annie-Mac.com");
		$("#bdm-title-phone").text("(856) 326-1305");
		$("#bdm-title-phone").attr("href", "tel:856-326-1305");
		$("#number-id").attr("href", "tel:856-326-1305");
		$("#number-id").text("(856) 326-1305");
		$("#UserId").attr('value', "U6UJ9A0004K9");
		$("#toggle-captcha").click(function(){
			$("#form-content").fadeOut(2500);
			setTimeout(function(){
			   window.location.href='./get-more-thanks?r=rose';
			  } ,2750);
		});
		$("#download-id-1").attr("href", "https://annie-mac.com/getmore-rose");
		$("#download-id-2").attr("href", "https://annie-mac.com/getmore-rose");
		$("#booking-id").attr("href", "https://outlook.office365.com/owa/calendar/rvu1@annie-mac.com/bookings/");
	};
	if (window.location.href.indexOf("/get-more-thanks?r=rose") != -1) {
		// $("#bdm-avatar").css('background', 'url("https://annie-mac.com/uploads/sites/10713/public/jessicahelwig.jpeg")');
		// $("#bdm-avatar").css('background-size', 'cover');
		$("#bdm-title-name").text("Rose Vu");
		$("#bdm-title-email").text("rvu@Annie-Mac.com");
		$("#bdm-title-email").attr("href", "mailto:rvu@Annie-Mac.com");
		$("#bdm-title-phone").text("(856) 326-1305");
		$("#bdm-title-phone").attr("href", "tel:856-326-1305");
		$("#number-id").attr("href", "tel:856-326-1305");
		$("#number-id").text("(856) 326-1305");
		$("#download-id-1").attr("href", "https://annie-mac.com/getmore-rose");
		$("#download-id-2").attr("href", "https://annie-mac.com/getmore-rose");
		$("#booking-id").attr("href", "https://outlook.office365.com/owa/calendar/rvu1@annie-mac.com/bookings/");
	};
	// Jessica Helwig
	if (window.location.href.indexOf("/get-elevated?r=jessica") != -1) {
		$("#bdm-avatar").css('background', 'url("https://annie-mac.wmmortgageware.com/uploads/sites/10713/public/jessicahelwig.jpeg")');
		$("#bdm-avatar").css('background-size', 'cover');
		$("#bdm-title-name").text("Jessica Helwig");
		$("#bdm-title-email").text("JHelwig@Annie-Mac.com");
		$("#bdm-title-email").attr("href", "mailto:JHelwig@Annie-Mac.com");
		$("#bdm-title-phone").text("(856) 545-1513");
		$("#bdm-title-phone").attr("href", "tel:856-545-1513");
		$("#number-id").attr("href", "tel:856-545-1513");
		$("#number-id").text("(856) 545-1513");
		$("#UserId").attr('value', "U6UJ9A0004CY");
		$("#toggle-captcha").click(function(){
			$("#form-content").fadeOut(2500);
			setTimeout(function(){
			   window.location.href='./get-more-thanks?r=jessica';
			  } ,2750);
		});
		$("#download-id-1").attr("href", "https://annie-mac.com/getmore-jessica");
		$("#download-id-2").attr("href", "https://annie-mac.com/getmore-jessica");
		$("#bdm-contact > h4:nth-child(3)").hide();
		$("#booking-id").hide();
		// $("#booking-id").attr("href", "https://outlook.office365.com/owa/calendar/bk_samon@annie-mac.com/bookings/");
	};
	if (window.location.href.indexOf("/get-more-thanks?r=jessica") != -1) {
		$("#bdm-avatar").css('background', 'url("https://annie-mac.wmmortgageware.com/uploads/sites/10713/public/jessicahelwig.jpeg")');
		$("#bdm-avatar").css('background-size', 'cover');
		$("#bdm-title-name").text("Jessica Helwig");
		$("#bdm-title-email").text("JHelwig@Annie-Mac.com");
		$("#bdm-title-email").attr("href", "mailto:JHelwig@Annie-Mac.com");
		$("#bdm-title-phone").text("(856) 545-1513");
		$("#bdm-title-phone").attr("href", "tel:856-545-1513");
		$("#number-id").attr("href", "tel:856-545-1513");
		$("#number-id").text("(856) 545-1513");
		$("#download-id-1").attr("href", "https://annie-mac.com/getmore-jessica");
		$("#download-id-2").attr("href", "https://annie-mac.com/getmore-jessica");
		$("#bdm-contact > h4:nth-child(3)").hide();
		$("#booking-id").hide();
		// $("#booking-id").attr("href", "https://outlook.office365.com/owa/calendar/bk_samon@annie-mac.com/bookings/");
	};
	// Olivia Bacino
	if (window.location.href.indexOf("/get-elevated?r=olivia") != -1) {
		$("#bdm-avatar").css('background', 'url("https://annie-mac.com/uploads/sites/10713/public/olivia.png")');
		$("#bdm-avatar").css('background-size', 'cover');
		$("#bdm-title-name").text("Olivia Bacino");
		$("#bdm-title-email").text("OBacino@Annie-Mac.com");
		$("#bdm-title-email").attr("href", "mailto:OBacino@Annie-Mac.com");
		$("#bdm-title-phone").text("(856) 242-5749");
		$("#bdm-title-phone").attr("href", "tel:856-242-5749");
		$("#number-id").attr("href", "tel:856-242-5749");
		$("#number-id").text("(856) 242-5749");
		$("#UserId").attr('value', "U6UJ9A00047E");
		$("#toggle-captcha").click(function(){
			$("#form-content").fadeOut(2500);
			setTimeout(function(){
			   window.location.href='./get-more-thanks?r=olivia';
			  } ,2750);
		});
		$("#download-id-1").attr("href", "https://annie-mac.com/getmore-olivia");
		$("#download-id-2").attr("href", "https://annie-mac.com/getmore-olivia");
		$("#bdm-contact > h4:nth-child(3)").hide();
		// $("#booking-id").attr("href", "https://outlook.office365.com/owa/calendar/bk_samon@annie-mac.com/bookings/");
	};
	if (window.location.href.indexOf("/get-more-thanks?r=olivia") != -1) {
		$("#bdm-avatar").css('background', 'url("https://annie-mac.com/uploads/sites/10713/public/olivia.png")');
		$("#bdm-avatar").css('background-size', 'cover');
		$("#bdm-title-name").text("Olivia Bacino");
		$("#bdm-title-email").text("OBacino@Annie-Mac.com");
		$("#bdm-title-email").attr("href", "mailto:OBacino@Annie-Mac.com");
		$("#bdm-title-phone").text("(856) 242-5749");
		$("#bdm-title-phone").attr("href", "tel:856-242-5749");
		$("#number-id").attr("href", "tel:856-242-5749");
		$("#number-id").text("(856) 242-5749");
		$("#download-id-1").attr("href", "https://annie-mac.com/getmore-olivia");
		$("#download-id-2").attr("href", "https://annie-mac.com/getmore-olivia");
		$("#bdm-contact > h4:nth-child(3)").hide();
		// $("#booking-id").attr("href", "https://outlook.office365.com/owa/calendar/bk_samon@annie-mac.com/bookings/");
	};
	// Jeanna Grebinger
	if (window.location.href.indexOf("/get-elevated?r=jeanna") != -1) {
		$("#bdm-avatar").css('background', 'url("https://annie-mac.com/uploads/sites/10713/public/jeanna.jpeg")');
		$("#bdm-avatar").css('background-size', 'cover');
		$("#bdm-title-name").text("Jeanna Grebinger");
		$("#bdm-title-email").text("JGrebinger@Annie-Mac.com");
		$("#bdm-title-email").attr("href", "mailto:JGrebinger@Annie-Mac.com");
		$("#bdm-title-phone").text("(352) 448-2674");
		$("#bdm-title-phone").attr("href", "tel:352-448-2674");
		$("#number-id").attr("href", "tel:352-448-2674");
		$("#number-id").text("(352) 448-2674");
		$("#UserId").attr('value', "U6UJ9A0004CZ");
		$("#toggle-captcha").click(function(){
			$("#form-content").fadeOut(2500);
			setTimeout(function(){
			   window.location.href='./get-more-thanks?r=jeanna';
			  } ,2750);
		});
		$("#download-id-1").attr("href", "https://annie-mac.com/getmore-jeanna");
		$("#download-id-2").attr("href", "https://annie-mac.com/getmore-jeanna");
		$("#booking-id").attr("href", "https://outlook.office365.com/owa/calendar/jgrebinger1@annie-mac.com/bookings/");
	};
	if (window.location.href.indexOf("/get-more-thanks?r=jeanna") != -1) {
		$("#bdm-avatar").css('background', 'url("https://annie-mac.com/uploads/sites/10713/public/jeanna.jpeg")');
		$("#bdm-avatar").css('background-size', 'cover');
		$("#bdm-title-name").text("Jeanna Grebinger");
		$("#bdm-title-email").text("JGrebinger@Annie-Mac.com");
		$("#bdm-title-email").attr("href", "mailto:JGrebinger@Annie-Mac.com");
		$("#bdm-title-phone").text("(352) 448-2674");
		$("#bdm-title-phone").attr("href", "tel:352-448-2674");
		$("#number-id").attr("href", "tel:352-448-2674");
		$("#number-id").text("(352) 448-2674");
		$("#download-id-1").attr("href", "https://annie-mac.com/getmore-jeanna");
		$("#download-id-2").attr("href", "https://annie-mac.com/getmore-jeanna");
		$("#booking-id").attr("href", "https://outlook.office365.com/owa/calendar/jgrebinger1@annie-mac.com/bookings/");
	};
	// Stacy Amon
	if (window.location.href.indexOf("/get-elevated?r=stacy") != -1) {
		$("#bdm-avatar").css('background', 'url("https://annie-mac.com/uploads/sites/10713/public/stacy.jpeg")');
		$("#bdm-avatar").css('background-size', 'cover');
		$("#bdm-title-name").text("Stacy Amon");
		$("#bdm-title-email").text("samon@annie-mac.com");
		$("#bdm-title-email").attr("href", "mailto:samon@annie-mac.com");
		$("#bdm-title-phone").text("(302) 273-0795");
		$("#bdm-title-phone").attr("href", "tel:302-273-0795");
		$("#number-id").attr("href", "tel:302-273-0795");
		$("#number-id").text("(302) 273-0795");
		$("#UserId").attr('value', "U6UJ9A0000BF");
		$("#toggle-captcha").click(function(){
			$("#form-content").fadeOut(2500);
			setTimeout(function(){
			   window.location.href='./get-more-thanks?r=stacy';
			  } ,2750);
		});
		$("#download-id-1").attr("href", "https://annie-mac.com/getmore-stacy");
		$("#download-id-2").attr("href", "https://annie-mac.com/getmore-stacy");
		$("#booking-id").attr("href", "https://outlook.office365.com/owa/calendar/bk_samon@annie-mac.com/bookings/");
	};
	if (window.location.href.indexOf("/get-more-thanks?r=stacy") != -1) {
		$("#bdm-avatar").css('background', 'url("https://annie-mac.com/uploads/sites/10713/public/stacy.jpeg")');
		$("#bdm-avatar").css('background-size', 'cover');
		$("#bdm-title-name").text("Stacy Amon");
		$("#bdm-title-email").text("samon@annie-mac.com");
		$("#bdm-title-email").attr("href", "mailto:samon@annie-mac.com");
		$("#bdm-title-phone").text("(302) 273-0795");
		$("#bdm-title-phone").attr("href", "tel:302-273-0795");
		$("#number-id").attr("href", "tel:302-273-0795");
		$("#number-id").text("(302) 273-0795");
		$("#download-id-1").attr("href", "https://annie-mac.com/getmore-stacy");
		$("#download-id-2").attr("href", "https://annie-mac.com/getmore-stacy");
		$("#booking-id").attr("href", "https://outlook.office365.com/owa/calendar/bk_samon@annie-mac.com/bookings/");
	};
	// Linda Boyle
	if (window.location.href.indexOf("/get-elevated?r=linda") != -1) {
		$("#bdm-avatar").css('background', 'url("https://annie-mac.com/uploads/sites/10713/public/linda-boyle.png")');
		$("#bdm-avatar").css('background-size', 'cover');
		$("#bdm-title-name").text("Linda Boyle");
		$("#bdm-title-email").text("lboyle@annie-mac.com");
		$("#bdm-title-email").attr("href", "mailto:lboyle@annie-mac.com");
		$("#bdm-title-phone").text("(856) 209-2015");
		$("#bdm-title-phone").attr("href", "tel:856-209-2015");
		$("#number-id").attr("href", "tel:856-209-2015");
		$("#number-id").text("(856) 209-2015");
		$("#UserId").attr('value', "U6UJ9A00040G");
		$("#toggle-captcha").click(function(){
			$("#form-content").fadeOut(2500);
			setTimeout(function(){
			   window.location.href='./get-more-thanks?r=linda';
			  } ,2750);
		});
		$("#download-id-1").attr("href", "https://annie-mac.com/getmore-linda");
		$("#download-id-2").attr("href", "https://annie-mac.com/getmore-linda");
		$("#booking-id").attr("href", "https://outlook.office365.com/owa/calendar/lboyle1@annie-mac.com/bookings/");
	};
	if (window.location.href.indexOf("/get-more-thanks?r=linda") != -1) {
		$("#bdm-avatar").css('background', 'url("https://annie-mac.com/uploads/sites/10713/public/linda-boyle.png")');
		$("#bdm-avatar").css('background-size', 'cover');
		$("#bdm-title-name").text("Linda Boyle");
		$("#bdm-title-email").text("lboyle@annie-mac.com");
		$("#bdm-title-email").attr("href", "mailto:lboyle@annie-mac.com");
		$("#bdm-title-phone").text("(856) 209-2015");
		$("#bdm-title-phone").attr("href", "tel:856-209-2015");
		$("#number-id").attr("href", "tel:856-209-2015");
		$("#number-id").text("(856) 209-2015");
		$("#download-id-1").attr("href", "https://annie-mac.com/getmore-linda");
		$("#download-id-2").attr("href", "https://annie-mac.com/getmore-linda");
		$("#booking-id").attr("href", "https://outlook.office365.com/owa/calendar/lboyle1@annie-mac.com/bookings/");
	};
	// Sean King
	if (window.location.href.indexOf("/get-elevated?r=sean") != -1) {
		$("#bdm-avatar").css('background', 'url("https://www.annie-mac.com/uploads/sites/10713/public/sean_king.jpeg")');
		$("#bdm-avatar").css('background-size', 'cover');
		$("#bdm-title-name").text("Sean King");
		$("#bdm-title-email").text("sking@annie-mac.com");
		$("#bdm-title-email").attr("href", "mailto:sking@annie-mac.com");
		$("#bdm-title-phone").text("(856) 229-0639");
		$("#bdm-title-phone").attr("href", "tel:856-229-0639");
		$("#number-id").attr("href", "tel:856-229-0639");
		$("#number-id").text("(856) 229-0639");
		$("#UserId").attr('value', "U6UJ9A0004HO");
		$("#toggle-captcha").click(function(){
			$("#form-content").fadeOut(2500);
			setTimeout(function(){
			   window.location.href='./get-more-thanks?r=sean';
			  } ,2750);
		});
		$("#download-id-1").attr("href", "https://annie-mac.com/getmore-sean");
		$("#download-id-2").attr("href", "https://annie-mac.com/getmore-sean");
		$("#booking-id").attr("href", "https://outlook.office365.com/owa/calendar/sking1@annie-mac.com/bookings/");
	};
	if (window.location.href.indexOf("/get-more-thanks?r=sean") != -1) {
		$("#bdm-avatar").css('background', 'url("https://www.annie-mac.com/uploads/sites/10713/public/sean_king.jpeg")');
		$("#bdm-avatar").css('background-size', 'cover');
		$("#bdm-title-name").text("Sean King");
		$("#bdm-title-email").text("sking@annie-mac.com");
		$("#bdm-title-email").attr("href", "mailto:sking@annie-mac.com");
		$("#bdm-title-phone").text("(856) 229-0639");
		$("#bdm-title-phone").attr("href", "tel:856-229-0639");
		$("#number-id").attr("href", "tel:856-229-0639");
		$("#number-id").text("(856) 229-0639");
		$("#download-id-1").attr("href", "https://annie-mac.com/getmore-sean"); 
		$("#download-id-2").attr("href", "https://annie-mac.com/getmore-sean");
		$("#booking-id").attr("href", "https://outlook.office365.com/owa/calendar/sking1@annie-mac.com/bookings/");
	};
	// Thanks Kelsey
	if (window.location.href.indexOf("/get-more-thanks?bdm=kelsey") != -1) {
		$("#number-id").attr("href", "tel:856-252-0289");
		$("#number-id").text("(856) 252-0289");
		$("#download-id-1").attr("href", "https://annie-mac.com/getmore-kelsey");
		$("#download-id-2").attr("href", "https://annie-mac.com/getmore-kelsey");
		$("#booking-id").attr("href", "https://outlook.office365.com/owa/calendar/bk_krauchut@annie-mac.com/bookings/");
	};
	// Contact Us
	if (window.location.href.indexOf("/contact-us") != -1) {
		$("input[type='tel']").on("keyup", function() {
			var valid = /^(?:(?:\+?1\s*(?:[.-]\s*)?)?(?:\(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\s*\)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)?([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})(?:\s*(?:#|x\.?|ext\.?|extension)\s*(\d+))?$/.test(this.value),
				val = this.value;
			if (valid) {
				$('#submit-overlayment').hide();
			}
		});
		$("#state-selection > option:nth-child(1)").attr('disabled','disabled');
		$("#state-selection").attr('required','true');
		$("#referred-selection > option:nth-child(1)").attr('disabled','disabled');
		$("#referred-selection").attr('required','true');
		$(":input").on("keyup change", function(e) {
			var selectedState = $("#state-selection").val();
			$('input[name=state]').val(selectedState);
			var referred = $("#referred-selection").val();
			$('input[name=referred]').val(referred);
			var windowurl = window.location.href
			var windowurlmessage = "Summary: This lead was captured at " + windowurl
			var nameinput = " Borrower Informaton: The borrower's name is " + $('input[name=name]').val() + ". "
			var borrowerLocation = "The borrower is from " + $('input[name=state]').val() + ". "
			var emailaddress = "Their email address is " + $('input[name=email-address]').val() + ". "
			var phonenumber = "Their phone number is " + $('input[name=phone-number]').val() + ". "
			var additionalcomments = "They added the following message: " + $('textarea[name=additional-comments]').val() + ". "
			$("#Personals").val(windowurlmessage + " " + nameinput + " " + borrowerLocation + " " + emailaddress + " " + phonenumber);
			$("#Production").val(additionalcomments);
			var commentScruba = $('#Production').val();
			if (commentScruba.indexOf(undefined) < 1) {
				var productionsummary = $("#Production").val()
			}
			var commentScrubb = $('#Personals').val();
			if (commentScrubb.indexOf("is .") < 1) {
				var personalsummary = $("#Personals").val()
			}
			$("#Comments").attr('value', personalsummary + " " + productionsummary);
		});
		$('#submit-form').click(function(){
			$( window ).scrollTop( 30 );
			$("#construction-lead-capture-section").fadeOut(2500);
			setTimeout(function(){
			   window.location.href='./lead-sent';
			  } ,2750);
		});
	};
	// Prospecting
	if (window.location.href.indexOf("/prospect-") != -1) {
		$("input[type='tel']").on("keyup", function() {
			var valid = /^(?:(?:\+?1\s*(?:[.-]\s*)?)?(?:\(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\s*\)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)?([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})(?:\s*(?:#|x\.?|ext\.?|extension)\s*(\d+))?$/.test(this.value),
				val = this.value;
			if (valid) {
				$('#submit-overlayment').hide();
			}
		});
		$("#state-selection > option:nth-child(1)").attr('disabled','disabled');
		$("#state-selection").attr('required','true');
		$("#referred-selection > option:nth-child(1)").attr('disabled','disabled');
		$("#referred-selection").attr('required','true');
		$(":input").on("keyup change", function(e) {
			var selectedState = $("#state-selection").val();
			$('input[name=state]').val(selectedState);
			var referred = $("#referred-selection").val();
			$('input[name=referred]').val(referred);
			var windowurl = window.location.href
			var windowurlmessage = "Summary: This lead was captured at " + windowurl
			var nameinput = " Borrower Informaton: The borrower's name is " + $('input[name=name]').val() + ". "
			var borrowerLocation = "The borrower is from " + $('input[name=state]').val() + ". "
			var emailaddress = "Their email address is " + $('input[name=email-address]').val() + ". "
			var phonenumber = "Their phone number is " + $('input[name=phone-number]').val() + ". "
			$("#Personals").val(windowurlmessage + " " + nameinput + " " + borrowerLocation + " " + emailaddress + " " + phonenumber);
			var commentScrubb = $('#Personals').val();
			if (commentScrubb.indexOf("is .") < 1) {
				var personalsummary = $("#Personals").val()
			}
			$("#Comments").attr('value', personalsummary);
		});
		$('#submit-form').click(function(){
			$( window ).scrollTop( 30 );
			$("#construction-lead-capture-section").fadeOut(2500);
			setTimeout(function(){
			   window.location.href='./lead-sent';
			  } ,2750);
		});
	};
	// Renovation and Construction
	if (window.location.href.indexOf("/renovation-start") != -1) {
		$("input[type='tel']").on("keyup", function() {
			var valid = /^(?:(?:\+?1\s*(?:[.-]\s*)?)?(?:\(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\s*\)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)?([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})(?:\s*(?:#|x\.?|ext\.?|extension)\s*(\d+))?$/.test(this.value),
			val = this.value;
			if (valid) {
				$('#submit-overlayment').hide();
			}
		});
		$("input[type='radio'][name='loan-type']").on('input',function(e){
			var selectedLoanType = $("input[type='radio'][name='loan-type']:checked").val();
			$("#loan-purpose-selection").attr('value', selectedLoanType);
		});
		$("#state-selection > option:nth-child(1)").attr('disabled','disabled');
		$("#state-selection").attr('required','true');
		$("#referred-selection > option:nth-child(1)").attr('disabled','disabled');
		$("#referred-selection").attr('required','true');
		$(":input").on("keyup change", function(e) {
			var selectedState = $("#state-selection").val();
			$('input[name=state]').val(selectedState);
			var referred = $("#referred-selection").val();
			$('input[name=referred]').val(referred);
			var windowurl = window.location.href
			var windowurlmessage = "Summary: This lead was captured at " + windowurl
			var nameinput = " Borrower Informaton: The borrower's name is " + $('input[name=name]').val() + ". "
			var borrowerLocation = "The borrower is from " + $('input[name=state]').val() + ". "
			var emailaddress = "Their email address is " + $('input[name=email-address]').val() + ". "
			var phonenumber = "Their phone number is " + $('input[name=phone-number]').val() + ". "
			var producttype = "The product type is " + $('input[name="product-type"]:checked').val() + ". "
			var contractorStatus = "The contractor status is " + $('input[name="contractor-status"]:checked').val() + ". "
			var lotstatus = "The lot status is " + $('input[name="loan-type"]:checked').val() + ". "
			var referredStatus = "The borrower was referred to us by: " + $('input[name="referred"]').val() + "."
			$("#Personals").val(windowurlmessage + " " + nameinput + " " + borrowerLocation + " " + emailaddress + " " + phonenumber);
			$("#Production").val(producttype + " " + contractorStatus + " " + lotstatus + " " + referredStatus);
			var commentScruba = $('#Production').val();
			if (commentScruba.indexOf(undefined) < 1) {
				var productionsummary = $("#Production").val()
			}
			var commentScrubb = $('#Personals').val();
			if (commentScrubb.indexOf("is .") < 1) {
				var personalsummary = $("#Personals").val()
			}
			$("#Comments").attr('value', personalsummary + " " + productionsummary);
		});
		$('#submit-form').click(function(){
			$( window ).scrollTop( 30 );
			$("#construction-lead-capture-section").fadeOut(2500);
			setTimeout(function(){
			   window.location.href='./lead-sent';
			  } ,2750);
		});
	};
	if (window.location.href.indexOf("/construction-start") != -1) {
		$("input[type='tel']").on("keyup", function() {
			var valid = /^(?:(?:\+?1\s*(?:[.-]\s*)?)?(?:\(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\s*\)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)?([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})(?:\s*(?:#|x\.?|ext\.?|extension)\s*(\d+))?$/.test(this.value),
				val = this.value;
			if (valid) {
				$('#submit-overlayment').hide();
			}
		});
		$("#state-selection > option:nth-child(1)").attr('disabled','disabled');
		$("#state-selection").attr('required','true');
		$("#referred-selection > option:nth-child(1)").attr('disabled','disabled');
		$("#referred-selection").attr('required','true');
		$(":input").on("keyup change", function(e) {
			var selectedState = $("#state-selection").val();
			$('input[name=state]').val(selectedState);
			var referred = $("#referred-selection").val();
			$('input[name=referred]').val(referred);
			var windowurl = window.location.href
			var windowurlmessage = "Summary: This lead was captured at " + windowurl
			var nameinput = " Borrower Informaton: The borrower's name is " + $('input[name=name]').val() + ". "
			var borrowerLocation = "The borrower is from " + $('input[name=state]').val() + ". "
			var emailaddress = "Their email address is " + $('input[name=email-address]').val() + ". "
			var phonenumber = "Their phone number is " + $('input[name=phone-number]').val() + ". "
			var producttype = "The product type is " + $('input[name="product-type"]:checked').val() + ". "
			var builderStatus = "The builder status is " + $('input[name="builder-status"]:checked').val() + ". "
			var lotstatus = "The lot status is " + $('input[name="lot-status"]:checked').val() + ". "
			var referredStatus = "The borrower was referred to us by: " + $('input[name="referred"]').val() + "."
			$("#Personals").val(windowurlmessage + " " + nameinput + " " + borrowerLocation + " " + emailaddress + " " + phonenumber);
			$("#Production").val(producttype + " " + builderStatus + " " + lotstatus + " " + referredStatus);
			var commentScruba = $('#Production').val();
			if (commentScruba.indexOf(undefined) < 1) {
				var productionsummary = $("#Production").val()
			}
			var commentScrubb = $('#Personals').val();
			if (commentScrubb.indexOf("is .") < 1) {
				var personalsummary = $("#Personals").val()
			}
			$("#Comments").attr('value', personalsummary + " " + productionsummary);
		});
		$('#submit-form').click(function(){
			$( window ).scrollTop( 30 );
			$("#construction-lead-capture-section").fadeOut(2500);
			setTimeout(function(){
			   window.location.href='./lead-sent';
			  } ,2750);
		});
	};
	if (window.location.href.indexOf("/professional-disclaimer?profession=contractor") != -1) {
		$("#builder-agreement-disclaimer").hide();
		$("#agreement-type").text("Contractor Disclaimer Agreement");
		$('input[name=agreement-type]').attr('value', "Contractor Professional Hub Disclaimer Agreement");
		$('#submit-form').click(function(){
			$("#hub-consultant-disclaimer").fadeOut(2500);
			setTimeout(function(){
			   window.location.href='./contractor-hub?agreement=true';
			  } ,2750);
		});
	};
	if (window.location.href.indexOf("professional-disclaimer?profession=builder") != -1) {
		$("#contractor-agreement-disclaimer").hide();
		$("#agreement-type").text("Builder Disclaimer Agreement");
		$('input[name=agreement-type]').attr('value', "Builder Professional Hub Disclaimer Agreement");
		$('#submit-form').click(function(){
			$("#hub-consultant-disclaimer").fadeOut(2500);
			setTimeout(function(){
			   window.location.href='./builder-hub?agreement=true';
			  },2750);
		});
	};
	if (window.location.href.indexOf("-hub") != -1) {
		$("#search-hub").keyup(function() {
			var filter = $(this).val(),
				count = 0;
			$('#hub-grid > div > div > div.company-details > h5').each(function() {
				if ($(this).text().search(new RegExp(filter, "i")) < 0) {
				$(this).parent().parent().hide();
				} 
				else {	
				$(this).parent().parent().show();
				count++;
				}
			});
		});
		var searchvalue = "";
		$("#search-hub").on("keyup change", function(e) {
			searchvalue = $("#search-hub").prop('value');
			if (searchvalue != "") {
				$("#lead-capture-reno-construction > label").text("Displaying results for: " + searchvalue);
			} else {
				$("#lead-capture-reno-construction > label").text("");
			}
		});
	};
	if (window.location.href.indexOf("/professional-onboarding") != -1) {
		$("#builder-acceptance-blurb").hide();
		$("#contractor-acceptance-blurb").hide();
	};
	if (window.location.href.indexOf("/professional-onboarding?profession=contractor") != -1) {
		$("#contractor-acceptance-blurb").show();
		$("#both-acceptance-blurb").hide();
	};
	if (window.location.href.indexOf("/to-homeownership") != -1) {
		$("#agent-status-only").hide();
		$("select#agent-selection").change(function () {
			if( $("option#agent-trigger:selected").length ) {
				$("#agent-status-only").show();
			} else {
				$("#agent-status-only").hide();
			}
		});
	};
	if (window.location.href.indexOf("/professional-onboarding?profession=builder") != -1) {
		$("#builder-acceptance-blurb").show();
		$("#both-acceptance-blurb").hide();
	};
	if (window.location.href.indexOf("product-type=fha-203k") != -1) {
		$("#product-type-203k").attr('checked', true);
	};
	if (window.location.href.indexOf("product-type=fha-limited") != -1) {
		$("#product-type-limited").attr('checked', true);
	};
	if (window.location.href.indexOf("product-type=homestyle") != -1) {
		$("#product-type-homestyle").attr('checked', true);
	};
	if (window.location.href.indexOf("product-type=builder-conventional") != -1) {
		$("#product-type-conventional").attr('checked', true);
	};
	if (window.location.href.indexOf("product-type=builder-fha") != -1) {
		$("#product-type-fha").attr('checked', true);
	};
	if (window.location.href.indexOf("product-type=builder-va") != -1) {
		$("#product-type-va").attr('checked', true);
	};
	$('#product-type-203k').click(function(){
		$("#product-type-limited").removeAttr('checked');
		$("#product-type-homestyle").removeAttr('checked');
	});
	$('#product-type-limited').click(function(){
		$('#product-type-203k').removeAttr('checked');
		$("#product-type-homestyle").removeAttr('checked');
	});
	$('#product-type-homestyle').click(function(){
		$('#product-type-203k').removeAttr('checked');
		$("#product-type-limited").removeAttr('checked');
	});
	$('#product-type-conventional').click(function(){
		$("#product-type-fha").removeAttr('checked');
		$("#product-type-va").removeAttr('checked');
	});
	$('#product-type-fha').click(function(){
		$("#product-type-conventional").removeAttr('checked');
		$("#product-type-va").removeAttr('checked');
	});
	$('#product-type-va').click(function(){
		$("#product-type-conventional").removeAttr('checked');
		$("#product-type-fha").removeAttr('checked');
	});
	$(".calc-group .item img").remove();
	// const $primaryTitle = $(document).find("title:eq(0)");
	// const $replaceTitle = $(document).find("title:eq(1)");
	// const newTitle = `${$primaryTitle.text()} | ${$replaceTitle.text()}`;
	// $primaryTitle.empty().append(newTitle);
	// $replaceTitle.remove();
	$('script[src*="navigation.js"]').remove();
	$('script[src*="scriptbook.js"]').remove();
	$("#scriptbook-js").remove();
	$("#react1-js").remove();
	$("#react2-js").remove();
	$("#react3-js").remove();
	$("#scriptbook-react-js").remove();
	$("#flash-message").remove();
	if (window.location.href.indexOf("steve.themtgco.com") != -1) {
		$('.manager-biography').remove();
		$('#accolades-originator').css('margin-top', '-30px');
	};
	if (window.location.href.indexOf("themtgco.com/branch") != -1) {
		$('.location-state-list').each(function() {
			var $this = $(this);
			if (!$this.find('.location-listing').length) {
				$this.prev('h3').remove();
				$this.remove();
			}
		});
		$('#allentown-branch-listing h4 a').removeAttr("href");
	};
	if ((window.location.href.indexOf("themtgco.com") != -1) || (window.location.href.indexOf("themortgageco.wmmortgageware") != -1)) {
		if ($('body').hasClass('site-type-corporate')) {
			if ($('body').hasClass('front')) {
			var dropbanner = '<div id="inserted-banner" class="themortgagecompany"><div class="container-section"><h3>The Mortgage Company<span>NMLS #: 1020736</span></h3><div id="button-container-home" class="container-section"><a href="" class="address">470 South Cedar Crest Blvd <br/> Allentown, PA 18103</a><div class="tmc-header-links"><a href="/loan/apply" id="loan-officer-header-apply">Apply Now</a><a href="tel:(610) 336-6600" id="tmc-header-call">(610) 336-6600</a></div></div></div></div>';
			$(dropbanner).insertBefore( $( "#home-provide" ) );
			var dropteam = '<section id="team-display"><h3 style="text-align: center;">Our Team</h3><h3 class="text-center">Branch Management</h3><div id="branch-managers" class="flex justify-center align-center"><div id="" class="branch-manager-section flex"><div class="manager-information" id="steve"><div id="" class="team-member-information"><div class="team-member-basics"><div class="team-titles"><a href="https://steve.themtgco.com/" class="team-to-site-link"><h4>Steve Stelzman</h4></a><h5>Mortgage Loan Officer &amp; Branch Manager</h5><h5>NMLS: 134051</h5></div><div id="" class="team-member-portrait" style="background: url(https://themtgco.com/uploads/sites/10839/public/steve_updated_photo_0.jpg); background-size: cover; background-position: top; background-repeat: no-repeat;"></div></div><div class="contact-tmc-buttons"><button class="go flex space-between align-center"><a href="https://steve.themtgco.com/loan/apply" class="btn button-main">Schedule Appointment</a> <i class="fas fa-globe-americas"></i></button><button class="flex space-between align-center">(610) 216-5547<i class="fas fa-mobile-alt"></i></button><button class="flex space-between align-center"><a href="mailto: steve@themtgco.com">Email Me</a><i class="fas fa-envelope"></i></button></div></div></div></div></div><h3 class="text-center">Our Sales Team</h3><div id="" class="team-member-section"><div class="team-member" id="beth"><div id="" class="team-member-information"><div class="team-member-basics"><div class="team-titles"><a href="https://beth.themtgco.com/" class="team-to-site-link"><h4>Beth Tucker</h4></a><h5>Mortgage Loan Originator</h5><h5>NMLS: 1159576</h5></div><div id="" class="team-member-portrait" style="background: url(https://themtgco.com/uploads/sites/10839/public/beth_updated_photo_0.jpg); background-size: cover; background-position: top; background-repeat: no-repeat;"></div></div><div class="contact-tmc-buttons"><button class="go flex space-between align-center"><a href="https://beth.themtgco.com/loan/apply" class="btn button-main">Apply Now</a> <i class="fas fa-globe-americas"></i></button><button class="flex space-between align-center">(610) 462-9198 <i class="fas fa-mobile-alt"></i></button><button class="flex space-between align-center"><a href="mailto: etucker@themtgco.com">Email Me</a><i class="fas fa-envelope"></i></button></div></div></div><div class="team-member" id="larry"><div id="" class="team-member-information"><div class="team-member-basics"><div class="team-titles"><a href="https://larry.themtgco.com/" class="team-to-site-link"><h4>Larry Ahner</h4></a><h5>Mortgage Loan Originator</h5><h5>NMLS: 535333</h5></div><div id="" class="team-member-portrait" style="background: url(https://themtgco.com/uploads/sites/10839/public/Larry_Ahrner_0.jpg); background-size: cover; background-position: top; background-repeat: no-repeat;"></div></div><div class="contact-tmc-buttons"><button class="go flex space-between align-center"> <a href="https://larry.themtgco.com/loan/apply" class="btn button-main">Apply Now</a> <i class="fas fa-globe-americas"></i></button><button class="flex space-between align-center">(610) 739-8655 <i class="fas fa-mobile-alt"></i></button><button class="flex space-between align-center"><a href="mailto: lahner@themtgco.com">Email Me</a><i class="fas fa-envelope"></i></button></div></div></div><div class="team-member" id="gene"><div id="" class="team-member-information"><div class="team-member-basics"><div class="team-titles"><a href="https://gene.themtgco.com/" class="team-to-site-link"><h4>Eugene Bochniak</h4></a><h5>Mortgage Loan Originator</h5><h5>NMLS: 403985</h5></div><div id="" class="team-member-portrait" style="background: url(/uploads/sites/10839/public/Eugene_Bochniak-compressed.jpg); background-size: cover; background-position: top; background-repeat: no-repeat;"></div></div><div class="contact-tmc-buttons"><button class="go flex space-between align-center"><a href="https://gene.themtgco.com/loan/apply" class="btn button-main">Apply Now</a> <i class="fas fa-globe-americas"></i></button><button class="flex space-between align-center">(484) 951-5434<i class="fas fa-mobile-alt"></i></button><button class="flex space-between align-center"><a href="mailto: ebochniak@themtgco.com">Email Me</a><i class="fas fa-envelope"></i></button></div></div></div><div class="team-member" id="greg"><div id="" class="team-member-information"><div class="team-member-basics"><div class="team-titles"><a href="https://greg.themtgco.com/" class="team-to-site-link"><h4>Greg Reimer</h4></a><h5>Mortgage Loan Originator</h5><h5>NMLS: 535382</h5></div><div id="" class="team-member-portrait" style="background: url(/uploads/sites/10839/public/Greg_Reimer.jpg); background-size: cover; background-position: top; background-repeat: no-repeat;"></div></div><div class="contact-tmc-buttons"><button class="go flex space-between align-center"><a href="https://greg.themtgco.com/loan/apply" class="btn button-main">Apply Now</a> <i class="fas fa-globe-americas"></i></button><button class="flex space-between align-center">(610) 392-4961<i class="fas fa-mobile-alt"></i></button><button class="flex space-between align-center"><a href="mailto: greimer@themtgco.com">Email Me</a><i class="fas fa-envelope"></i></button></div></div></div></div><div class="team-member" id="amanda"><div id="" class="team-member-information"><div class="team-member-basics"><div class="team-titles"><a href="https://amandawilhelm.themtgco.com/" class="team-to-site-link"><h4>Amanda Wilhelm</h4></a><h5>Licensed Loan Officer</h5><h5>NMLS: 1651561</h5></div><div id="" class="team-member-portrait" style="background: url(https://themtgco.com/uploads/sites/10839/public/Amanda.jpg); background-size: cover; background-position: top; background-repeat: no-repeat;"></div></div><div class="contact-tmc-buttons"><button class="go flex space-between align-center"><a href="https://amandawilhelm.themtgco.com/loan/apply" class="btn button-main">Apply Now</a> <i class="fas fa-globe-americas"></i></button><button class="flex space-between align-center">610-973-3490<i class="fas fa-mobile-alt"></i></button><button class="flex space-between align-center"><a href="mailto: awilhelm@themtgco.com">Email Me</a><i class="fas fa-envelope"></i></button></div></div></div></div></section>';
			$(dropteam).insertBefore( $( "footer" ) );
		}
		};
	};
	if ((window.location.href.indexOf("coreyscott") != -1) || (window.location.href.indexOf("csteam") != -1)) {
		if ($('body').hasClass('front')) {
			$("head > link:nth-child(11)").remove();
			$("#am-css").remove();
			$("#am-styles").remove();
			$("#am-responsive").remove();
			$("#am-custom").remove();
			$("#stylesheet-git").remove();
			$('.front').load("https://anniemachomemortgage.github.io/AnnieMac/projects/coreyscottteam/index.html", function() {
			});
		};
		if ($('body').hasClass('page-page-detail')) {
			if ((window.location.href.indexOf("cash2keys") > -1) || (window.location.href.indexOf("cash-2-keys") > -1) || (window.location.href.indexOf("cashbuyer-form") > -1) || (window.location.href.indexOf("buy-now-sell-later") > -1) || (window.location.href.indexOf("cash-offer") > -1)) {
				var cash2keyspagestatus = true
			} else {
				var cash2keyspagestatus = false
			}
			if (cash2keyspagestatus == true) {
				$('body').css('visibility', 'visible');
				$('body').css('overflow', 'initial');
			}
			if (cash2keyspagestatus == false) {
			   var appendedContent = $(".content-detail").html();
				$("head > link:nth-child(11)").remove();
				$("#am-css").remove();
				$("#am-styles").remove();
				$("#am-responsive").remove();
				$("#am-custom").remove();
				$("#stylesheet-git").remove();
				$('.page-page-detail').load("https://anniemachomemortgage.github.io/AnnieMac/projects/coreyscottteam/blank.html", function() {
					$(appendedContent).appendTo($( "#insertion-point" ));
				});
			}
		};
	};
	if ((window.location.href.indexOf("burlington.annie-mac.com") != -1)) {
		if ($('body').hasClass('front')) {
			$("head > link:nth-child(11)").remove();
			$("#am-css").remove();
			$("#am-styles").remove();
			$("#am-responsive").remove();
			$("#am-custom").remove();
			$("#stylesheet-git").remove();
			$('.front').load("https://anniemachomemortgage.github.io/AnnieMac/projects/getlocallending/index.html", function() {
			});
		};
		if ($('body').hasClass('page-page-detail')) {
			if ((window.location.href.indexOf("cash2keys") > -1) || (window.location.href.indexOf("cash-2-keys") > -1) || (window.location.href.indexOf("cashbuyer-form") > -1) || (window.location.href.indexOf("buy-now-sell-later") > -1) || (window.location.href.indexOf("cash-offer") > -1)) {
				var cash2keyspagestatus = true
			} else {
				var cash2keyspagestatus = false
			}
			if (cash2keyspagestatus == true) {
				$('body').css('visibility', 'visible');
				$('body').css('overflow', 'initial');
			}
			if (cash2keyspagestatus == false) {
			   var appendedContent = $(".content-detail").html();
				$("head > link:nth-child(11)").remove();
				$("#am-css").remove();
				$("#am-styles").remove();
				$("#am-responsive").remove();
				$("#am-custom").remove();
				$("#stylesheet-git").remove();
				$('.page-page-detail').load("https://anniemachomemortgage.github.io/AnnieMac/projects/getlocallending/blank.html", function() {
					$(appendedContent).appendTo($( "#insertion-point" ));
				});
			}
		};
	}
	// The Mortgage Company Template Replacements
	if ((window.location.href.indexOf("themtgco.com") != -1)) {
		if ($('body').hasClass('front')) {
			$("head > link:nth-child(11)").remove();
			$("#am-css").remove();
			$("#am-styles").remove();
			$("#am-responsive").remove();
			$("#am-custom").remove();
			$("#am-custom-tmc").remove();
			$("#stylesheet-git").remove();
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
					if (window.matchMedia('(max-width: 1046px)').matches) {
						$("#additional-staff").prependTo("#static-content");
					};
					if (window.matchMedia('(min-width: 1046px)').matches) {
						$("#additional-staff").appendTo("#blank_page");
					};
				});			
			};
		};
	};
	if (window.location.href.indexOf("steve") != -1) {
		$(".main-site-apply").text("Book Time");
	};
	if ((localStorage.newsitemockup) == "true") {
		if (window.location.href.indexOf("lofidirect") != -1) {
			if ($('body').hasClass('site-type-corporate')) {
				if ($('body').hasClass('front')) {
					$("#site-navigation").remove(); 
					$("#home-banner").remove(); 
					$("#home-reviews").remove(); 
					$("#home-deserve").remove(); 
					$("#home-provide").remove(); 
					$("#perks-home").remove(); 
					$("#home-blog").remove() 
					$('footer').remove();
					$('link[rel="stylesheet"]').each(function() {
						$(this).remove();
					});
					$('style').each(function() {
						$(this).remove();
					});
					$('noscript').each(function() {
						$(this).remove();
					});
					$('iframe').each(function() {
						$(this).remove();
					});
					$('script').each(function() {
						$(this).remove();
					});
					$('.front').load("https://anniemachomemortgage.github.io/lofi/structure.html", function() {
						$(document).prop('title', 'LoFi Direct [Development Site]');
					});
				}
				if ($('body').hasClass('page-page-detail')) {
					var appendedContent = $(".content-detail").html();
					var pageTitle = $('.text-content > h3:nth-of-type(1)').text();
					$("#site-navigation").remove(); 
					$("#home-banner").remove(); 
					$("#home-reviews").remove(); 
					$("#home-deserve").remove(); 
					$("#home-provide").remove(); 
					$("#perks-home").remove(); 
					$("#home-blog").remove() 
					$('footer').remove();
					$('link[rel="stylesheet"]').each(function() {
						$(this).remove();
					});
					$('style').each(function() {
						$(this).remove();
					});
					$('noscript').each(function() {
						$(this).remove();
					});
					$('iframe').each(function() {
						$(this).remove();
					});
					$('script').each(function() {
						$(this).remove();
					});
					$('.page-page-detail').load("https://anniemachomemortgage.github.io/lofi/blank-structure.html", function() {
						$(document).prop('title', 'Lofi Direct [Development Site]');
						$(appendedContent).appendTo($( "#drop-content" ));
						$('#headline').text(pageTitle);
						$("#headline").text($("#headline").text().replace("Lofi Direct", ""));
					});
				};
				if ($('body').hasClass('page-branch-list')) {
					var appendedContent = $("#locations").html();
					$("#site-navigation").remove(); 
					$("#home-banner").remove(); 
					$("#home-reviews").remove(); 
					$("#home-deserve").remove(); 
					$("#home-provide").remove(); 
					$("#perks-home").remove(); 
					$("#home-blog").remove() 
					$('footer').remove();
					$('link[rel="stylesheet"]').each(function() {
						$(this).remove();
					});
					$('style').each(function() {
						$(this).remove();
					});
					$('noscript').each(function() {
						$(this).remove();
					});
					$('iframe').each(function() {
						$(this).remove();
					});
					$('script').each(function() {
						$(this).remove();
					});
					$('.page-branch-list').load("https://anniemachomemortgage.github.io/lofi/blank-structure.html", function() {
						$(document).prop('title', 'Lofi Direct [Development Site]');
						$(appendedContent).appendTo($( "#drop-content" ));
						$('#headline').text("Branch Locations");
					});
				};
				// if ($('body').hasClass('page-blog-list')) {
				// 	var appendedContent = $(".blog-index").html();
				// 	$("#site-navigation").remove(); 
				// 	$("#home-banner").remove(); 
				// 	$("#home-reviews").remove(); 
				// 	$("#home-deserve").remove(); 
				// 	$("#home-provide").remove(); 
				// 	$("#perks-home").remove(); 
				// 	$("#home-blog").remove() 
				// 	$('footer').remove();
				// 	$('link[rel="stylesheet"]').each(function() {
				// 		$(this).remove();
				// 	});
				// 	$('style').each(function() {
				// 		$(this).remove();
				// 	});
				// 	$('noscript').each(function() {
				// 		$(this).remove();
				// 	});
				// 	$('iframe').each(function() {
				// 		$(this).remove();
				// 	});
				// 	$('script').each(function() {
				// 		$(this).remove();
				// 	});
				// 	$('.page-blog-list').load("https://anniemachomemortgage.github.io/lofi/blank-structure.html", function() {
				// 		$(document).prop('title', 'Lofi Direct [Development Site]');
				// 		$(appendedContent).appendTo($( "#drop-content" ));
				// 	});
				// };
				// if ($('body').hasClass('page-blog-detail')) {
				// 	var appendedContent = $(".blog-index").html();
				// 	$("#site-navigation").remove(); 
				// 	$("#home-banner").remove(); 
				// 	$("#home-reviews").remove(); 
				// 	$("#home-deserve").remove(); 
				// 	$("#home-provide").remove(); 
				// 	$("#perks-home").remove(); 
				// 	$("#home-blog").remove();
				// 	$('footer').remove();
				// 	$('link[rel="stylesheet"]').each(function() {
				// 		$(this).remove();
				// 	});
				// 	$('style').each(function() {
				// 		$(this).remove();
				// 	});
				// 	$('noscript').each(function() {
				// 		$(this).remove();
				// 	});
				// 	$('iframe').each(function() {
				// 		$(this).remove();
				// 	});
				// 	$('script').each(function() {
				// 		$(this).remove();
				// 	});
				// 	$('.page-blog-detail').load("https://anniemachomemortgage.github.io/lofi/blank.html", function() {
				// 		$(document).prop('title', 'Lofi Direct [Development Site]');
				// 		console.log("Please visit https://annie-mac.com/?testing-site-status=false to return to normal version.");
				// 		$(appendedContent).appendTo($( "#drop-content" ));
				// 		$('#headline').text("Blogs");
				// 	});
				// };
				if ($('body').hasClass('page-branch-list')) {
					$( "#drop-content h3" ).each(function() {
					$( this ).addClass( "state-listing" );
					});
					$('.state-listing').each(function(){
						$(this).next('.location-state-list').andSelf().wrapAll('<div class="state-listing-section"/>');
					});
					$(".state-listing-section").each(function() {
						var stateName = $(this).find("h3").text();
						$(this).attr("id", stateName);
					});
					$('.state-listing-section').sort(function(a, b) {
					if (a.textContent < b.textContent) {
						return -1;
					} else {
						return 1;
					}
					}).appendTo('#drop-content');
				};
			};
		};
	};
	// if (window.location.href.indexOf("testing-site-status=true") != -1) {
	// 	localStorage.setItem('anniemactesting', 'true');
	// };
	// if (window.location.href.indexOf("https://www.annie-mac.com/?testing-site-status=false") != -1) {
	// 	window.location.href = '/';
	// 	localStorage.setItem('anniemactesting', 'false');
	// };
	// if (window.location.href.indexOf("testing-site-status=false") != -1) {
	// 	localStorage.setItem('anniemactesting', 'false');
	// };
	if ((localStorage.anniemactesting) == "true") {
		if ($('body').hasClass('site-type-corporate')) {
			if ($('body').hasClass('front')) {
				$("#site-navigation").remove(); 
				$("#home-banner").remove(); 
				$("#home-reviews").remove(); 
				$("#home-deserve").remove(); 
				$("#home-provide").remove(); 
				$("#perks-home").remove(); 
				$("#home-blog").remove() 
				$('footer').remove();
				$('link[rel="stylesheet"]').each(function() {
					$(this).remove();
				});
				$('style').each(function() {
					$(this).remove();
				});
				$('noscript').each(function() {
					$(this).remove();
				});
				$('iframe').each(function() {
					$(this).remove();
				});
				$('script').each(function() {
					$(this).remove();
				});
				$('.front').load("https://anniemachomemortgage.github.io/AnnieMac/anniemac2/wireframe.html", function() {
					$(document).prop('title', 'AnnieMac [Development Site]');
					console.log("Please visit https://annie-mac.com/?testing-site-status=false to return to normal version.");
				});
			}
			if ($('body').hasClass('page-page-detail')) {
				var appendedContent = $(".content-detail").html();
				var pageTitle = $('.text-content > h3:nth-of-type(1)').text();
				$("#site-navigation").remove(); 
				$("#home-banner").remove(); 
				$("#home-reviews").remove(); 
				$("#home-deserve").remove(); 
				$("#home-provide").remove(); 
				$("#perks-home").remove(); 
				$("#home-blog").remove() 
				$('footer').remove();
				$('link[rel="stylesheet"]').each(function() {
					$(this).remove();
				});
				$('style').each(function() {
					$(this).remove();
				});
				$('noscript').each(function() {
					$(this).remove();
				});
				$('iframe').each(function() {
					$(this).remove();
				});
				$('script').each(function() {
					$(this).remove();
				});
				$('.page-page-detail').load("https://anniemachomemortgage.github.io/AnnieMac/anniemac2/blank.html", function() {
					$(document).prop('title', 'AnnieMac [Development Site]');
					console.log("Please visit https://annie-mac.com/?testing-site-status=false to return to normal version.");
					$(appendedContent).appendTo($( "#drop-content" ));
					$('#headline').text(pageTitle);
					$("#headline").text($("#headline").text().replace("AnnieMac", ""));
				});
			};
			if ($('body').hasClass('page-branch-list')) {
				var appendedContent = $("#locations").html();
				$("#site-navigation").remove(); 
				$("#home-banner").remove(); 
				$("#home-reviews").remove(); 
				$("#home-deserve").remove(); 
				$("#home-provide").remove(); 
				$("#perks-home").remove(); 
				$("#home-blog").remove() 
				$('footer').remove();
				$('link[rel="stylesheet"]').each(function() {
					$(this).remove();
				});
				$('style').each(function() {
					$(this).remove();
				});
				$('noscript').each(function() {
					$(this).remove();
				});
				$('iframe').each(function() {
					$(this).remove();
				});
				$('script').each(function() {
					$(this).remove();
				});
				$('.page-branch-list').load("https://anniemachomemortgage.github.io/AnnieMac/anniemac2/blank.html", function() {
					$(document).prop('title', 'AnnieMac [Development Site]');
					console.log("Please visit https://annie-mac.com/?testing-site-status=false to return to normal version.");
					$(appendedContent).appendTo($( "#drop-content" ));
					$('#headline').text("Branch Locations");
				});
			};
			// if (window.location.href.indexOf("/branch") != -1) {
			// 	$( "#drop-content h3" ).each(function() {
			// 	  $( this ).addClass( "state-listing" );
			// 	});
			// 	$('.state-listing').each(function(){
			// 		$(this).next('.location-state-list').andSelf().wrapAll('<div class="state-listing-section"/>');
			// 	});
			// 	$(".state-listing-section").each(function() {
			// 		var stateName = $(this).find("h3").text();
			// 		$(this).attr("id", stateName);
			// 	});
			// 	$('.state-listing-section').sort(function(a, b) {
			// 	  if (a.textContent < b.textContent) {
			// 		return -1;
			// 	  } else {
			// 		return 1;
			// 	  }
			// 	}).appendTo('#drop-content');
			// };
			if ($('body').hasClass('page-blog-list')) {
				var appendedContent = $(".blog-index").html();
				$("#site-navigation").remove(); 
				$("#home-banner").remove(); 
				$("#home-reviews").remove(); 
				$("#home-deserve").remove(); 
				$("#home-provide").remove(); 
				$("#perks-home").remove(); 
				$("#home-blog").remove() 
				$('footer').remove();
				$('link[rel="stylesheet"]').each(function() {
					$(this).remove();
				});
				$('style').each(function() {
					$(this).remove();
				});
				$('noscript').each(function() {
					$(this).remove();
				});
				$('iframe').each(function() {
					$(this).remove();
				});
				$('script').each(function() {
					$(this).remove();
				});
				$('.page-blog-list').load("https://anniemachomemortgage.github.io/AnnieMac/anniemac2/blank.html", function() {
					$(document).prop('title', 'AnnieMac [Development Site]');
					console.log("Please visit https://annie-mac.com/?testing-site-status=false to return to normal version.");
					$(appendedContent).appendTo($( "#drop-content" ));
					$('#headline').text("Annie's Advice Blog");
				});
			};
			if ($('body').hasClass('page-blog-detail')) {
				var appendedContent = $(".blog-index").html();
				$("#site-navigation").remove(); 
				$("#home-banner").remove(); 
				$("#home-reviews").remove(); 
				$("#home-deserve").remove(); 
				$("#home-provide").remove(); 
				$("#perks-home").remove(); 
				$("#home-blog").remove();
				$('footer').remove();
				$('link[rel="stylesheet"]').each(function() {
					$(this).remove();
				});
				$('style').each(function() {
					$(this).remove();
				});
				$('noscript').each(function() {
					$(this).remove();
				});
				$('iframe').each(function() {
					$(this).remove();
				});
				$('script').each(function() {
					$(this).remove();
				});
				$('.page-blog-detail').load("https://anniemachomemortgage.github.io/AnnieMac/anniemac2/blank.html", function() {
					$(document).prop('title', 'AnnieMac [Development Site]');
					console.log("Please visit https://annie-mac.com/?testing-site-status=false to return to normal version.");
					$(appendedContent).appendTo($( "#drop-content" ));
					$('#headline').text("Blogs");
				});
			};
			if ($('body').hasClass('page-branch-list')) {
				$( "#drop-content h3" ).each(function() {
				$( this ).addClass( "state-listing" );
				});
				$('.state-listing').each(function(){
					$(this).next('.location-state-list').andSelf().wrapAll('<div class="state-listing-section"/>');
				});
				$(".state-listing-section").each(function() {
					var stateName = $(this).find("h3").text();
					$(this).attr("id", stateName);
				});
				$('.state-listing-section').sort(function(a, b) {
				if (a.textContent < b.textContent) {
					return -1;
				} else {
					return 1;
				}
				}).appendTo('#drop-content');
			};
		};
	};
});
console.log("Scriptbook Complete");