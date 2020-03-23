import Warehouse from '../models/warehouse';

export default class WarehouseController {
	constructor() {
		this.warehouses = {
			clothing: new Warehouse('clothing'),
			decoration: new Warehouse('decoration'),
			beautification: new Warehouse('beautification')
		};

		this.currentType = 'clothing';
	}

	saveProduct(product) {
		this.warehouses[this.currentType].saveProduct(product);
	}

	updateProduct(product) {
		this.warehouses[this.currentType].updateProduct(product);
	}

	getTypes() {
		let types = [];
		for (var key in this.warehouses) {
			types.push(this.warehouses[key].type);
		}
		return types;
	}

	getGrid(type) {
		this.currentType = type;
		return this.warehouses[type].warehouse;
	}

	getProduct(x, y) {
		return this.warehouses[this.currentType].getProduct(x, y);
	}
}
