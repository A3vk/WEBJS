import { storageKey } from './storage-helper';

const crypto = require('crypto');

export default class ImageHelper {
	constructor() {}

	createImage(width = 55, height = 55) {
		let canvas = document.createElement('canvas');
		let context = canvas.getContext('2d');
		canvas.height = height;
		canvas.width = width;

		let imageData = context.createImageData(width, height);
		let red = (Math.random() * 256) | 0;
		let green = (Math.random() * 256) | 0;
		let blue = (Math.random() * 256) | 0;

		let data = imageData.data;
		for (let i = 0; i < height * width; i++) {
			data[i * 4 + 0] = red;
			data[i * 4 + 1] = green;
			data[i * 4 + 2] = blue;
			data[i * 4 + 3] = 255;
		}
		context.putImageData(imageData, 0, 0);

		return this.saveImage(canvas.toDataURL());
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
