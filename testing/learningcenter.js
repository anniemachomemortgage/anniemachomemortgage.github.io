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
	const resourceContainer = document.createElement('div');
	data.forEach(resource => {
		const divElement = document.createElement('div');
		const listElement = document.createElement('li');
		const anchorElement = document.createElement('a');
		const attributeLink = document.createAttribute('href');
		const anchorElementText = document.createTextNode(resource['title']);
		const resourceDescription = document.createTextNode(resource['description']);
		attributeLink.value = resource['url'];
		anchorElement.setAttributeNode(attributeLink);
		anchorElement.appendChild(anchorElementText);
		divElement.appendChild(anchorElement);
		divElement.appendChild(document.createElement('br'));
		divElement.appendChild(resourceDescription);
		resourceContainer.appendChild(divElement);
	});
	selector.appendChild(resourceList);
}
loadResourceCenter('./learningcenter.json').then(buildResourceCenter);