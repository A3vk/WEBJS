import PropertyView from './property-view';
import CanvasView from './canvas-view';
import NoteView from './note-view';
import AtributeView from './atribute-view';

export default class PopupView {
	constructor(warehouseController, gridController) {
		this.warehouseController = warehouseController;
		this.gridController = gridController;
		this.propertyView = new PropertyView();
		this.noteView = new NoteView();
		this.canvasView = new CanvasView();
		this.atributeView = new AtributeView();

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
		this.gridController.updateSqaure(this.y, this.x);
	}

	open(x, y) {
		this.y = y;
		this.x = x;
		this.product = this.warehouseController.getProduct(x, y);
		let atributes = this.getAtributes(this.product);

		if (this.product) {
			// Initialize the modal
			this.propertyView.render(this.product.properties);
			this.noteView.render(this.product.notes);
			this.canvasView.render(this.product.image, this.product.drawing);
			this.atributeView.render(atributes);

			let modal = document.querySelector('.product-modal');

			modal.classList.remove('hidden');
		}
	}

	getAtributes(product){
		let atributes = {};
		for (let atribute in product){
			if (atribute === 'image'){
				return atributes
			}
			atributes[atribute] = product[atribute];
		}
	}
}
