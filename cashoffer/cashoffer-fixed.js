$(function() {
	// var BUYnosupport = []; unsupported-verification-submit / unsupported-verification
	// var BUYsubmit = []; client-submission-verification-submit / client-submission-verification
	// var REinfo = []; agent-information-verification-submit / agent-information-verification
	// var REsubmit = []; agent-submission-verification-submit / agent-submission-verification
	// var REunsup = []; agent-unsupported-verification-submit / agent-unsupported-verification
	var BUYnosupport = [];
	var BUYsubmit = [];
	var REinfo = [];
	var REsubmit = [];
	var REunsup = [];
	// var REsellLater = [];
	// var BUYsellLater = [];
	// if (REsellLater.length == 5) {
	// 	$('button[data-role="agent-unsupported-verification-submit"]').removeAttr('disabled');
	// };
	// if (BUYsellLater.length == 5) {
	// 	$('button[data-role="agent-unsupported-verification-submit"]').removeAttr('disabled');
	// };
	$('input[name=buyer-or-agent], input[name=cash-or-buy]').change(function() { 
		if ( $('input[name=buyer-or-agent]').is(':checked') && $('input[name=cash-or-buy]').is(':checked') ) {
			$("#form-decision").removeAttr("disabled")
		}
	})
	$("#form-decision").click(function(event) {
		event.preventDefault();
		if($('#home-buyer').is(':checked')) {
			$('.agent-question').remove();
			if($('#cash-offer').is(':checked')) {
				$("#LeadSourceID").attr('value', 'Q6UJ9A1PQKN6');
				$("#Picklist").attr('value', 'Cash Offer (CO)');
				$("#product-type").text("Form for Cash Offer ");
				$('input[data-role="client-selling-later-verification"]').each(function() {
					$(this).prop('required', false);
				});
			}
			if($('#buy-now').is(':checked')) {
				$("#LeadSourceID").attr('value', 'Q6UJ9A1PQKN8');
				$("#Picklist").attr('value', 'Buy Now, Sell Later (BNSL)');
				$("#product-type").text("Form for Buy Now, Sell Later ");
				$('.buy-now-sell-later').css('display','flex');
				$('input[data-role="client-selling-later-verification"]').each(function() {
					$(this).prop('required', true);
				});
			}
			$('.homebuyer-question').css('display','flex');
			$("#profile-type").text("Homebuyers");
		}
		if($('#estate-agent').is(':checked')) {
			$('.homebuyer-question').remove();
			if($('#cash-offer').is(':checked')) {
				$("#LeadSourceID").attr('value', 'Q6UJ9A1PQKN5');
				$("#Picklist").attr('value', 'Cash Offer (CO)');
				$("#product-type").text("Form for Cash Offer ");
				$('input[data-role="realtor-selling-later-verification"]').each(function() {
					$(this).prop('required', false);
				});
			}
			if($('#buy-now').is(':checked')) {
				$("#LeadSourceID").attr('value', 'Q6UJ9A1PQKN7');
				$("#Picklist").attr('value', 'Buy Now, Sell Later (BNSL)');
				$("#product-type").text("Form for Buy Now, Sell Later ");
				$('.buy-now-sell-later').css('display','flex');
				$('input[data-role="realtor-selling-later-verification"]').each(function() {
					$(this).prop('required', true);
				});
			}
			$('.agent-question').css('display','flex');
			$("#profile-type").text("Real Estate Agents");
		}
		$('section[data-role="mapping-agent"]').remove();
	})
	$("#working-with-agent").change(function() {
		if($("#real-estate-toggle-form").is(":selected")) {
			$("div[data-role='real-estate-agent-toggle']").removeClass("toggle-form");
			$('input[data-role="working-with-agent-verification"]').each(function() {
				$(this).prop('required', true);
			});
		} 
		if($("#real-estate-untoggle-form").is(":selected")) {
			$("div[data-role='real-estate-agent-toggle']").addClass("toggle-form");
			$('input[data-role="working-with-agent-verification"]').each(function() {
				$(this).prop('required', false);
			});
		}
	})
	$("#agent-prequalifier-select").change(function() {
		if($("#client-behalf").is(":selected")) {
			$("div[data-role='real-estate-learn-more']").addClass("toggle-form");
			$("div[data-role='real-estate-agent-toggle-form']").removeClass("toggle-form");
			$('input[data-role="agent-information-verification"]').each(function() {
				$(this).prop('required', false);
			});
		}
		if($("#informational-agent").is(":selected")) {
			$("div[data-role='real-estate-learn-more']").removeClass("toggle-form");
			$("div[data-role='real-estate-agent-toggle-form']").addClass("toggle-form");
			$('input[data-role="agent-information-verification"]').each(function() {
				$(this).prop('required', true);
			});
		}
	});
	$("#area-selection").change(function() {
		if ( $('#burlington-county').is(':selected') || $('#gloucester-county').is(':selected') || $('#camden-county').is(':selected') ) {
			$("div[data-role='unsupported-area-type-lead']").addClass("toggle-form");
			$("div[data-role='homeowner-application']").removeClass("toggle-form");
			$('input[data-role="unsupported-verification"]').each(function() {
				$(this).prop('required', false);
			});
		}
		if($("#unsupported-area-toggle-form").is(":selected")) {
			$("div[data-role='unsupported-area-type-lead']").removeClass("toggle-form");
			$("div[data-role='homeowner-application']").addClass("toggle-form");
			$('input[data-role="unsupported-verification"]').each(function() {
				$(this).prop('required', true);
			});
			$('input[data-role="client-submission-verification"]').each(function() {
				$(this).prop('required', false);
			});
			$('input[data-role="client-selling-later-verification"]').each(function() {
				$(this).prop('required', false);
			});
			$('input[data-role="realtor-selling-later-verification"]').each(function() {
				$(this).prop('required', false);
			});
		}
	});
	$("#agent-area-selection").change(function() {
		if ( $('#agent-burlington-county').is(':selected') || $('#agent-gloucester-county').is(':selected') || $('#agent-camden-county').is(':selected') ) {
			$("div[data-role='agent-unsupported-area-type-lead']").addClass("toggle-form");
			$("div[data-role='agent-learn-more-information']").removeClass("toggle-form");
			$('input[data-role="agent-unsupported-verification"]').each(function() {
				$(this).prop('required', false);
			});
			$('input[data-role="agent-submission-verification"]').each(function() {
				$(this).prop('required', true);
			});
		}
		if($("#agent-unsupported-area-toggle-form").is(":selected")) {
			$("div[data-role='agent-unsupported-area-type-lead']").removeClass("toggle-form");
			$("div[data-role='agent-learn-more-information']").addClass("toggle-form");
			$('input[data-role="agent-unsupported-verification"]').each(function() {
				$(this).prop('required', true);
			});
			$('input[data-role="agent-submission-verification"]').each(function() {
				$(this).prop('required', false);
			});
			$('input[data-role="client-selling-later-verification"]').each(function() {
				$(this).prop('required', false);
			});
			$('input[data-role="realtor-selling-later-verification"]').each(function() {
				$(this).prop('required', false);
			});
		}
	});
	$("#apply-or-learn").change(function() {
		if($("#learn-more-toggle-form").is(":selected")) {
			$("div[data-role='learn-more-information']").removeClass("toggle-form");
			$('input[data-role="client-submission-verification"]').each(function() {
				$(this).prop('required', true);
			});
		}
		if($("#apply-now-untoggle").is(":selected")) {
			$('input[data-role="client-submission-verification"]').each(function() {
				$(this).prop('required', false);
			});
			$("div[data-role='learn-more-information']").addClass("toggle-form");
			window.open('./loan/apply', '_blank');
		}
	});
	$("#area-selection").on("keyup change", function(e) {
		var selectedValue = $("#area-selection").val();
		$("input[data-xml-node='PropertyCounty']").attr('value', selectedValue);
	});
	$("#state-selection").on("keyup change", function(e) {
		var selectedValue = $("#state-selection").val();
		$("input[data-xml-node='State']").attr('value', selectedValue);
	});
	$("#agent-state-selection").on("keyup change", function(e) {
		var selectedValue = $("#agent-state-selection").val();
		$("input[data-xml-node='State']").attr('value', selectedValue);
	});
	$("#property-state-selection").on("keyup change", function(e) {
		var selectedValue = $("#property-state-selection").val();
		$("input[data-xml-node='PropertyState']").attr('value', selectedValue);
	});
	$("#agent-property-state-selection").on("keyup change", function(e) {
		var selectedValue = $("#agent-property-state-selection").val();
		$("input[data-xml-node='PropertyState']").attr('value', selectedValue);
	});
	if (BUYnosupport.length == 5) {
		$('button[data-role="unsupported-verification-submit"]').removeAttr('disabled');
	};
	if (BUYsubmit.length == 9) {
		$('button[data-role="client-submission-verification-submit"]').removeAttr('disabled');
	};
	if (REinfo.length == 4) {
		$('button[data-role="agent-information-verification-submit"]').removeAttr('disabled');
	};
	if (REsubmit.length == 9) {
		$('button[data-role="agent-submission-verification-submit"]').removeAttr('disabled');
	};
	if (REunsup.length == 5) {
		$('button[data-role="agent-unsupported-verification-submit"]').removeAttr('disabled');
	};
})