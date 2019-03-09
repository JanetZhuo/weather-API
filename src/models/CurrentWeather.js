class CurrentWeather {
    constructor(rawData) {
        const { main, weather, wind } = rawData;
        this.minCelsius = main.temp_min;
        this.maxCelsius = main.temp_max;
        this.minFahrenheit = this.calculateFahrenheit(main.temp_min);
        this.maxFahrenheit = this.calculateFahrenheit(main.temp_min);
        this.humidity = main.humidity;
        this.weather = weather.main;
        this.weatherDesc = weather.description;
        this.windDirection = this.calculateWindDirection(wind.deg);
    }

    calculateWindDirection(degree) {
        const directions = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];
        const index = Math.round((heading/8)/5,625);
        return directions[index];
    };

    calculateFahrenheit(celsius) {
        const fahrenheit = (celsius * 9) /5 +32;
        return Math.round(fahrenheit * 100) / 100;
    };
}

module.exports = CurrentWeather;