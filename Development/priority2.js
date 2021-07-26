$(function() {
	$("#menu-toggle").click(function(event) {
		$("#sub-menu").fadeToggle("slow");
	});
	// Function for navigation to different section with only one section having an active class at a time. Inactive classes are hidden in the CSS.
	function formLeadPaginationToggles(pagenumber, previouspage, nextpage) {
		// Hold constants for each of the page numbers, passing parameters for what each toggle page is, the next section number for the next button, and the previous section number for the previous button.
		const $currentPage = $('#page-' + pagenumber);
		const $nextPage = $('#toggle-page-' + nextpage);
		const $previousPage = $('#toggle-page-back-' + previouspage);
		// On each next page, remove the active-page class which shows the current section and add the class of inactive to hide it. Remove the class inactive from next page (+1) to show it and add the class active-page.
		$(nextPage).on('click', function() {
			$($currentPage).removeClass("active-page");
			$($currentPage).addClass("inactive");
			$($currentPage + 1).removeClass("inactive");
			$($currentPage + 1).addClass("active-page");
		});
		// On each previous page, remove the active page class from the current section and add the inactive class. Do the same with the previous page, but reverse.
		$(previousPage).on('click', function() {
			$($currentPage).removeClass("active-page");
			$($currentPage).addClass("inactive");
			$($currentPage - 1).removeClass("inactive");
			$($currentPage - 1).addClass("active-page");
		});
	}
	formLeadPaginationToggles('1', '0', '2');
	formLeadPaginationToggles('2', '1', '3');
	formLeadPaginationToggles('3', '2', '4');
	formLeadPaginationToggles('4', '3', '5');
	formLeadPaginationToggles('5', '4', '6');	
});