$(document).ready(function() {
	$("#product-type-toggle").click(function(event) {
		$("#index_only").addClass('hidden');
		$("#loan-products-section-display").removeClass('hidden');
		$("#team-member-section-display").addClass('hidden');
	});
	$("#expand-sam").click(function(event) {
		$("#sam").addClass('active-biography');
		$("#biography-triggered-sam").removeClass('hidden');
	});
	$("#expand-earnest").click(function(event) {
		$("#earnest").addClass('active-biography');
		$("#biography-triggered-earnest").removeClass('hidden');
	});
	$("#expand-jeff").click(function(event) {
		$("#jeff").addClass('active-biography');
		$("#biography-triggered-jeff").removeClass('hidden');
	});
	$("#expand-dylan").click(function(event) {
		$("#dylan").addClass('active-biography');
		$("#biography-triggered-dylan").removeClass('hidden');
	});
	$("#expand-duane").click(function(event) {
		$("#duane").addClass('active-biography');
		$("#biography-triggered-duane").removeClass('hidden');
	});
});