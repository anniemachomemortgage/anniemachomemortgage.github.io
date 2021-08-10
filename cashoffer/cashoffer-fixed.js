$(function() {
	$('input[name=buyer-or-agent], input[name=cash-or-buy]').change(function() { 
		if ( $('input[name=buyer-or-agent]').is(':checked') && $('input[name=cash-or-buy]').is(':checked') ) {
			$("#form-decision").removeAttr("disabled")
		}
	})
	$("#form-decision").click(function(event) {
		event.preventDefault();
		if($('#home-buyer').is(':checked')) {
			if($('#cash-offer').is(':checked')) {
				$("#LeadSourceID").attr('value', 'Q6UJ9A1PQKN6');
				$("#Picklist").attr('value', 'Cash Offer (CO)');
				$("#product-type").text("Form for Cash Offer ");
			}
			if($('#buy-now').is(':checked')) {
				$("#LeadSourceID").attr('value', 'Q6UJ9A1PQKN8');
				$("#Picklist").attr('value', 'Buy Now, Sell Later (BNSL)');
				$("#product-type").text("Form for Buy Now, Sell Later ");
				$('.buy-now-sell-later').css('display','flex');
			}
			$('.homebuyer-question').css('display','flex');
			$("#profile-type").text("Homebuyers");
		}
		if($('#estate-agent').is(':checked')) {
			if($('#cash-offer').is(':checked')) {
				$("#LeadSourceID").attr('value', 'Q6UJ9A1PQKN5');
				$("#Picklist").attr('value', 'Cash Offer (CO)');
				$("#product-type").text("Form for Cash Offer ");
			}
			if($('#buy-now').is(':checked')) {
				$("#LeadSourceID").attr('value', 'Q6UJ9A1PQKN7');
				$("#Picklist").attr('value', 'Buy Now, Sell Later (BNSL)');
				$("#product-type").text("Form for Buy Now, Sell Later ");
				$('.buy-now-sell-later').css('display','flex');
			}
			$('.agent-question').css('display','flex');
			$("#profile-type").text("Real Estate Agents");
		}
		$('section[data-role="mapping-agent"]').remove();
	})
	$("#working-with-agent").change(function() {
		if($("#real-estate-toggle-form").is(":selected")) {
			$("div[data-role='real-estate-agent-toggle']").removeClass("toggle-form");
		} 
		if($("#real-estate-untoggle-form").is(":selected")) {
			$("div[data-role='real-estate-agent-toggle']").addClass("toggle-form");
		}
	})
	$("#area-selection").change(function() {
		if ( $('#burlington-county').is(':selected') || $('#gloucester-county').is(':selected') || $('#camden-county').is(':selected') ) {
			$("div[data-role='unsupported-area-type-lead']").addClass("toggle-form");
			$("div[data-role='homeowner-application']").removeClass("toggle-form");
		}
		if($("#unsupported-area-toggle-form").is(":selected")) {
			$("div[data-role='unsupported-area-type-lead']").removeClass("toggle-form");
			$("div[data-role='homeowner-application']").addClass("toggle-form");
		}
	});
	$("#apply-or-learn").change(function() {
		if($("#learn-more-toggle-form").is(":selected")) {
			$("div[data-role='learn-more-information']").removeClass("toggle-form");
		}
		if($("#apply-now-untoggle").is(":selected")) {
			$("div[data-role='learn-more-information']").addClass("toggle-form");
			window.open('./loan/apply', '_blank');
		}
	});
})