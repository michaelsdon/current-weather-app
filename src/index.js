import './style/style.css'
import { includeArrows, updateWeather } from './dom'
import { getLocation, getWeather } from './api';
includeArrows();

let degF = true;

const search = document.getElementById('city-search');
const unitToggle = document.getElementById('unit-toggle');

search.addEventListener('keypress', searchWeather);
unitToggle.addEventListener('click', toggleDegF);

function toggleDegF() {
  degF = !degF;
  console.log(degF);
}

function k2F(k) {
  return Math.round((k - 273.15) * (9/5) + 32);
}

function k2C(k) {
  return Math.round(k - 273.15);
}

function cleanWeatherData(location, weather) {

  const city = location[0].name;
  const state = location[0].state;
  const desc = weather.weather[0].description;
  const tempData = weather.main;
  const windData = weather.wind;
  let temp, feelsLike, hi, lo;

  if (degF) {
    temp = k2F(tempData.temp);
    feelsLike = k2F(tempData.feels_like);
    hi = k2F(tempData.temp_max);
    lo = k2F(tempData.temp_min);
  } else {
    temp = k2C(tempData.temp);
    feelsLike = k2C(tempData.feels_like);
    hi = k2C(tempData.temp_max);
    lo = k2C(tempData.temp_min);
  }

  const domInfo = {
    city: city,
    state: state,
    desc: desc,
    temp: temp,
    feelsLike: feelsLike,
    hi: hi,
    lo: lo,
    humidity: Math.round(tempData.humidity),
    wind: Math.round(windData.speed),
    direction: Math.round(windData.deg),
    degF: degF,
  }

  return domInfo;
}

async function searchWeather(e) {
  if (e.key === 'Enter') {
    const location = await(getLocation(e.target.value));
    const weather = await(getWeather(location[0].lat, location[0].lon));
    const weatherData = cleanWeatherData(location, weather);
    console.log(weatherData);
    updateWeather(weatherData);
  }
}