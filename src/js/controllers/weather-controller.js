import LocationView from '../views/weather/location-view';
import CurrentView from '../views/weather/current-view';
import ForecastView from '../views/weather/forecast-view';

const apiKey = '70f60909b764abec03f03e4d0e5a3eb7';
const canUseCurrent = false;
const canUseForecast = false;

// TODO: Remove canUseAPI. This is only used to limit the times the api calls
// TODO: Create Error if the location is not found or the limit is reached
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
		if (canUseCurrent) {
			console.info('Used API');
			let url = `https://api.openweathermap.org/data/2.5/weather?q=${this
				.location},nl&appid=${apiKey}&units=metric&lang=nl`;

			fetch(url)
				.then((response) => {
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
				.catch((error) => {
					console.error(error);
				});
		} else {
			let data = {
				condition: {
					icon: '01n',
					description: 'onbewolkt'
				},
				temperature: {
					min: 6,
					max: 7
				}
			};
			this.currentWeather.render(data);
			this.weatherLocation.render(this.location);
			this.getWeatherForecast();
		}
	}

	getWeatherForecast() {
		if (canUseForecast) {
			let url = `api.openweathermap.org/data/2.5/forecast?q=${this
				.location}&appid=${apiKey}&units=metric&lang=nl`;

			fetch(url)
				.then((response) => {
					return response.json();
				})
				.then((data) => {
					console.dir(data);
					let weatherData = [];
					// TODO: write the most used condition function
					let conditionCount = {};

					data.list.forEach((forecast) => {
						let forecastDate = new Date(forecast.dt_txt);
						forecastDate = `${forecastDate.getDate()}-${forecastDate.getMonth() + 1}`;
						if (weatherData.length === 0 || weatherData[weatherData.length - 1].date != forecastDate) {
							weatherData.push({
								date: forecastDate,
								condition: {
									icon: '',
									description: ''
								},
								temperature: {
									min: Math.round(forecast.main.temp_min),
									max: Math.round(forecast.main.temp_max)
								}
							});
							conditionCount = {};
						} else {
							let minTemp = Math.round(forecast.main.temp_min);
							let maxTemp = Math.round(forecast.main.temp_max);
							if (minTemp < weatherData[weatherData.length - 1].temperature.min) {
								weatherData.temperature[weatherData.length - 1].min = minTemp;
							}
							if (maxTemp < weatherData[weatherData.length - 1].temperature.max) {
								weatherData.temperature[weatherData.length - 1].max = maxTemp;
							}
						}
					});
				})
				.catch((error) => {
					console.error(error);
				});
		} else {
			let data = [
				{
					date: '22-3',
					condition: {
						icon: '10d',
						description: 'regen'
					},
					temperature: {
						min: 3,
						max: 18
					}
				},
				{
					date: '23-3',
					condition: {
						icon: '10d',
						description: 'regen'
					},
					temperature: {
						min: 3,
						max: 18
					}
				},
				{
					date: '24-3',
					condition: {
						icon: '10d',
						description: 'regen'
					},
					temperature: {
						min: 3,
						max: 18
					}
				},
				{
					date: '25-3',
					condition: {
						icon: '10d',
						description: 'regen'
					},
					temperature: {
						min: 3,
						max: 18
					}
				},
				{
					date: '26-3',
					condition: {
						icon: '10d',
						description: 'regen'
					},
					temperature: {
						min: 3,
						max: 18
					}
				}
			];
			this.weatherForecast.render(data);
		}
	}
}
