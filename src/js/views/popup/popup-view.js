import PropertyView from './property-view';
import CanvasView from './canvas-view';
import NoteView from './note-view';

export default class PopupView {
	constructor(warehouseController) {
		this.warehouseController = warehouseController;
		this.propertyView = new PropertyView();
		this.noteView = new NoteView();
		this.canvasView = new CanvasView();

		let modal = document.querySelector('.product-modal');
		let container = modal.querySelector('.container');

		// Add close event handler for a click on the outside of the modal
		modal.addEventListener('click', (e) => {
			if (e.target !== modal && e.target !== container) return;

			this.saveAndClose(modal);
		});

		//Add close event handler for a click on the save button
		let closeButton = document.querySelector('.product-modal .close-save');
		closeButton.addEventListener('click', () => {
			this.saveAndClose(modal);
		});
	}

	saveAndClose(modal) {
		modal.classList.add('hidden');
		// Save the data in the modal --> image and drawn damage
		this.product.properties = this.propertyView.getProperties();
		this.product.notes = this.noteView.getNotes();

		let canvases = this.canvasView.getCanvases();
		this.product.image = canvases.image;
		this.product.drawing = canvases.drawing;

		this.warehouseController.updateProduct(this.product);
	}

	open(x, y) {
		this.product = this.warehouseController.getProduct(x, y);

		if (this.product) {
			// Initialize the modal
			this.propertyView.render(this.product.properties);
			this.noteView.render(this.product.notes);
			this.canvasView.render(this.product.image, this.product.drawing);

			let modal = document.querySelector('.product-modal');

			modal.classList.remove('hidden');
		}
	}
}
