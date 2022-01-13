$(function() {
	var origin = window.location.origin;
	$('#corporate-sub-link-footer a').text(origin);
	if (window.location.href.indexOf("cashbuyer-form") > -1) {
		var FirstName = false;
		var LastName = false;
		var Email = false;
		var MobilePhone = false;
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
			if (FirstName != false && LastName != false && Email != false && MobilePhone != false) {
				$('#submit-overlayment').hide();
			}
			if (FirstName == false || LastName == false || Email == false || MobilePhone == false) {
				$('#submit-overlayment').show();
			}
		});
	}
	$("logo img").click(function(event) {
		window.location.href = '/page/cash2keys';
	});
	if (window.location.href.indexOf("realtor") > -1) {
		if (localStorage.getItem("minimizedtripleplay") === null) {
			localStorage.setItem('minimizedtripleplay', 'initial');
		}
		if ((localStorage.minimizedtripleplay) == "initial") {
			$('#minimized-realtor').removeClass('initial-hidden');
		};
		$("#dismiss-button-forever").click(function(event) {
			$('#minimized-realtor').hide();
			// localStorage.setItem('minimizedtripleplay', 'true');
		});
	};
	if (window.location.href.indexOf("campaign=tripleplay21") > -1) {
		if (localStorage.getItem("minimizedtripleplay") === null) {
			localStorage.setItem('minimizedtripleplay', 'initial');
		}
		if ((localStorage.minimizedtripleplay) == "initial") {
			var tripleplaypopup = '<tripleplaypopupcontainer id="tripleplaypopup"><tripleplaypopup><span id="dismiss-button">-</span><h3>Hey Realtors!</h3><p>Learn how our exciting new products can help your clients land the home of their dreams! <strong>Join Our Free Webinar!</strong></p><a href="https://register.gotowebinar.com/register/362388456472655376?source=Website"><button>Register Now</button></a></tripleplaypopup></tripleplaypopupcontainer>';
			$(tripleplaypopup).insertBefore( $( "header" ) );
		};
		$("#dismiss-button").click(function(event) {
			$("#tripleplaypopup").fadeOut(600);
			localStorage.setItem('minimizedtripleplay', 'true');
			$('#minimized-realtor').fadeIn('900');
		});
		if ((localStorage.minimizedtripleplay) == "true") {
			$('#minimized-realtor').fadeIn('900');
		};	
		$("#dismiss-button-forever").click(function(event) {
			$('#minimized-realtor').hide();
			// localStorage.setItem('minimizedtripleplay', 'false');
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
	$('#property-state-selection').on('change', function() {
		if($( "#property-state-selection option:selected" ).val()!='NJ'){
			$('#not-supported-state').removeClass('initial-hidden');
		}
		if($( "#property-state-selection option:selected" ).val()=='NJ'){
				$('#not-supported-state').addClass('initial-hidden');
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