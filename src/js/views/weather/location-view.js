export default class LocationView {
	render(location) {
		let container = document.querySelector('.weather-container .top');

		let locationDiv = document.createElement('div');
		locationDiv.className = 'weather-location';

		let locationLabel = document.createElement('label');
		locationLabel.className = 'current-location';
		locationLabel.innerText = `Locatie: ${location}`;

		let locationInput = document.createElement('input');
		locationInput.className = 'search-bar';

		let locationButton = document.createElement('button');
		locationButton.className = 'btn btn-primary';
		locationButton.innerText = 'Zoek';
		locationButton.addEventListener('click', () => {
			let value = document.querySelector('.search-bar').value;
			this.changeLocation(value);
		});

		locationDiv.appendChild(locationLabel);
		locationDiv.appendChild(locationInput);
		locationDiv.appendChild(locationButton);
		container.appendChild(locationDiv);
	}

	changeToError() {
		let label = document.querySelector('.current-location');
		label.innerText = 'Locatie: Geen gledige locatie';
		let input = document.querySelector('.search-bar');
		input.value = '';
	}
}
