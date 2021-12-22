$(function() {
	if (localStorage.getItem("selected") === null) {
		localStorage.setItem('selected', 'false');
	}
	if ((localStorage.selected) == "false") {
		$("main[data-role='mapping-agent']").removeClass("hidden-content");
	}
	if ((localStorage.selected) == "true") {
		if ((localStorage.cashoffer) == "true") {
			if ((localStorage.homebuyer) == "true") {
				$("main[data-role='homebuyer-cash-offer-form']").removeClass("hidden-content");
			}
			if ((localStorage.estateagent) == "true") {
				$("main[data-role='agent-lead-cash-offer-form']").removeClass("hidden-content");
			}	
		}
		if ((localStorage.buynow) == "true") {
			if ((localStorage.homebuyer) == "true") {
				$("main[data-role='homebuyer-buy-now-sell-later-form']").removeClass("hidden-content");	
			}
			if ((localStorage.estateagent) == "true") {
				$("main[data-role='agent-lead-buy-now-sell-later-form']").removeClass("hidden-content");	
			}
		}
	}
	if ((localStorage.visited) == "true") {
		$('.visited-only').css('display','inline-block');
	}
	localStorage.setItem('visited', 'true');
	$("#form-decision").click(function(event) {
		event.preventDefault();
		if($('#cash-offer').is(':checked')) {
			localStorage.setItem('cashoffer', 'true');
			if($('#home-buyer').is(':checked')) {
				localStorage.setItem('homebuyer', 'true');
				localStorage.setItem('selected', 'true');
				$("main[data-role='mapping-agent']").addClass("hidden-content");
				$("main[data-role='homebuyer-cash-offer-form']").toggleClass("hidden-content");
			}
			if($('#estate-agent').is(':checked')) {
				localStorage.setItem('estateagent', 'true');
				localStorage.setItem('selected', 'true');
				$("main[data-role='mapping-agent']").addClass("hidden-content");
				$("main[data-role='homebuyer-buy-now-sell-later-form']").toggleClass("hidden-content");
			}
		};
		if($('#buy-now').is(':checked')) {
			localStorage.setItem('buynow', 'true');
			$("main[data-role='mapping-agent']").addClass("hidden-content");
			if($('#home-buyer').is(':checked')) {
				localStorage.setItem('homebuyer', 'true');
				localStorage.setItem('selected', 'true');
				$("main[data-role='mapping-agent']").addClass("hidden-content");
				$("main[data-role='agent-lead-cash-offer-form']").toggleClass("hidden-content");
			}
			if($('#estate-agent').is(':checked')) {
				localStorage.setItem('estateagent', 'true');
				localStorage.setItem('selected', 'true');
				$("main[data-role='mapping-agent']").addClass("hidden-content");
				$("main[data-role='agent-lead-buy-now-sell-later-form']").toggleClass("hidden-content");
			}
		};
	});
	$("#working-with-agent").change(function() {
		if($("#real-estate-toggle-form").is(":selected")) {
			$("div[data-role='real-estate-agent-toggle']").removeClass("toggle-form");
		} 
		if($("#real-estate-untoggle-form").is(":selected")) {
			$("div[data-role='real-estate-agent-toggle']").addClass("toggle-form");
		}
	});
	$("#area-selection").change(function() {
		if($("#unsupported-area-toggle-form").is(":selected")) {
			$("div[data-role='unsupported-area-type-lead']").removeClass("toggle-form");
			$("div[data-role='homeowner-application']").addClass("toggle-form");
		}
		if($("#burlington-county").is(":selected")) {
			$("div[data-role='unsupported-area-type-lead']").addClass("toggle-form");
			$("div[data-role='homeowner-application']").removeClass("toggle-form");
		}
		if($("#gloucester-county").is(":selected")) {
			$("div[data-role='unsupported-area-type-lead']").addClass("toggle-form");
			$("div[data-role='homeowner-application']").removeClass("toggle-form");
		}
		if($("#camden-county").is(":selected")) {
			$("div[data-role='unsupported-area-type-lead']").addClass("toggle-form");
			$("div[data-role='homeowner-application']").removeClass("toggle-form");
		}
	});
	$("#apply-or-learn").change(function() {
		if($("#learn-more-toggle-form").is(":selected")) {
			$("div[data-role='learn-more-information']").removeClass("toggle-form");
		}
		if($("#apply-now-untoggle").is(":selected")) {
			$("div[data-role='learn-more-information']").addClass("toggle-form");
		}
	});
	$("select").click(function(event) {
		$("option[name='placeholder']").attr('disabled','disabled');
	});
})