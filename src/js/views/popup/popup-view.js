import PropertyView from './property-view';
import CanvasView from './canvas-view';

export default class PopupView {
	constructor(warehouseController) {
		this.warehouseController = warehouseController;
		this.propertyView = new PropertyView();
		this.canvasView = new CanvasView();
	}

	open(x, y) {
		let product = this.warehouseController.getProduct(x, y);

		if (this.product !== null) {
			// Initialize the modal
			this.propertyView.render(product.properties);

			let modal = document.querySelector('.modal');
			let container = modal.querySelector('.container');

			modal.classList.remove('hidden');

			document.querySelector('.modal').addEventListener('click', function(e) {
				if (e.target !== modal && e.target !== container) return;
				modal.classList.add('hidden');
				// Save the data in the modal --> Properties, notes, image and drawn damage
			});
		}
	}
}
