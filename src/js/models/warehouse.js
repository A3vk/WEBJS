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

	updateProduct(product) {
		for (const p of this.products) {
			if (p.id === product.id) {
				p.properties = product.properties;
				p.notes = product.notes;
				p.image = product.image;
				p.drawing = product.drawing;

				let storageData = JSON.parse(localStorage.getItem(storageKey));
				storageData[this.type].products = this.products;
				localStorage.setItem(storageKey, JSON.stringify(storageData));
			}
		}
	}

	saveProductPosition(id, y, x){
		this.warehouse[y] [x] = parseInt(id);
		let storageData = JSON.parse(localStorage.getItem(storageKey));
		storageData[this.type].warehouse = this.warehouse;
		localStorage.setItem(storageKey, JSON.stringify(storageData));
	}

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

	getProductPosition(id){
		for (let y = 0; y < this.warehouse.length; y++){
			for (let x = 0; x < this.warehouse.length; x++){
				if (this.warehouse[y][x] == id){
					let position = [y, x];
					return position;
				}
			}
		}
	}
}
