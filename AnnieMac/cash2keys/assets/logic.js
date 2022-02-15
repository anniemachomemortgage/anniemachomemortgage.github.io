$(function() {
	var origin = window.location.origin;
	$('#corporate-sub-link-footer a').text(origin);
	$('#corporate-sub-link-footer a').attr('href', origin);
	if ( $("body").is("#cash2keys-form") ) {
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
		$(":input").on("keyup change", function(e) {
			if($('#real-estate').is(':checked')) { 
				$("#real-estate-note").addClass("hidden-toggle");
				$("#real-estate-information").removeClass("hidden-toggle");
			}
			if($('#no-real-estate').is(':checked')) { 
				$("#real-estate-note").addClass("hidden-toggle");
				$("#real-estate-information").addClass("hidden-toggle");
			}
			if($('#am-agent').is(':checked')) { 
				$("#real-estate-note").removeClass("hidden-toggle");
				$("#real-estate-information").addClass("hidden-toggle");
			}
			if($('#apply-now').is(':checked')) { 
				$("#property-information").removeClass("hidden-toggle");
			}
			if($('#general-inquiry').is(':checked')) { 
				$("#property-information").addClass("hidden-toggle");
			}
			if($('#selling').is(':checked')) { 
				$("#property-selling").removeClass("hidden-toggle");
			}
			if($('#not-selling').is(':checked')) { 
				$("#property-selling").addClass("hidden-toggle");
			}
		});
	}
});