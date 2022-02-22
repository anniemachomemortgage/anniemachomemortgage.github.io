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
		if (resource['categories'] instanceof Array) {
			const categoryText = document.createTextNode('Categories: ');
			const categoryList = document.createElement('ul');
			resource['categories'].forEach(category => {
			  const categoryItem = document.createElement('li');
			  const categoryItemText = document.createTextNode(category);
			  categoryItem.appendChild(categoryItemText);
			  categoryList.appendChild(categoryItem);
			});
			listElement.appendChild(document.createElement('br'));
			listElement.appendChild(categoryText);
			listElement.appendChild(categoryList);
		  } 
		// const resourceCategories = document.createTextNode(resource['categories']);
		// listElement.appendChild(resourceCategories);
		// resourceList.appendChild(listElement);
	});
	selector.appendChild(resourceList);
}
loadResourceCenter('./learningcenter.json').then(buildResourceCenter);