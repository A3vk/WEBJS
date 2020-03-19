import StepZero from '../views/wizard/step-zero';
import StepOne from '../views/wizard/step-one';
import StepTwo from '../views/wizard/step-two';
import Product from '../models/product';

export default class WizardController {
	constructor() {
		this.product = new Product();
		this.views = [];

		this.views[0] = new StepZero();
		this.views[1] = new StepOne();
		this.views[2] = new StepTwo();

		this.container = document.querySelector('.wizard');
		this.counter = 0;
		this.next();
	}

	next() {
		this.view = this.views[this.counter];
		this.view.render(this.container);
		this.view.onNext = (data) => {
			this.counter++;
			this.next();
		};
	}
}
