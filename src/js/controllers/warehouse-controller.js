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

	getTypes() {
		let types = [];
		for (var key in this.warehouses) {
			types.push(this.warehouses[key].type);
		}
		return types;
	}

	getProductNamesAndId(type){
		let products = {};

		this.warehouses[type].products.forEach(p => {
			products[p.id] = p.name;
		});
		return products;
	}

	getProductName(type, id){
		for (let i  in this.warehouses[type].products){
			if (this.warehouses[type].products[i].id == id){
				return this.warehouses[type].products[i].name;
			}
		};
		return '';
	}

	getGrid(type) {
		return this.warehouses[type].warehouse;
	}

	getProductImage(type, id ){
		for (let i  in this.warehouses[type].products){
			if (this.warehouses[type].products[i].id == id){
				return this.warehouses[type].products[i].image;
			}
			else if (this.warehouses[type].products[i].id == id){
				return this.warehouses[type].products[i].image;
			}
		};
	}

	saveProductPosition(type, id, y, x){
		this.warehouses[type].saveProductPosition(id, y, x);
	}
}
