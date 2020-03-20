export default class Product {
	constructor(type) {
		this.type = type;
	}

	toJSON() {
		// Default data
		let json = {
			id: this.id,
			type: this.type,
			name: this.name,
			description: this.description,
			purchasePrice: this.purchasePrice,
			sellingPrice: this.sellingPrice,
			minimalStock: this.minimalStock,
			stock: this.stock
		};

		// Extra data
		switch (this.type) {
			case 'clothing':
				// Clothing data (color, size)
				json.color = this.color;
				json.size = this.size;
				break;
			case 'decoration':
				// Decoration data (weight)
				json.weight = this.weight;
				break;
			case 'beautification':
				// Beautification data (size, color, pieces)
				json.size = this.size;
				json.color = this.color;
				json.pieces = this.pieces;
				break;
		}

		return json;
	}
}
