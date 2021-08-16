// {
// 	"fieldList":{''
// 	"facts.COBNSL":"cash buyer values same as what is sent to Encompass", -- $("#Picklist").attr('value', 'Cash Offer (CO)'); / $("#Picklist").attr('value', 'Buy Now, Sell Later (BNSL)');
// 	"loanParty.buyersAgent.name":"John Smith", -- INCLUDE TEST IN THE BORROWER NAME
// 	"loanParty.buyersAgent.phoneCell":"2155551515",
// 	"loanParty.buyersAgent.emailAddress":"jsmith@remax.com"
// 	}
// }

// fieldList=PERCENTAGE_ENCODING, THEN BASE64

// <!-- UPDATED -->

$(function() {
	var verifiedBuyer = 0;
	var verifiedProduct = 0;
	if (verifiedBuyer == 0) {
		console.log("hi");
	}
	$("#COBNSL-homebuyer").click(function(event) {
		$(this).addClass("selected");
		verifiedBuyer = "homebuyer";
		if($('#COBNSL-agent').hasClass('selected')) {
			$('#COBNSL-agent').removeClass("selected");
		};
		if (verifiedBuyer != 0) {
			console.log(verifiedBuyer);
			if (verifiedProduct != 0) {
				$("#verification-method").removeClass("toggle-form");
				if ((verifiedBuyer == "homebuyer") && (verifiedProduct == "cashoffer")) {
					$("#verified-link").attr('href', 'amhbco-start.html?verified=true&hb=true&pt=co');
				};
				if ((verifiedBuyer == "homebuyer") && (verifiedProduct == "buynow")) {
					$("#verified-link").attr('href', 'hbbnsl-start.html?verified=true&hb=true&pt=bn');
				};
				if ((verifiedBuyer == "agent") && (verifiedProduct == "cashoffer")) {
					$("#verified-link").attr('href', 'amreco-start.html?verified=true&re=true&pt=co');
				};
				if ((verifiedBuyer == "agent") && (verifiedProduct == "buynow")) {
					$("#verified-link").attr('href', 'rebnsl-start.html?verified=true&re=true&pt=bn');
				};
			}
		}
	});
	$("#COBNSL-agent").click(function(event) {
		$(this).addClass("selected");
		verifiedBuyer = "agent";
		if($('#COBNSL-homebuyer').hasClass('selected')) {
			$('#COBNSL-homebuyer').removeClass("selected");
		};
		if (verifiedBuyer != 0) {
			console.log(verifiedBuyer);
			if (verifiedProduct != 0) {
				$("#verification-method").removeClass("toggle-form");
				if ((verifiedBuyer == "homebuyer") && (verifiedProduct == "cashoffer")) {
					$("#verified-link").attr('href', 'amhbco-start.html?verified=true&hb=true&pt=co');
				};
				if ((verifiedBuyer == "homebuyer") && (verifiedProduct == "buynow")) {
					$("#verified-link").attr('href', 'hbbnsl-start.html?verified=true&hb=true&pt=bn');
				};
				if ((verifiedBuyer == "agent") && (verifiedProduct == "cashoffer")) {
					$("#verified-link").attr('href', 'amreco-start.html?verified=true&re=true&pt=co');
				};
				if ((verifiedBuyer == "agent") && (verifiedProduct == "buynow")) {
					$("#verified-link").attr('href', 'rebnsl-start.html?verified=true&re=true&pt=bn');
				};
			}
		}
	});
	$("#COBNSL-co").click(function(event) {
		$(this).addClass("selected");
		verifiedProduct = "cashoffer";
		if($('#COBNSL-bnsl').hasClass('selected')) {
			$('#COBNSL-bnsl').removeClass("selected");
		};
		if (verifiedProduct != 0) {
			console.log(verifiedProduct);
			if (verifiedBuyer != 0) {
				$("#verification-method").removeClass("toggle-form");
				if ((verifiedBuyer == "homebuyer") && (verifiedProduct == "cashoffer")) {
					$("#verified-link").attr('href', 'amhbco-start.html?verified=true&hb=true&pt=co');
				};
				if ((verifiedBuyer == "homebuyer") && (verifiedProduct == "buynow")) {
					$("#verified-link").attr('href', 'hbbnsl-start.html?verified=true&hb=true&pt=bn');
				};
				if ((verifiedBuyer == "agent") && (verifiedProduct == "cashoffer")) {
					$("#verified-link").attr('href', 'amreco-start.html?verified=true&re=true&pt=co');
				};
				if ((verifiedBuyer == "agent") && (verifiedProduct == "buynow")) {
					$("#verified-link").attr('href', 'rebnsl-start.html?verified=true&re=true&pt=bn');
				};
			}
		}
	});
	$("#COBNSL-bnsl").click(function(event) {
		$(this).addClass("selected");
		verifiedProduct = "buynow";
		if($('#COBNSL-co').hasClass('selected')) {
			$('#COBNSL-co').removeClass("selected");
		};
		if (verifiedProduct != 0) {
			console.log(verifiedProduct);
			if (verifiedBuyer != 0) {
				$("#verification-method").removeClass("toggle-form");
				if ((verifiedBuyer == "homebuyer") && (verifiedProduct == "cashoffer")) {
					$("#verified-link").attr('href', 'amhbco-start.html?verified=true&hb=true&pt=co');
				};
				if ((verifiedBuyer == "homebuyer") && (verifiedProduct == "buynow")) {
					$("#verified-link").attr('href', 'hbbnsl-start.html?verified=true&hb=true&pt=bn');
				};
				if ((verifiedBuyer == "agent") && (verifiedProduct == "cashoffer")) {
					$("#verified-link").attr('href', 'amreco-start.html?verified=true&re=true&pt=co');
				};
				if ((verifiedBuyer == "agent") && (verifiedProduct == "buynow")) {
					$("#verified-link").attr('href', 'rebnsl-start.html?verified=true&re=true&pt=bn');
				};
			}
		}
	});
	$("#verified-process").click(function(event) {
		event.preventDefault();
	});
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
		$("#mapping-agent").remove();
	})
	$("#working-with-agent").change(function() {
		if($("#real-estate-toggle-form").is(":selected")) {
			$("#real-estate-agent-toggle").removeClass("toggle-form");
			$('input[data-role="working-with-agent-verification"]').each(function() {
				$(this).prop('required', true);
			});
		} 
		if($("#real-estate-untoggle-form").is(":selected")) {
			$("#real-estate-agent-toggle").addClass("toggle-form");
			$('input[data-role="working-with-agent-verification"]').each(function() {
				$(this).prop('required', false);
			});
		}
	})
	$("#agent-prequalifier-select").change(function() {
		if($("#client-behalf").is(":selected")) {
			$("#preliminary-agent-question").remove();
			$("#real-estate-apply").removeClass("toggle-form");
			$('input[data-role="agent-information-verification"]').each(function() {
				$(this).prop('required', false);
			});
			$("#real-estate-learn-more").remove();
		}
		if($("#informational-agent").is(":selected")) {
			$("#preliminary-agent-question").remove();
			$("#real-estate-learn-more").removeClass("toggle-form");
			$('input[data-role="agent-information-verification"]').each(function() {
				$(this).prop('required', true);
			});
			$("#real-estate-apply").remove();
		}
	});
	$("#area-selection").change(function() {
		if ( $('#burlington-county').is(':selected') || $('#gloucester-county').is(':selected') || $('#camden-county').is(':selected') ) {
			$("#unsupported-area-type-lead").addClass("toggle-form");
			$("#homeowner-application").removeClass("toggle-form");
			$('input[data-role="unsupported-verification"]').each(function() {
				$(this).prop('required', false);
			});
		}
		if($("#unsupported-area-toggle-form").is(":selected")) {
			$("#unsupported-area-type-lead").removeClass("toggle-form");
			$("#homeowner-application").addClass("toggle-form");
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
			$("#agent-unsupported-area-type-lead").addClass("toggle-form");
			$("#agent-learn-more-information").removeClass("toggle-form");
			$('input[data-role="agent-unsupported-verification"]').each(function() {
				$(this).prop('required', false);
			});
			$('input[data-role="agent-submission-verification"]').each(function() {
				$(this).prop('required', true);
			});
		}
		if($("#agent-unsupported-area-toggle-form").is(":selected")) {
			$("#agent-unsupported-area-type-lead").removeClass("toggle-form");
			$("#agent-learn-more-information").addClass("toggle-form");
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
			$("#learn-more-information").removeClass("toggle-form");
			$('input[data-role="client-submission-verification"]').each(function() {
				$(this).prop('required', true);
			});
		}
		if($("#apply-now-untoggle").is(":selected")) {
			$('input[data-role="client-submission-verification"]').each(function() {
				$(this).prop('required', false);
			});
			$("#learn-more-information").addClass("toggle-form");
			var linktoApplyt = 'https://annie-mac.com/loan/apply?fieldList=';
			// GRAB WHETHER IT IS A BUY NOW, SELL LATER OR IF IT IS A CASHBUYER SELECTION
			// ADD THAT TO THE PARAMETER IN 
			// {
			// 	"fieldList":{
					// FOR CASH OFFER
			// 		"facts.COBNSL":"Cash Offer (CO)",
					// FOR BUY NOW SELL LATER
			// 		"facts.COBNSL":"OOOOR Buy Now, Sell Later (BNSL)",
			// 		"loanParty.buyersAgent.name":"TESTING PHASE",
			// 		"loanParty.buyersAgent.phoneCell":"5555555555",
			// 		"loanParty.buyersAgent.emailAddress":"TESTPHASE@ANNIE-MAC.COM"
			// 	}
			// }	
			// CONVERT THE JSON TO A BASE64
			// ADD THE CONVERTED BASE64 TO AFTER FIELDLIST=
			window.open(linktoApplyt, '_blank');
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
	$("button[data-qlf-submit]").click(function(event) {
		$('input[type="text"]').each(function() {
			if ($(this).val() == "") {
				$(this).remove();
			}
		});
	});	
})