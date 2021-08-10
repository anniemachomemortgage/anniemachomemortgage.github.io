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
			}
			$('.agent-question').css('display','flex');
			$("#profile-type").text("Real Estate Agents");
		}
		$('section[data-role="mapping-agent"]').remove();
	})
})