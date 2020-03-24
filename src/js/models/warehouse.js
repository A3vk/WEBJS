import { storageKey } from '../helpers/storage-helper';
import ImageHelper from '../helpers/image-helper';

export default class Warehouse {
	constructor(type) {
		this.type = type;

		this.imageHelper = new ImageHelper();

		// Get the types storage data
		let storageData = JSON.parse(localStorage.getItem(storageKey))[this.type];
		// Get product data
		this.products = storageData.products;
		this.products.forEach((product) => {
			product.image = this.imageHelper.getImage(product.image);
			if (product.drawing) {
				product.drawing = this.imageHelper.getImage(product.drawing);
			}
		});
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

		//sets the price inclusing btw
		product.sellingPriceIn = product.sellingPriceEx * 1.21;

		// Add temp image
		let image = this.imageHelper.createImage();

		// Add to list
		this.products.push(product);

		// Save
		let storageData = JSON.parse(localStorage.getItem(storageKey));

		// Store the image separate
		product.image = this.imageHelper.saveImage(image);

		storageData[this.type].products.push(product);
		localStorage.setItem(storageKey, JSON.stringify(storageData));

		product.image = image;

		return product.id;
	}

	updateProduct(product) {
		for (let i = 0; i < this.products.length; i++) {
			const p = this.products[i];
			if (p.id === product.id) {
				p.properties = product.properties;
				p.notes = product.notes;
				p.image = this.imageHelper.saveImage(product.image);
				if (product.drawing) {
					p.drawing = this.imageHelper.saveImage(product.drawing);
				}

				let storageData = JSON.parse(localStorage.getItem(storageKey));
				storageData[this.type].products[i] = p;
				localStorage.setItem(storageKey, JSON.stringify(storageData));

				p.image = this.imageHelper.getImage(p.image);
				if (p.drawing) {
					p.drawing = this.imageHelper.getImage(p.drawing);
				}
			}
		}
	}

	saveProductPosition(id, y, x) {
		this.warehouse[y][x] = parseInt(id);
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

	getProductPosition(id) {
		for (let y = 0; y < this.warehouse.length; y++) {
			for (let x = 0; x < this.warehouse.length; x++) {
				if (this.warehouse[y][x] == id) {
					let position = [ y, x ];
					return position;
				}
			}
		}
	}
}
