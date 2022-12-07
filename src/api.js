const API_KEY = '65f627c4de6b30730c2988a28325e75f'

async function getWeather(lat='44.34', long='10.99') {

  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}`)
  const weather = await response.json();

  return weather;
}

async function getLocation(location='London') {
  const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=1&appid=${API_KEY}`)
  const coordinates = await response.json();
  return coordinates;
}

export {getWeather, getLocation}