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
		attributeLink.value = resource['url'];
		anchorElement.setAttributeNode(attributeLink);
		const resourceTitle = document.createTextNode(resource['title']);
		anchorElement.appendChild(resourceTitle);
		listElement.appendChild(anchorElement);
		listElement.appendChild(document.createElement('br'));
		const resourceDescription = document.createTextNode(resource['description']);
		listElement.appendChild(resourceDescription);
		listElement.appendChild(document.createElement('br'));
		const categoryList = resource['description'];
		resource['categories'].forEach(category => {
		  const categoriesItem = document.createElement('li');
		  const categoriesItemText = document.createTextNode(resource['categories']);
		  categoriesItem.appendChild(categoriesItemText);
		  categoriesList.appendChild(categoriesItem);
		});
		// const resourceCategories = document.createTextNode(resource['categories']);
		// listElement.appendChild(resourceCategories);
		// resourceList.appendChild(listElement);
	});
	selector.appendChild(resourceList);
}
loadResourceCenter('./learningcenter.json').then(buildResourceCenter);