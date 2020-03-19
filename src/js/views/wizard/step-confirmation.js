import WizardView from './wizard-view';

export default class StepConfirmation extends WizardView {
	render() {
		let inputs = [];

		let message = document.createElement('h2');
		message.innerHTML = 'Het product is succesvol toegevoegd';
		message.className = 'text-primary success-message';

		inputs.push(message);

		super.render(inputs, true);
	}
}
