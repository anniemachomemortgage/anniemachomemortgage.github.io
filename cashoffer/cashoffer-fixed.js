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
						$("#verified-link").attr('href', './amhbco-start?verified=true&hb=true&pt=co');
					};
					if ((verifiedBuyer == "homebuyer") && (verifiedProduct == "buynow")) {
						$("#verified-link").attr('href', './hbbnsl-start?verified=true&hb=true&pt=bn');
					};
					if ((verifiedBuyer == "agent") && (verifiedProduct == "cashoffer")) {
						$("#verified-link").attr('href', './amreco-start?verified=true&re=true&pt=co');
					};
					if ((verifiedBuyer == "agent") && (verifiedProduct == "buynow")) {
						$("#verified-link").attr('href', './rebnsl-start?verified=true&re=true&pt=bn');
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
						$("#verified-link").attr('href', './amhbco-start?verified=true&hb=true&pt=co');
					};
					if ((verifiedBuyer == "homebuyer") && (verifiedProduct == "buynow")) {
						$("#verified-link").attr('href', './hbbnsl-start?verified=true&hb=true&pt=bn');
					};
					if ((verifiedBuyer == "agent") && (verifiedProduct == "cashoffer")) {
						$("#verified-link").attr('href', './amreco-start?verified=true&re=true&pt=co');
					};
					if ((verifiedBuyer == "agent") && (verifiedProduct == "buynow")) {
						$("#verified-link").attr('href', './rebnsl-start?verified=true&re=true&pt=bn');
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
						$("#verified-link").attr('href', './amhbco-start?verified=true&hb=true&pt=co');
					};
					if ((verifiedBuyer == "homebuyer") && (verifiedProduct == "buynow")) {
						$("#verified-link").attr('href', './hbbnsl-start?verified=true&hb=true&pt=bn');
					};
					if ((verifiedBuyer == "agent") && (verifiedProduct == "cashoffer")) {
						$("#verified-link").attr('href', './amreco-start?verified=true&re=true&pt=co');
					};
					if ((verifiedBuyer == "agent") && (verifiedProduct == "buynow")) {
						$("#verified-link").attr('href', './rebnsl-start?verified=true&re=true&pt=bn');
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
						$("#verified-link").attr('href', './amhbco-start?verified=true&hb=true&pt=co');
					};
					if ((verifiedBuyer == "homebuyer") && (verifiedProduct == "buynow")) {
						$("#verified-link").attr('href', './hbbnsl-start?verified=true&hb=true&pt=bn');
					};
					if ((verifiedBuyer == "agent") && (verifiedProduct == "cashoffer")) {
						$("#verified-link").attr('href', './amreco-start?verified=true&re=true&pt=co');
					};
					if ((verifiedBuyer == "agent") && (verifiedProduct == "buynow")) {
						$("#verified-link").attr('href', './rebnsl-start?verified=true&re=true&pt=bn');
					};
				}
			}
		});
		$("#verified-process").click(function(event) {
			event.preventDefault();
		});
		// $('input[name=buyer-or-agent], input[name=cash-or-buy]').change(function() { 
		// 	if ( $('input[name=buyer-or-agent]').is(':checked') && $('input[name=cash-or-buy]').is(':checked') ) {
		// 		$("#form-decision").removeAttr("disabled")
		// 	}
		// })
		// $("#form-decision").click(function(event) {
		// 	event.preventDefault();
		// 	if($('#home-buyer').is(':checked')) {
		// 		$('.agent-question').remove();
		// 		if($('#cash-offer').is(':checked')) {
		// 			$("#LeadSourceID").attr('value', 'Q6UJ9A1PQKN6');
		// 			$("#Picklist").attr('value', 'Cash Offer (CO)');
		// 			$("#product-type").text("Form for Cash Offer ");
		// 			$('input[data-role="client-selling-later-verification"]').each(function() {
		// 				$(this).prop('required', false);
		// 			});
		// 		}
		// 		if($('#buy-now').is(':checked')) {
		// 			$("#LeadSourceID").attr('value', 'Q6UJ9A1PQKN8');
		// 			$("#Picklist").attr('value', 'Buy Now, Sell Later (BNSL)');
		// 			$("#product-type").text("Form for Buy Now, Sell Later ");
		// 			$('.buy-now-sell-later').css('display','flex');
		// 			$('input[data-role="client-selling-later-verification"]').each(function() {
		// 				$(this).prop('required', true);
		// 			});
		// 		}
		// 		$('.homebuyer-question').css('display','flex');
		// 		$("#profile-type").text("Homebuyers");
		// 	}
		// 	if($('#estate-agent').is(':checked')) {
		// 		$('.homebuyer-question').remove();
		// 		if($('#cash-offer').is(':checked')) {
		// 			$("#LeadSourceID").attr('value', 'Q6UJ9A1PQKN5');
		// 			$("#Picklist").attr('value', 'Cash Offer (CO)');
		// 			$("#product-type").text("Form for Cash Offer ");
		// 			$('input[data-role="realtor-selling-later-verification"]').each(function() {
		// 				$(this).prop('required', false);
		// 			});
		// 		}
		// 		if($('#buy-now').is(':checked')) {
		// 			$("#LeadSourceID").attr('value', 'Q6UJ9A1PQKN7');
		// 			$("#Picklist").attr('value', 'Buy Now, Sell Later (BNSL)');
		// 			$("#product-type").text("Form for Buy Now, Sell Later ");
		// 			$('.buy-now-sell-later').css('display','flex');
		// 			$('input[data-role="realtor-selling-later-verification"]').each(function() {
		// 				$(this).prop('required', true);
		// 			});
		// 		}
		// 		$('.agent-question').css('display','flex');
		// 		$("#profile-type").text("Real Estate Agents");
		// 	}
		// 	$("#mapping-agent").remove();
		// })
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
				$(":input").on("keyup change", function(e) {
					var UnsupportedFirstName = $('input[type="text"][data-role="unsupported-verification"][data-xml-node="FirstName"]').val();
					var UnsupportedLastName = $('input[type="text"][data-role="unsupported-verification"][data-xml-node="LastName"]').val();
					var UnsupportedEmail = $('input[type="text"][data-role="unsupported-verification"][data-xml-node="Email"]').val();
					var UnsupportedPhone = $('input[type="text"][data-role="unsupported-verification"][data-xml-node="MobilePhone"]').val();
					$('input[type="text"][data-role="client-submission-verification"][data-xml-node="FirstName"]').val(UnsupportedFirstName);
					$('input[type="text"][data-role="client-submission-verification"][data-xml-node="LastName"]').val(UnsupportedLastName);
					$('input[type="text"][data-role="client-submission-verification"][data-xml-node="Email"]').val(UnsupportedEmail);
					$('input[type="text"][data-role="client-submission-verification"][data-xml-node="MobilePhone"]').val(UnsupportedPhone);
				});
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
		// Apply now link adjustment for realtor agent referral BNSL
		if (window.location.href.indexOf("rebnsl-start") != -1) {
			$("#working-with-agent").change(function() {
				if($("#real-estate-toggle-form").is(":selected")) {
					$("#Entity").val("Contact");
					$("#LeadSourceID").val("");
				}
				if($("#real-estate-untoggle-form").is(":selected")) {
					$("#Entity").val("PreQual");
					$("#LeadSourceID").val("Q6UJ9A1PQKN7");
				}
			});
			var linktoApplyt = 'https://annie-mac.com/loan/apply?source=AnnieMac%20Private%20Equity&subsource=BNSL%20-%20Agent%20Referral&fieldList=';
			var bnslbase = '{"fieldList":{"facts.COBNSL":"Buy Now, Sell Later (BNSL)"}}';
			bnslbase = btoa(bnslbase);
			linktoApplyt = linktoApplyt + bnslbase;
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
					window.open(linktoApplyt, '_blank');
				}
			});
		}
		// Apply now link adjustment for homebuyer BNSL
		if (window.location.href.indexOf("hbbnsl-start") != -1) {
			var linktoApplyt = 'https://annie-mac.com/loan/apply?source=AnnieMac%20Private%20Equity&subsource=BNSL&fieldList=';
			var bnslbase = '{"fieldList":{"facts.COBNSL":"Buy Now, Sell Later (BNSL)"}}';
			bnslbase = btoa(bnslbase);
			linktoApplyt = linktoApplyt + bnslbase;
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
					window.open(linktoApplyt, '_blank');
				}
			});
		}
		// Apply now link adjustment for homebuyer CO
		if (window.location.href.indexOf("amhbco-start") != -1) {
			var linktoApplyt = 'https://annie-mac.com/loan/apply?source=AnnieMac%20Private%20Equity&subsource=CO&fieldList=';
			var cobase;
			var RealtorFirstName;
			var RealtorLastName;
			var RealtorEmail;
			var RealtorPhone;
			$('input[type="text"][data-role="working-with-agent-verification"][data-xml-node="AgentFirstName"]').on("keyup", function(e) {
				RealtorFirstName = $('input[type="text"][data-role="working-with-agent-verification"][data-xml-node="AgentFirstName"]').val();
			});
			$('input[type="text"][data-role="working-with-agent-verification"][data-xml-node="AgentLastName"]').on("keyup", function(e) {
				RealtorLastName = $('input[type="text"][data-role="working-with-agent-verification"][data-xml-node="AgentFirstName"]').val();
			});
			$('input[type="text"][data-role="working-with-agent-verification"][data-xml-node="AgentEmail"]').on("keyup", function(e) {
				RealtorEmail = $('input[type="text"][data-role="working-with-agent-verification"][data-xml-node="AgentFirstName"]').val();
			});
			$('input[type="text"][data-role="working-with-agent-verification"][data-xml-node="AgentMobilePhone"]').on("keyup", function(e) {
				RealtorPhone = $('input[type="text"][data-role="working-with-agent-verification"][data-xml-node="AgentFirstName"]').val();
			});
			$(":input").on("keyup", function(e) {
				if(RealtorFirstName != null) {
					if(RealtorLastName != null) {
						RealtorFullName = RealtorFirstName + " " + RealtorLastName;
					}
				}
				if((RealtorFullName == null) && (RealtorEmail == null) && (RealtorPhone == null)) {
					cobase = '{"fieldList":{"facts.COBNSL":"Cash Offer (CO)"}}';
				}
				if((RealtorFullName != null) && (RealtorEmail != null) && (RealtorPhone != null)) {
					cobase = '{"fieldList":{"facts.COBNSL":"Cash Offer (CO)", "loanParty.buyersAgent.name":"' + RealtorFullName + '", "loanParty.buyersAgent.phoneCell":"' + RealtorPhone + '", "loanParty.buyersAgent.emailAddress":"' + RealtorEmail + '"}}'
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
					cobase = btoa(cobase);
					linktoApplyt = linktoApplyt + cobase;
					window.open(linktoApplyt, '_blank');
				}
			});
		}
		// Apply now link adjustment for realtor agent referral CO
		if (window.location.href.indexOf("amreco-start") != -1) {
			$("#working-with-agent").change(function() {
				if($("#real-estate-toggle-form").is(":selected")) {
					$("#Entity").val("Contact");
					$("#LeadSourceID").val("");
				}
				if($("#real-estate-untoggle-form").is(":selected")) {
					$("#Entity").val("PreQual");
					$("#LeadSourceID").val("Q6UJ9A1PQKN7");
				}
			});
			var linktoApplyt = 'https://annie-mac.com/loan/apply?source=AnnieMac%20Private%20Equity&subsource=CO%20-%20Agent%20Referral&fieldList=';
			var cobase = '{"fieldList":{"facts.COBNSL":"Cash Offer (CO)"}}';
			cobase = btoa(cobase);
			linktoApplyt = linktoApplyt + cobase;
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
					window.open(linktoApplyt, '_blank');
				}
			});
		}
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
	})