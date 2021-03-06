// Initial Resource Setup - all works as expected
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
		// Defining Resource Elements - all works as expected
		const ul = document.createElement('ul');
		const li = document.createElement('li');
		const div = document.createElement('div');
		const paragraph = document.createElement('p');
		const categoryDiv = document.createElement('div');
		const summaryDiv = document.createElement('div');
		const a = document.createElement('a');
		const img = document.createElement('img');
		const summarySpan = document.createElement('span');
		const categorySpan = document.createElement('span');
		const title = document.createTextNode(resource['title']);
		const summary = document.createTextNode(resource['description']);
		const categories = document.createTextNode(resource['categories']);
		const summaryText = document.createTextNode('Summary');
		// Defining Attributes - all works as expected
		const src = document.createAttribute('src');
		const href = document.createAttribute('href');
		const ulClass = document.createAttribute('class');
		const liClass = document.createAttribute('class');
		const divClass = document.createAttribute('class');
		const categoryDivClass = document.createAttribute('class');
		const summaryDivClass = document.createAttribute('class');
		// Assigning Attributes - all works as expected
		src.value = resource['image'];
		href.value = resource['url'];
		divClass.value = "header-container";
		liClass.value = "resource-main-container";
		categoryDivClass.value = "category-container";
		summaryDivClass.value = "summary-container";
		// Applying Attributes - all works as expected
		div.setAttributeNode(divClass);
		img.setAttributeNode(src);
		a.setAttributeNode(href);
		li.setAttributeNode(liClass);
		categoryDiv.setAttributeNode(categoryDivClass);
		summaryDiv.setAttributeNode(summaryDivClass);
		// Appending to DOM - all works as expected
		li.appendChild(div);
		div.appendChild(img);
		a.appendChild(title);
		div.appendChild(a);
		li.appendChild(summaryDiv);
		summaryDiv.appendChild(summarySpan);
		summarySpan.appendChild(summaryText);
		summaryDiv.appendChild(paragraph);
		paragraph.appendChild(summary);
		if (resource['categories'] instanceof Array) {
			li.appendChild(categoryDiv);
			const categoryText = document.createTextNode('Categories');
			const categoryList = document.createElement('ul');
			const categoryULClass = document.createAttribute('class');
			categoryULClass.value = "category-list-container";
			categoryList.setAttributeNode(categoryULClass);
			resource['categories'].forEach(category => {
				const categoryItem = document.createElement('li');
				const categoryListClass = document.createAttribute('class');
				categoryListClass.value = "category-list";
				categoryItem.setAttributeNode(categoryListClass);
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

// TO DO FROM HERE:
// 1. Index the category-list class innerHTML for each of the categories, then apply that category as a class.
// 2. Add toggle functionality to the list of categories under the search bar to hide those that are not within that category.
// 3. Add search functionality to the search box upon keyup, keydown to index the list of resources and hide ones that don't contain that text string.