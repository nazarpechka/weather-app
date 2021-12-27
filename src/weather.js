const apiKey = 'cfc186d360b6183d2efa05df0eb38497';

async function requestWeather(city, units) {
  console.log(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${apiKey}&units=${units}`
  );
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${apiKey}&units=${units}`
  );
  const data = await response.json();
  return data;
}

async function weatherData(city = 'Kyiv', units = 'metric') {
  const weather = await requestWeather(city, units);
  if (weather.cod !== 200) return null;
  return {
    city: weather.name,
    country: weather.sys.country,
    temp: Math.round(weather.main.temp),
    feelsLike: Math.round(weather.main.feels_like),
    tempMin: Math.round(weather.main.temp_min),
    tempMax: Math.round(weather.main.temp_max),
    humidity: weather.main.humidity,
    wind: `${Math.round(weather.wind.speed)} ${units === 'metric' ? 'meter/s' : 'miles/h'}`,
    id: weather.weather[0].id,
    name: weather.weather[0].main,
  };
}

export default weatherData;
