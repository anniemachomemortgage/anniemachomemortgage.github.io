$(function() {
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
});