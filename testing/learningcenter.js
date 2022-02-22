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
		if (book['awards'] instanceof Array) {
			const awardText = document.createTextNode('Awards: ');
			const awardList = document.createElement('ul');
			book['awards'].forEach(award => {
			  const awardItem = document.createElement('li');
			  const awardItemText = document.createTextNode(award);
			  awardItem.appendChild(awardItemText);
			  awardList.appendChild(awardItem);
			});
			bookItem.appendChild(document.createElement('br'));
			bookItem.appendChild(awardText);
			bookItem.appendChild(awardList);
		  }
		const resourceCategories = document.createTextNode(resource['categories']);
		listElement.appendChild(resourceCategories);
		resourceList.appendChild(listElement);
	});
	selector.appendChild(resourceList);
}
loadResourceCenter('./learningcenter.json').then(buildResourceCenter);