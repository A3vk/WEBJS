import WizardView from './wizard-view';

export default class StepBeautification extends WizardView {
	constructor(controller) {
		super(controller);
	}

	render() {
		let inputs = [];

		let sizeLabel = document.createElement('label');
		sizeLabel.innerHTML = 'Grootte';
		inputs.push(sizeLabel);

		let sizeContainer = document.createElement('div');
		sizeContainer.className = 'size-container';

		let widthInput = document.createElement('input');
		widthInput.className = 'form-control';
		widthInput.type = 'number';
		let lengthInput = document.createElement('input');
		lengthInput.className = 'form-control';
		lengthInput.type = 'number';
		let heightInput = document.createElement('input');
		heightInput.className = 'form-control';
		heightInput.type = 'number';

		let span = document.createElement('span');
		span.innerHTML = 'X';

		sizeContainer.appendChild(widthInput);
		sizeContainer.innerHTML = sizeContainer.innerHTML + ' X ';
		sizeContainer.appendChild(lengthInput);
		sizeContainer.innerHTML = sizeContainer.innerHTML + ' X ';
		sizeContainer.appendChild(heightInput);
		inputs.push(sizeContainer);

		let multiInputDiv = document.createElement('div');
		multiInputDiv.className = 'multi-input';

		let colorDiv = document.createElement('div');
		colorDiv.className = 'color-input';
		let colorLabel = document.createElement('label');
		colorLabel.innerHTML = 'Kleur';
		colorDiv.appendChild(colorLabel);
		let colorInput = document.createElement('input');
		colorInput.className = 'form-control';
		colorInput.type = 'color';
		colorDiv.appendChild(colorInput);
		multiInputDiv.appendChild(colorDiv);

		let piecesDiv = document.createElement('div');
		piecesDiv.className = 'pieces-input';
		let piecesLabel = document.createElement('label');
		piecesLabel.innerHTML = 'Aantal in verpakking';
		piecesDiv.appendChild(piecesLabel);
		let piecesInput = document.createElement('input');
		piecesInput.className = 'form-control';
		piecesDiv.appendChild(piecesInput);
		multiInputDiv.appendChild(piecesDiv);

		inputs.push(multiInputDiv);

		super.render(inputs);
	}
}
