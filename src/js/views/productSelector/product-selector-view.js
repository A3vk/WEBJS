export default class ProductSelectorView {
	render(products) {
		let productSelectorContainer = document.querySelector('.product-selector');
		productSelectorContainer.innerHTML = '';

		let trashcanContainer = document.querySelector('.trashcan');
		trashcanContainer.innerHTML = '';

		let selectedProductContainer = document.querySelector('.selected-product-container');
		selectedProductContainer.innerHTML = '';
		let selectedProductLabel = document.createElement('label');
		selectedProductLabel.innerText = 'Geselecteerd';
		this.selectedProduct = document.createElement('div');
		this.selectedProduct.className = 'selected-product';

		selectedProductContainer.append(selectedProductLabel);
		selectedProductContainer.append(this.selectedProduct);

		this.selector = document.createElement('select');
		this.selector.className = 'col-md-9 product';

		Object.entries(products).forEach(([ key, value ]) => {
			let product = document.createElement('option');
			product.className = 'product';
			product.innerText = value;
			product.value = key;
			this.selector.append(product);
		});

		let button = document.createElement('button');
		button.innerText = 'Add';
		button.className = 'col-md-3';
		button.addEventListener('click', () => {
			let image = document.createElement('img');

			if (this.selectedProduct.children.length === 0 && this.selector.options.length !== 0) {
				for (let i = 0; i < this.selector.options.length; i++) {
					let option = this.selector.options[i];
					if (option.selected === true) {
						this.source = this.getProductImage(option.value);
						this.selector.removeChild(option);
						image.id = option.value;
					}
				}
				this.selectedProduct.innerHTML = '';

				image.src = this.source;

				image.draggable = true;
				image.ondragstart = (ev) => {
					ev.dataTransfer.setData('text', ev.target.id);
				};
				this.selectedProduct.append(image);
			}
		});

		productSelectorContainer.append(this.selector);
		productSelectorContainer.append(button);

		let label = document.createElement('label');
		label.innerText = 'Deselecteren';
		let trashcan = document.createElement('div');
		trashcan.className = 'selected-product';

		trashcan.ondragover = (ev) => {
			ev.preventDefault();
		};

		trashcan.ondrop = (ev) => {
			let id = ev.dataTransfer.getData('text');

			try {
				let postion = this.getProductPosition(id);
				if (postion != undefined) {
					this.saveProductPosition(0, postion[0], postion[1]);
				}

				this.selectedProduct.innerHTML = '';
				this.updateSelector(id);
				ev.target.appendChild(document.getElementById(id));
				trashcan.innerHTML = '';
			} catch (err) {
				return;
			}
		};
		trashcanContainer.append(label);
		trashcanContainer.append(trashcan);
	}

	updateSelector(id) {
		let name = this.getProductName(id);
		let option = document.createElement('option');
		option.value = id;
		option.innerText = name;
		this.selector.append(option);
	}
}
