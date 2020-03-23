export default class ForecastView {
	render(data) {
		let container = document.querySelector('.weather-container');

		let forecastDiv = document.createElement('div');
		forecastDiv.className = 'weather-forecast';

		let forecastTable = document.createElement('table');
		forecastTable.className = 'forecast-table';

		let thead = document.createElement('thead');
		let tbody = document.createElement('tbody');

		let dateTr = document.createElement('tr');
		let weatherTr = document.createElement('tr');

		data.forEach((day) => {
			let th = document.createElement('th');
			th.innerText = day.date;
			dateTr.appendChild(th);

			let td = document.createElement('td');

			let weatherDiv = document.createElement('div');
			weatherDiv.className = 'weather';

			let temperatureDiv = document.createElement('div');
			temperatureDiv.className = 'temperature';

			let highDiv = document.createElement('div');
			highDiv.className = 'high';
			highDiv.innerText = `${day.temperature.max}℃`;

			let lowDiv = document.createElement('div');
			lowDiv.className = 'low';
			lowDiv.innerText = `${day.temperature.min}℃`;

			temperatureDiv.appendChild(highDiv);
			temperatureDiv.appendChild(lowDiv);
			weatherDiv.appendChild(temperatureDiv);

			let conditionDiv = document.createElement('div');
			conditionDiv.className = 'condition';

			let conditionImg = document.createElement('img');
			conditionImg.className = 'icon';
			conditionImg.src = `http://openweathermap.org/img/wn/${day.condition.icon}@2x.png`;
			conditionImg.alt = day.condition.description;
			conditionDiv.appendChild(conditionImg);
			weatherDiv.appendChild(conditionDiv);
			td.appendChild(weatherDiv);
			weatherTr.appendChild(td);
		});

		thead.appendChild(dateTr);
		tbody.appendChild(weatherTr);
		forecastTable.appendChild(thead);
		forecastTable.appendChild(tbody);

		forecastDiv.appendChild(forecastTable);
		container.appendChild(forecastDiv);
	}
}
