import WizardView from './wizard-view';

export default class StepOne extends WizardView {
	render() {
		let inputs = [];

		let purchaseLabel = document.createElement('label');
		purchaseLabel.innerHTML = 'Aankoopprijs';
		inputs.push(purchaseLabel);

		let purchaseInput = document.createElement('input');
		purchaseInput.className = 'form-control';
		purchaseInput.type = 'number';
		purchaseInput.min = 0;
		purchaseInput.step = 0.01;
		inputs.push(purchaseInput);

		let sellingLabel = document.createElement('label');
		sellingLabel.innerHTML = 'Verkoopprijs';
		inputs.push(sellingLabel);

		let sellingInput = document.createElement('input');
		sellingInput.className = 'form-control';
		sellingInput.type = 'number';
		sellingInput.min = 0;
		sellingInput.step = 0.01;
		inputs.push(sellingInput);

		super.render(inputs);
	}
}
