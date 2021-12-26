const apiKey = 'cfc186d360b6183d2efa05df0eb38497';

async function weatherData(city = 'Kyiv') {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${apiKey}`
  );
  const data = await response.json();
  return data;
}

export default weatherData;
