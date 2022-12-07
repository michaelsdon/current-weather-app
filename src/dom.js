import Arrow from './assets/arrow.svg';

function includeArrows() {
  const hiTemp = document.getElementById('high-temp');
  const lowTemp = document.getElementById('low-temp');

  hiTemp.src = Arrow;
  lowTemp.src = Arrow;

}

function updateWeather(weatherData) {
  updateLocation(weatherData.city, weatherData.state, weatherData.desc);
  updateTemperatures(weatherData);
  updateWind(weatherData);
  updateHumidity(weatherData);
}

function updateLocation(city, state, conditions) {
  const location = document.getElementById('weather-location');
  const description = document.getElementById('current-conditions');

  location.textContent = `${city}, ${state}`;
  description.textContent = conditions;

}

function updateTemperatures(weatherData) {
  const currentTemp = document.getElementById('temp');
  const feelsLikeTemp = document.getElementById('feels-like');
  const highTemp = document.getElementById('high-temp-deg');
  const lowTemp = document.getElementById('low-temp-deg');

  let unit

  if (weatherData.degF) {
    unit = 'F';
  } else {
    unit = 'C';
  }

  currentTemp.textContent = `${weatherData.temp}°${unit}`;
  feelsLikeTemp.textContent = `Feels like: ${weatherData.feelsLike}°${unit}`
  highTemp.textContent = `${weatherData.hi}°${unit}`
  lowTemp.textContent = `${weatherData.lo}°${unit}`
}

function updateWind(weatherData) {
  const windSpeed = document.getElementById('wind-speed');
  const windDirection = document.getElementById('wind-direction');

  windSpeed.textContent = `Wind: ${weatherData.wind} MPH`
  windDirection.src = Arrow;
  windDirection.style.transform = `rotate(${weatherData.direction}deg)`
}

function updateHumidity(weatherData) {
  const humidity = document.getElementById('humidity');

  humidity.textContent = `Humidity: ${weatherData.humidity}%`;
}

export {includeArrows, updateWeather}
