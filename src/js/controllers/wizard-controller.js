import Product from '../models/product';
import StepZero from '../views/wizard/step-zero';
import StepOne from '../views/wizard/step-one';
import StepTwo from '../views/wizard/step-two';
import StepClothing from '../views/wizard/step-clothing';
import StepDecoration from '../views/wizard/step-decoration';
import StepBeautification from '../views/wizard/step-beautification';
import StepConfirmation from '../views/wizard/step-confirmation';

export default class WizardController {
	constructor(type, warehouseController) {
		this.warehouseController = warehouseController;

		this.product = new Product(this.type);

		this.switchWarehouse(type);
		
		this.container = document.querySelector('.wizard');
		this.counter = 0;
		this.next();
	}

	next() {
		this.view = this.views[this.counter];
		this.view.render(this.container);
		this.view.onNext = (data) => {
			switch (this.counter) {
				case 0:
					this.product.name = data[0];
					this.product.description = data[1];
					break;
				case 1:
					this.product.purchasePrice = Math.round(data[0] * 100) / 100;
					this.product.sellingPrice = Math.round(data[1] * 100) / 100;
					break;
				case 2:
					this.product.minimalStock = Math.round(data[0]);
					this.product.stock = Math.round(data[1]);
					break;
				case 3:
					switch (this.tab) {
						case 'clothing':
							this.product.color = data[0];
							this.product.size = data[1];
							break;
						case 'decoration':
							this.product.weight = Math.round(data[0] * 100) / 100;
							break;
						case 'beautification':
							this.product.size =
								Math.round(data[0] * 100) / 100 +
								' X ' +
								Math.round(data[1] * 100) / 100 +
								' X ' +
								Math.round(data[2] * 100) / 100;
							this.product.color = data[3];
							this.product.pieces = data[4];
							break;
					}
					break;
			}

			this.counter++;
			if (this.counter < this.views.length) {
				this.next();
			} else {
				// Save the product
				this.warehouseController.saveProduct(this.product);

				// Reset the wizard
				this.reset();
			}
		};
	}

	reset() {
		this.product = new Product(this.tab);
		this.counter = 0;
		this.next();
	}

	switchWarehouse(type) {
		this.type = type;

		this.views = [];

		this.views[0] = new StepZero();
		this.views[1] = new StepOne();
		this.views[2] = new StepTwo();

		switch (this.type) {
			case 'clothing':
				this.views[3] = new StepClothing();
				break;
			case 'decoration':
				this.views[3] = new StepDecoration();
				break;
			case 'beautification':
				this.views[3] = new StepBeautification();
				break;
		}

		this.views[4] = new StepConfirmation();

		this.reset();
	}
}
