$(function() {
	var tripleplaypopup = '<tripleplaypopupcontainer id="tripleplaypopup"><tripleplaypopup><span id="dismiss-button">X</span><h3>Hey Realtors!</h3><p>Learn how our exciting new products can help your clients land the home of their dreams! <strong>Join Our Free Webinar!</strong></p><a href="https://register.gotowebinar.com/register/362388456472655376?source=Website"><button>Register Now</button></a></tripleplaypopup></tripleplaypopupcontainer>';
	if (window.location.href.indexOf("campaign=tripleplay21") > -1) {
		$(tripleplaypopup).insertBefore( $( "header" ) );
		$("#dismiss-button").click(function(event) {
			$("#tripleplaypopup").fadeOut(600);
		});
	};
});