import GridView from '../views/grid/grid-view';

export default class GridController {
	constructor(warehouseController) {
		this.warehouseController = warehouseController;
		this.GridView = new GridView();
	}

	switchGrid(type) {
		this.type = type;
		let grid = this.warehouseController.getGrid(type);
		this.GridView.render(grid);

		this.GridView.getProductImage = (id) => {
			return this.warehouseController.getProductImage(this.type, id);
		}

		this.GridView.saveProductPosition = (id, y, x) => {
			this.warehouseController.saveProductPosition(this.type, id, y, x);
		}
	}
}
