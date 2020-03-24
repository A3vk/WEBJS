export default class CalculatorController {
	constructor() {
		this.inputField = document.querySelector('.inputs');
		this.inputCount = 1;
		this.maxInputs = 10;
		this.history = [];
		this.isOpen = false;

		document.querySelector('#add').addEventListener('click', () => {
			this.addTemplate('+');
		});
		document.querySelector('#sub').addEventListener('click', () => {
			this.addTemplate('-');
		});
		document.querySelector('#mul').addEventListener('click', () => {
			this.addTemplate('*');
		});
		document.querySelector('#div').addEventListener('click', () => {
			this.addTemplate('/');
		});
		document.querySelector('#close').addEventListener('click', () => {
			this.hide();
		});

		document.querySelector('#undo').addEventListener('click', () => {
			let inputs = document.querySelector('.inputs');
			let element;
			for (let i = this.history.length - 1; i >= 0; i--) {
				if (this.history[i].method === 'add') {
					element = this.history[i];
					break;
				}
			}

			if (element) {
				inputs.removeChild(element.elements[0]);
				inputs.removeChild(element.elements[1]);
				const index = this.history.indexOf(element);
				if (index > -1) {
					this.history.splice(index, 1);
				}

				this.history.push({
					method: 'remove',
					elements: element.elements
				});
			}
		});
		document.querySelector('#redo').addEventListener('click', () => {
			let inputs = document.querySelector('.inputs');
			let element;
			for (let i = this.history.length - 1; i >= 0; i--) {
				if (this.history[i].method === 'remove') {
					element = this.history[i];
					break;
				}
			}

			if (element) {
				inputs.appendChild(element.elements[0]);
				inputs.appendChild(element.elements[1]);
				const index = this.history.indexOf(element);
				if (index > -1) {
					this.history.splice(index, 1);
				}

				this.history.push({
					method: 'add',
					elements: element.elements
				});
			}
		});

		this.reset();
	}

	addTemplate(operator) {
		if (this.inputCount < this.maxInputs) {
			let operatorDiv = document.createElement('div');
			operatorDiv.classList.add('operator');
			operatorDiv.innerText = operator;

			let input = document.createElement('input');
			input.type = 'number';
			input.value = 0;
			input.oninput = () => {
				this.calculateAnswers();
			};

			let answer = document.createElement('div');
			answer.className = 'answer';
			answer.innerText = '=0';

			let sumDiv = document.createElement('div');
			sumDiv.classList.add('sum');
			sumDiv.appendChild(input);
			sumDiv.appendChild(answer);

			this.inputField.appendChild(operatorDiv);
			this.inputField.appendChild(sumDiv);
			this.inputCount++;

			this.history.push({
				method: 'add',
				elements: [ operatorDiv, sumDiv ]
			});

			this.calculateAnswers();
		}
	}

	calculateAnswers() {
		let inputs = document.querySelectorAll('.inputs input');
		let operators = document.querySelectorAll('.inputs .operator');
		let answers = document.querySelectorAll('.inputs .answer');

		let operatorFunctions = {
			'+': function(a, b) {
				return a + b;
			},
			'-': function(a, b) {
				return a - b;
			},
			'*': function(a, b) {
				return a * b;
			},
			'/': function(a, b) {
				return a / b;
			}
		};

		for (let i = 1; i < inputs.length; i++) {
			let answer = 0;
			if (i === 1) {
				answer = operatorFunctions[operators[i - 1].innerText](
					parseFloat(inputs[i - 1].value),
					parseFloat(inputs[i].value)
				);
			} else {
				let previousAnswer = answers[i - 2].innerText;
				answer = operatorFunctions[operators[i - 1].innerText](
					parseFloat(previousAnswer.slice(1, previousAnswer.length)),
					parseFloat(inputs[i].value)
				);
			}
			answers[i - 1].innerText = '=' + answer.toString();
		}
	}

	reset() {
		let inputField = document.querySelector('.inputs');
		inputField.innerHTML = '';

		let numberInput = document.createElement('input');
		numberInput.type = 'number';
		numberInput.value = 0;
		numberInput.oninput = () => {
			this.calculateAnswers();
		};
		inputField.appendChild(numberInput);
	}

	show() {
		this.reset();
		this.isOpen = true;
		let modal = document.querySelector('.calculator-modal');
		modal.classList.remove('hidden');
	}

	hide() {
		this.isOpen = false;
		let modal = document.querySelector('.calculator-modal');
		modal.classList.add('hidden');
	}
}
