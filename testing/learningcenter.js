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
		const a = document.createElement('a');
		const img = document.createElement('img');
		const div = document.createElement('div');
		const attr = document.createAttribute('href');
		const src = document.createAttribute('src');
		const title = document.createTextNode(resource['title']);
		const summary = document.createTextNode(resource['description']);
		const categories = document.createTextNode(resource['categories']);
		
		// Assigning Attributes
		attr.value = resource['url'];
		src.value = resource['image'];
		a.setAttributeNode(attr);
		img.setAttributeNode(src);
		a.appendChild(title);
		categories.appendChild(div);
		
		// Appending to DOM
		li.appendChild(img);
		li.appendChild(document.createElement('br'));
		li.appendChild(a);
		li.appendChild(document.createElement('br'));
		li.appendChild(summary);
		li.appendChild(document.createElement('br'));
		li.appendChild(span);
		resourceList.appendChild(li);
	});
	selector.appendChild(resourceList);
}
loadResourceCenter('./learningcenter.json').then(buildResourceCenter);