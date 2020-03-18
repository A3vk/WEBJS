import StepZero from '../views/wizard/step-zero';
import StepOne from '../views/wizard/step-one';
import Product from '../models/product';

export default class WizardController {
	constructor() {
		this.product = new Product();
		this.container = document.querySelector('.wizard');

		this.view = new StepZero();
		this.view.render(this.container);
		this.view.onNext = (name) => {
			this.product.name = name;
			this.view = new StepOne();
			this.view.render(this.container);
		};
	}
}
