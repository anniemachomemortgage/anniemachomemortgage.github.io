$(document).ready(function(){
$.fn.digits = function(){ 
	return this.each(function(){ 
		$(this).text( $(this).text().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,") ); 
	})
}
var loanTerm = parseInt($('input[name="loan-term"]').val());
var monthlyPayment;
var monthlyIncome;
var beforeInterest;
var interestAdded;
var interestRateDeclared = $('input[name="simple-interest"]').val();
var interestRate = ".0" + $('input[name="simple-interest"]').val();
var greatestValue;
var monthlyPaymentEstimate;
var homeHuntLink;
var afterExpensesCalculation;
var carPayment = $('input[name="car-payment-costs"]').val(0);
var creditCards = $('input[name="credit-cards-costs"]').val(0);
var subscriptions = $('input[name="subscriptions-costs"]').val(0);
var insurance = $('input[name="insurance-costs"]').val(0);
var utilities = $('input[name="utilities-costs"]').val(0);
var groceries = $('input[name="groceries-costs"]').val(0);
var other = $('input[name="other-costs"]').val(0);
var slider = $('#slide-selection')[0];
var sliderdisplaytext = $('#slider-value-display')[0];
slider.oninput = function() {
  sliderdisplaytext.innerHTML = slider.value;
  var slidervalue = sliderdisplaytext.innerHTML;
  $('input[name="monthly-payment"]').attr("value", parseInt(slidervalue));
  $('input[name="monthly-income"]').attr("value", Math.ceil(parseInt(slidervalue) / .25));
  monthlyPayment = $('input[name="monthly-payment"]').val();
  monthlyIncome = $('input[name="monthly-income"]').val();
};
$(":input").on("input keyup change", function(e) {
	carPayment = $('input[name="car-payment-costs"]').val();
	creditCards = $('input[name="credit-cards-costs"]').val();
	subscriptions = $('input[name="subscriptions-costs"]').val();
	insurance = $('input[name="insurance-costs"]').val();
	utilities = $('input[name="utilities-costs"]').val();
	groceries = $('input[name="groceries-costs"]').val();
	other = $('input[name="other-costs"]').val();
	var totalAdditionalCosts = parseInt(carPayment) + parseInt(creditCards) + parseInt(subscriptions) + parseInt(insurance) + parseInt(utilities) + parseInt(groceries) + parseInt(other);
	console.log(totalAdditionalCosts);
	$('input[name="total-additional-costs"]').val(totalAdditionalCosts)
	$("#targeted-monthly-income").text("$" + monthlyIncome).digits();
	beforeInterest = Math.ceil(parseInt(monthlyIncome)*360*.28);
	interestRateDeclared = $('input[name="simple-interest"]').val();
	interestRate = ".0" + $('input[name="simple-interest"]').val();
	$("#interest-rate-declared").text(interestRateDeclared + "%");
	interestAdded = Math.ceil(parseInt(beforeInterest) * interestRate);
	greatestValue = beforeInterest + interestAdded;
	monthlyPaymentEstimate = Math.ceil(parseInt(greatestValue)/360);
	homeHuntLink = "https://homehunt.ylopo.com/search/map?s[maxPrice]=" + greatestValue;
	$("#detailed-view").removeClass("hide");
	$("#other-cost-toggle").removeClass("hide");
	$("#homehunt-search-price").removeClass("hide");
	$('#homehunt-search-price').attr('href', homeHuntLink);
	$("#interest-rate-total").text("$" + interestAdded).digits();
	$("#estimated-monthly-payment").text("$" + monthlyPaymentEstimate).digits();
	$("#afforded-house-target").text("$" + greatestValue).digits();
	$('input[name="monthly-payment-display"]').attr("value", parseInt(monthlyPaymentEstimate));
	afterExpensesCalculation = monthlyIncome - monthlyPaymentEstimate - totalAdditionalCosts;
	$("#after-expenses-display").text("$" + afterExpensesCalculation).digits();
});
$("#other-cost-toggle").click(function(event) {
	event.preventDefault();
	$('#other-costs-container').removeClass("hide");
});
});