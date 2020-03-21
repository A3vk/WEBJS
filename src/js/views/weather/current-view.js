export default class CurrentView {
	render(data) {
		let container = document.querySelector('.weather-container');
		container.innerHTML = '';

		let topDiv = document.createElement('div');
		topDiv.className = 'top';

		let currentWeatherDiv = document.createElement('div');
		currentWeatherDiv.className = 'current-weather weather';

		let temperatureDiv = document.createElement('div');
		temperatureDiv.className = 'temperature';

		let highDiv = document.createElement('div');
		highDiv.className = 'high';
		highDiv.innerText = `${data.temperature.max}℃`;

		let lowDiv = document.createElement('div');
		lowDiv.className = 'low';
		lowDiv.innerText = `${data.temperature.min}℃`;

		temperatureDiv.appendChild(highDiv);
		temperatureDiv.appendChild(lowDiv);
		currentWeatherDiv.appendChild(temperatureDiv);

		let conditionDiv = document.createElement('div');
		conditionDiv.className = 'condition';

		let conditionImg = document.createElement('img');
		conditionImg.className = 'icon';
		conditionImg.src = `http://openweathermap.org/img/wn/${data.condition.icon}@2x.png`;
		conditionImg.alt = data.condition.description;

		let descriptionDiv = document.createElement('div');
		descriptionDiv.className = 'description';
		descriptionDiv.innerText = data.condition.description;

		conditionDiv.appendChild(conditionImg);
		conditionDiv.appendChild(descriptionDiv);
		currentWeatherDiv.appendChild(conditionDiv);
		topDiv.appendChild(currentWeatherDiv);
		container.appendChild(topDiv);
	}
}
