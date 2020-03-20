export default class WizardView {
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

		inputs.forEach((input) => {
			wizard.appendChild(input);
		});
		wizard.appendChild(button);

		container.appendChild(title);
		container.appendChild(wizard);
	}
}
