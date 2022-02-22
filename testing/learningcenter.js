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
		// Defining Elements
		const ul = document.createElement('ul');
		const li = document.createElement('li');
		const div = document.createElement('div');
		const categoryDiv = document.createElement('div');
		const summaryDiv = document.createElement('div');
		const a = document.createElement('a');
		const img = document.createElement('img');
		const summarySpan = document.createElement('span');
		const categorySpan = document.createElement('span');
		const href = document.createAttribute('href');
		const src = document.createAttribute('src');
		const title = document.createTextNode(resource['title']);
		const summary = document.createTextNode(resource['description']);
		const categories = document.createTextNode(resource['categories']);
		// Assigning Attributes
		href.value = resource['url'];
		a.setAttributeNode(href);
		a.appendChild(title);
		src.value = resource['image'];
		img.setAttributeNode(src);
		// Appending to DOM
		li.appendChild(div);
		div.appendChild(img);
		div.appendChild(a);
		li.appendChild(summaryDiv);
		summaryDiv.appendChild(summarySpan);
		const summaryText = document.createTextNode('Summary');
		summarySpan.appendChild(summaryText);
		summaryDiv.appendChild(summary);
		if (resource['categories'] instanceof Array) {
			li.appendChild(categoryDiv);
			const categoryText = document.createTextNode('Categories');
			const categoryList = document.createElement('ul');
			resource['categories'].forEach(category => {
				const categoryItem = document.createElement('li');
				const categoryItemText = document.createTextNode(category);
				categoryItem.appendChild(categoryItemText);
				categoryList.appendChild(categoryItem);
			});
			categoryDiv.appendChild(categorySpan);
			categorySpan.appendChild(categoryText);
			categoryDiv.appendChild(categoryList);
		}
		resourceList.appendChild(li);
	});
	selector.appendChild(resourceList);
}
loadResourceCenter('./learningcenter.json').then(buildResourceCenter);