export default class WizardView {
	constructor(controller) {
		this.controller = controller;
	}

	render(inputs, last = false) {
		let container = document.querySelector('.wizard-container');
		container.innerHTML = '';

		let title = document.createElement('h1');
		title.innerText = 'Product toevoegen';

		let wizard = document.createElement('div');
		wizard.className = 'wizard';

		let button = document.createElement('button');
		button.className = 'btn btn-primary';

		if (last) {
			button.innerHTML = 'Volgend product toevoegen';
		} else {
			button.innerHTML = 'Volgende stap';
		}

		button.addEventListener('click', () => {
			// Select all inputs
			let inputs = document.querySelector('.wizard').querySelectorAll('input, select, checkbox, textarea');

			// Get the input values
			let data = [];
			inputs.forEach((input) => {
				data.push(input.value);
			});

			// Render next step
			this.onNext(data);
		});

		let closeButton = document.createElement('button');
		closeButton.className = 'btn btn-danger close-button';
		closeButton.innerText = 'X';
		closeButton.addEventListener('click', () => {
			this.controller.reset();
		});
		wizard.appendChild(closeButton);

		inputs.forEach((input) => {
			wizard.appendChild(input);
		});
		wizard.appendChild(button);

		container.appendChild(title);
		container.appendChild(wizard);
	}
}
