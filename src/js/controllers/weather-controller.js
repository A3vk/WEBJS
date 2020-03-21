import LocationView from '../views/weather/location-view';
import CurrentView from '../views/weather/current-view';
import ForecastView from '../views/weather/forecast-view';

const apiKey = '70f60909b764abec03f03e4d0e5a3eb7';

export default class WeatherController {
	constructor() {
		this.location = 'Waalwijk';
		this.currentWeather = new CurrentView();
		this.weatherLocation = new LocationView();
		this.weatherForecast = new ForecastView();

		this.currentWeather.render();
		this.weatherLocation.render();
		this.weatherForecast.render();
	}

	getCurrentWeather() {}

	getWeatherForecast() {}
}
