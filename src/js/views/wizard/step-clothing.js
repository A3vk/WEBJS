import WizardView from './wizard-view';

export default class StepClothing extends WizardView {
	render() {
		let inputs = [];

		let colorLabel = document.createElement('label');
		colorLabel.innerHTML = 'Kleur';
		inputs.push(colorLabel);

		let colorInput = document.createElement('input');
		colorInput.className = 'form-control';
		colorInput.type = 'color';
		inputs.push(colorInput);

		let sizeLabel = document.createElement('label');
		sizeLabel.innerHTML = 'Maat';
		inputs.push(sizeLabel);

		let sizeInput = document.createElement('input');
		sizeInput.className = 'form-control';
		inputs.push(sizeInput);

		super.render(inputs);
	}
}
