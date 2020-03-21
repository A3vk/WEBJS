import { storageKey } from '../helpers/storage-helper';

export default class Warehouse {
	constructor(type) {
		this.type = type;
		this.products = [];
		this. warehouse = [];

		let data = JSON.parse(localStorage.getItem(storageKey));
		this.warehouse = data[this.type].warehouse;
	}

	saveProduct(product) {
		// Add to list
		this.products.push(product);

		// Convert to JSON string
		let productsData = JSON.stringify(this.products);

		// Save
		let data = JSON.parse(localStorage.getItem(storageKey));
		data[this.type].products = productsData;
		localStorage.setItem(storageKey, JSON.stringify(data));
	}
}
