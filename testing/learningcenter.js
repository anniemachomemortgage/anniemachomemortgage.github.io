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
	const resourceList = document.createElement('div');
	data.forEach(resource => {
		const divElement = document.createElement('div');
		const anchorElement = document.createElement('a');
		const attributeLink = document.createAttribute('href');
		attributeLink.value = resource['url'];
		anchorElement.setAttributeNode(attributeLink);
		const resourceTitle = document.createTextNode(resource['title']);
		anchorElement.appendChild(resourceTitle);
		divElement.appendChild(anchorElement);
		divElement.appendChild(document.createElement('br'));
		const resourceDescription = document.createTextNode(resource['description']);
		divElement.appendChild(resourceDescription);
		divElement.appendChild(document.createElement('br'));
		const categoryText = document.createTextNode('Categories: ');
		divElement.appendChild(categoryText);
		// 	const categoryText = document.createTextNode('Categories: ');
		// 	const categoryList = document.createElement('ul');
		// 	const categoriesItemText = document.createTextNode(resource['categories']);
		// 	divElement.appendChild(categoryText);
		// 	divElement.appendChild(categoriesItemText);
		// 	categoryList.appendChild(divElement);


		// const resourceCategories = document.createTextNode(resource['categories']);
		// divElement.appendChild(resourceCategories);
		// resourceList.appendChild(divElement);
	});
	selector.appendChild(resourceList);
}
loadResourceCenter('./learningcenter.json').then(buildResourceCenter);