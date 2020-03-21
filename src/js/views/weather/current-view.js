export default class CurrentView {
	render(data) {
		let container = document.querySelector('.weather-container');

		let topDiv = document.createElement('div');
		topDiv.className = 'top';

		let currentWeatherDiv = document.createElement('div');
		currentWeatherDiv.className = 'current-weather weather';

		let temperatureDiv = document.createElement('div');
		temperatureDiv.className = 'temperature';

		let highDiv = document.createElement('div');
		highDiv.className = 'high';
		highDiv.innerText = '24℃';

		let lowDiv = document.createElement('div');
		lowDiv.className = 'low';
		lowDiv.innerText = '7℃';

		temperatureDiv.appendChild(highDiv);
		temperatureDiv.appendChild(lowDiv);
		currentWeatherDiv.appendChild(temperatureDiv);

		let conditionDiv = document.createElement('div');
		conditionDiv.className = 'condition';

		let conditionImg = document.createElement('img');
		conditionImg.className = 'icon';
		conditionImg.src = 'http://openweathermap.org/img/wn/10d@2x.png';
		conditionImg.alt = 'regen overdag';

		let descriptionDiv = document.createElement('div');
		descriptionDiv.className = 'description';
		descriptionDiv.innerText = 'Lichte regen';

		conditionDiv.appendChild(conditionImg);
		conditionDiv.appendChild(descriptionDiv);
		currentWeatherDiv.appendChild(conditionDiv);
		topDiv.appendChild(currentWeatherDiv);
		container.appendChild(topDiv);
	}
}
