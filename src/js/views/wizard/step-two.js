import WizardView from './wizard-view';

export default class StepTwo extends WizardView {
	render() {
		let inputs = [];

		let minimalStockLabel = document.createElement('label');
		minimalStockLabel.innerHTML = 'Minimale voorraad';
		inputs.push(minimalStockLabel);

		let minimalStockInput = document.createElement('input');
		minimalStockInput.className = 'form-control';
		minimalStockInput.type = 'number';
		minimalStockInput.min = 0;
		inputs.push(minimalStockInput);

		let stockLabel = document.createElement('label');
		stockLabel.innerHTML = 'Huidige voorrad';
		inputs.push(stockLabel);

		let stockInput = document.createElement('input');
		stockInput.className = 'form-control';
		stockInput.type = 'number';
		stockInput.min = 0;
		inputs.push(stockInput);

		super.render(inputs);
	}
}
