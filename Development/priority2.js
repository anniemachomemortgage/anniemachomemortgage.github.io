$(function() {
	$("#menu-toggle").click(function(event) {
		$("#sub-menu").fadeToggle("slow");
	});
	function formLeadPaginationToggles(pagenumber, togglepageback, togglepageforward) {
		const $currentPage = $('#page-' + pagenumber);
		const $togglepageforward = $('#toggle-page-' + togglepageforward);
		const $togglepageback = $('#toggle-page-back-' + togglepageback);
		$('#toggle-page-' + togglepageforward).on('click', function() {
			if($("section").hasClass("inactive")) {
				$("section").addClass("active-page");
			};
			$pagenumber.show();
			$pagenumber.find('section').toggleClass('inactive');
			$pagenumber.find('section').toggleClass('active-page');
		});
	}
	formLeadPaginationToggles('1', 'start', '2');
	formLeadPaginationToggles('2', '1', '3');
	formLeadPaginationToggles('3', '2', '4');
	formLeadPaginationToggles('4', '3', '5');
	formLeadPaginationToggles('5', '4', 'finish');	
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
// 		<button id="toggle-back-page-start" class="invisible">Previous</button>
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