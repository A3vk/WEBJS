import Warehouse from '../models/warehouse';

export default class WarehouseController {
	constructor() {
		this.warehouses = {
			clothing: new Warehouse('clothing'),
			decoration: new Warehouse('decoration'),
			beautification: new Warehouse('beautification')
		};
	}

	saveProduct(product) {
		this.warehouses[product.type].saveProduct(product);
	}
}
