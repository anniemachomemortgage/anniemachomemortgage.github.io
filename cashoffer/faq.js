$(function() {
	$("#logo-container-b > img").click(function(){
		window.location.href = './cash2keys';
	});
	$("#cash-offer-selection").click(function(){
		$(this).addClass('active_search');
		$("#buy-now-selection").removeClass('active_search');
		$("#borrower-bnsl").hide();
		$("#borrower-cash").show();
	});
	$("#buy-now-selection").click(function(){
		$(this).addClass('active_search');
		$("#cash-offer-selection").removeClass('active_search');
		$("#borrower-cash").hide();
		$("#borrower-bnsl").show();
	});
	$("#informational-sectional > div > button").click(function(){
		window.location.href = './amcbp-start';
	});
	$("#redirect-sectional").click(function(){
		window.location.href = './amcbp-start';
	}); 
	// $('button[data-qlf-submit]').click(function() {
	// 	$(body).delay(5000).fadeOut(2000, function() { 
	// 		window.location = './cash2keys-submitted?lead=abcdefg; 
	// 	});
	// });
	$("#question-callout-sectional > div > button").click(function(){
		window.location.href = './cash2keys';
	}); 
	if (window.location.href.indexOf("c2k-submitted?type=homebuyer&product=cash") != -1) {
		$("#information-type-text-convert").text("for our Homebuyer Cash Now program");
	};
	if (window.location.href.indexOf("c2k-submitted?type=agent&product=cash") != -1) {
		$("#information-type-text-convert").text("for our Real Estate Agent Cash Now program");
	};
	if (window.location.href.indexOf("c2k-submitted?type=homebuyer&product=buynow") != -1) {
		$("#information-type-text-convert").text("for our Homebuyer Buy Now, Sell Later program");
	};
	if (window.location.href.indexOf("c2k-submitted?type=agent&product=buynow") != -1) {
		$("#information-type-text-convert").text("for our Real Estate Agent Buy Now, Sell Later program");
	};
	if (window.location.href.indexOf("/amcbp-start") != -1) {
		$("#contained-static #identified-homebuyer-selection").click(function(){
			$("#contained-static #identified-realtor-selection").removeClass('active-realtor');
			$(this).addClass('active-homebuyer');
			if($('#identified-realtor-selection').hasClass('active-realtor')) {
				if($('#identified-buy-now-selection').hasClass('active-buy-now')) {
					$("#begin-button").removeClass('no-click');
					$("#begin-button").click(function(){
						window.location.href = './rebnsl-start';
					});
				};
				if($('#identified-cash-offer-selection').hasClass('active-cash-offer')) {
					$("#begin-button").removeClass('no-click');
					$("#begin-button").click(function(){
						window.location.href = './amreco-start';
					});
				};
			};
			if($('#identified-homebuyer-selection').hasClass('active-homebuyer')) {
				if($('#identified-buy-now-selection').hasClass('active-buy-now')) {
					$("#begin-button").removeClass('no-click');
					$("#begin-button").click(function(){
						window.location.href = './hbbnsl-start';
					});
				};
				if($('#identified-cash-offer-selection').hasClass('active-cash-offer')) {
					$("#begin-button").removeClass('no-click');
					$("#begin-button").click(function(){
						window.location.href = './amhbco-start';
					});
				};
			};
		});
		$("#contained-static #identified-realtor-selection").click(function(){
			$("#contained-static #identified-homebuyer-selection").removeClass('active-homebuyer');
			$(this).addClass('active-realtor');
			if($('#identified-realtor-selection').hasClass('active-realtor')) {
				if($('#identified-buy-now-selection').hasClass('active-buy-now')) {
					$("#begin-button").removeClass('no-click');
					$("#begin-button").click(function(){
						window.location.href = './rebnsl-start';
					});
				};
				if($('#identified-cash-offer-selection').hasClass('active-cash-offer')) {
					$("#begin-button").removeClass('no-click');
					$("#begin-button").click(function(){
						window.location.href = './amreco-start';
					});
				};
			};
			if($('#identified-homebuyer-selection').hasClass('active-homebuyer')) {
				if($('#identified-buy-now-selection').hasClass('active-buy-now')) {
					$("#begin-button").removeClass('no-click');
					$("#begin-button").click(function(){
						window.location.href = './hbbnsl-start';
					});
				};
				if($('#identified-cash-offer-selection').hasClass('active-cash-offer')) {
					$("#begin-button").removeClass('no-click');
					$("#begin-button").click(function(){
						window.location.href = './amhbco-start';
					});
				};
			};
		});
		$("#contained-static #identified-buy-now-selection").click(function(){
			$("#contained-static #identified-cash-offer-selection").removeClass('active-cash-offer');
			$(this).addClass('active-buy-now');
			if($('#identified-realtor-selection').hasClass('active-realtor')) {
				if($('#identified-buy-now-selection').hasClass('active-buy-now')) {
					$("#begin-button").removeClass('no-click');
					$("#begin-button").click(function(){
						window.location.href = './rebnsl-start';
					});
				};
				if($('#identified-cash-offer-selection').hasClass('active-cash-offer')) {
					$("#begin-button").removeClass('no-click');
					$("#begin-button").click(function(){
						window.location.href = './amreco-start';
					});
				};
			};
			if($('#identified-homebuyer-selection').hasClass('active-homebuyer')) {
				if($('#identified-buy-now-selection').hasClass('active-buy-now')) {
					$("#begin-button").removeClass('no-click');
					$("#begin-button").click(function(){
						window.location.href = './hbbnsl-start';
					});
				};
				if($('#identified-cash-offer-selection').hasClass('active-cash-offer')) {
					$("#begin-button").removeClass('no-click');
					$("#begin-button").click(function(){
						window.location.href = './amhbco-start';
					});
				};
			};
		});
		$("#contained-static #identified-cash-offer-selection").click(function(){
			$("#contained-static #identified-buy-now-selection").removeClass('active-buy-now');
			$(this).addClass('active-cash-offer');
			if($('#identified-realtor-selection').hasClass('active-realtor')) {
				if($('#identified-buy-now-selection').hasClass('active-buy-now')) {
					$("#begin-button").removeClass('no-click');
					$("#begin-button").click(function(){
						window.location.href = './rebnsl-start';
					});
				};
				if($('#identified-cash-offer-selection').hasClass('active-cash-offer')) {
					$("#begin-button").removeClass('no-click');
					$("#begin-button").click(function(){
						window.location.href = './amreco-start';
					});
				};
			};
			if($('#identified-homebuyer-selection').hasClass('active-homebuyer')) {
				if($('#identified-buy-now-selection').hasClass('active-buy-now')) {
					$("#begin-button").removeClass('no-click');
					$("#begin-button").click(function(){
						window.location.href = './hbbnsl-start';
					});
				};
				if($('#identified-cash-offer-selection').hasClass('active-cash-offer')) {
					$("#begin-button").removeClass('no-click');
					$("#begin-button").click(function(){
						window.location.href = './amhbco-start';
					});
				};
			};
		});
	}
	$("#sidebar-start-selection").click(function(){
		$(this).toggleClass('active-homebuyer');
		$('details').each(function() {
			if (!$(this).hasClass("refined-homeowner")) {
				$(this).hide();
			};
			if ($(this).hasClass("refined-homeowner")) {
				$(this).show();
				$(this).attr('open', '');
			};
		});
	});
	$("#sidebar-general-selection").click(function(){
		$(this).toggleClass('active-realtor');
		$('details').each(function() {
			if (!$(this).hasClass("refined-realtor")) {
				$(this).hide();
			};
			if ($(this).hasClass("refined-realtor")) {
				$(this).show();
				$(this).attr('open', '');
			};
		});
	});
	$("#sidebar-cash-offer-selection").click(function(){
		$(this).toggleClass('active-cash-offer');
		$('details').each(function() {
			if (!$(this).hasClass("refined-cash")) {
				$(this).hide();
			};
			if ($(this).hasClass("refined-cash")) {
				$(this).show();
				$(this).attr('open', '');
			};
		});
	});
	$("#sidebar-buy-now-sell-later-selection").click(function(){
		$(this).toggleClass('active-buy-now');
		$('details').each(function() {
			if (!$(this).hasClass("refined-bnsl")) {
				$(this).hide();
			};
			if ($(this).hasClass("refined-bnsl")) {
				$(this).show();
				$(this).attr('open', '');
			};
		});
	});
	$("#search-faq").keyup(function() {
		if (e.keyCode == 13) {
			e.preventDefault();
			return false;
		}
		$("#borrower-bnsl").show();
		$("#borrower-cash").show();
		var filter = $(this).val(),
		count = 0;
		$('details').each(function() {
			if ($(this).text().search(new RegExp(filter, "i")) < 0) {
				$(this).hide();
			} else {
				$(this).attr('open', '');
				$(this).show();
				count++;
			}
		});
	});
});