import GridView from '../views/grid/grid-view';
import PopupView from '../views/popup/popup-view';

export default class GridController {
	constructor(warehouseController) {
		this.warehouseController = warehouseController;
		this.gridView = new GridView();
	}

	switchGrid(type) {
		this.type = type;
		let grid = this.warehouseController.getGrid(type);

		this.gridView.getProductImage = (id) => {
			return this.warehouseController.getProductImage(this.type, id);
		}

		this.gridView.saveProductPosition = (id, y, x) => {
			this.warehouseController.saveProductPosition(this.type, id, y, x);
		}

		this.popupView = new PopupView(this.warehouseController);

		this.gridView.openPopup = (x, y) => {
			this.popupView.open(x, y);
		};

		this.gridView.getProductPosition = (id) => {
			return this.warehouseController.getProductPosition(this.type, id);
		}

		this.gridView.getProductPosition = (id) => {
			return this.warehouseController.getProductPosition(this.type, id);
		}
		this.gridView.render(grid);
	}
}
