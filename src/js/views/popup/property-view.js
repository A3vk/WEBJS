export default class PropertyView {
	render(properties) {
		let container = document.querySelector('.properties');
		container.innerHTML = '';

		let header = document.createElement('div');
		header.className = 'header';
		header.innerText = 'Eigenschappen';
		container.appendChild(header);

		let propertyList = document.createElement('ul');
		propertyList.className = 'list-group';

		if (properties) {
			properties.forEach((property) => {
				propertyList.appendChild(this.createListItem(property));
			});
		}
		container.appendChild(propertyList);

		let addDiv = document.createElement('div');
		addDiv.className = 'add';

		let addButton = document.createElement('button');
		addButton.className = 'btn btn-primary';
		addButton.innerText = 'Toevoegen';
		addButton.addEventListener('click', () => {
			let list = document.querySelector('.properties .list-group');
			list.appendChild(this.createListItem(''));
		});

		container.appendChild(addButton);
	}

	createListItem(property) {
		let listItem = document.createElement('li');
		listItem.className = 'list-group-item';

		let input = document.createElement('input');
		input.type = 'text';
		input.className = 'property';
		input.value = property;
		listItem.appendChild(input);

		let deleteButton = document.createElement('button');
		deleteButton.className = 'btn btn-danger';
		deleteButton.innerText = 'Delete';
		deleteButton.addEventListener('click', (e) => {
			let li = e.target.parentNode;
			li.parentNode.removeChild(li);
		});
		listItem.appendChild(deleteButton);

		return listItem;
	}

	getProperties() {
		let listItems = document.querySelectorAll('.properties .list-group .list-group-item input');
		let properties = [];
		listItems.forEach((item) => {
			properties.push(item.value);
		});
		return properties;
	}
}
