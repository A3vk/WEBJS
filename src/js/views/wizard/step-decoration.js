import WizardView from './wizard-view';

export default class StepDecoration extends WizardView {
	render() {
		let inputs = [];

		let weightLabel = document.createElement('label');
		weightLabel.innerHTML = 'Gewicht';
		inputs.push(weightLabel);

		let weightInput = document.createElement('input');
		weightInput.className = 'form-control';
		weightInput.type = 'number';
		inputs.push(weightInput);

		super.render(inputs);
	}
}
