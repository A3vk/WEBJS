export default class ForecastView {
	render(data) {
		let container = document.querySelector('.weather-container');

		let forecastDiv = document.createElement('div');
		forecastDiv.className = 'weather-forecast';

		let forecastTable = document.createElement('table');
		forecastTable.className = 'forecast-table';

		let thead = document.createElement('thead');

		let dateTr = document.createElement('tr');

		for (let i = 1; i <= 5; i++) {
			let th = document.createElement('th');
			let d = new Date(2020, 3, 14);
			d.setDate(d.getDate() + 1);

			let date = d.getDate();
			let month = d.getMonth() + 1;

			th.innerText = `${date}-${month}`;
			dateTr.appendChild(th);
		}
		thead.appendChild(dateTr);
		forecastTable.appendChild(thead);

		let tbody = document.createElement('tbody');

		let weatherTr = document.createElement('tr');

		for (let i = 1; i <= 5; i++) {
			let td = document.createElement('td');

			let weatherDiv = document.createElement('div');
			weatherDiv.className = 'weather';

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
			weatherDiv.appendChild(temperatureDiv);

			let conditionDiv = document.createElement('div');
			conditionDiv.className = 'condition';

			let conditionImg = document.createElement('img');
			conditionImg.className = 'icon';
			conditionImg.src = 'http://openweathermap.org/img/wn/10d@2x.png';
			conditionImg.alt = 'regen overdag';
			conditionDiv.appendChild(conditionImg);
			weatherDiv.appendChild(conditionDiv);
			td.appendChild(weatherDiv);
			weatherTr.appendChild(td);
		}
		tbody.appendChild(weatherTr);
		forecastTable.appendChild(tbody);
		forecastDiv.appendChild(forecastTable);
		container.appendChild(forecastDiv);
	}
}
