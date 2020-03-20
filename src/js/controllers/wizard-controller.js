import Product from '../models/product';
import StepZero from '../views/wizard/step-zero';
import StepOne from '../views/wizard/step-one';
import StepTwo from '../views/wizard/step-two';
import StepClothing from '../views/wizard/step-clothing';
import StepDecoration from '../views/wizard/step-decoration';
import StepBeautification from '../views/wizard/step-beautification';
import StepConfirmation from '../views/wizard/step-confirmation';

export default class WizardController {
	constructor(tab) {
		this.product = new Product();
		this.product.type = tab;

		this.views = [];

		this.views[0] = new StepZero();
		this.views[1] = new StepOne();
		this.views[2] = new StepTwo();

		this.tab = tab;
		switch (this.tab) {
			case 'Clothing':
				this.views[3] = new StepClothing();
				break;
			case 'Decoration':
				this.views[3] = new StepDecoration();
				break;
			case 'Beautification':
				this.views[3] = new StepBeautification();
				break;
		}

		this.views[4] = new StepConfirmation();

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
						case 'Kleding':
							this.product.color = data[0];
							this.product.size = data[1];
							break;
						case 'Decoratie':
							this.product.weight = Math.round(data[0] * 100) / 100;
							break;
						case 'Tierlantijn':
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
				console.log(this.product);

				// Reset the wizard
				this.reset();
			}
		};
	}

	reset() {
		this.product = new Product();
		this.product.type = this.tab;
		this.counter = 0;
		this.next();
	}
}
