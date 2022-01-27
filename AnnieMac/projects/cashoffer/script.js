$(function() {
	var origin = window.location.origin;
	$('#corporate-sub-link-footer a').text(origin);
	if (window.location.href.indexOf("cashbuyer-form") > -1) {
		var FirstName = false;
		var LastName = false;
		var Email = false;
		var MobilePhone = false;
		var propertyStateSelection = false;
		$("#property-state-selection").on("click blur keyup onchange", function(e) {
			propertyStateSelection = $("#property-state-selection").val();
			$('input[data-xml-node=PropertyState]').val(propertyStateSelection);
			if($( "input[data-xml-node=PropertyState]" ).val()=='NJ'){
				$('#not-supported-state').addClass('initial-hidden');
			}
			if($( "input[data-xml-node=PropertyState]" ).val()!='NJ'){
				$('#not-supported-state').removeClass('initial-hidden');
			}
			if( $('input[data-xml-node=PropertyState]').val().length === 0 ) {
				propertyStateSelection = false;
			}
			if( $('input[data-xml-node=PropertyState]').val() === "false" ) {
				propertyStateSelection = false;
			}
		});
		$(":input").on("keyup change", function(e) {
			FirstName = $("input[data-xml-node='FirstName']").val();
			LastName = $("input[data-xml-node='LastName']").val();
			$("input[data-xml-node='Email']").blur(function() {
				var testEmail = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;
				if (testEmail.test(this.value)) {
					Email = $("input[data-xml-node='Email']").val();
				}
			});
			MobilePhone = $("input[data-xml-node='MobilePhone']").val();
			$("input[data-xml-node='FirstName']").blur(function() {
				if( $(this).val().length === 0 ) {
					FirstName = false;
				}
			});
			$("input[data-xml-node='LastName']").blur(function() {
				if( $(this).val().length === 0 ) {
					LastName = false;
				}
			});
			$("input[data-xml-node='Email']").blur(function() {
				if( $(this).val().length === 0 ) {
					Email = false;
				}
			});
			$("input[data-xml-node='MobilePhone']").blur(function() {
				if( $(this).val().length === 0 ) {
					MobilePhone = false;
				}
			});
			$('#state-selection').on('change', function() {
				var stateSelection = $("#state-selection").val();
				$('input[data-xml-node=State]').val(stateSelection);
			});	
			if (FirstName != false && LastName != false && Email != false && MobilePhone != false && propertyStateSelection != false) {
				$('#submit-overlayment').hide();
			}
			if (FirstName == false || LastName == false || Email == false || MobilePhone == false || propertyStateSelection == false) {
				$('#submit-overlayment').show();
			}
		});
	}
	$("logo img").click(function(event) {
		window.location.href = '/page/cash2keys';
	});
	if (window.location.href.indexOf("confirmreg") > -1) {
		localStorage.setItem('minimizerealtor', 'registered');
	};
	if (window.location.href.indexOf("cash2keys-realtor") > -1) {
		var currentDate = new Date();
		currentDate.setHours(0,0,0,0);
		localStorage.setItem('currentDateLog', currentDate);
		if ((localStorage.minimizetime) > (localStorage.currentDateLog)) {
			localStorage.setItem('minimizerealtor', 'load-realtor-popup');
		}
		if (localStorage.getItem("minimizetime") === null) {
			localStorage.setItem('minimizerealtor', 'load-realtor-popup');
		}
		if ((localStorage.minimizerealtor) == "load-realtor-popup") {
			$('#minimized-realtor').removeClass('initial-hidden');
		};
		if (localStorage.minimizetime < localStorage.currentDateLog) {
			$('#minimized-realtor').removeClass('initial-hidden');
			localStorage.setItem('minimizetime', null)
		}
		$("#dismiss-button-forever").click(function(event) {
			var minimizedDate = new Date();
			minimizedDate.setHours(0,0,0,0);
			localStorage.setItem('minimizerealtor', 'hide-realtor-popup');
			localStorage.setItem('minimizetime', minimizedDate);
			$('#minimized-realtor').hide();
		});
	};
	if (window.location.href.indexOf("faq") > -1) {
		$("#search-faq").keyup(function() {
			if(event.keyCode == 13) {
				event.preventDefault();
			}
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
		$("#toggle-consumer").click(function(){
			$(this).toggleClass('active-filter');
			if (!$("#toggle-consumer").hasClass("active-filter")) {
				// console.log("Doesn't have active filter.")
				$('details').each(function() {
					if (!$(this).hasClass("consumer")) {
						$(this).show();
					};
					if ($(this).hasClass("consumer")) {
						$(this).removeAttr('open');
					};
				});
			};
			if ($("#toggle-consumer").hasClass("active-filter")) {
				// console.log("has active filter.")
				$('details').each(function() {
					if (!$(this).hasClass("consumer")) {
						$(this).hide();
					};
					if ($(this).hasClass("consumer")) {
						$(this).show();
						$(this).attr('open', '');
					};
				});
			};
		});
		$("#toggle-realtor").click(function(){
			$(this).toggleClass('active-filter');
			if (!$("#toggle-realtor").hasClass("active-filter")) {
				// console.log("Doesn't have active filter.")
				$('details').each(function() {
					if (!$(this).hasClass("realtor")) {
						$(this).show();
					};
					if ($(this).hasClass("realtor")) {
						$(this).removeAttr('open');
					};
				});
			};
			if ($("#toggle-realtor").hasClass("active-filter")) {
				// console.log("has active filter.")
				$('details').each(function() {
					if (!$(this).hasClass("realtor")) {
						$(this).hide();
					};
					if ($(this).hasClass("realtor")) {
						$(this).show();
						$(this).attr('open', '');
					};
				});
			};
		});
		$("#toggle-general").click(function(){
			$(this).toggleClass('active-filter');
			if (!$("#toggle-general").hasClass("active-filter")) {
				// console.log("Doesn't have active filter.")
				$('details').each(function() {
					if (!$(this).hasClass("cash")) {
						$(this).show();
					};
					if ($(this).hasClass("cash")) {
						$(this).removeAttr('open');
					};
				});
			};
			if ($("#toggle-general").hasClass("active-filter")) {
				// console.log("has active filter.")
				$('details').each(function() {
					if (!$(this).hasClass("cash")) {
						$(this).hide();
					};
					if ($(this).hasClass("cash")) {
						$(this).show();
						$(this).attr('open', '');
					};
				});
			};
		});
		$("#toggle-bnsl").click(function(){
			$(this).toggleClass('active-filter');
			if (!$("#toggle-bnsl").hasClass("active-filter")) {
				// console.log("Doesn't have active filter.")
				$('details').each(function() {
					if (!$(this).hasClass("sell")) {
						$(this).show();
					};
					if ($(this).hasClass("sell")) {
						$(this).removeAttr('open');
					};
				});
			};
			if ($("#toggle-bnsl").hasClass("active-filter")) {
				// console.log("has active filter.")
				$('details').each(function() {
					if (!$(this).hasClass("sell")) {
						$(this).hide();
					};
					if ($(this).hasClass("sell")) {
						$(this).show();
						$(this).attr('open', '');
					};
				});
			};
		});
	};
	$('select').on('change', function() {
		if($( "#working-with-agent option:selected" ).val()=='real-estate'){
			$('#real-estate-information').removeClass('initial-hidden');
		} 
		if($( "#working-with-agent option:selected" ).val()=='am-agent'){
			$('#real-estate-information').removeClass('initial-hidden');
		} 
		if($( "#working-with-agent option:selected" ).val()=='no-real-estate'){
			$('#real-estate-information').addClass('initial-hidden');
		}
		if($( "#apply-or-learn option:selected" ).val()=='apply-now'){
			$('#apply-now-form').removeClass('initial-hidden');
		} 
		if($( "#apply-or-learn option:selected" ).val()=='learn-more'){
			$('#apply-now-form').addClass('initial-hidden');
		}
		if($( "#bnsl-or-not option:selected" ).val()=='selling'){
			$('#buy-now-sell-later').removeClass('initial-hidden');
			$('#Picklist').attr('value', 'Buy Now, Sell Later (BNSL)');
			$('#LeadSourceID').attr('value', 'Q6UJ9A1PQKN8');
			if($( "#working-with-agent option:selected" ).val()=='am-agent'){
				$('#LeadSourceID').attr('value', 'Q6UJ9A1PQKN7');
			} 
		} 
		if($( "#bnsl-or-not option:selected" ).val()=='not-selling'){
			$('#buy-now-sell-later').addClass('initial-hidden');
			$('#Picklist').attr('value', 'Cash Offer (CO)');
			$('#LeadSourceID').attr('value', 'Q6UJ9A1PQKN6');
			if($( "#working-with-agent option:selected" ).val()=='am-agent'){
				$('#LeadSourceID').attr('value', 'Q6UJ9A1PQKN5');
			}
		}	
	});
	$("#submit-borrower").click(function(event) {
		$("html, body").animate({ scrollTop: 0 }, "slow");
		$(".inner-layout").fadeOut(2500);
		setTimeout(function(){
		   window.location.href='./form-thanks';
		  } ,2750);
	});
});