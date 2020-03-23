import WizardView from './wizard-view';

export default class StepZero extends WizardView {
	constructor(controller) {
		super(controller);
	}

	render() {
		let inputs = [];

		let nameLabel = document.createElement('label');
		nameLabel.innerHTML = 'Naam';
		inputs.push(nameLabel);

		let nameInput = document.createElement('input');
		nameInput.className = 'form-control';
		inputs.push(nameInput);

		let descriptionLabel = document.createElement('label');
		descriptionLabel.innerHTML = 'Beschrijving';
		inputs.push(descriptionLabel);

		let descriptionInput = document.createElement('textarea');
		descriptionInput.className = 'form-control';
		inputs.push(descriptionInput);

		super.render(inputs);
	}
}
