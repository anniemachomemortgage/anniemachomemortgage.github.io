$(function() {
	$("#logo-container-b > img").click(function(){
		window.location.href = './cash2keys';
	});
	$("#cash-offer-selection").click(function(){
		$(this).toggleClass('active_search');
		$("#borrower-bnsl").hide();
		$("#borrower-cash").show();
	});
	$("#buy-now-selection").click(function(){
		$(this).toggleClass('active_search');
		$("#borrower-cash").hide();
		$("#borrower-bnsl").show();
	});
	$("#informational-sectional > div > button").click(function(){
		window.location.href = './amcbp-start';
	});
	$("#redirect-sectional").click(function(){
		window.location.href = './amcbp-start';
	});
	$("#question-callout-sectional > div > button").click(function(){
		window.location.href = './cash2keys';
	});
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
	$("#search-faq").keyup(function() {
		$("#borrower-bnsl").show();
		$("#borrower-cash").show();
		var filter = $(this).val(),
		count = 0;
		$('details').each(function() {
			if ($(this).text().search(new RegExp(filter, "i")) < 0) {
				$(this).hide();
			} else {
				$(this).show();
				count++;
			}
		});
	});
});