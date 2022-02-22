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
		const attributeLink = document.createAttribute('href');
		const articleTitleText = document.createTextNode(resource['title']);
		articleTitle.appendChild(articleTitleText);
		resourceListing.appendChild(articleTitle);
		const urlContainer = document.createElement('span');
		const articleURL = document.createTextNode(resource['url']);
		urlContainer.appendChild(articleURL);
		resourceListing.appendChild(urlContainer);
		attributeLink.value = articleURL;
		articleTitle.setAttributeNode(attributeLink);
		const articleSummary = document.createTextNode(`Summary: ${resource['description']}`);
		resourceListing.appendChild(document.createElement('br'));
		resourceListing.appendChild(articleSummary);
		resourceList.appendChild(resourceListing);
	});
	selector.appendChild(resourceList);
}
loadResourceCenter('./learningcenter.json').then(buildResourceCenter);