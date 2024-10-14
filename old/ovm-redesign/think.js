$(function() {
	$("#mobile-navigation-only").click(function () {
		$("#navigation").toggleClass("mobile-hide");
	});
});

window.addEventListener('resize', function(event){
	console.log($(window).width());
  });