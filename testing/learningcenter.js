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
		const articleTitle = document.createElement('a');
		const articleTitleText = document.createTextNode(resource['title']);
		articleTitle.appendChild(articleTitleText);
		resourceListing.appendChild(articleTitle);
		const urlContainer = document.createElement('span');
		const articleURL = document.createTextNode(resource['url']);
		urlContainer.appendChild(articleURL);
		resourceListing.appendChild(urlContainer);
		const articleSummary = document.createTextNode(`Summary: ${resource['description']}`);
		resourceListing.appendChild(document.createElement('br'));
		resourceListing.appendChild(articleSummary);
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