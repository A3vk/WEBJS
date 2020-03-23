import GridView from '../views/grid/grid-view';
import PopupView from '../views/popup/popup-view';

export default class GridController {
	constructor(warehouseController) {
		this.warehouseController = warehouseController;
	}

	switchGrid(type) {
		this.popupView = new PopupView(this.warehouseController);

		let grid = this.warehouseController.getGrid(type);
		this.view = new GridView(grid);
		this.view.openPopup = (x, y) => {
			this.popupView.open(x, y);
		};
	}
}
