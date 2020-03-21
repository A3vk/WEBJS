export default class LocationView {
	render() {
		let container = document.querySelector('.weather-container .top');

		let locationDiv = document.createElement('div');
		locationDiv.className = 'weather-location';

		let locationLabel = document.createElement('label');
		locationLabel.className = 'current-location';
		locationLabel.innerText = 'Locatie: Waalwijk';

		let locationInput = document.createElement('input');
		locationInput.className = 'search-bar';

		let locationButton = document.createElement('button');
		locationButton.className = 'btn btn-primary';
		locationButton.innerText = 'Zoek';
		locationButton.addEventListener('click', () => {
			console.log('ZOEK LOCATIE');
		});

		locationDiv.appendChild(locationLabel);
		locationDiv.appendChild(locationInput);
		locationDiv.appendChild(locationButton);
		container.appendChild(locationDiv);
	}
}
