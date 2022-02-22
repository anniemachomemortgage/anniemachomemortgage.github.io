async function loadResourceCenter(requestURL) {
	const response = await fetch(requestURL, {
		headers: {
			'Accept': 'application/json'
		}
	});
	return await response.json();
}
function buildResourceCenter(data) {
	const selector = document.querySelector('#resource-list');
	const resourceList = document.createElement('ul');
	data.forEach(resource => {
		const resourceListing = document.createElement('li');
		const title = document.createElement('a');
		const titleText = document.createTextNode(resource['title']);
		title.appendChild(titleText);
		resourceListing.appendChild(title);
		const urlContainer = document.createElement('span');
		const urlLink = document.createTextNode(resource['url']);
		urlContainer.appendChild(urlLink);
		resourceListing.appendChild(urlContainer);
		const summaryText = document.createTextNode(`Summary: ${resource['description']}`);
		resourceListing.appendChild(document.createElement('br'));
		resourceListing.appendChild(summaryText);
		resourceList.appendChild(resourceListing);
	});
	selector.appendChild(resourceList);
}
loadResourceCenter('./learningcenter.json').then(buildResourceCenter);

$(function() {
	const list = $("li");
	const listLinkAttribute = $("li a");
	const URLstorage = $("li span");
	$( list ).each(function() {
		var URL = URLstorage;
		$(listLinkAttribute).attr('href', URL);
	});
	URLstorage.remove();
});