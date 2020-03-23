import { storageKey } from '../helpers/storage-helper';

export default class Warehouse {
	constructor(type) {
		this.type = type;

		// Get the types storage data
		let storageData = JSON.parse(localStorage.getItem(storageKey))[this.type];
		// Get product data
		this.products = storageData.products;
		// Get the warehouse data
		this.warehouse = storageData.warehouse;
	}

	saveProduct(product) {
		// Set the right id
		if (this.products.length === 0) {
			product.id = 1;
		} else {
			product.id = this.products[this.products.length - 1].id + 1;
		}

		// Add to list
		this.products.push(product);

		// Save
		let storageData = JSON.parse(localStorage.getItem(storageKey));
		storageData[this.type].products.push(product);
		localStorage.setItem(storageKey, JSON.stringify(storageData));
	}

	updateProduct(product) {}

	getProduct(x, y) {
		for (const product in this.products) {
			if (this.products.hasOwnProperty(product)) {
				const element = this.products[product];
				if (element.id === this.warehouse[y][x]) {
					return element;
				}
			}
		}
		return null;
	}
}
