import LocationView from '../views/weather/location-view';

const apiKey = '70f60909b764abec03f03e4d0e5a3eb7';

export default class WeatherController {
	constructor() {
		this.location = 'Waalwijk';
		this.locationView = LocationView();
	}

	getCurrentWeather() {}

	getWeatherForecast() {}
}
