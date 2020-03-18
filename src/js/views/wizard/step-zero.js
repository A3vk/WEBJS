import WizardView from './wizard-view';

export default class StepZero extends WizardView {
	render(container) {
		container.innerHTML = '';

		let div = document.createElement('div');
		div.innerHTML = 'Stap: 0';
		div.className = 'step-counter';

		let label = document.createElement('label');
		label.innerHTML = 'Wat is je naam?';

		let input = document.createElement('input');
		input.className = 'form-control';

		let button = document.createElement('button');
		button.innerHTML = 'Volgende stap';
		button.className = 'btn btn-primary';

		button.addEventListener('click', () => {
			this.onNext(input.value);
		});

		container.appendChild(div);
		container.appendChild(label);
		container.appendChild(input);
		container.appendChild(button);
	}
}
