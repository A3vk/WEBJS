export default class NoteView {
	constructor() {
		let container = document.querySelector('.notes');

		let header = document.createElement('div');
		header.className = 'header';
		header.innerText = 'Opmerkingen';
		container.appendChild(header);

		let textarea = document.createElement('textarea');
		textarea.className = 'notes-input';
		textarea.cols = 30;
		textarea.rows = 10;
		container.appendChild(textarea);
	}

	render(notes) {
		let textarea = document.querySelector('.notes-input');
		textarea.value = '';

		if (notes) {
			textarea.value = notes;
		}
	}

	getNotes() {
		let textarea = document.querySelector('.notes-input');
		return textarea.value;
	}
}
