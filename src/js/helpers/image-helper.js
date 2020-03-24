import { storageKey } from './storage-helper';

const crypto = require('crypto');

export default class ImageHelper {
	constructor() {
		this.canvas = document.createElement('canvas');
		this.context = this.canvas.getContext('2d');
	}

	createImage(width = 55, height = 55) {
		this.canvas.height = height;
		this.canvas.width = width;

		var imageData = this.context.createImageData(width, height);
		var red = (Math.random() * 256) | 0;
		var green = (Math.random() * 256) | 0;
		var blue = (Math.random() * 256) | 0;

		var data = imageData.data;
		for (var i = 0; i < height * width; i++) {
			data[i * 4 + 0] = red;
			data[i * 4 + 1] = green;
			data[i * 4 + 2] = blue;
			data[i * 4 + 3] = 255;
		}
		this.context.putImageData(imageData, 0, 0);

		return this.canvas.toDataURL();
	}

	getKey(image) {
		return crypto.createHash('sha1').update(image).digest('hex');
	}

	saveImage(image) {
		let key = this.getKey(image);
		localStorage.setItem(key, image);
		return key;
	}

	getImage(key) {
		return localStorage.getItem(key);
	}

	clearUnusedImages() {
		let storageData = JSON.parse(localStorage.getItem(storageKey));
		let allProducts = [];
		allProducts = allProducts.concat(storageData.clothing.products);
		allProducts = allProducts.concat(storageData.decoration.products);
		allProducts = allProducts.concat(storageData.beautification.products);

		let allImageKeys = [];
		allImageKeys = allImageKeys.concat(allProducts.map((p) => p.image));
		allImageKeys = allImageKeys.concat(allProducts.map((p) => p.drawing));
		allImageKeys = allImageKeys.filter(Boolean);

		let localStorageKeys = Object.entries(localStorage).map((p) => p[0]);
		localStorageKeys.forEach((key) => {
			if (!allImageKeys.includes(key) && key !== storageKey) {
				localStorage.removeItem(key);
			}
		});
	}
}
