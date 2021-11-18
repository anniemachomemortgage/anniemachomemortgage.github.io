$(function() {
	$("logo img").click(function(event) {
		window.location.href = './index.html';
	});
	var tripleplaypopup = '<tripleplaypopupcontainer id="tripleplaypopup"><tripleplaypopup><span id="dismiss-button">X</span><h3>Hey Realtors!</h3><p>Learn how our exciting new products can help your clients land the home of their dreams! <strong>Join Our Free Webinar!</strong></p><a href="https://register.gotowebinar.com/register/362388456472655376?source=Website"><button>Register Now</button></a></tripleplaypopup></tripleplaypopupcontainer>';
	if (window.location.href.indexOf("campaign=tripleplay21") > -1) {
		$(tripleplaypopup).insertBefore( $( "header" ) );
		$("#dismiss-button").click(function(event) {
			$("#tripleplaypopup").fadeOut(600);
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
	};
	$('select').on('change', function() {
		if($( "#working-with-agent option:selected" ).val()=='real-estate'){
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
		} 
		if($( "#bnsl-or-not option:selected" ).val()=='not-selling'){
			$('#buy-now-sell-later').addClass('initial-hidden');
		}	
	});
});