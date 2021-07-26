$(function() {
	$("#menu-toggle").click(function(event) {
		$("#sub-menu").fadeToggle("slow");
	});
	function leadCaptureProcess(selector, name) {
		const $selector = $('#' + selector);
		$('#toggle-' + selector).on('click', function() {
			if(!$(".sectional-team-members").hasClass("isolated-biography")) {
				$(".sectional-team-members").addClass("isolated-biography");
			};
			$(".detached-editity").remove();
			$('.toggled-text-header').text(name);
			$('.team-member').hide();
			$selector.show();
			$selector.find('div.team-member-portrait > div').addClass('detached-editity');
			$selector.find('div.team-member-portrait > div').detach().appendTo( $selector.parent() );
		});
	}
	leadCaptureProcess('1', '');
	leadCaptureProcess('2', '');
	leadCaptureProcess('3', '');
	leadCaptureProcess('4', '');	
});


// IDs, classes
// #page-1
// #page-2
// #page-3
// #page-4
// #page-5
// #toggle-back-page-1
// #toggle-back-page-2
// #toggle-back-page-3
// #toggle-back-page-4
// #toggle-page-2
// #toggle-page-3
// #toggle-page-4
// #toggle-page-finish
// .inactive
// .active-page

// Structure
// <section id="page-1" class="active-page">
// <h3>Question?</h3>
// <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ratione earum culpa sint eaque! Ullam accusantium iure libero enim suscipit repellendus nesciunt accusamus facilis aliquam? Mollitia modi atque animi ducimus?</p>
// <form>
// 	<label>Label</label>
// 	<input type="text" placeholder="input">
// 	<label>Label</label>
// 	<input type="text" placeholder="input">
// 	<label>Label</label>
// 	<input type="text" placeholder="input">
// 	<div class="pagination">
// 		<button class="invisible">Previous</button>
// 		<button id="toggle-page-2">Next</button>
// 	</div>
// </form>
// </section>
// <section id="page-2" class="inactive">
// <h3>Question?</h3>
// <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ratione earum culpa sint eaque! Ullam accusantium iure libero enim suscipit repellendus nesciunt accusamus facilis aliquam? Mollitia modi atque animi ducimus?</p>
// <form>
// 	<label>Label</label>
// 	<input type="text" placeholder="input">
// 	<label>Label</label>
// 	<input type="text" placeholder="input">
// 	<label>Label</label>
// 	<input type="text" placeholder="input">
// 	<div class="pagination">
// 		<button id="toggle-back-page-1">Previous</button>
// 		<button id="toggle-page-3">Next</button>
// 	</div>
// </form>
// </section>