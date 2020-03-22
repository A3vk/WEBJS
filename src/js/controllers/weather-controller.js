import LocationView from '../views/weather/location-view';
import CurrentView from '../views/weather/current-view';
import ForecastView from '../views/weather/forecast-view';

const apiKey = '70f60909b764abec03f03e4d0e5a3eb7';

export default class WeatherController {
	constructor() {
		this.location = 'Kaatsheuvel';
		this.currentWeather = new CurrentView();
		this.weatherLocation = new LocationView();
		this.weatherForecast = new ForecastView();

		this.weatherLocation.changeLocation = (location) => {
			this.location = location;
			this.getCurrentWeather();
		};

		this.getCurrentWeather();
	}

	getCurrentWeather() {
		let url = `https://api.openweathermap.org/data/2.5/weather?q=${this
			.location},nl&appid=${apiKey}&units=metric&lang=nl`;

		fetch(url)
			.then((response) => {
				if (!response.ok) {
					throw new Error('Something went wrong');
				}
				return response.json();
			})
			.then((data) => {
				this.location = data.name;
				let weatherData = {
					condition: {
						icon: data.weather[0].icon,
						description: data.weather[0].description
					},
					temperature: {
						min: Math.round(data.main.temp_min),
						max: Math.round(data.main.temp_max)
					}
				};
				this.currentWeather.render(weatherData);
				this.weatherLocation.render(this.location);
				this.getWeatherForecast();
			})
			.catch(() => {
				this.weatherLocation.changeToError();
			});
	}

	getWeatherForecast() {
		let url = `https://api.openweathermap.org/data/2.5/forecast?q=${this
			.location}&appid=${apiKey}&units=metric&lang=nl`;

		fetch(url)
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				let weatherData = [];
				let conditionCount = {};
				let maxCount = 1;

				data.list.forEach((forecast) => {
					let forecastDate = new Date(forecast.dt_txt);
					forecastDate = `${forecastDate.getDate()}-${forecastDate.getMonth() + 1}`;
					if (weatherData.length === 0 || weatherData[weatherData.length - 1].date != forecastDate) {
						weatherData.push({
							date: forecastDate,
							condition: {
								icon: forecast.weather[0].icon.replace(/n/g, 'd'),
								description: forecast.weather[0].description
							},
							temperature: {
								min: Math.round(forecast.main.temp_min),
								max: Math.round(forecast.main.temp_max)
							}
						});
						conditionCount = {};
						maxCount = 1;
						if (conditionCount[forecast.weather[0].description] === null) {
							conditionCount[forecast.weather[0].description] = 1;
						} else {
							conditionCount[forecast.weather[0].description]++;
						}
					} else {
						let minTemp = Math.round(forecast.main.temp_min);
						let maxTemp = Math.round(forecast.main.temp_max);
						if (minTemp < weatherData[weatherData.length - 1].temperature.min) {
							weatherData[weatherData.length - 1].temperature.min = minTemp;
						}
						if (maxTemp > weatherData[weatherData.length - 1].temperature.max) {
							weatherData[weatherData.length - 1].temperature.max = maxTemp;
						}
						if (conditionCount[forecast.weather[0].description] === null) {
							conditionCount[forecast.weather[0].description] = 1;
						} else {
							conditionCount[forecast.weather[0].description]++;
						}
						if (conditionCount[forecast.weather[0].description] > maxCount) {
							weatherData[weatherData.length - 1].condition.icon = forecast.weather[0].icon.replace(
								/n/g,
								'd'
							);
							weatherData[weatherData.length - 1].condition.description = forecast.weather[0].description;
							maxCount = conditionCount[forecast.weather[0].description];
						}
					}
				});

				if (weatherData.length > 5) {
					weatherData.shift();
				}

				this.weatherForecast.render(weatherData);
			})
			.catch(() => {
				this.weatherLocation.changeToError();
			});
	}
}
