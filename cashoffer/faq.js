$(function() {
	$("#logo-container-b > img").click(function(){
		window.location.href = './cash2keys';
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
			$(this).toggleClass('active-homebuyer');
		});
		$("#contained-static #identified-realtor-selection").click(function(){
			$("#contained-static #identified-homebuyer-selection").removeClass('active-homebuyer');
			$(this).toggleClass('active-realtor');
		});
		$("#contained-static #identified-buy-now-selection").click(function(){
			$("#contained-static #identified-cash-offer-selection").removeClass('active-cash-offer');
			$(this).toggleClass('active-buy-now');
		});
		$("#contained-static #identified-cash-offer-selection").click(function(){
			$("#contained-static #identified-buy-now-selection").removeClass('active-buy-now');
			$(this).toggleClass('active-cash-offer');
		});
		$("#begin-button").addClass('no-click');
	}
});
