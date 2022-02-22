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
		const listElement = document.createElement('li');
		const anchorElement = document.createElement('a');
		const attributeLink = document.createAttribute('href');
		const resourceTitle = document.createTextNode(resource['title']);
		const resourceDescription = document.createTextNode(resource['description']);
		attributeLink.value = resource['url'];
		anchorElement.setAttributeNode(attributeLink);
		anchorElement.appendChild(resourceTitle);
		listElement.appendChild(anchorElement);
		listElement.appendChild(document.createElement('br'));
		listElement.appendChild(resourceDescription);
		resourceList.appendChild(listElement);
	});
	selector.appendChild(resourceList);
}
loadResourceCenter('./learningcenter.json').then(buildResourceCenter);