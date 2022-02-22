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
		const listContainer = document.createElement('ul');
		const listElement = document.createElement('li');
		const anchorElement = document.createElement('a');
		const image = document.createElement('img');
		const attributeLink = document.createAttribute('href');
		const srcLink = document.createAttribute('src');
		const resourceTitle = document.createTextNode(resource['title']);
		const resourceDescription = document.createTextNode(resource['description']);
		const resourceCategories = document.createTextNode(resource['categories']);
		attributeLink.value = resource['url'];
		srcLink.value = resource['image'];
		anchorElement.setAttributeNode(attributeLink);
		image.setAttributeNode(srcLink);
		anchorElement.appendChild(resourceTitle);
		listElement.appendChild(image);
		listElement.appendChild(anchorElement);
		listElement.appendChild(document.createElement('br'));
		listElement.appendChild(resourceDescription);
		listElement.appendChild(document.createElement('br'));
		listElement.appendChild(resourceCategories);
		resourceList.appendChild(listElement);
	});
	selector.appendChild(resourceList);
}
loadResourceCenter('./learningcenter.json').then(buildResourceCenter);